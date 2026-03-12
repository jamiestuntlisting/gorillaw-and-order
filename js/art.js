/* ============================================
   GORILLAW & ORDER - SVG Scene Illustrations
   Greyscale noir style artwork
   ============================================ */

const SceneArt = {
    // Cross-hatching pattern definition used across scenes
    _defsBlock() {
        return `
            <defs>
                <pattern id="crosshatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="8" stroke="#333" stroke-width="0.5"/>
                </pattern>
                <pattern id="crosshatch-light" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="6" stroke="#555" stroke-width="0.3"/>
                </pattern>
                <pattern id="crosshatch-dense" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="4" stroke="#222" stroke-width="0.7"/>
                    <line x1="0" y1="0" x2="4" y2="0" stroke="#222" stroke-width="0.3"/>
                </pattern>
                <linearGradient id="shadow-bottom" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="transparent"/>
                    <stop offset="100%" stop-color="#000" stop-opacity="0.7"/>
                </linearGradient>
                <linearGradient id="light-top" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#fff" stop-opacity="0.15"/>
                    <stop offset="100%" stop-color="transparent"/>
                </linearGradient>
                <filter id="grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/>
                    <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
                    <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply"/>
                </filter>
            </defs>
        `;
    },

    // Gorilla figure with visible neck seam - reused across scenes
    _gorilla(x, y, scale = 1, facing = 'right') {
        const flip = facing === 'left' ? `transform="translate(${x + 60 * scale}, ${y}) scale(${-scale}, ${scale})"` :
                     `transform="translate(${x}, ${y}) scale(${scale})"`;
        return `
            <g ${flip}>
                <!-- Body -->
                <ellipse cx="30" cy="65" rx="25" ry="30" fill="#2a2a2a"/>
                <!-- Arms -->
                <ellipse cx="5" cy="55" rx="10" ry="20" fill="#222" transform="rotate(-15, 5, 55)"/>
                <ellipse cx="55" cy="55" rx="10" ry="20" fill="#222" transform="rotate(15, 55, 55)"/>
                <!-- Legs -->
                <ellipse cx="18" cy="90" rx="10" ry="12" fill="#252525"/>
                <ellipse cx="42" cy="90" rx="10" ry="12" fill="#252525"/>
                <!-- HEAD - separate piece with VISIBLE SEAM -->
                <ellipse cx="30" cy="28" rx="18" ry="20" fill="#2a2a2a"/>
                <!-- Brow ridge -->
                <path d="M15 22 Q30 15 45 22" fill="#222" stroke="#1a1a1a" stroke-width="1"/>
                <!-- Eyes -->
                <ellipse cx="23" cy="26" rx="4" ry="3" fill="#1a1a1a"/>
                <ellipse cx="37" cy="26" rx="4" ry="3" fill="#1a1a1a"/>
                <circle cx="24" cy="25.5" r="1.2" fill="#666"/>
                <circle cx="38" cy="25.5" r="1.2" fill="#666"/>
                <!-- Nose -->
                <ellipse cx="30" cy="33" rx="6" ry="4" fill="#1e1e1e"/>
                <circle cx="27" cy="33" r="1.5" fill="#111"/>
                <circle cx="33" cy="33" r="1.5" fill="#111"/>
                <!-- Mouth -->
                <path d="M24 38 Q30 42 36 38" fill="none" stroke="#111" stroke-width="1"/>

                <!-- === THE SEAM === The key clue! Visible line around the neck === -->
                <line x1="12" y1="44" x2="48" y2="44" stroke="#555" stroke-width="1.5" stroke-dasharray="2,2"/>
                <line x1="12" y1="44" x2="8" y2="40" stroke="#555" stroke-width="1" stroke-dasharray="2,2"/>
                <line x1="48" y1="44" x2="52" y2="40" stroke="#555" stroke-width="1" stroke-dasharray="2,2"/>
                <!-- Seam detail - slight gap/overlap -->
                <path d="M20 43 Q22 46 24 43" fill="none" stroke="#666" stroke-width="0.7"/>
                <path d="M36 43 Q38 46 40 43" fill="none" stroke="#666" stroke-width="0.7"/>
            </g>
        `;
    },

    // Title screen art - gorilla silhouette with detective badge
    title() {
        return `
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            ${this._defsBlock()}
            <!-- Dark background with vignette -->
            <rect width="300" height="300" fill="#0a0a0a"/>
            <circle cx="150" cy="150" r="180" fill="url(#light-top)" opacity="0.3"/>

            <!-- Spotlight cone from above -->
            <polygon points="120,0 180,0 220,300 80,300" fill="#111" opacity="0.5"/>
            <polygon points="135,0 165,0 200,300 100,300" fill="#161616" opacity="0.4"/>

            <!-- Gorilla silhouette - large, menacing -->
            <g transform="translate(90, 40)">
                <!-- Body mass -->
                <ellipse cx="60" cy="160" rx="55" ry="65" fill="#151515"/>
                <!-- Shoulders -->
                <ellipse cx="20" cy="130" rx="25" ry="40" fill="#131313" transform="rotate(-10, 20, 130)"/>
                <ellipse cx="100" cy="130" rx="25" ry="40" fill="#131313" transform="rotate(10, 100, 130)"/>
                <!-- Head -->
                <ellipse cx="60" cy="80" rx="35" ry="40" fill="#151515"/>
                <!-- Brow ridge -->
                <path d="M30 70 Q60 55 90 70" fill="#121212"/>
                <!-- Eyes - glowing slightly -->
                <ellipse cx="48" cy="78" rx="6" ry="4" fill="#222"/>
                <ellipse cx="72" cy="78" rx="6" ry="4" fill="#222"/>
                <circle cx="49" cy="77" r="2" fill="#444"/>
                <circle cx="73" cy="77" r="2" fill="#444"/>

                <!-- THE SEAM - visible even in silhouette -->
                <line x1="25" y1="112" x2="95" y2="112" stroke="#333" stroke-width="2" stroke-dasharray="3,3"/>
                <path d="M45 111 Q48 115 51 111" fill="none" stroke="#3a3a3a" stroke-width="1"/>
                <path d="M69 111 Q72 115 75 111" fill="none" stroke="#3a3a3a" stroke-width="1"/>
            </g>

            <!-- Detective badge -->
            <g transform="translate(125, 250)">
                <polygon points="25,0 32,15 50,18 37,30 40,48 25,40 10,48 13,30 0,18 18,15" fill="none" stroke="#555" stroke-width="1.5"/>
                <text x="25" y="28" text-anchor="middle" font-size="7" fill="#555" font-family="Courier">NYPD</text>
            </g>

            <!-- Noir shadow overlay -->
            <rect width="300" height="300" fill="url(#shadow-bottom)"/>
        </svg>
        `;
    },

    // Scene 1: Brooklyn Warehouse Crime Scene
    warehouse() {
        return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            ${this._defsBlock()}
            <!-- Warehouse interior -->
            <rect width="400" height="300" fill="#111"/>
            <!-- Floor -->
            <polygon points="0,200 400,200 400,300 0,300" fill="#1a1a1a"/>
            <polygon points="0,200 400,200 350,300 50,300" fill="url(#crosshatch)"/>
            <!-- Back wall -->
            <rect x="20" y="30" width="360" height="170" fill="#181818" stroke="#2a2a2a" stroke-width="1"/>
            <!-- Warehouse shelves -->
            <rect x="30" y="40" width="15" height="160" fill="#222"/>
            <rect x="355" y="40" width="15" height="160" fill="#222"/>
            <line x1="30" y1="80" x2="370" y2="80" stroke="#2a2a2a" stroke-width="0.5"/>
            <line x1="30" y1="120" x2="370" y2="120" stroke="#2a2a2a" stroke-width="0.5"/>
            <!-- Loading dock door -->
            <rect x="150" y="40" width="100" height="130" fill="#0e0e0e" stroke="#333" stroke-width="2"/>
            <line x1="150" y1="60" x2="250" y2="60" stroke="#2a2a2a" stroke-width="1"/>
            <line x1="150" y1="80" x2="250" y2="80" stroke="#2a2a2a" stroke-width="1"/>
            <line x1="150" y1="100" x2="250" y2="100" stroke="#2a2a2a" stroke-width="1"/>

            <!-- Bodies under white sheets -->
            <g>
                <!-- Body 1 -->
                <ellipse cx="100" cy="240" rx="30" ry="8" fill="#444" opacity="0.3"/>
                <path d="M75 235 Q85 220 100 218 Q115 220 125 235 Q115 240 100 242 Q85 240 75 235" fill="#bbb" stroke="#999" stroke-width="0.5"/>
                <circle cx="88" cy="225" r="8" fill="#ccc" stroke="#999" stroke-width="0.5"/>

                <!-- Body 2 -->
                <ellipse cx="200" cy="260" rx="28" ry="7" fill="#444" opacity="0.3"/>
                <path d="M177 255 Q187 242 200 240 Q213 242 223 255 Q213 260 200 262 Q187 260 177 255" fill="#aaa" stroke="#888" stroke-width="0.5"/>
                <circle cx="190" cy="248" r="7" fill="#bbb" stroke="#888" stroke-width="0.5"/>

                <!-- Body 3 -->
                <ellipse cx="310" cy="245" rx="25" ry="7" fill="#444" opacity="0.3"/>
                <path d="M290 240 Q298 228 310 226 Q322 228 330 240 Q322 244 310 246 Q298 244 290 240" fill="#b5b5b5" stroke="#999" stroke-width="0.5"/>
                <circle cx="300" cy="234" r="7" fill="#c5c5c5" stroke="#999" stroke-width="0.5"/>
            </g>

            <!-- Police tape -->
            <line x1="0" y1="190" x2="400" y2="195" stroke="#888" stroke-width="3"/>
            <text x="50" y="194" font-size="6" fill="#333" font-family="monospace" transform="rotate(-0.7)">CRIME SCENE DO NOT CROSS</text>
            <text x="200" y="194" font-size="6" fill="#333" font-family="monospace" transform="rotate(-0.7)">CRIME SCENE DO NOT CROSS</text>

            <!-- Overhead light -->
            <line x1="200" y1="0" x2="200" y2="25" stroke="#444" stroke-width="1"/>
            <polygon points="185,25 215,25 225,35 175,35" fill="#333"/>
            <polygon points="190,35 210,35 300,200 100,200" fill="#fff" opacity="0.03"/>

            <!-- Claw marks on wall -->
            <g transform="translate(280, 60)">
                <line x1="0" y1="0" x2="10" y2="40" stroke="#444" stroke-width="2"/>
                <line x1="8" y1="0" x2="18" y2="40" stroke="#444" stroke-width="2"/>
                <line x1="16" y1="0" x2="26" y2="40" stroke="#444" stroke-width="2"/>
            </g>

            <!-- Shadow overlay -->
            <rect width="400" height="300" fill="url(#shadow-bottom)" opacity="0.5"/>
        </svg>
        `;
    },

    // Scene 2: ATM Footage
    atm_footage() {
        return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            ${this._defsBlock()}
            <!-- Dark tech lab background -->
            <rect width="400" height="300" fill="#0e0e0e"/>

            <!-- Monitor frame -->
            <rect x="40" y="20" width="320" height="220" rx="5" fill="#222" stroke="#444" stroke-width="3"/>
            <!-- Monitor inner bezel -->
            <rect x="50" y="30" width="300" height="195" fill="#0a0a0a" stroke="#333" stroke-width="1"/>

            <!-- CRT screen content - grainy footage -->
            <rect x="55" y="35" width="290" height="185" fill="#151515"/>

            <!-- Static/grain on screen -->
            <rect x="55" y="35" width="290" height="185" fill="url(#crosshatch-light)" opacity="0.3"/>

            <!-- Street scene on monitor -->
            <!-- Road -->
            <rect x="55" y="150" width="290" height="70" fill="#1a1a1a"/>
            <line x1="55" y1="180" x2="345" y2="180" stroke="#333" stroke-width="1" stroke-dasharray="10,8"/>

            <!-- Honda Civic -->
            <g transform="translate(160, 145)">
                <!-- Car body -->
                <rect x="0" y="10" width="80" height="25" rx="3" fill="#333" stroke="#444" stroke-width="1"/>
                <!-- Car roof -->
                <path d="M15 10 L25 0 L60 0 L70 10" fill="#2a2a2a" stroke="#444" stroke-width="1"/>
                <!-- Windows -->
                <rect x="27" y="2" width="14" height="8" fill="#222"/>
                <rect x="44" y="2" width="14" height="8" fill="#222"/>
                <!-- Wheels -->
                <circle cx="20" cy="37" r="7" fill="#1a1a1a" stroke="#444" stroke-width="1"/>
                <circle cx="60" cy="37" r="7" fill="#1a1a1a" stroke="#444" stroke-width="1"/>

                <!-- Gorilla visible through window! -->
                <ellipse cx="34" cy="3" rx="6" ry="6" fill="#252525"/>
                <!-- Gorilla head shape -->
                <path d="M30 0 Q34 -5 38 0" fill="#222"/>
                <!-- Seatbelt line -->
                <line x1="30" y1="-2" x2="36" y2="8" stroke="#555" stroke-width="0.7"/>
            </g>

            <!-- License plate highlight -->
            <rect x="228" y="170" width="30" height="8" fill="#333" stroke="#666" stroke-width="1"/>
            <text x="243" y="177" text-anchor="middle" font-size="5" fill="#999" font-family="monospace">GLR-1LAH</text>

            <!-- Timestamp overlay -->
            <text x="60" y="48" font-size="8" fill="#555" font-family="monospace">CAM 04 - ATM EXTERIOR</text>
            <text x="280" y="48" font-size="8" fill="#555" font-family="monospace">02:14:33</text>

            <!-- Scan lines on monitor -->
            <line x1="55" y1="80" x2="345" y2="80" stroke="#fff" stroke-width="0.3" opacity="0.1"/>
            <line x1="55" y1="120" x2="345" y2="120" stroke="#fff" stroke-width="0.3" opacity="0.1"/>
            <line x1="55" y1="160" x2="345" y2="160" stroke="#fff" stroke-width="0.3" opacity="0.1"/>

            <!-- Monitor stand -->
            <rect x="170" y="240" width="60" height="10" fill="#333"/>
            <rect x="150" y="250" width="100" height="8" rx="2" fill="#2a2a2a" stroke="#444" stroke-width="1"/>

            <!-- Desk surface -->
            <rect x="0" y="258" width="400" height="42" fill="#1e1e1e"/>
            <line x1="0" y1="258" x2="400" y2="258" stroke="#444" stroke-width="1"/>

            <!-- Coffee cup on desk -->
            <rect x="340" y="262" width="20" height="18" rx="2" fill="#2a2a2a" stroke="#444" stroke-width="1"/>
            <ellipse cx="350" cy="262" rx="10" ry="3" fill="#2a2a2a" stroke="#444" stroke-width="1"/>

            <!-- Keyboard -->
            <rect x="100" y="268" width="120" height="20" rx="2" fill="#252525" stroke="#444" stroke-width="1"/>
            <rect x="105" y="272" width="110" height="3" rx="1" fill="#333"/>
            <rect x="105" y="278" width="110" height="3" rx="1" fill="#333"/>
            <rect x="105" y="284" width="110" height="3" rx="1" fill="#333"/>

            <!-- VHS tracking effect -->
            <rect x="55" y="100" width="290" height="3" fill="#222" opacity="0.4"/>
        </svg>
        `;
    },

    // Scene 3: Rock Climbing Gym
    climbing_gym() {
        return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            ${this._defsBlock()}
            <!-- Interior -->
            <rect width="400" height="300" fill="#141414"/>

            <!-- Climbing wall - left side -->
            <rect x="0" y="0" width="180" height="250" fill="#1e1e1e"/>
            <rect x="0" y="0" width="180" height="250" fill="url(#crosshatch-dense)" opacity="0.3"/>

            <!-- Climbing holds - various shapes -->
            <circle cx="30" cy="40" r="8" fill="#444" stroke="#555" stroke-width="1"/>
            <rect x="80" y="55" width="15" height="10" rx="3" fill="#3a3a3a" stroke="#555" stroke-width="1" transform="rotate(15, 87, 60)"/>
            <circle cx="140" cy="35" r="6" fill="#4a4a4a" stroke="#555" stroke-width="1"/>
            <polygon points="50,90 60,75 70,90" fill="#3a3a3a" stroke="#555" stroke-width="1"/>
            <circle cx="120" cy="100" r="9" fill="#444" stroke="#555" stroke-width="1"/>
            <rect x="20" y="130" width="12" height="12" rx="3" fill="#3a3a3a" stroke="#555" stroke-width="1"/>
            <circle cx="80" cy="150" r="7" fill="#444" stroke="#555" stroke-width="1"/>
            <circle cx="150" cy="140" r="10" fill="#3a3a3a" stroke="#555" stroke-width="1"/>
            <polygon points="40,180 52,170 55,185" fill="#444" stroke="#555" stroke-width="1"/>
            <circle cx="110" cy="200" r="8" fill="#4a4a4a" stroke="#555" stroke-width="1"/>
            <rect x="140" y="190" width="14" height="8" rx="2" fill="#3a3a3a" stroke="#555" stroke-width="1"/>
            <circle cx="60" cy="230" r="6" fill="#444" stroke="#555" stroke-width="1"/>

            <!-- Reception area - right side -->
            <rect x="180" y="180" width="220" height="120" fill="#1a1a1a"/>
            <!-- Counter -->
            <rect x="200" y="180" width="180" height="8" fill="#333" stroke="#444" stroke-width="1"/>

            <!-- Wilder figure - behind counter -->
            <g transform="translate(280, 120)">
                <!-- Body -->
                <rect x="-12" y="30" width="24" height="40" rx="2" fill="#2a2a2a"/>
                <!-- Head -->
                <circle cx="0" cy="20" r="12" fill="#444"/>
                <!-- Hair - man bun -->
                <circle cx="0" cy="12" r="6" fill="#333"/>
                <!-- Zen expression -->
                <line x1="-4" y1="20" x2="-1" y2="20" stroke="#222" stroke-width="1"/>
                <line x1="1" y1="20" x2="4" y2="20" stroke="#222" stroke-width="1"/>
                <path d="M-3 25 Q0 27 3 25" fill="none" stroke="#333" stroke-width="0.7"/>
                <!-- Arms crossed -->
                <path d="M-12 40 Q-20 50 -15 60" fill="none" stroke="#2a2a2a" stroke-width="5"/>
                <path d="M12 40 Q20 50 15 60" fill="none" stroke="#2a2a2a" stroke-width="5"/>
            </g>

            <!-- Sign on wall -->
            <rect x="220" y="50" width="140" height="40" fill="#1a1a1a" stroke="#444" stroke-width="1"/>
            <text x="290" y="68" text-anchor="middle" font-size="10" fill="#555" font-family="monospace">SUMMIT GRIP</text>
            <text x="290" y="82" font-size="7" text-anchor="middle" fill="#444" font-family="monospace">CLIMB HIGHER</text>

            <!-- Rick on the wall (falling) -->
            <g transform="translate(70, 200)">
                <!-- Rick's body - mid-fall -->
                <rect x="-8" y="0" width="16" height="25" rx="2" fill="#555" transform="rotate(20, 0, 12)"/>
                <!-- Head -->
                <circle cx="4" cy="-8" r="8" fill="#666"/>
                <!-- Fedora -->
                <ellipse cx="4" cy="-14" rx="10" ry="3" fill="#444"/>
                <rect x="-2" y="-18" width="12" height="5" rx="1" fill="#444"/>
                <!-- Arms flailing -->
                <line x1="-8" y1="5" x2="-22" y2="-5" stroke="#555" stroke-width="3"/>
                <line x1="8" y1="5" x2="22" y2="-10" stroke="#555" stroke-width="3"/>
                <!-- Legs -->
                <line x1="-4" y1="25" x2="-8" y2="38" stroke="#555" stroke-width="3"/>
                <line x1="4" y1="25" x2="10" y2="36" stroke="#555" stroke-width="3"/>
            </g>

            <!-- Floor -->
            <rect x="0" y="250" width="400" height="50" fill="#161616"/>
            <line x1="0" y1="250" x2="400" y2="250" stroke="#2a2a2a" stroke-width="1"/>

            <!-- Chalk dust on floor -->
            <circle cx="50" cy="260" r="15" fill="#1e1e1e" opacity="0.5"/>
            <circle cx="130" cy="270" r="10" fill="#1e1e1e" opacity="0.3"/>

            <rect width="400" height="300" fill="url(#shadow-bottom)" opacity="0.4"/>
        </svg>
        `;
    },

    // Scene 4: Ex-Girlfriend's Apartment
    girlfriend() {
        return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            ${this._defsBlock()}
            <!-- Hallway background -->
            <rect width="400" height="300" fill="#131313"/>

            <!-- Hallway walls - perspective -->
            <polygon points="0,0 100,40 100,260 0,300" fill="#1a1a1a"/>
            <polygon points="400,0 300,40 300,260 400,300" fill="#1a1a1a"/>
            <!-- Floor -->
            <polygon points="100,260 300,260 400,300 0,300" fill="#161616"/>
            <polygon points="100,260 300,260 400,300 0,300" fill="url(#crosshatch)" opacity="0.2"/>

            <!-- Door frame -->
            <rect x="140" y="50" width="120" height="210" fill="#0e0e0e" stroke="#444" stroke-width="2"/>
            <!-- Door (open) -->
            <g transform="translate(140, 50)">
                <polygon points="0,0 -40,20 -40,190 0,210" fill="#2a2a2a" stroke="#444" stroke-width="1"/>
                <!-- Door knob -->
                <circle cx="-8" cy="105" r="3" fill="#555"/>
                <!-- Door number -->
                <text x="-20" y="30" font-size="12" fill="#666" font-family="monospace">3B</text>
            </g>

            <!-- Light from inside apartment -->
            <polygon points="140,50 260,50 280,80 260,260 140,260 120,230" fill="#1c1c1c" opacity="0.5"/>

            <!-- Dana in doorway -->
            <g transform="translate(190, 100)">
                <!-- Body -->
                <rect x="-10" y="40" width="20" height="50" rx="2" fill="#444"/>
                <!-- Oversized sweater -->
                <rect x="-15" y="35" width="30" height="35" rx="3" fill="#3a3a3a"/>
                <!-- Head -->
                <circle cx="0" cy="25" r="12" fill="#555"/>
                <!-- Hair -->
                <path d="M-12 20 Q-14 10 -8 8 Q0 5 8 8 Q14 10 12 20" fill="#333"/>
                <path d="M-12 20 Q-16 30 -14 40" fill="none" stroke="#333" stroke-width="3"/>
                <path d="M12 20 Q16 30 14 40" fill="none" stroke="#333" stroke-width="3"/>
                <!-- Tired eyes -->
                <line x1="-5" y1="24" x2="-2" y2="24" stroke="#333" stroke-width="1"/>
                <line x1="2" y1="24" x2="5" y2="24" stroke="#333" stroke-width="1"/>
                <!-- Under-eye circles -->
                <path d="M-5 26 Q-3.5 27 -2 26" fill="none" stroke="#444" stroke-width="0.5"/>
                <path d="M2 26 Q3.5 27 5 26" fill="none" stroke="#444" stroke-width="0.5"/>
                <!-- Unimpressed mouth -->
                <line x1="-3" y1="30" x2="3" y2="30" stroke="#444" stroke-width="0.7"/>
                <!-- Arms crossed -->
                <path d="M-15 45 L-5 55 L15 45" fill="none" stroke="#3a3a3a" stroke-width="4"/>
                <!-- Yoga pants / legs -->
                <line x1="-5" y1="90" x2="-5" y2="115" stroke="#333" stroke-width="5"/>
                <line x1="5" y1="90" x2="5" y2="115" stroke="#333" stroke-width="5"/>
            </g>

            <!-- Hallway light fixture -->
            <rect x="185" y="15" width="30" height="5" fill="#333"/>
            <polygon points="185,20 215,20 225,35 175,35" fill="#2a2a2a"/>
            <!-- Light cone -->
            <polygon points="190,35 210,35 260,260 140,260" fill="#fff" opacity="0.02"/>

            <!-- Other apartment doors in hallway -->
            <rect x="30" y="80" width="50" height="120" fill="#1e1e1e" stroke="#333" stroke-width="1"/>
            <text x="55" y="105" text-anchor="middle" font-size="8" fill="#444" font-family="monospace">3A</text>
            <circle cx="72" cy="140" r="2" fill="#444"/>

            <rect x="320" y="80" width="50" height="120" fill="#1e1e1e" stroke="#333" stroke-width="1"/>
            <text x="345" y="105" text-anchor="middle" font-size="8" fill="#444" font-family="monospace">3C</text>
            <circle cx="328" cy="140" r="2" fill="#444"/>

            <!-- Garlic smell lines (wavy) -->
            <path d="M350 120 Q355 115 360 120 Q365 125 370 120" fill="none" stroke="#222" stroke-width="0.5" opacity="0.4"/>
            <path d="M355 110 Q360 105 365 110 Q370 115 375 110" fill="none" stroke="#222" stroke-width="0.5" opacity="0.3"/>

            <rect width="400" height="300" fill="url(#shadow-bottom)" opacity="0.5"/>
        </svg>
        `;
    },

    // Scene 5: Boss on the Street (Hot Dog Cart)
    boss() {
        return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            ${this._defsBlock()}
            <!-- Sky -->
            <rect width="400" height="300" fill="#111"/>

            <!-- Buildings background -->
            <rect x="0" y="0" width="80" height="200" fill="#1a1a1a"/>
            <rect x="90" y="20" width="70" height="180" fill="#181818"/>
            <rect x="250" y="10" width="60" height="190" fill="#1a1a1a"/>
            <rect x="320" y="30" width="80" height="170" fill="#181818"/>

            <!-- Windows on buildings -->
            <g fill="#222" opacity="0.8">
                <rect x="10" y="30" width="8" height="10"/><rect x="25" y="30" width="8" height="10"/>
                <rect x="10" y="50" width="8" height="10"/><rect x="25" y="50" width="8" height="10"/>
                <rect x="10" y="70" width="8" height="10"/><rect x="25" y="70" width="8" height="10"/>
                <rect x="50" y="30" width="8" height="10"/><rect x="50" y="50" width="8" height="10"/>
                <rect x="100" y="40" width="8" height="10"/><rect x="115" y="40" width="8" height="10"/>
                <rect x="100" y="60" width="8" height="10"/><rect x="115" y="60" width="8" height="10"/>
                <rect x="260" y="30" width="8" height="10"/><rect x="275" y="30" width="8" height="10"/>
                <rect x="260" y="50" width="8" height="10"/><rect x="275" y="50" width="8" height="10"/>
                <rect x="340" y="50" width="8" height="10"/><rect x="355" y="50" width="8" height="10"/>
            </g>

            <!-- Fire escape on right building -->
            <g stroke="#333" stroke-width="1" fill="none">
                <rect x="330" y="55" width="25" height="3"/>
                <line x1="330" y1="58" x2="330" y2="80"/>
                <line x1="355" y1="58" x2="355" y2="80"/>
                <rect x="330" y="80" width="25" height="3"/>
                <line x1="330" y1="83" x2="330" y2="105"/>
                <line x1="355" y1="83" x2="355" y2="105"/>
                <rect x="330" y="105" width="25" height="3"/>
                <!-- Diagonal stairs -->
                <line x1="330" y1="58" x2="355" y2="80"/>
                <line x1="355" y1="83" x2="330" y2="105"/>
            </g>

            <!-- Sidewalk -->
            <rect x="0" y="200" width="400" height="100" fill="#1e1e1e"/>
            <line x1="0" y1="200" x2="400" y2="200" stroke="#333" stroke-width="1"/>
            <rect x="0" y="200" width="400" height="100" fill="url(#crosshatch)" opacity="0.15"/>

            <!-- Hot dog cart -->
            <g transform="translate(150, 150)">
                <!-- Cart body -->
                <rect x="0" y="20" width="80" height="40" rx="3" fill="#333" stroke="#444" stroke-width="1.5"/>
                <!-- Umbrella -->
                <line x1="40" y1="-30" x2="40" y2="20" stroke="#444" stroke-width="2"/>
                <path d="M5,-30 Q40,-50 75,-30 Q40,-25 5,-30" fill="#2a2a2a" stroke="#444" stroke-width="1"/>
                <!-- Wheels -->
                <circle cx="15" cy="63" r="8" fill="#222" stroke="#444" stroke-width="1"/>
                <circle cx="65" cy="63" r="8" fill="#222" stroke="#444" stroke-width="1"/>
                <!-- Sign -->
                <rect x="10" y="25" width="60" height="12" fill="#2a2a2a"/>
                <text x="40" y="35" text-anchor="middle" font-size="6" fill="#666" font-family="monospace">SAL'S DOGS</text>
                <!-- Steam -->
                <path d="M30 18 Q32 10 35 18" fill="none" stroke="#333" stroke-width="0.5"/>
                <path d="M45 16 Q48 8 50 16" fill="none" stroke="#333" stroke-width="0.5"/>
            </g>

            <!-- Vinnie figure - eating hot dog -->
            <g transform="translate(270, 155)">
                <!-- Body - cheap suit -->
                <rect x="-12" y="20" width="24" height="45" rx="2" fill="#2a2a2a"/>
                <!-- Suit lapels -->
                <path d="M-6 20 L0 30 L6 20" fill="none" stroke="#444" stroke-width="0.7"/>
                <!-- Head -->
                <circle cx="0" cy="10" r="11" fill="#555"/>
                <!-- Slicked hair -->
                <path d="M-11 6 Q-10 -2 0 -3 Q10 -2 11 6" fill="#333"/>
                <!-- Eyes -->
                <circle cx="-4" cy="9" r="1.5" fill="#333"/>
                <circle cx="4" cy="9" r="1.5" fill="#333"/>
                <!-- Eating expression -->
                <ellipse cx="0" cy="15" rx="3" ry="2" fill="#444"/>
                <!-- Arm holding hot dog -->
                <line x1="12" y1="30" x2="25" y2="18" stroke="#2a2a2a" stroke-width="4"/>
                <!-- Hot dog -->
                <rect x="22" y="14" width="16" height="5" rx="2" fill="#555"/>
                <rect x="24" y="13" width="12" height="2" rx="1" fill="#666"/>
                <!-- Mustard drip -->
                <line x1="30" y1="19" x2="30" y2="23" stroke="#777" stroke-width="0.7"/>
                <!-- Legs -->
                <line x1="-5" y1="65" x2="-5" y2="80" stroke="#2a2a2a" stroke-width="5"/>
                <line x1="5" y1="65" x2="5" y2="80" stroke="#2a2a2a" stroke-width="5"/>
                <!-- Shoes -->
                <rect x="-9" y="78" width="10" height="4" rx="1" fill="#1a1a1a"/>
                <rect x="1" y="78" width="10" height="4" rx="1" fill="#1a1a1a"/>
                <!-- Name tag -->
                <rect x="-10" y="22" width="20" height="6" fill="#444"/>
                <text x="0" y="27" text-anchor="middle" font-size="4" fill="#111" font-family="monospace">VINNIE</text>
            </g>

            <!-- Street lamp -->
            <g transform="translate(50, 120)">
                <rect x="-2" y="0" width="4" height="80" fill="#333"/>
                <rect x="-12" y="-5" width="24" height="8" rx="2" fill="#444"/>
                <circle cx="0" cy="-1" r="3" fill="#555"/>
            </g>

            <!-- Courthouse glimpse in background -->
            <g transform="translate(170, 30)">
                <rect x="0" y="0" width="60" height="170" fill="#191919"/>
                <rect x="10" y="5" width="8" height="15" rx="1" fill="#222"/>
                <rect x="25" y="5" width="8" height="15" rx="1" fill="#222"/>
                <rect x="42" y="5" width="8" height="15" rx="1" fill="#222"/>
                <!-- Columns -->
                <rect x="12" y="140" width="4" height="30" fill="#222"/>
                <rect x="27" y="140" width="4" height="30" fill="#222"/>
                <rect x="42" y="140" width="4" height="30" fill="#222"/>
            </g>

            <rect width="400" height="300" fill="url(#shadow-bottom)" opacity="0.4"/>
        </svg>
        `;
    },

    // Scene 6: Guy's Apartment
    apartment() {
        return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            ${this._defsBlock()}
            <!-- Hallway -->
            <rect width="400" height="300" fill="#111"/>

            <!-- Hallway perspective -->
            <polygon points="50,30 350,30 380,280 20,280" fill="#1a1a1a"/>
            <polygon points="50,30 350,30 380,280 20,280" fill="url(#crosshatch)" opacity="0.1"/>

            <!-- Door -->
            <rect x="120" y="45" width="160" height="210" fill="#252525" stroke="#444" stroke-width="2"/>
            <!-- Door panels -->
            <rect x="135" y="55" width="55" height="80" fill="#222" stroke="#333" stroke-width="1"/>
            <rect x="210" y="55" width="55" height="80" fill="#222" stroke="#333" stroke-width="1"/>
            <rect x="135" y="150" width="55" height="80" fill="#222" stroke="#333" stroke-width="1"/>
            <rect x="210" y="150" width="55" height="80" fill="#222" stroke="#333" stroke-width="1"/>
            <!-- Door number -->
            <text x="200" y="52" text-anchor="middle" font-size="14" fill="#666" font-family="monospace">6C</text>
            <!-- Door knob -->
            <circle cx="265" cy="155" r="5" fill="#555" stroke="#666" stroke-width="1"/>

            <!-- Professor Marsh in doorway - door is open -->
            <g transform="translate(200, 100)">
                <!-- Door gap behind him -->
                <rect x="-60" y="-50" width="120" height="200" fill="#1c1c1c"/>

                <!-- Apartment interior glimpse -->
                <!-- Gorilla poster on back wall -->
                <rect x="-40" y="-30" width="25" height="20" fill="#222" stroke="#333" stroke-width="0.5"/>
                <text x="-27" y="-17" text-anchor="middle" font-size="4" fill="#444" font-family="monospace">GORILLA</text>

                <!-- Banana bunch on counter -->
                <g transform="translate(20, -10)">
                    <path d="M0 0 Q5 -8 3 -15" fill="none" stroke="#555" stroke-width="2"/>
                    <path d="M3 0 Q8 -6 7 -13" fill="none" stroke="#555" stroke-width="2"/>
                    <path d="M-3 0 Q2 -7 0 -14" fill="none" stroke="#555" stroke-width="2"/>
                </g>

                <!-- Marsh figure -->
                <!-- Body - cardigan -->
                <rect x="-14" y="20" width="28" height="50" rx="2" fill="#3a3a3a"/>
                <!-- Cardigan opening -->
                <line x1="0" y1="20" x2="0" y2="70" stroke="#333" stroke-width="1"/>
                <!-- Shirt underneath -->
                <rect x="-4" y="22" width="8" height="15" fill="#444"/>
                <!-- Head -->
                <circle cx="0" cy="8" r="14" fill="#555"/>
                <!-- Glasses -->
                <circle cx="-5" cy="6" r="5" fill="none" stroke="#777" stroke-width="1"/>
                <circle cx="5" cy="6" r="5" fill="none" stroke="#777" stroke-width="1"/>
                <line x1="0" y1="6" x2="0" y2="6" stroke="#777" stroke-width="1"/>
                <line x1="-10" y1="6" x2="-14" y2="4" stroke="#777" stroke-width="0.7"/>
                <line x1="10" y1="6" x2="14" y2="4" stroke="#777" stroke-width="0.7"/>
                <!-- Eyes behind glasses -->
                <circle cx="-5" cy="6" r="1.5" fill="#333"/>
                <circle cx="5" cy="6" r="1.5" fill="#333"/>
                <!-- Thin hair -->
                <path d="M-14 2 Q-12 -8 0 -10 Q12 -8 14 2" fill="#444"/>
                <!-- Knowing smile -->
                <path d="M-4 14 Q0 17 4 14" fill="none" stroke="#444" stroke-width="0.7"/>
                <!-- Arms - one holding door -->
                <line x1="14" y1="30" x2="30" y2="20" stroke="#3a3a3a" stroke-width="5"/>
                <line x1="-14" y1="30" x2="-20" y2="45" stroke="#3a3a3a" stroke-width="5"/>
                <!-- Legs -->
                <line x1="-5" y1="70" x2="-5" y2="90" stroke="#333" stroke-width="5"/>
                <line x1="5" y1="70" x2="5" y2="90" stroke="#333" stroke-width="5"/>
                <!-- Slippers -->
                <rect x="-10" y="88" width="12" height="5" rx="2" fill="#3a3a3a"/>
                <rect x="0" y="88" width="12" height="5" rx="2" fill="#3a3a3a"/>
            </g>

            <!-- Hallway light - dim -->
            <rect x="190" y="25" width="20" height="4" fill="#333"/>
            <circle cx="200" cy="33" r="5" fill="#2a2a2a"/>

            <!-- Floor number on wall -->
            <text x="80" y="130" font-size="20" fill="#222" font-family="monospace">6</text>

            <rect width="400" height="300" fill="url(#shadow-bottom)" opacity="0.4"/>
        </svg>
        `;
    },

    // Scene 7: Finale - Dark Alley / Kidnapping
    finale() {
        return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            ${this._defsBlock()}
            <!-- Dark alley -->
            <rect width="400" height="300" fill="#080808"/>

            <!-- Brick walls -->
            <rect x="0" y="0" width="80" height="300" fill="#141414"/>
            <rect x="320" y="0" width="80" height="300" fill="#141414"/>
            <!-- Brick pattern -->
            <g stroke="#1a1a1a" stroke-width="0.5" fill="none" opacity="0.5">
                <rect x="5" y="5" width="30" height="12"/>
                <rect x="40" y="5" width="35" height="12"/>
                <rect x="5" y="22" width="20" height="12"/>
                <rect x="30" y="22" width="25" height="12"/>
                <rect x="60" y="22" width="15" height="12"/>
                <rect x="5" y="39" width="35" height="12"/>
                <rect x="45" y="39" width="30" height="12"/>
                <rect x="325" y="5" width="30" height="12"/>
                <rect x="360" y="5" width="35" height="12"/>
                <rect x="325" y="22" width="25" height="12"/>
                <rect x="355" y="22" width="20" height="12"/>
                <rect x="325" y="39" width="35" height="12"/>
                <rect x="365" y="39" width="30" height="12"/>
            </g>

            <!-- Flickering streetlight -->
            <g transform="translate(200, 10)">
                <rect x="-2" y="0" width="4" height="30" fill="#333"/>
                <rect x="-8" y="30" width="16" height="6" rx="1" fill="#444"/>
                <!-- Light cone -->
                <polygon points="-5,36 5,36 80,300 -80,300" fill="#111" opacity="0.4"/>
                <!-- Light glow -->
                <circle cx="0" cy="36" r="8" fill="#222" opacity="0.3"/>
            </g>

            <!-- THE GORILLA - large, menacing, emerging from shadows -->
            ${this._gorilla(130, 80, 2.5, 'right')}

            <!-- Ground -->
            <rect x="80" y="260" width="240" height="40" fill="#121212"/>
            <rect x="80" y="260" width="240" height="40" fill="url(#crosshatch-dense)" opacity="0.2"/>

            <!-- Dumpster -->
            <rect x="310" y="220" width="40" height="40" fill="#1a1a1a" stroke="#333" stroke-width="1"/>
            <rect x="308" y="218" width="44" height="5" fill="#222"/>

            <!-- Water puddle on ground reflecting light -->
            <ellipse cx="200" cy="275" rx="40" ry="8" fill="#111" opacity="0.5"/>
            <ellipse cx="200" cy="275" rx="30" ry="5" fill="#161616" opacity="0.3"/>

            <!-- Heavy noir shadow overlay -->
            <rect width="400" height="300" fill="url(#shadow-bottom)" opacity="0.6"/>

            <!-- Vignette -->
            <rect width="400" height="300" rx="0" fill="none" stroke="#000" stroke-width="60" opacity="0.4"/>
        </svg>
        `;
    },

    // Gorilla unmasking - reveal 1: gorilla takes off mask, it's a man
    finaleReveal1() {
        return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            ${this._defsBlock()}
            <rect width="400" height="300" fill="#0a0a0a"/>

            <!-- Spotlight -->
            <ellipse cx="200" cy="150" rx="120" ry="140" fill="#131313"/>

            <!-- Figure - half gorilla suit, half man -->
            <g transform="translate(140, 30)">
                <!-- Gorilla suit body -->
                <ellipse cx="60" cy="150" rx="50" ry="60" fill="#2a2a2a"/>
                <!-- Arms in gorilla suit -->
                <ellipse cx="10" cy="130" rx="18" ry="35" fill="#252525" transform="rotate(-10, 10, 130)"/>

                <!-- Right arm holding mask UP -->
                <line x1="100" y1="110" x2="130" y2="60" stroke="#252525" stroke-width="12"/>
                <!-- Gorilla mask being held -->
                <g transform="translate(115, 20)">
                    <ellipse cx="15" cy="20" rx="18" ry="20" fill="#2a2a2a" stroke="#333" stroke-width="1"/>
                    <path d="M2 15 Q15 8 28 15" fill="#222"/>
                    <ellipse cx="9" cy="18" rx="3" ry="2.5" fill="#1a1a1a"/>
                    <ellipse cx="21" cy="18" rx="3" ry="2.5" fill="#1a1a1a"/>
                    <ellipse cx="15" cy="25" rx="5" ry="3" fill="#1e1e1e"/>
                    <!-- THE SEAM visible on the mask -->
                    <line x1="0" y1="38" x2="30" y2="38" stroke="#555" stroke-width="1.5" stroke-dasharray="2,2"/>
                </g>

                <!-- Human head revealed -->
                <circle cx="60" cy="80" r="18" fill="#555"/>
                <!-- Normal human features -->
                <circle cx="53" cy="78" r="2" fill="#333"/>
                <circle cx="67" cy="78" r="2" fill="#333"/>
                <path d="M55 87 Q60 90 65 87" fill="none" stroke="#444" stroke-width="0.7"/>
                <!-- Short hair -->
                <path d="M42 74 Q50 62 60 60 Q70 62 78 74" fill="#444"/>
                <!-- Smirking -->
                <path d="M54 87 Q60 92 66 87" fill="none" stroke="#444" stroke-width="1"/>

                <!-- Neck area - suit collar visible -->
                <rect x="45" y="95" width="30" height="10" fill="#2a2a2a"/>
            </g>

            <!-- Text at bottom -->
            <text x="200" y="275" text-anchor="middle" font-size="12" fill="#666" font-family="monospace">"Just a guy in a mask."</text>

            <rect width="400" height="300" fill="url(#shadow-bottom)" opacity="0.5"/>
        </svg>
        `;
    },

    // Gorilla unmasking - reveal 2: man takes off man mask, it's a gorilla
    finaleReveal2() {
        return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            ${this._defsBlock()}
            <rect width="400" height="300" fill="#080808"/>

            <!-- Red-ish spotlight (but in greyscale = bright white) -->
            <ellipse cx="200" cy="150" rx="130" ry="150" fill="#161616"/>

            <!-- Figure - gorilla underneath the man mask -->
            <g transform="translate(130, 20)">
                <!-- Gorilla body - real this time, more muscular -->
                <ellipse cx="70" cy="160" rx="55" ry="65" fill="#1e1e1e"/>
                <!-- Massive shoulders -->
                <ellipse cx="15" cy="135" rx="22" ry="40" fill="#1a1a1a" transform="rotate(-8, 15, 135)"/>
                <ellipse cx="125" cy="135" rx="22" ry="40" fill="#1a1a1a" transform="rotate(8, 125, 135)"/>

                <!-- Right arm holding human mask UP -->
                <path d="M110 120 Q130 90 140 60" fill="none" stroke="#1a1a1a" stroke-width="14"/>
                <!-- Human face mask dangling -->
                <g transform="translate(125, 25)">
                    <circle cx="15" cy="15" r="16" fill="#555" stroke="#444" stroke-width="1"/>
                    <!-- Empty eye holes -->
                    <ellipse cx="9" cy="13" rx="3" ry="2" fill="#333"/>
                    <ellipse cx="21" cy="13" rx="3" ry="2" fill="#333"/>
                    <!-- Mouth hole -->
                    <ellipse cx="15" cy="22" rx="4" ry="2" fill="#444"/>
                    <!-- Mask edge/seam -->
                    <path d="M0 25 Q15 35 30 25" fill="none" stroke="#666" stroke-width="1" stroke-dasharray="2,2"/>
                </g>

                <!-- REAL gorilla head - bigger, more detailed -->
                <ellipse cx="70" cy="75" rx="30" ry="35" fill="#1e1e1e"/>
                <!-- Prominent brow ridge -->
                <path d="M42 65 Q70 50 98 65" fill="#1a1a1a" stroke="#111" stroke-width="1.5"/>
                <!-- Deep-set eyes - intelligent, menacing -->
                <ellipse cx="58" cy="70" rx="6" ry="4" fill="#111"/>
                <ellipse cx="82" cy="70" rx="6" ry="4" fill="#111"/>
                <circle cx="59" cy="69" r="2.5" fill="#444"/>
                <circle cx="83" cy="69" r="2.5" fill="#444"/>
                <!-- Wide nose -->
                <ellipse cx="70" cy="82" rx="8" ry="5" fill="#161616"/>
                <circle cx="66" cy="82" r="2" fill="#0e0e0e"/>
                <circle cx="74" cy="82" r="2" fill="#0e0e0e"/>
                <!-- Mouth - slight snarl -->
                <path d="M58 90 Q70 98 82 90" fill="#111" stroke="#0e0e0e" stroke-width="1"/>
                <!-- Teeth hint -->
                <line x1="65" y1="90" x2="65" y2="93" stroke="#444" stroke-width="1"/>
                <line x1="70" y1="91" x2="70" y2="95" stroke="#444" stroke-width="1"/>
                <line x1="75" y1="90" x2="75" y2="93" stroke="#444" stroke-width="1"/>

                <!-- NO SEAM this time - it's a real gorilla -->

                <!-- Fur texture on body -->
                <g stroke="#252525" stroke-width="0.5" opacity="0.5">
                    <line x1="40" y1="130" x2="42" y2="140"/>
                    <line x1="50" y1="125" x2="52" y2="135"/>
                    <line x1="60" y1="120" x2="62" y2="132"/>
                    <line x1="80" y1="120" x2="78" y2="132"/>
                    <line x1="90" y1="125" x2="88" y2="135"/>
                    <line x1="100" y1="130" x2="98" y2="140"/>
                </g>
            </g>

            <!-- Impact text -->
            <text x="200" y="275" text-anchor="middle" font-size="14" fill="#888" font-family="monospace" font-weight="bold">O O K .</text>

            <!-- Heavy vignette -->
            <rect width="400" height="300" fill="url(#shadow-bottom)" opacity="0.6"/>
            <rect width="400" height="300" rx="0" fill="none" stroke="#000" stroke-width="80" opacity="0.5"/>
        </svg>
        `;
    },

    // Game over art
    gameOver() {
        return `
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            ${this._defsBlock()}
            <rect width="300" height="300" fill="#080808"/>

            <!-- Chalk outline (of you) -->
            <g transform="translate(70, 40)" fill="none" stroke="#333" stroke-width="2">
                <!-- Head -->
                <circle cx="80" cy="20" r="15"/>
                <!-- Body -->
                <line x1="80" y1="35" x2="80" y2="120"/>
                <!-- Arms -->
                <line x1="80" y1="60" x2="40" y2="90"/>
                <line x1="80" y1="60" x2="120" y2="85"/>
                <!-- Legs -->
                <line x1="80" y1="120" x2="50" y2="180"/>
                <line x1="80" y1="120" x2="110" y2="175"/>
                <!-- Fedora next to head -->
                <ellipse cx="115" cy="25" rx="15" ry="4"/>
                <rect x="105" y="18" width="20" height="7" rx="2"/>
            </g>

            <!-- Detective badge on ground -->
            <g transform="translate(50, 220)">
                <polygon points="15,0 20,10 32,12 24,20 26,32 15,26 4,32 6,20 -2,12 10,10" fill="none" stroke="#444" stroke-width="1"/>
            </g>

            <text x="150" y="265" text-anchor="middle" font-size="18" fill="#444" font-family="monospace">GAME OVER</text>
            <text x="150" y="285" text-anchor="middle" font-size="8" fill="#333" font-family="monospace">2,700 pounds per square inch.</text>

            <rect width="300" height="300" fill="url(#shadow-bottom)" opacity="0.4"/>
        </svg>
        `;
    }
};
