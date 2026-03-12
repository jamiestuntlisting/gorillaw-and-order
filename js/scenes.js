/* ============================================
   GORILLAW & ORDER - Scene Data
   All 7 scenes with dialogue and comedy
   ============================================ */

const SCENES = {
    warehouse: {
        id: "warehouse",
        title: "Brooklyn Warehouse - Crime Scene",
        description: "The yellow tape flickers in the wind. Inside the warehouse, white sheets cover what used to be people. The smell of iron and bananas hangs in the air. Your partner Rick is already making that face he makes when he's about to say something stupid.",
        evidence: ["Crime scene photos", "Witness reports of a 'gorilla'", "Unusual neck seam on suspect"],
        dialogues: [
            {
                speaker: "Beat Cop Murphy",
                portrait: "cop",
                lines: [
                    "Detectives. Glad you're here. It's... it's a real mess in there.",
                    "Six bodies. Warehouse workers, all of them. Place is torn apart like a tornado hit it.",
                    "Witnesses say it was a gorilla. A full-sized silverback gorilla.",
                    "Came through the loading dock around 2 AM. Went absolutely berserk.",
                    "But here's the thing, detective... I got close to one of the security cameras before it went dark.",
                    "That gorilla? It had a seam. Right around the neck. Like a... like a line."
                ]
            },
            {
                speaker: "Det. Rick Brannigan (Your Partner)",
                portrait: "rick",
                lines: [
                    "A gorilla? In Brooklyn? That's BANANAS.",
                    "Get it? Bananas? Because gorillas eat\u2014",
                    "...Never mind. But seriously, a gorilla? That's going ape. Ha!",
                    "I bet he really went... GORILLAS in here. No wait, I already used that one.",
                    "Anyway, what do you think, partner? Open and shut case?"
                ]
            },
            {
                speaker: "Prof. Nathaniel Marsh - Bronx Zoo Primate Division",
                portrait: "marsh",
                lines: [
                    "Excuse me! Excuse me, detectives! Don't touch anything!",
                    "I'm Professor Nathaniel Marsh. Primate specialist, Bronx Zoo. I heard the dispatch call.",
                    "These claw marks... this level of destruction... the fecal matter in the corner...",
                    "This is TEXTBOOK gorilla behavior. Textbook!",
                    "A western lowland gorilla can exert 2,700 pounds of force per square inch.",
                    "I'd stake my tenure on it. This was absolutely, categorically, a gorilla.",
                    "Now if you'll excuse me, I need to alert the zoo. We may have an escapee."
                ]
            },
            {
                speaker: "Det. Rick Brannigan",
                portrait: "rick",
                lines: [
                    "Well, you heard the professor. Gorilla. Case closed!",
                    "Want to grab a sandwich? I know a great deli on Atlantic.",
                    "Wait, did you notice something weird about that gorilla in the security footage?",
                    "Its fur looked really... consistent. Like, TOO consistent. Almost like fabric.",
                    "Nah, I'm probably just hungry. What do you think?"
                ]
            }
        ],
        winText: "You declare it was a gorilla that escaped from the zoo. Case closed.\n\nProfessor Marsh nods approvingly. Rick gets his sandwich. The file goes into the 'Unusual Animal Incidents' cabinet.\n\nYou were right, of course. It WAS a gorilla.\n\n...Eventually.\n\nBut you'll never know the whole story.",
        continueChoice: "That seam on the neck... I need to see the ATM footage.",
        continueText: "Something doesn't sit right. That seam around the neck... gorillas don't have seams. You need to see the ATM footage from across the street.",
        nextScene: "atm_footage"
    },

    atm_footage: {
        id: "atm_footage",
        title: "NYPD Tech Lab - ATM Footage Review",
        description: "The precinct tech lab smells like stale coffee and burnt electronics. Officer Chen, the department's AV specialist, has pulled up the ATM camera footage from across the street. The grainy black-and-white image fills the monitor.",
        evidence: ["ATM footage of gorilla driving a car", "License plate: GWU-6401", "Vehicle: Silver Prius"],
        dialogues: [
            {
                speaker: "Officer Chen - AV Tech",
                portrait: "chen",
                lines: [
                    "Okay detectives, I've got the ATM cam footage queued up. Quality's not great but...",
                    "Here. 2:14 AM. Watch the loading dock.",
                    "See that? That's your gorilla. Coming out of the warehouse.",
                    "And now... wait for it...",
                    "It gets into a car. A Prius. The gorilla gets into a Prius and drives away.",
                    "I've never seen a gorilla drive a Prius before.",
                    "I mean, I haven't seen a lot of gorillas. But still."
                ]
            },
            {
                speaker: "Det. Rick Brannigan",
                portrait: "rick",
                lines: [
                    "ENHANCE!",
                    "Can you enhance it? Say 'enhance' and zoom in.",
                    "That's not how\u2014 okay fine. But CAN you zoom in?",
                    "Look at that! He's even wearing a seatbelt! Safety-conscious gorilla!",
                    "Wait, can gorillas even reach the pedals? Their legs are shorter than\u2014",
                    "You know what, forget the biology. This is incredible."
                ]
            },
            {
                speaker: "Officer Chen",
                portrait: "chen",
                lines: [
                    "I managed to pull the plate. GWU-6401. It's registered to a stolen vehicle report from two days ago.",
                    "Silver Prius. Plate GWU-6401. Reported stolen from a parking garage in Midtown.",
                    "Also, detective... I zoomed in on the gorilla and...",
                    "There's a line. Around the neck. Like the fur doesn't quite connect to the head.",
                    "Could be a video artifact. Could be something else."
                ]
            },
            {
                speaker: "Det. Rick Brannigan",
                portrait: "rick",
                lines: [
                    "A gorilla that steals cars AND wears seatbelts? This is the smartest gorilla in history!",
                    "I once saw a monkey ride a bicycle at the circus. This is like that but with more murder.",
                    "We should run the plate. Maybe someone saw where the car went.",
                    "Or! OR! We could just go to the zoo and see if any gorillas are missing.",
                    "Partner? What's your take? Gorilla or no gorilla?"
                ]
            }
        ],
        winText: "You declare it was a gorilla. Case closed.\n\nOfficer Chen shrugs and goes back to her coffee. Rick seems relieved.\n\nThe stolen Prius is found abandoned in Queens three days later, covered in what appears to be synthetic fur.\n\nBut you've already closed the file.\n\nTHE END.",
        continueChoice: "Run the plates. A gorilla doesn't drive a Prius.",
        continueText: "A gorilla that drives a car and wears a seatbelt? That neck seam again... You run the plates through the system. The stolen car was last seen near a rock climbing gym in Williamsburg.",
        nextScene: "climbing_gym"
    },

    climbing_gym: {
        id: "climbing_gym",
        title: "Summit Grip Rock Climbing Gym - Williamsburg",
        description: "The stolen Prius was spotted on a traffic cam near this climbing gym three times in the past month. The place smells like chalk dust and ambition. The walls are covered with colorful holds that look like candy. The manager, a man named Wilder, approaches you with an unsettling calm.",
        evidence: ["Gorilla-suit suspect frequented the gym", "Suspect had a girlfriend", "Suspect described as 'intense, good grip strength'"],
        dialogues: [
            {
                speaker: "Wilder - Gym Manager",
                portrait: "wilder",
                lines: [
                    "Detectives. Namaste.",
                    "Yes, I know the individual you're describing. He came here often.",
                    "He didn't wear the gorilla suit inside, obviously. We have a dress code.",
                    "But he'd show up in a Prius wearing a gorilla mask and just... take it off in the parking lot like it was a hat.",
                    "Incredible grip strength. Best climber we've had. Could hang from one finger.",
                    "He was... intense. Very intense. Had this energy, you know? Primal."
                ]
            },
            {
                speaker: "Det. Rick Brannigan",
                portrait: "rick",
                lines: [
                    "Excuse me one second, detective.",
                    "*Rick walks over to the climbing wall and starts trying to climb it*",
                    "*He gets about two feet up and falls*",
                    "I'm fine! I'm fine. Just testing the holds.",
                    "*He tries again and falls again*",
                    "These holds are defective."
                ]
            },
            {
                speaker: "Wilder",
                portrait: "wilder",
                lines: [
                    "Your partner has interesting energy.",
                    "Anyway, the gorilla guy. He had a girlfriend. She'd come pick him up sometimes.",
                    "Pretty woman. Looked exhausted all the time. She once told me he 'worked too much.'",
                    "I remember she said her name was Dana. Lived over on Bedford Ave.",
                    "He stopped coming about a week ago. Around the time he... well, the news said a gorilla attacked a warehouse.",
                    "I try not to judge. The universe has a plan for all of us.",
                    "Even gorillas. Especially gorillas."
                ]
            },
            {
                speaker: "Det. Rick Brannigan",
                portrait: "rick",
                lines: [
                    "*dusting chalk off his pants*",
                    "So our gorilla has a GIRLFRIEND? This case just got romantic!",
                    "Does she know he's a gorilla? Is she into that? I have so many questions.",
                    "Bedford Ave, you said? I know a great taco place over there.",
                    "What do you think, partner? Are we dealing with a gorilla or a guy in a really good costume?"
                ]
            }
        ],
        winText: "You declare it was a gorilla. Wilder nods slowly and says 'The universe accepts your conclusion.'\n\nRick gets tacos. The case file is closed.\n\nSomewhere in Williamsburg, a man takes off a gorilla mask in a parking lot, and no one notices.\n\nTHE END.",
        continueChoice: "Find the girlfriend. She might know who this guy really is.",
        continueText: "A guy who takes off a gorilla mask like it's a hat? And has a girlfriend? This isn't a zoo escape. You head to Bedford Ave to find Dana.",
        nextScene: "girlfriend"
    },

    girlfriend: {
        id: "girlfriend",
        title: "Dana's Apartment - Bedford Ave, Williamsburg",
        description: "A walk-up apartment on Bedford Ave. The buzzer panel has 'DANA K.' written in faded marker next to 3B. The hallway smells like someone's cooking something that involves a lot of garlic. Dana answers the door in yoga pants and a oversized sweater. She doesn't seem surprised to see detectives.",
        evidence: ["Suspect's name: unknown, Dana calls him 'babe'", "Suspect 'worked too much' - late nights", "Dana hasn't seen him in a week"],
        dialogues: [
            {
                speaker: "Dana",
                portrait: "dana",
                lines: [
                    "Detectives. Yeah, I figured someone would come eventually.",
                    "No, I don't know his real name. Everyone just called him 'G.' I thought it was short for something.",
                    "We dated for like... four months? He was sweet. But he worked too much.",
                    "He'd leave at midnight, come back at dawn. Always had this weird funky smell on him.",
                    "Like... zoo smell? Is that a thing?",
                    "I asked him once what he did for work and he just said 'consulting.' Very vague."
                ]
            },
            {
                speaker: "Det. Rick Brannigan",
                portrait: "rick",
                lines: [
                    "Ma'am, I'm sorry about your boyfriend. He sounds like a real... animal.",
                    "Get it? Because\u2014",
                    "Right. Sorry. Professional.",
                    "So, uh, Dana... are you... doing okay? Emotionally? Do you need someone to talk to?",
                    "Because I'm a great listener. I once listened to a whole podcast about\u2014",
                    "My partner is giving me a look. I'll stop."
                ]
            },
            {
                speaker: "Dana",
                portrait: "dana",
                lines: [
                    "Is your partner always like this?",
                    "Look, the last time I saw G was about a week ago. He was stressed.",
                    "He said his boss was 'riding him.' Something about a job that went wrong.",
                    "He mentioned his boss hangs around that hot dog cart on Fulton Street. The one near the courthouse.",
                    "If anyone knows where G is, it's his boss.",
                    "Can I go back to my show now? I'm watching Murder, She Wrote and it's getting good."
                ]
            },
            {
                speaker: "Det. Rick Brannigan",
                portrait: "rick",
                lines: [
                    "Murder, She Wrote! Great show. Jessica Fletcher is the real detective.",
                    "Way better than us. I mean\u2014 we're good too. We're fine.",
                    "So the boss hangs out by a hot dog cart! Hot dogs! Finally something useful.",
                    "I mean, for the investigation. Not because I'm hungry. Which I am.",
                    "Partner, what's the verdict here? Gorilla or person?"
                ]
            }
        ],
        winText: "You declare it was a gorilla. Dana shrugs and goes back to Murder, She Wrote.\n\nRick asks for her number 'for the case file.' She closes the door.\n\nSomewhere, a gorilla-suited man named G continues his reign of consulting-related terror. But you'll never know.\n\nTHE END.",
        continueChoice: "Track down the boss. Something about this 'consulting' stinks.",
        continueText: "A mysterious 'boss' by a hot dog cart on Fulton Street? A consulting job that involves gorilla suits? This goes deeper. You head downtown.",
        nextScene: "boss"
    },

    boss: {
        id: "boss",
        title: "Fulton Street - Hot Dog Cart",
        description: "The hot dog cart near the courthouse is run by a guy named Sal who's seen everything and judges nothing. Standing next to it, eating a hot dog with an aggressive amount of mustard, is a man in a cheap suit who matches the description of G's boss. His name tag says 'VINNIE.'",
        evidence: ["Boss: Vinnie, runs some kind of 'consulting' operation", "Has G's last paycheck with his home address", "Address: 275 President St, Apt 4"],
        dialogues: [
            {
                speaker: "Vinnie - G's Boss",
                portrait: "vinnie",
                lines: [
                    "*takes an enormous bite of hot dog*",
                    "G? Yeah, I know G. Good worker. Weird guy. Great at his job though.",
                    "What job? Consulting. We do... consulting. For businesses.",
                    "Look, I don't ask questions about the gorilla suit, okay? That's his process.",
                    "Some guys wear lucky socks. G wears a gorilla suit. It's New York, who cares.",
                    "The kid went off the rails though. That warehouse job wasn't sanctioned.",
                    "I actually have his last paycheck right here. Was gonna mail it."
                ]
            },
            {
                speaker: "Det. Rick Brannigan",
                portrait: "rick",
                lines: [
                    "Excuse me, one of those hot dogs please. With everything.",
                    "*eating a hot dog now*",
                    "Sho... *chewing* ...the gorilsha suit is for conshulting?",
                    "*swallows* Sorry. The gorilla suit is a work thing?",
                    "I once wore a chicken suit for a stakeout. Worst three days of my life.",
                    "The beak kept fogging up."
                ]
            },
            {
                speaker: "Vinnie",
                portrait: "vinnie",
                lines: [
                    "Here's the paycheck. Made out to cash, obviously. We're not animals.",
                    "Well. He might be. I honestly don't know anymore.",
                    "But the address on file is 275 President Street, Apartment 4.",
                    "He lives with some roommate. Quiet guy. Glasses. Very particular about bananas.",
                    "*takes another bite* You didn't hear any of this from me.",
                    "Also, try Sal's relish. It's transcendent."
                ]
            },
            {
                speaker: "Det. Rick Brannigan",
                portrait: "rick",
                lines: [
                    "Quiet guy with glasses who's particular about bananas? That's not suspicious at all.",
                    "*mustard dripping on his tie*",
                    "This hot dog IS really good though.",
                    "275 President. Apartment 4. Let's roll, partner!",
                    "But first\u2014 Sal, one more hot dog for the road. With the relish.",
                    "Okay, NOW I'm ready. Gorilla or person? What do you think?"
                ]
            }
        ],
        winText: "You declare it was a gorilla. Vinnie shrugs and orders another hot dog.\n\nRick gets mustard on the case file. The investigation ends at a hot dog cart.\n\nVinnie's 'consulting' business continues unimpeded. The paycheck sits in an evidence box, gathering dust.\n\nTHE END.",
        continueChoice: "Follow the paycheck. That address is our next lead.",
        continueText: "The paycheck has an address. A roommate who's 'particular about bananas.' Something nags at you. You and Rick head to 275 President Street.",
        nextScene: "apartment"
    },

    apartment: {
        id: "apartment",
        title: "275 President St, Apt 4",
        description: "A pre-war building on President Street. The elevator is broken, so you walk up four flights. Rick is winded by the second floor. Nobody answers. Rick suggests kicking the door down. You remind him that's illegal. Rick kicks the door down anyway. Inside, frozen mid-bite over a bowl of cereal, wearing a full gorilla costume with the head pulled back like a hoodie... is Professor Nathaniel Marsh. The primate specialist from the crime scene.",
        evidence: ["Prof. Marsh is the suspect's roommate", "Marsh was at the crime scene AND lives with suspect", "Marsh owns his OWN gorilla suit", "Apartment has gorilla-related paraphernalia everywhere"],
        dialogues: [
            {
                speaker: "Prof. Nathaniel Marsh",
                portrait: "marsh",
                lines: [
                    "This\u2014 this isn't what it looks like!",
                    "I can explain the gorilla suit! I'm a primate specialist! I study them!",
                    "Sometimes you have to wear the suit to... to understand the gorilla mind.",
                    "It's a METHOD. It's SCIENCE.",
                    "Yes, I'm G's roommate. Small world, isn't it?",
                    "But this is MY suit. G has his OWN suit. We are NOT sharing gorilla suits. That would be weird.",
                    "He's not here. He left yesterday. Took HIS suit and a duffel bag.",
                    "Said he had 'one more thing to take care of.'"
                ]
            },
            {
                speaker: "Det. Rick Brannigan",
                portrait: "rick",
                lines: [
                    "Hey! I know you! You're the guy from the... from the...",
                    "...from somewhere. Have we met? You look familiar.",
                    "Are you on TV? Do you do those car insurance commercials?",
                    "Wait\u2014 are you my dentist? My dentist has glasses.",
                    "Partner, doesn't this guy look like someone? Minus the gorilla suit, obviously."
                ]
            },
            {
                speaker: "Prof. Nathaniel Marsh",
                portrait: "marsh",
                lines: [
                    "We met at the crime scene. This morning. I'm the primate specialist.",
                    "*still holding cereal spoon in gorilla glove*",
                    "I told you it was a gorilla. Which, technically, I still believe.",
                    "The suit G has is remarkably realistic. Museum-quality construction.",
                    "But that seam around the neck. A real gorilla wouldn't have that.",
                    "MINE doesn't have a seam, for the record. Mine is a Gustafson original.",
                    "I should stop talking. Forget I said anything. All of it."
                ]
            },
            {
                speaker: "Det. Rick Brannigan",
                portrait: "rick",
                lines: [
                    "THE CRIME SCENE! That's where I know you from!",
                    "Wow, what a coincidence! The gorilla expert lives with the gorilla guy! And he ALSO has a gorilla suit!",
                    "It's like when you run into your barber at the grocery store. Except your barber is dressed as a gorilla. Eating cereal.",
                    "...Wait. Is that suspicious? I genuinely cannot tell.",
                    "Anyway, partner. What's the call? Gorilla or person?"
                ]
            }
        ],
        winText: "You declare it was a gorilla. Professor Marsh nods vigorously, cereal milk dripping from his gorilla glove. 'Exactly what I've been saying!'\n\nRick asks if they can use Marsh's bathroom before they leave. He gets lost in the apartment for twenty minutes.\n\nThe case is filed under 'Wildlife Incidents.' No one questions why a primate specialist was eating Cheerios in a gorilla suit.\n\nTHE END.",
        continueChoice: "Two gorilla suits?! I need to find this guy NOW.",
        continueText: "The primate specialist from the crime scene is the suspect's ROOMMATE? He owns his OWN gorilla suit? And he just let G walk out with a duffel bag? This stinks. You need to find G before\u2014",
        nextScene: "finale"
    },

    finale: {
        id: "finale",
        title: "???",
        description: "You step out of Marsh's apartment building into the alley to make a phone call. The streetlight flickers. Where's Rick? He was right behind you. Then you hear it. Heavy breathing. The sound of something big moving in the shadows. You turn around.",
        evidence: [],
        dialogues: [
            {
                speaker: "???",
                portrait: "gorilla",
                lines: [
                    "*heavy breathing from the darkness*",
                    "*a massive figure steps into the light*",
                    "*it's the gorilla*",
                    "*it grabs you before you can reach your weapon*"
                ]
            },
            {
                speaker: "You (internal monologue)",
                portrait: "you",
                lines: [
                    "This is it. Face to face with the gorilla.",
                    "Up close, the seam around the neck is obvious. The fur has a slightly synthetic sheen.",
                    "The eyes behind the mask are human. You've known it all along.",
                    "It was always a man in a suit."
                ]
            },
            {
                speaker: "The Gorilla",
                portrait: "gorilla",
                lines: [
                    "*reaches up to its own neck*",
                    "*grips the seam*",
                    "*pulls off the gorilla mask*",
                    "Surprise, detective. It's just a guy in a mask.",
                    "You knew all along, didn't you? The seam gave it away.",
                    "I'm just a regular guy. Name's Gary. The whole gorilla thing was just a gimmick.",
                    "Pretty convincing though, right? The zoo professor even fell for it."
                ]
            },
            {
                speaker: "You (internal monologue)",
                portrait: "you",
                lines: [
                    "You knew it. You always knew. Just a man in a mask.",
                    "Case solved. Simple as that.",
                    "...Wait. Why is he reaching for his face again?"
                ]
            },
            {
                speaker: "Gary",
                portrait: "gary",
                lines: [
                    "Actually, detective... there's one more thing.",
                    "*reaches up to his own face*",
                    "*grips the skin around his jaw*",
                    "*pulls off the human face*",
                    "*underneath is a gorilla*",
                    "*an actual gorilla*",
                    "OOK."
                ]
            },
            {
                speaker: "You (internal monologue)",
                portrait: "you",
                lines: [
                    "Oh no.",
                    "Oh no no no.",
                    "It was a gorilla wearing a man mask wearing a gorilla mask.",
                    "A gorilla all along.",
                    "Professor Marsh was right."
                ]
            },
            {
                speaker: "The Gorilla (the real one)",
                portrait: "gorilla_real",
                lines: [
                    "OOK OOK.",
                    "*cracks knuckles*",
                    "*2,700 pounds of force per square inch*"
                ]
            }
        ],
        // No choice in the finale - it plays out automatically
        isFinale: true
    }
};

// Win messages for the gorilla choice at different scenes
const WIN_SCENE_MESSAGES = {
    warehouse: "Scene 1 of 7. You barely started investigating.",
    atm_footage: "Scene 2 of 7. You didn't even finish watching the tape.",
    climbing_gym: "Scene 3 of 7. You missed the best parts.",
    girlfriend: "Scene 4 of 7. You were getting warmer.",
    boss: "Scene 5 of 7. The hot dogs were worth it though.",
    apartment: "Scene 6 of 7. You were SO close to the truth."
};

// Scene order for tracking progress
const SCENE_ORDER = ["warehouse", "atm_footage", "climbing_gym", "girlfriend", "boss", "apartment", "finale"];
