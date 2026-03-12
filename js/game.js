/* ============================================
   GORILLAW & ORDER - Game Engine
   State management, dialogue, scene transitions
   ============================================ */

const game = {
    // State
    state: {
        currentScene: null,
        dialogueIndex: 0,
        lineIndex: 0,
        isTyping: false,
        typewriterTimeout: null,
        evidence: [],
        scenesVisited: [],
        gameOver: false,
        awaitingChoice: false,
        finaleStage: 0
    },

    // DOM references (cached on init)
    dom: {},

    // Initialize DOM references
    cacheDom() {
        this.dom = {
            titleScreen: document.getElementById('title-screen'),
            gameScreen: document.getElementById('game-screen'),
            winScreen: document.getElementById('win-screen'),
            gameoverScreen: document.getElementById('gameover-screen'),
            fadeOverlay: document.getElementById('fade-overlay'),
            sceneTitle: document.getElementById('scene-title'),
            sceneArtContainer: document.getElementById('scene-art-container'),
            speakerPortrait: document.getElementById('speaker-portrait'),
            speakerName: document.getElementById('speaker-name'),
            dialogueText: document.getElementById('dialogue-text'),
            dialoguePrompt: document.getElementById('dialogue-prompt'),
            evidenceList: document.getElementById('evidence-list'),
            choicesContainer: document.getElementById('choices-container'),
            statusText: document.getElementById('status-text'),
            winText: document.getElementById('win-text'),
            gameoverText: document.getElementById('gameover-text'),
            gameoverArt: document.getElementById('gameover-art'),
            gameoverRestartBtn: document.getElementById('gameover-restart-btn'),
            titleArt: document.getElementById('title-art')
        };
    },

    // Start the game
    start() {
        this.cacheDom();
        GameAudio.init();
        GameAudio.resume();

        // Render title art if not done
        if (this.dom.titleArt) {
            this.dom.titleArt.innerHTML = SceneArt.title();
        }

        this.fadeTransition(() => {
            this.dom.titleScreen.classList.add('hidden');
            this.dom.gameScreen.classList.remove('hidden');
            this.resetState();
            this.loadScene('warehouse');
        });
    },

    // Reset game state
    resetState() {
        this.state = {
            currentScene: null,
            dialogueIndex: 0,
            lineIndex: 0,
            isTyping: false,
            typewriterTimeout: null,
            evidence: [],
            scenesVisited: [],
            gameOver: false,
            awaitingChoice: false,
            finaleStage: 0
        };
    },

    // Restart the game
    restart() {
        this.cacheDom();
        this.fadeTransition(() => {
            this.dom.winScreen.classList.add('hidden');
            this.dom.gameoverScreen.classList.add('hidden');
            this.dom.gameScreen.classList.add('hidden');
            this.dom.titleScreen.classList.remove('hidden');
            this.resetState();
            // Re-render title art
            if (this.dom.titleArt) {
                this.dom.titleArt.innerHTML = SceneArt.title();
            }
        });
    },

    // Load a scene
    loadScene(sceneId) {
        const scene = SCENES[sceneId];
        if (!scene) return;

        this.state.currentScene = sceneId;
        this.state.dialogueIndex = 0;
        this.state.lineIndex = 0;
        this.state.awaitingChoice = false;
        this.state.scenesVisited.push(sceneId);

        // Update UI
        this.dom.sceneTitle.textContent = scene.title;
        this.dom.statusText.textContent = 'Scene ' + SCENE_ORDER.indexOf(sceneId) + ' of ' + (SCENE_ORDER.length - 1) + ' — Investigating...';

        // Render scene art
        const artFn = SceneArt[sceneId];
        if (artFn) {
            this.dom.sceneArtContainer.innerHTML = artFn.call(SceneArt);
        }

        // Add evidence
        if (scene.evidence) {
            scene.evidence.forEach(e => {
                if (!this.state.evidence.includes(e)) {
                    this.state.evidence.push(e);
                }
            });
            this.renderEvidence();
        }

        // Clear dialogue
        this.dom.speakerName.textContent = '';
        this.dom.dialogueText.textContent = '';
        this.dom.speakerPortrait.innerHTML = '';
        this.dom.dialoguePrompt.classList.add('hidden');
        this.dom.choicesContainer.innerHTML = '';

        // Show scene description first, then start dialogue
        this.dom.speakerName.textContent = 'SCENE';
        this.showPortrait('scene');
        this.typewrite(scene.description, () => {
            this.dom.dialoguePrompt.classList.remove('hidden');
            this.waitForClick(() => {
                this.startDialogue();
            });
        });

        GameAudio.transition();
    },

    // Start dialogue for current scene
    startDialogue() {
        const scene = SCENES[this.state.currentScene];
        if (!scene || !scene.dialogues || scene.dialogues.length === 0) {
            if (scene.isFinale) {
                this.playFinale();
            } else {
                this.presentChoice();
            }
            return;
        }

        this.state.dialogueIndex = 0;
        this.state.lineIndex = 0;
        this.showNextLine();
    },

    // Show next dialogue line
    showNextLine() {
        const scene = SCENES[this.state.currentScene];
        if (!scene) return;

        const dialogues = scene.dialogues;
        if (this.state.dialogueIndex >= dialogues.length) {
            // All dialogue done
            if (scene.isFinale) {
                this.playFinale();
            } else {
                this.presentChoice();
            }
            return;
        }

        const block = dialogues[this.state.dialogueIndex];
        if (this.state.lineIndex >= block.lines.length) {
            // Move to next dialogue block
            this.state.dialogueIndex++;
            this.state.lineIndex = 0;
            this.showNextLine();
            return;
        }

        const line = block.lines[this.state.lineIndex];
        this.dom.speakerName.textContent = block.speaker;
        this.showPortrait(block.portrait || block.speaker);
        this.dom.dialoguePrompt.classList.add('hidden');

        this.typewrite(line, () => {
            this.state.lineIndex++;
            this.dom.dialoguePrompt.classList.remove('hidden');
            this.waitForClick(() => {
                this.showNextLine();
            });
        });
    },

    // Typewriter effect
    typewrite(text, onComplete) {
        this.state.isTyping = true;
        this.dom.dialogueText.textContent = '';
        this.dom.dialogueText.classList.add('typing-cursor');
        let i = 0;
        const speed = 35;

        const tick = () => {
            if (i < text.length) {
                this.dom.dialogueText.textContent += text[i];
                // Auto-scroll dialogue
                this.dom.dialogueText.parentElement.scrollTop = this.dom.dialogueText.parentElement.scrollHeight;
                if (i % 3 === 0) GameAudio.typeClick();
                i++;
                this.state.typewriterTimeout = setTimeout(tick, speed);
            } else {
                this.state.isTyping = false;
                this.dom.dialogueText.classList.remove('typing-cursor');
                if (onComplete) onComplete();
            }
        };

        // Allow skip on click during typing
        this._skipHandler = () => {
            if (this.state.isTyping) {
                clearTimeout(this.state.typewriterTimeout);
                this.dom.dialogueText.textContent = text;
                this.state.isTyping = false;
                this.dom.dialogueText.classList.remove('typing-cursor');
                document.removeEventListener('click', this._skipHandler);
                document.removeEventListener('keydown', this._skipKeyHandler);
                if (onComplete) onComplete();
            }
        };
        this._skipKeyHandler = (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                e.preventDefault();
                this._skipHandler();
            }
        };

        // Small delay before allowing skip to prevent accidental double-clicks
        setTimeout(() => {
            document.addEventListener('click', this._skipHandler);
            document.addEventListener('keydown', this._skipKeyHandler);
        }, 100);

        tick();
    },

    // Wait for click/keypress then execute callback
    waitForClick(callback) {
        const handler = (e) => {
            // Ignore clicks on choice buttons
            if (e.target.classList && e.target.classList.contains('choice-btn')) return;
            document.removeEventListener('click', handler);
            document.removeEventListener('keydown', keyHandler);
            this.dom.dialoguePrompt.classList.add('hidden');
            callback();
        };
        const keyHandler = (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                e.preventDefault();
                handler(e);
            }
        };
        document.addEventListener('click', handler);
        document.addEventListener('keydown', keyHandler);
    },

    // Show portrait SVG for current speaker
    showPortrait(speaker) {
        const portrait = Portraits.get(speaker);
        if (portrait) {
            this.dom.speakerPortrait.innerHTML = portrait;
        } else {
            this.dom.speakerPortrait.innerHTML = '';
        }
    },

    // Present the gorilla/person/continue choice - rendered as printer printout in dialogue area
    presentChoice() {
        this.state.awaitingChoice = true;
        const scene = SCENES[this.state.currentScene];

        this.dom.speakerName.textContent = 'YOUR CONCLUSION';
        this.showPortrait('you');
        this.dom.dialoguePrompt.classList.add('hidden');

        // Build the printout inside the dialogue text area
        const printout = document.createElement('div');
        printout.className = 'printer-printout';

        const header = document.createElement('div');
        header.className = 'printer-header';
        header.textContent = 'CASE DETERMINATION FORM';
        printout.appendChild(header);

        const prompt = document.createElement('div');
        prompt.className = 'printer-prompt';
        prompt.textContent = 'Based on the evidence, what do you think happened here?';
        printout.appendChild(prompt);

        const choices = [
            { text: 'It was a gorilla that escaped from the zoo.', cls: 'gorilla-choice', handler: () => { GameAudio.choiceClick(); this.handleGorillaChoice(); } },
            { text: scene.continueChoice || 'I need more evidence. Keep investigating.', cls: 'continue-choice', handler: () => { GameAudio.choiceClick(); this.handlePersonChoice(); } },
            { text: 'No... this was done by a person.', cls: 'person-choice', handler: () => { GameAudio.choiceClick(); this.handlePersonChoice(); } }
        ];

        choices.forEach((c, i) => {
            const btn = document.createElement('button');
            btn.className = 'printer-choice ' + c.cls;
            btn.innerHTML = '<span class="printer-choice-num">' + (i + 1) + '.</span> ' + c.text;
            btn.onclick = c.handler;
            printout.appendChild(btn);
        });

        this.dom.dialogueText.textContent = '';
        this.dom.dialogueText.appendChild(printout);

        // Scroll to show choices
        this.dom.dialogueText.parentElement.scrollTop = this.dom.dialogueText.parentElement.scrollHeight;

        this.dom.statusText.textContent = 'Make your determination...';
    },

    // Handle choosing "gorilla" - you win (anticlimactically)
    handleGorillaChoice() {
        const scene = SCENES[this.state.currentScene];
        const sceneMsg = WIN_SCENE_MESSAGES[this.state.currentScene] || '';

        this.fadeTransition(() => {
            this.dom.gameScreen.classList.add('hidden');
            this.dom.winScreen.classList.remove('hidden');
            this.dom.winText.textContent = scene.winText + '\n\n' + sceneMsg;
        });
    },

    // Handle choosing "person" - continue the story
    handlePersonChoice() {
        const scene = SCENES[this.state.currentScene];

        this.dom.choicesContainer.innerHTML = '';
        this.dom.speakerName.textContent = 'INTERNAL MONOLOGUE';
        this.showPortrait('you');

        this.typewrite(scene.continueText, () => {
            this.dom.dialoguePrompt.classList.remove('hidden');
            this.waitForClick(() => {
                if (scene.nextScene) {
                    this.fadeTransition(() => {
                        this.loadScene(scene.nextScene);
                    });
                }
            });
        });
    },

    // Play the finale sequence (scene 7 - no choice, auto-plays)
    playFinale() {
        const scene = SCENES.finale;
        const dialogues = scene.dialogues;
        let dIdx = 0;
        let lIdx = 0;

        const playNextFinale = () => {
            if (dIdx >= dialogues.length) {
                // After all finale dialogue, show reveal 1
                this.playFinaleReveal1();
                return;
            }

            const block = dialogues[dIdx];
            if (lIdx >= block.lines.length) {
                dIdx++;
                lIdx = 0;
                playNextFinale();
                return;
            }

            const line = block.lines[lIdx];
            this.dom.speakerName.textContent = block.speaker;
            this.showPortrait(block.portrait || block.speaker);

            this.typewrite(line, () => {
                lIdx++;
                this.dom.dialoguePrompt.classList.remove('hidden');
                this.waitForClick(() => {
                    playNextFinale();
                });
            });
        };

        // Start finale dialogue
        this.dom.speakerName.textContent = '';
        this.dom.dialogueText.textContent = '';
        this.dom.speakerPortrait.innerHTML = '';
        this.dom.choicesContainer.innerHTML = '';
        this.dom.statusText.textContent = 'Something is wrong...';
        playNextFinale();
    },

    // Finale reveal 1: gorilla takes off mask, it's a man
    playFinaleReveal1() {
        this.fadeTransition(() => {
            this.dom.sceneArtContainer.innerHTML = SceneArt.finaleReveal1();
            this.dom.sceneTitle.textContent = 'THE REVEAL';
            this.dom.statusText.textContent = 'You knew it...';

            this.dom.speakerName.textContent = 'You (internal monologue)';
            this.typewrite('You knew it. You always knew. Just a man in a gorilla suit. The seam gave it away from the very beginning. Case solved.', () => {
                this.dom.dialoguePrompt.classList.remove('hidden');
                this.waitForClick(() => {
                    this.playFinaleReveal2();
                });
            });
        });
    },

    // Finale reveal 2: man takes off man mask, it's a REAL gorilla
    playFinaleReveal2() {
        this.fadeTransition(() => {
            this.dom.sceneArtContainer.innerHTML = SceneArt.finaleReveal2();
            this.dom.sceneTitle.textContent = '???';
            this.dom.statusText.textContent = '...';

            this.dom.speakerName.textContent = 'You (internal monologue)';
            this.typewrite('Wait. He\'s reaching for his face again. What is he—\n\nOh no.\n\nUnderneath the man... is a gorilla. A real gorilla.\n\nIt was a gorilla wearing a man mask wearing a gorilla mask.\n\nProfessor Marsh was right all along.', () => {
                this.dom.dialoguePrompt.classList.remove('hidden');
                this.waitForClick(() => {
                    this.playFinaleDeath();
                });
            });
        });
    },

    // Finale death
    playFinaleDeath() {
        GameAudio.impact();

        this.fadeTransition(() => {
            this.dom.gameScreen.classList.add('hidden');
            this.dom.gameoverScreen.classList.remove('hidden');
            this.dom.gameoverArt.innerHTML = SceneArt.gameOver();

            const deathText = [
                'The gorilla looks at you with ancient, knowing eyes.',
                '',
                'It cracks its knuckles.',
                '',
                '2,700 pounds of force per square inch.',
                '',
                'You think about Rick. Where was Rick? He was right behind you.',
                '',
                'He was probably getting another hot dog.',
                '',
                '...',
                '',
                'GAME OVER',
                '',
                'You lost. But wasn\'t that more fun than declaring it was a gorilla in scene one?',
                '',
                'The gorilla was real all along. Professor Marsh was right. Rick never figured it out.',
                '',
                'Somewhere in Brooklyn, Detective Rick Brannigan is still eating a hot dog, blissfully unaware that his partner is dead and the case was, in fact, a gorilla the whole time.'
            ].join('\n');

            this.dom.gameoverText.textContent = '';
            let i = 0;
            const speed = 30;

            const tick = () => {
                if (i < deathText.length) {
                    this.dom.gameoverText.textContent += deathText[i];
                    this.dom.gameoverText.scrollTop = this.dom.gameoverText.scrollHeight;
                    if (i % 4 === 0 && deathText[i] !== '\n') GameAudio.typeClick();
                    i++;
                    setTimeout(tick, speed);
                } else {
                    // Show play again button
                    this.dom.gameoverRestartBtn.classList.remove('hidden');
                }
            };
            tick();
        });
    },

    // Fade transition
    fadeTransition(callback) {
        const overlay = this.dom.fadeOverlay || document.getElementById('fade-overlay');
        overlay.classList.add('active');
        setTimeout(() => {
            callback();
            setTimeout(() => {
                overlay.classList.remove('active');
            }, 100);
        }, 600);
    },

    // Render evidence list
    renderEvidence() {
        this.dom.evidenceList.innerHTML = '';
        this.state.evidence.forEach(item => {
            const div = document.createElement('div');
            div.className = 'evidence-item';
            div.innerHTML = '<span class="evidence-bullet">&bull;</span> ' + item;
            this.dom.evidenceList.appendChild(div);
        });
    }
};

// Initialize title screen art on page load
document.addEventListener('DOMContentLoaded', () => {
    game.cacheDom();
    if (game.dom.titleArt) {
        game.dom.titleArt.innerHTML = SceneArt.title();
    }
});
