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

/* ============================================
   Character Scene Art - full-size illustrations
   shown in the Scene panel when characters speak
   300x300 SVG, greyscale noir style
   ============================================ */
const CharacterArt = {
    get(key) {
        const normalized = key.toLowerCase().replace(/[^a-z_]/g, '');
        if (this._art[key]) return this._art[key];
        if (this._art[normalized]) return this._art[normalized];
        for (const k of Object.keys(this._art)) {
            if (normalized.includes(k) || k.includes(normalized)) {
                return this._art[k];
            }
        }
        return null;
    },

    _art: {
        // Beat Cop Murphy - at crime scene, uniformed, mustache
        cop: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ca-shadow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="transparent"/>
                    <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
                </linearGradient>
            </defs>
            <rect width="300" height="300" fill="#111"/>
            <!-- Dingy precinct background -->
            <rect x="0" y="200" width="300" height="100" fill="#1a1a1a"/>
            <line x1="0" y1="200" x2="300" y2="200" stroke="#333" stroke-width="1"/>
            <!-- Police tape hint -->
            <rect x="0" y="180" width="300" height="6" fill="#333" opacity="0.5" transform="rotate(-3, 150, 183)"/>
            <!-- Murphy - upper body -->
            <g transform="translate(80, 50)">
                <!-- Uniform body -->
                <rect x="30" y="150" width="80" height="100" rx="5" fill="#222"/>
                <!-- Badge -->
                <polygon points="70,160 74,170 82,172 76,180 78,190 70,185 62,190 64,180 58,172 66,170" fill="#555" stroke="#666" stroke-width="0.5"/>
                <!-- Neck -->
                <rect x="55" y="130" width="30" height="25" fill="#555"/>
                <!-- Head -->
                <circle cx="70" cy="105" r="40" fill="#5a5a5a"/>
                <!-- Police cap -->
                <rect x="28" y="65" width="84" height="22" rx="4" fill="#2a2a2a"/>
                <rect x="24" y="85" width="92" height="8" fill="#333"/>
                <!-- Cap badge -->
                <circle cx="70" cy="76" r="6" fill="#555" stroke="#666" stroke-width="0.5"/>
                <!-- Eyes - tired -->
                <ellipse cx="55" cy="102" rx="5" ry="3.5" fill="#eee"/>
                <ellipse cx="85" cy="102" rx="5" ry="3.5" fill="#eee"/>
                <circle cx="56" cy="102" r="2.5" fill="#222"/>
                <circle cx="86" cy="102" r="2.5" fill="#222"/>
                <!-- Bags under eyes -->
                <path d="M49 107 Q55 110 61 107" fill="none" stroke="#4a4a4a" stroke-width="0.7"/>
                <path d="M79 107 Q85 110 91 107" fill="none" stroke="#4a4a4a" stroke-width="0.7"/>
                <!-- Thick mustache -->
                <path d="M52 118 Q60 125 70 120 Q80 125 88 118" fill="#333"/>
                <!-- Mouth barely visible under stache -->
                <path d="M60 125 Q70 128 80 125" fill="none" stroke="#444" stroke-width="0.5"/>
            </g>
            <!-- Vignette -->
            <rect width="300" height="300" fill="url(#ca-shadow)" opacity="0.5"/>
        </svg>`,

        // Rick - goofy partner, messy hair, bad tie
        rick: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ca-shadow2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="transparent"/>
                    <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
                </linearGradient>
            </defs>
            <rect width="300" height="300" fill="#111"/>
            <rect x="0" y="210" width="300" height="90" fill="#1a1a1a"/>
            <!-- Rick - upper body, slightly off-center (he's always a bit off) -->
            <g transform="translate(70, 40)">
                <!-- Rumpled suit jacket -->
                <rect x="25" y="155" width="100" height="105" rx="5" fill="#333"/>
                <!-- Shirt visible -->
                <rect x="55" y="155" width="40" height="60" fill="#444"/>
                <!-- Terrible tie -->
                <path d="M68 155 L75 195 L82 155" fill="#555"/>
                <line x1="75" y1="195" x2="75" y2="230" stroke="#555" stroke-width="4"/>
                <!-- Neck -->
                <rect x="55" y="130" width="40" height="30" fill="#5a5a5a"/>
                <!-- Head - rounder, friendlier -->
                <circle cx="75" cy="100" r="42" fill="#5e5e5e"/>
                <!-- Messy hair -->
                <path d="M35 85 Q40 50 55 42 Q75 35 95 42 Q110 50 115 85" fill="#3a3a3a"/>
                <path d="M40 78 Q45 68 50 78" fill="#3a3a3a"/>
                <path d="M100 74 Q105 62 110 74" fill="#3a3a3a"/>
                <path d="M55 70 Q58 60 62 70" fill="#3a3a3a"/>
                <!-- Wide goofy eyes -->
                <ellipse cx="60" cy="97" rx="8" ry="7" fill="#eee"/>
                <ellipse cx="90" cy="97" rx="8" ry="7" fill="#eee"/>
                <circle cx="62" cy="97" r="4" fill="#222"/>
                <circle cx="92" cy="97" r="4" fill="#222"/>
                <!-- Bright eye highlights -->
                <circle cx="64" cy="95" r="1.5" fill="#fff"/>
                <circle cx="94" cy="95" r="1.5" fill="#fff"/>
                <!-- Raised eyebrows - perpetually surprised -->
                <path d="M48 86 Q58 78 68 86" fill="none" stroke="#444" stroke-width="1.5"/>
                <path d="M82 86 Q92 78 102 86" fill="none" stroke="#444" stroke-width="1.5"/>
                <!-- Dumb happy grin -->
                <path d="M55 115 Q75 130 95 115" fill="#444" stroke="#333" stroke-width="1"/>
                <!-- Teeth showing -->
                <rect x="64" y="115" width="22" height="6" fill="#999" rx="1"/>
            </g>
            <rect width="300" height="300" fill="url(#ca-shadow2)" opacity="0.4"/>
        </svg>`,

        // Professor Marsh - academic, glasses, bow tie
        marsh: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ca-shadow3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="transparent"/>
                    <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
                </linearGradient>
            </defs>
            <rect width="300" height="300" fill="#0e0e0e"/>
            <!-- Bookshelf background hint -->
            <g opacity="0.15">
                <rect x="10" y="10" width="280" height="40" fill="#333"/>
                <rect x="20" y="15" width="15" height="30" fill="#444"/>
                <rect x="40" y="12" width="12" height="33" fill="#3a3a3a"/>
                <rect x="58" y="15" width="18" height="30" fill="#444"/>
                <rect x="200" y="15" width="14" height="30" fill="#444"/>
                <rect x="220" y="12" width="20" height="33" fill="#3a3a3a"/>
            </g>
            <!-- Marsh - upper body -->
            <g transform="translate(75, 45)">
                <!-- Cardigan -->
                <rect x="25" y="155" width="100" height="100" rx="5" fill="#333"/>
                <line x1="75" y1="155" x2="75" y2="255" stroke="#2a2a2a" stroke-width="1"/>
                <!-- Elbow patches implied -->
                <ellipse cx="30" cy="200" rx="12" ry="18" fill="#3a3a3a"/>
                <ellipse cx="120" cy="200" rx="12" ry="18" fill="#3a3a3a"/>
                <!-- Bow tie -->
                <path d="M60 155 L75 162 L90 155 L75 168 Z" fill="#555"/>
                <!-- Neck - thinner -->
                <rect x="58" y="130" width="34" height="28" fill="#555"/>
                <!-- Head -->
                <circle cx="75" cy="100" r="40" fill="#585858"/>
                <!-- Thin receding hair -->
                <path d="M38 88 Q45 52 75 45 Q105 52 112 88" fill="#3a3a3a"/>
                <path d="M50 78 Q58 55 75 52" fill="#555"/>
                <!-- Round glasses - prominent -->
                <circle cx="58" cy="97" r="14" fill="none" stroke="#999" stroke-width="2.5"/>
                <circle cx="92" cy="97" r="14" fill="none" stroke="#999" stroke-width="2.5"/>
                <line x1="72" y1="97" x2="78" y2="97" stroke="#999" stroke-width="2"/>
                <line x1="44" y1="94" x2="36" y2="90" stroke="#999" stroke-width="1.5"/>
                <line x1="106" y1="94" x2="114" y2="90" stroke="#999" stroke-width="1.5"/>
                <!-- Eyes behind glasses - knowing -->
                <circle cx="58" cy="97" r="3" fill="#333"/>
                <circle cx="92" cy="97" r="3" fill="#333"/>
                <!-- Slight smirk - he knows something -->
                <path d="M62 118 Q75 124 88 116" fill="none" stroke="#444" stroke-width="1.2"/>
            </g>
            <rect width="300" height="300" fill="url(#ca-shadow3)" opacity="0.5"/>
        </svg>`,

        // Officer Chen - tech analyst, headset
        chen: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ca-shadow4" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="transparent"/>
                    <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
                </linearGradient>
            </defs>
            <rect width="300" height="300" fill="#0a0a0a"/>
            <!-- Monitor glow background -->
            <rect x="60" y="20" width="180" height="130" rx="5" fill="#181818" stroke="#333" stroke-width="2"/>
            <rect x="70" y="30" width="160" height="110" fill="#111"/>
            <!-- Screen static lines -->
            <g opacity="0.3">
                <line x1="70" y1="50" x2="230" y2="50" stroke="#222" stroke-width="1"/>
                <line x1="70" y1="80" x2="230" y2="80" stroke="#222" stroke-width="1"/>
                <line x1="70" y1="110" x2="230" y2="110" stroke="#222" stroke-width="1"/>
            </g>
            <!-- Chen - upper body in foreground -->
            <g transform="translate(80, 100)">
                <!-- Uniform -->
                <rect x="25" y="135" width="90" height="65" rx="3" fill="#222"/>
                <!-- Neck -->
                <rect x="52" y="115" width="36" height="25" fill="#555"/>
                <!-- Head -->
                <circle cx="70" cy="88" r="38" fill="#585858"/>
                <!-- Hair pulled back tight -->
                <path d="M34 75 Q40 42 70 36 Q100 42 106 75" fill="#2a2a2a"/>
                <path d="M104 70 Q108 60 112 78 Q108 88 104 78" fill="#2a2a2a"/>
                <!-- Headset -->
                <path d="M32 72 Q28 50 35 35 Q50 18 70 15 Q90 18 105 35 Q112 50 108 72" fill="none" stroke="#666" stroke-width="3"/>
                <rect x="25" y="68" width="14" height="22" rx="3" fill="#555"/>
                <!-- Headset mic -->
                <path d="M32 90 Q38 100 52 104" fill="none" stroke="#666" stroke-width="2"/>
                <!-- Eyes - sharp, focused -->
                <ellipse cx="55" cy="85" rx="6" ry="4" fill="#eee"/>
                <ellipse cx="85" cy="85" rx="6" ry="4" fill="#eee"/>
                <circle cx="56" cy="85" r="2.5" fill="#222"/>
                <circle cx="86" cy="85" r="2.5" fill="#222"/>
                <!-- Slight concentration frown -->
                <line x1="60" y1="105" x2="80" y2="105" stroke="#444" stroke-width="1"/>
            </g>
            <rect width="300" height="300" fill="url(#ca-shadow4)" opacity="0.4"/>
        </svg>`,

        // Wilder - climbing gym owner, man bun, zen
        wilder: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ca-shadow5" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="transparent"/>
                    <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
                </linearGradient>
            </defs>
            <rect width="300" height="300" fill="#111"/>
            <!-- Climbing wall background -->
            <g opacity="0.2">
                <circle cx="40" cy="60" r="12" fill="#333"/>
                <circle cx="120" cy="40" r="10" fill="#2a2a2a"/>
                <circle cx="250" cy="80" r="14" fill="#333"/>
                <circle cx="200" cy="30" r="8" fill="#2a2a2a"/>
                <circle cx="70" cy="130" r="11" fill="#333"/>
                <circle cx="260" cy="150" r="9" fill="#2a2a2a"/>
            </g>
            <!-- Wilder -->
            <g transform="translate(75, 50)">
                <!-- Tank top body - fit -->
                <rect x="40" y="155" width="70" height="95" rx="3" fill="#333"/>
                <!-- Bare shoulders -->
                <circle cx="38" cy="162" r="14" fill="#585858"/>
                <circle cx="112" cy="162" r="14" fill="#585858"/>
                <!-- Arms - muscular -->
                <rect x="20" y="160" width="18" height="50" rx="5" fill="#555"/>
                <rect x="112" y="160" width="18" height="50" rx="5" fill="#555"/>
                <!-- Neck -->
                <rect x="55" y="130" width="40" height="28" fill="#585858"/>
                <!-- Head -->
                <circle cx="75" cy="100" r="40" fill="#5a5a5a"/>
                <!-- Man bun -->
                <path d="M38 85 Q45 48 75 42 Q105 48 112 85" fill="#3a3a3a"/>
                <circle cx="75" cy="42" r="14" fill="#3a3a3a"/>
                <!-- Serene closed eyes -->
                <path d="M52 95 Q60 102 68 95" fill="none" stroke="#333" stroke-width="2"/>
                <path d="M82 95 Q90 102 98 95" fill="none" stroke="#333" stroke-width="2"/>
                <!-- Calm knowing smile -->
                <path d="M58 118 Q75 126 92 118" fill="none" stroke="#444" stroke-width="1.2"/>
                <!-- Light beard -->
                <path d="M45 112 Q52 130 75 135 Q98 130 105 112" fill="none" stroke="#4a4a4a" stroke-width="1"/>
            </g>
            <rect width="300" height="300" fill="url(#ca-shadow5)" opacity="0.4"/>
        </svg>`,

        // Dana - ex-girlfriend, tired, unimpressed
        dana: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ca-shadow6" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="transparent"/>
                    <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
                </linearGradient>
            </defs>
            <rect width="300" height="300" fill="#0e0e0e"/>
            <!-- Apartment doorway background -->
            <rect x="80" y="0" width="140" height="300" fill="#161616"/>
            <rect x="78" y="0" width="4" height="300" fill="#333"/>
            <rect x="218" y="0" width="4" height="300" fill="#333"/>
            <!-- Light from inside -->
            <rect x="84" y="0" width="132" height="300" fill="#1a1a1a"/>
            <!-- Dana - leaning in doorway -->
            <g transform="translate(80, 45)">
                <!-- Oversized sweater -->
                <rect x="20" y="155" width="100" height="100" rx="8" fill="#333"/>
                <!-- Big sleeves -->
                <path d="M20 165 Q5 175 8 210" fill="none" stroke="#333" stroke-width="14" stroke-linecap="round"/>
                <path d="M120" fill="none" stroke="#333" stroke-width="14" stroke-linecap="round"/>
                <!-- Neck -->
                <rect x="52" y="132" width="36" height="26" fill="#5a5a5a"/>
                <!-- Head -->
                <circle cx="70" cy="100" r="40" fill="#5e5e5e"/>
                <!-- Long hair framing face -->
                <path d="M32 82 Q38 45 70 38 Q102 45 108 82" fill="#2a2a2a"/>
                <path d="M32 82 Q28 120 32 160" fill="#2a2a2a" stroke="#2a2a2a" stroke-width="8"/>
                <path d="M108 82 Q112 120 108 160" fill="#2a2a2a" stroke="#2a2a2a" stroke-width="8"/>
                <!-- Half-lidded tired eyes -->
                <line x1="52" y1="95" x2="65" y2="95" stroke="#333" stroke-width="2.5"/>
                <line x1="75" y1="95" x2="88" y2="95" stroke="#333" stroke-width="2.5"/>
                <circle cx="58" cy="97" r="2" fill="#333"/>
                <circle cx="82" cy="97" r="2" fill="#333"/>
                <!-- Under-eye circles -->
                <path d="M50 101 Q58 105 66 101" fill="none" stroke="#4a4a4a" stroke-width="1"/>
                <path d="M74 101 Q82 105 90 101" fill="none" stroke="#4a4a4a" stroke-width="1"/>
                <!-- Flat unimpressed mouth -->
                <line x1="60" y1="116" x2="80" y2="116" stroke="#444" stroke-width="1.2"/>
                <!-- Coffee mug in hand -->
                <rect x="8" y="200" width="18" height="22" rx="2" fill="#444" stroke="#555" stroke-width="1"/>
                <path d="M26 205 Q32 208 32 215 Q32 220 26 222" fill="none" stroke="#555" stroke-width="1.5"/>
            </g>
            <rect width="300" height="300" fill="url(#ca-shadow6)" opacity="0.4"/>
        </svg>`,

        // Vinnie - boss, eating hot dog, cheap suit
        vinnie: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ca-shadow7" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="transparent"/>
                    <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
                </linearGradient>
                <pattern id="ca-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="6" stroke="#555" stroke-width="0.3"/>
                </pattern>
            </defs>
            <rect width="300" height="300" fill="#0e0e0e"/>
            <!-- Street background -->
            <rect x="0" y="220" width="300" height="80" fill="#1a1a1a"/>
            <!-- Fire escape lines -->
            <g opacity="0.15" stroke="#444" stroke-width="1.5">
                <line x1="20" y1="30" x2="20" y2="300"/>
                <line x1="60" y1="30" x2="60" y2="300"/>
                <line x1="20" y1="80" x2="60" y2="80"/>
                <line x1="20" y1="140" x2="60" y2="140"/>
                <line x1="20" y1="200" x2="60" y2="200"/>
            </g>
            <!-- Vinnie -->
            <g transform="translate(70, 35)">
                <!-- Cheap suit -->
                <rect x="25" y="155" width="100" height="110" rx="3" fill="#2a2a2a"/>
                <!-- Open collar -->
                <path d="M55 155 L75 180 L95 155" fill="#3a3a3a"/>
                <!-- Gold chain -->
                <path d="M58 164 Q75 172 92 164" fill="none" stroke="#666" stroke-width="1.5"/>
                <!-- Neck thick -->
                <rect x="52" y="128" width="46" height="30" fill="#555"/>
                <!-- Head -->
                <circle cx="75" cy="95" r="42" fill="#585858"/>
                <!-- Slicked back hair -->
                <path d="M35 82 Q42 42 75 35 Q108 42 115 82" fill="#222"/>
                <!-- Beady eyes -->
                <circle cx="60" cy="92" r="4" fill="#222"/>
                <circle cx="90" cy="92" r="4" fill="#222"/>
                <circle cx="61" cy="91" r="1.5" fill="#555"/>
                <circle cx="91" cy="91" r="1.5" fill="#555"/>
                <!-- Heavy eyebrows -->
                <line x1="50" y1="82" x2="68" y2="86" stroke="#333" stroke-width="3"/>
                <line x1="82" y1="86" x2="100" y2="82" stroke="#333" stroke-width="3"/>
                <!-- 5 o'clock shadow -->
                <path d="M45 102 Q55 130 75 135 Q95 130 105 102" fill="url(#ca-hatch)" opacity="0.2"/>
                <!-- Eating - open mouth with hot dog -->
                <ellipse cx="75" cy="112" rx="10" ry="7" fill="#3a3a3a"/>
                <!-- Hot dog -->
                <rect x="80" y="108" width="45" height="8" rx="4" fill="#444"/>
                <rect x="85" y="106" width="35" height="12" rx="3" fill="#555" opacity="0.5"/>
            </g>
            <rect width="300" height="300" fill="url(#ca-shadow7)" opacity="0.4"/>
        </svg>`,

        // Gorilla - the suspect in scene
        gorilla: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ca-shadow8" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="transparent"/>
                    <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
                </linearGradient>
            </defs>
            <rect width="300" height="300" fill="#080808"/>
            <!-- Dark room -->
            <rect x="100" y="0" width="100" height="300" fill="#0e0e0e" opacity="0.3"/>
            <!-- Gorilla - menacing, center frame -->
            <g transform="translate(70, 30)">
                <!-- Massive body -->
                <ellipse cx="80" cy="200" rx="70" ry="80" fill="#1e1e1e"/>
                <!-- Huge shoulders -->
                <ellipse cx="20" cy="170" rx="30" ry="50" fill="#1a1a1a" transform="rotate(-10, 20, 170)"/>
                <ellipse cx="140" cy="170" rx="30" ry="50" fill="#1a1a1a" transform="rotate(10, 140, 170)"/>
                <!-- Head -->
                <ellipse cx="80" cy="90" rx="45" ry="52" fill="#222"/>
                <!-- Heavy brow ridge -->
                <path d="M40 78 Q80 62 120 78" fill="#1a1a1a" stroke="#151515" stroke-width="1.5"/>
                <!-- Eyes - deep-set, intelligent -->
                <ellipse cx="62" cy="82" rx="8" ry="5.5" fill="#111"/>
                <ellipse cx="98" cy="82" rx="8" ry="5.5" fill="#111"/>
                <circle cx="64" cy="81" r="3" fill="#555"/>
                <circle cx="100" cy="81" r="3" fill="#555"/>
                <!-- Wide nose -->
                <ellipse cx="80" cy="100" rx="12" ry="8" fill="#1a1a1a"/>
                <circle cx="74" cy="100" r="3" fill="#111"/>
                <circle cx="86" cy="100" r="3" fill="#111"/>
                <!-- Mouth -->
                <path d="M65 115 Q80 122 95 115" fill="none" stroke="#111" stroke-width="1.5"/>

                <!-- === THE SEAM === -->
                <line x1="35" y1="135" x2="125" y2="135" stroke="#555" stroke-width="2.5" stroke-dasharray="4,3"/>
                <path d="M55 133 Q60 139 65 133" fill="none" stroke="#666" stroke-width="1"/>
                <path d="M95 133 Q100 139 105 133" fill="none" stroke="#666" stroke-width="1"/>
            </g>
            <rect width="300" height="300" fill="url(#ca-shadow8)" opacity="0.5"/>
        </svg>`,

        // You - the player detective, noir silhouette (for internal monologue)
        you: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ca-shadow9" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="transparent"/>
                    <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
                </linearGradient>
            </defs>
            <rect width="300" height="300" fill="#0a0a0a"/>
            <!-- Venetian blind light stripes -->
            <g opacity="0.08">
                <rect x="0" y="40" width="300" height="12" fill="#fff" transform="rotate(-5, 150, 46)"/>
                <rect x="0" y="80" width="300" height="12" fill="#fff" transform="rotate(-5, 150, 86)"/>
                <rect x="0" y="120" width="300" height="12" fill="#fff" transform="rotate(-5, 150, 126)"/>
                <rect x="0" y="160" width="300" height="12" fill="#fff" transform="rotate(-5, 150, 166)"/>
                <rect x="0" y="200" width="300" height="12" fill="#fff" transform="rotate(-5, 150, 206)"/>
            </g>
            <!-- Detective silhouette from behind / side -->
            <g transform="translate(80, 40)">
                <!-- Trenchcoat body -->
                <path d="M30 160 L20 280 L130 280 L120 160" fill="#181818"/>
                <!-- Shoulders -->
                <rect x="20" y="145" width="110" height="20" rx="5" fill="#1a1a1a"/>
                <!-- Collar turned up -->
                <path d="M35 145 L40 125 L55 140" fill="#1e1e1e"/>
                <path d="M115 145 L110 125 L95 140" fill="#1e1e1e"/>
                <!-- Neck -->
                <rect x="55" y="118" width="40" height="28" fill="#444"/>
                <!-- Head -->
                <circle cx="75" cy="90" r="38" fill="#4a4a4a"/>
                <!-- Fedora -->
                <ellipse cx="75" cy="58" rx="42" ry="10" fill="#2a2a2a"/>
                <path d="M38 58 Q45 35 75 28 Q105 35 112 58" fill="#2a2a2a"/>
                <line x1="33" y1="58" x2="117" y2="58" stroke="#333" stroke-width="2"/>
                <!-- Shadow across face - deep noir -->
                <rect x="37" y="58" width="76" height="20" fill="#333" opacity="0.6"/>
                <!-- Eyes barely visible in shadow -->
                <circle cx="60" cy="88" r="3" fill="#333"/>
                <circle cx="90" cy="88" r="3" fill="#333"/>
                <!-- Cigarette smoke hint -->
                <path d="M95 105 Q100 95 97 85 Q102 75 98 65" fill="none" stroke="#333" stroke-width="1" opacity="0.4"/>
            </g>
            <rect width="300" height="300" fill="url(#ca-shadow9)" opacity="0.4"/>
        </svg>`
    }
};

/* ============================================
   Character Portraits - shown in dialogue panel
   55x55px SVG portraits, greyscale noir style
   ============================================ */
const Portraits = {
    get(key) {
        // Normalize key - try direct match, then lowercase
        const normalized = key.toLowerCase().replace(/[^a-z_]/g, '');
        if (this._portraits[key]) return this._portraits[key];
        if (this._portraits[normalized]) return this._portraits[normalized];
        // Try partial match for speaker names
        for (const k of Object.keys(this._portraits)) {
            if (normalized.includes(k) || k.includes(normalized)) {
                return this._portraits[k];
            }
        }
        return null;
    },

    _portraits: {
        // You - the player detective, hardboiled
        you: `<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
            <rect width="55" height="55" fill="#1a1a1a"/>
            <!-- Head -->
            <circle cx="27" cy="28" r="14" fill="#555"/>
            <!-- Fedora -->
            <ellipse cx="27" cy="17" rx="16" ry="4" fill="#3a3a3a"/>
            <path d="M14 17 Q17 10 27 8 Q37 10 40 17" fill="#3a3a3a"/>
            <line x1="11" y1="17" x2="43" y2="17" stroke="#444" stroke-width="1"/>
            <!-- Shadow across face - noir style -->
            <rect x="13" y="17" width="28" height="8" fill="#444" opacity="0.4"/>
            <!-- Eyes in shadow -->
            <circle cx="22" cy="26" r="1.5" fill="#333"/>
            <circle cx="32" cy="26" r="1.5" fill="#333"/>
            <!-- Jaw -->
            <path d="M18 34 Q27 40 36 34" fill="#4a4a4a"/>
            <!-- Collar -->
            <path d="M18 42 L22 38 L27 42 L32 38 L36 42" fill="#333" stroke="#444" stroke-width="0.5"/>
            <rect x="15" y="42" width="25" height="13" fill="#333"/>
        </svg>`,

        // Rick - your idiot partner, friendly face, bad tie
        rick: `<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
            <rect width="55" height="55" fill="#1a1a1a"/>
            <!-- Head - rounder, friendlier -->
            <circle cx="27" cy="26" r="14" fill="#5a5a5a"/>
            <!-- Messy hair -->
            <path d="M14 20 Q16 10 22 9 Q27 7 32 9 Q38 10 40 20" fill="#444"/>
            <path d="M16 18 Q18 14 20 18" fill="#444"/>
            <path d="M35 16 Q37 12 39 16" fill="#444"/>
            <!-- Wide goofy eyes -->
            <circle cx="21" cy="24" r="3" fill="#eee"/>
            <circle cx="33" cy="24" r="3" fill="#eee"/>
            <circle cx="22" cy="24" r="1.5" fill="#222"/>
            <circle cx="34" cy="24" r="1.5" fill="#222"/>
            <!-- Raised eyebrows -->
            <path d="M17 20 Q21 17 25 20" fill="none" stroke="#444" stroke-width="0.7"/>
            <path d="M29 20 Q33 17 37 20" fill="none" stroke="#444" stroke-width="0.7"/>
            <!-- Dumb grin -->
            <path d="M20 32 Q27 38 34 32" fill="#444" stroke="#333" stroke-width="0.5"/>
            <!-- Cheap suit + bad tie -->
            <rect x="16" y="40" width="23" height="15" fill="#3a3a3a"/>
            <path d="M24 40 L27 48 L30 40" fill="#555"/>
            <line x1="27" y1="48" x2="27" y2="55" stroke="#555" stroke-width="2"/>
        </svg>`,

        // Beat Cop Murphy - uniformed, mustache
        cop: `<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
            <rect width="55" height="55" fill="#1a1a1a"/>
            <!-- Head -->
            <circle cx="27" cy="28" r="13" fill="#555"/>
            <!-- Police cap -->
            <rect x="14" y="14" width="26" height="8" rx="2" fill="#333"/>
            <rect x="12" y="21" width="30" height="3" fill="#3a3a3a"/>
            <!-- Badge on cap -->
            <circle cx="27" cy="18" r="2.5" fill="#666"/>
            <!-- Eyes -->
            <circle cx="22" cy="27" r="1.5" fill="#333"/>
            <circle cx="32" cy="27" r="1.5" fill="#333"/>
            <!-- Thick mustache -->
            <path d="M20 32 Q24 35 27 33 Q30 35 34 32" fill="#3a3a3a"/>
            <!-- Mouth hidden by mustache -->
            <!-- Uniform collar -->
            <rect x="16" y="41" width="22" height="14" fill="#2a2a2a"/>
            <!-- Badge -->
            <polygon points="27,43 29,46 32,47 30,49 31,52 27,50 23,52 24,49 22,47 25,46" fill="#666" stroke="#777" stroke-width="0.3"/>
        </svg>`,

        // Professor Marsh - glasses, thin hair, academic
        marsh: `<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
            <rect width="55" height="55" fill="#1a1a1a"/>
            <!-- Head -->
            <circle cx="27" cy="27" r="13" fill="#555"/>
            <!-- Thin receding hair -->
            <path d="M16 22 Q18 12 27 10 Q36 12 38 22" fill="#444"/>
            <path d="M20 20 Q22 14 27 13" fill="#555"/>
            <!-- Round glasses -->
            <circle cx="21" cy="25" r="5" fill="none" stroke="#888" stroke-width="1.2"/>
            <circle cx="33" cy="25" r="5" fill="none" stroke="#888" stroke-width="1.2"/>
            <line x1="26" y1="25" x2="28" y2="25" stroke="#888" stroke-width="1"/>
            <line x1="16" y1="24" x2="13" y2="22" stroke="#888" stroke-width="0.7"/>
            <line x1="38" y1="24" x2="41" y2="22" stroke="#888" stroke-width="0.7"/>
            <!-- Eyes behind glasses -->
            <circle cx="21" cy="25" r="1.5" fill="#333"/>
            <circle cx="33" cy="25" r="1.5" fill="#333"/>
            <!-- Thin lips, knowing expression -->
            <path d="M23 33 Q27 35 31 33" fill="none" stroke="#444" stroke-width="0.7"/>
            <!-- Bow tie + cardigan -->
            <path d="M24 40 L27 42 L30 40 L27 44 Z" fill="#555"/>
            <rect x="16" y="42" width="22" height="13" fill="#3a3a3a"/>
            <line x1="27" y1="42" x2="27" y2="55" stroke="#333" stroke-width="0.5"/>
        </svg>`,

        // Officer Chen - tech lab, headset
        chen: `<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
            <rect width="55" height="55" fill="#1a1a1a"/>
            <!-- Head -->
            <circle cx="27" cy="27" r="13" fill="#555"/>
            <!-- Hair pulled back -->
            <path d="M14 24 Q16 12 27 10 Q38 12 40 24" fill="#333"/>
            <path d="M38 22 Q40 18 42 25 Q40 28 38 24" fill="#333"/>
            <!-- Eyes - focused -->
            <line x1="20" y1="25" x2="25" y2="25" stroke="#333" stroke-width="1.5"/>
            <line x1="29" y1="25" x2="34" y2="25" stroke="#333" stroke-width="1.5"/>
            <circle cx="22" cy="25" r="1" fill="#222"/>
            <circle cx="32" cy="25" r="1" fill="#222"/>
            <!-- Slight frown - concentrating -->
            <line x1="24" y1="33" x2="30" y2="33" stroke="#444" stroke-width="0.7"/>
            <!-- Headset -->
            <path d="M14 22 Q12 15 14 10 Q20 4 27 4 Q34 4 40 10 Q42 15 40 22" fill="none" stroke="#666" stroke-width="1.5"/>
            <rect x="11" y="20" width="5" height="8" rx="1" fill="#555"/>
            <!-- Headset mic -->
            <path d="M13 28 Q15 32 20 33" fill="none" stroke="#666" stroke-width="1"/>
            <!-- Uniform -->
            <rect x="16" y="40" width="22" height="15" fill="#2a2a2a"/>
        </svg>`,

        // Wilder - man bun, zen expression
        wilder: `<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
            <rect width="55" height="55" fill="#1a1a1a"/>
            <!-- Head -->
            <circle cx="27" cy="28" r="13" fill="#555"/>
            <!-- Man bun -->
            <path d="M16 22 Q18 12 27 10 Q36 12 38 22" fill="#444"/>
            <circle cx="27" cy="10" r="5" fill="#444"/>
            <!-- Serene closed eyes -->
            <path d="M19 26 Q22 28 25 26" fill="none" stroke="#333" stroke-width="1"/>
            <path d="M29 26 Q32 28 35 26" fill="none" stroke="#333" stroke-width="1"/>
            <!-- Calm smile -->
            <path d="M22 33 Q27 36 32 33" fill="none" stroke="#444" stroke-width="0.7"/>
            <!-- Slight beard -->
            <path d="M18 32 Q20 38 27 40 Q34 38 36 32" fill="none" stroke="#4a4a4a" stroke-width="0.5"/>
            <!-- Tank top / athletic wear -->
            <path d="M18 41 Q20 38 27 37 Q34 38 36 41" fill="#3a3a3a"/>
            <rect x="19" y="41" width="16" height="14" fill="#3a3a3a"/>
            <!-- Exposed shoulders -->
            <circle cx="16" cy="44" r="4" fill="#555"/>
            <circle cx="38" cy="44" r="4" fill="#555"/>
        </svg>`,

        // Dana - tired, hair down, unimpressed
        dana: `<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
            <rect width="55" height="55" fill="#1a1a1a"/>
            <!-- Head -->
            <circle cx="27" cy="26" r="13" fill="#5a5a5a"/>
            <!-- Long hair -->
            <path d="M14 22 Q16 10 27 8 Q38 10 40 22" fill="#333"/>
            <path d="M14 22 Q12 32 14 42" fill="#333" stroke="#333" stroke-width="3"/>
            <path d="M40 22 Q42 32 40 42" fill="#333" stroke="#333" stroke-width="3"/>
            <!-- Tired eyes - half-lidded -->
            <line x1="20" y1="24" x2="25" y2="24" stroke="#333" stroke-width="1.2"/>
            <line x1="29" y1="24" x2="34" y2="24" stroke="#333" stroke-width="1.2"/>
            <circle cx="22" cy="25" r="1" fill="#333"/>
            <circle cx="32" cy="25" r="1" fill="#333"/>
            <!-- Under-eye circles -->
            <path d="M19 27 Q22 28 25 27" fill="none" stroke="#4a4a4a" stroke-width="0.5"/>
            <path d="M29 27 Q32 28 35 27" fill="none" stroke="#4a4a4a" stroke-width="0.5"/>
            <!-- Unimpressed flat mouth -->
            <line x1="24" y1="32" x2="30" y2="32" stroke="#444" stroke-width="0.7"/>
            <!-- Oversized sweater -->
            <rect x="13" y="39" width="28" height="16" rx="3" fill="#3a3a3a"/>
            <path d="M13 42 Q10 45 11 50" fill="none" stroke="#3a3a3a" stroke-width="5"/>
            <path d="M41 42 Q44 45 43 50" fill="none" stroke="#3a3a3a" stroke-width="5"/>
        </svg>`,

        // Vinnie - slicked hair, cheap suit, eating
        vinnie: `<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="p-crosshatch-light" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="6" stroke="#555" stroke-width="0.3"/>
                </pattern>
            </defs>
            <rect width="55" height="55" fill="#1a1a1a"/>
            <!-- Head -->
            <circle cx="27" cy="27" r="13" fill="#555"/>
            <!-- Slicked back hair -->
            <path d="M14 24 Q16 12 27 10 Q38 12 40 24" fill="#2a2a2a"/>
            <!-- Beady eyes -->
            <circle cx="22" cy="26" r="1.5" fill="#222"/>
            <circle cx="32" cy="26" r="1.5" fill="#222"/>
            <!-- Heavy eyebrows -->
            <line x1="18" y1="22" x2="25" y2="23" stroke="#333" stroke-width="1.5"/>
            <line x1="29" y1="23" x2="36" y2="22" stroke="#333" stroke-width="1.5"/>
            <!-- Eating - open mouth -->
            <ellipse cx="27" cy="33" rx="4" ry="3" fill="#444"/>
            <!-- 5 o'clock shadow -->
            <path d="M17 30 Q20 38 27 40 Q34 38 37 30" fill="url(#p-crosshatch-light)" opacity="0.2"/>
            <!-- Cheap suit + open collar -->
            <rect x="15" y="40" width="24" height="15" fill="#2a2a2a"/>
            <path d="M22 40 L27 46 L32 40" fill="#333"/>
            <!-- Gold chain hint -->
            <path d="M22 42 Q27 45 32 42" fill="none" stroke="#666" stroke-width="0.5"/>
        </svg>`,

        // Gorilla - the suspect (with seam)
        gorilla: `<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
            <rect width="55" height="55" fill="#0a0a0a"/>
            <!-- Head -->
            <ellipse cx="27" cy="22" rx="16" ry="18" fill="#2a2a2a"/>
            <!-- Brow ridge -->
            <path d="M13 18 Q27 10 41 18" fill="#222" stroke="#1a1a1a" stroke-width="0.7"/>
            <!-- Eyes -->
            <ellipse cx="21" cy="21" rx="3.5" ry="2.5" fill="#1a1a1a"/>
            <ellipse cx="33" cy="21" rx="3.5" ry="2.5" fill="#1a1a1a"/>
            <circle cx="22" cy="20.5" r="1.2" fill="#555"/>
            <circle cx="34" cy="20.5" r="1.2" fill="#555"/>
            <!-- Nose -->
            <ellipse cx="27" cy="28" rx="5" ry="3.5" fill="#1e1e1e"/>
            <circle cx="24" cy="28" r="1.2" fill="#111"/>
            <circle cx="30" cy="28" r="1.2" fill="#111"/>
            <!-- Mouth -->
            <path d="M22 33 Q27 36 32 33" fill="none" stroke="#111" stroke-width="0.7"/>
            <!-- === THE SEAM === -->
            <line x1="12" y1="38" x2="42" y2="38" stroke="#555" stroke-width="1.5" stroke-dasharray="2,1.5"/>
            <path d="M20 37 Q22 40 24 37" fill="none" stroke="#666" stroke-width="0.5"/>
            <path d="M30 37 Q32 40 34 37" fill="none" stroke="#666" stroke-width="0.5"/>
            <!-- Body -->
            <ellipse cx="27" cy="50" rx="18" ry="12" fill="#252525"/>
        </svg>`,

        // Gary - the man under the gorilla mask
        gary: `<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="p-crosshatch-light2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="6" stroke="#555" stroke-width="0.3"/>
                </pattern>
            </defs>
            <rect width="55" height="55" fill="#0a0a0a"/>
            <!-- Head -->
            <circle cx="27" cy="25" r="14" fill="#555"/>
            <!-- Short hair -->
            <path d="M14 20 Q18 10 27 8 Q36 10 40 20" fill="#3a3a3a"/>
            <!-- Eyes - smug -->
            <circle cx="22" cy="24" r="1.5" fill="#333"/>
            <circle cx="32" cy="24" r="1.5" fill="#333"/>
            <!-- Smirk -->
            <path d="M22 31 Q27 35 32 30" fill="none" stroke="#444" stroke-width="1"/>
            <!-- Stubble -->
            <rect x="18" y="28" width="18" height="10" fill="url(#p-crosshatch-light2)" opacity="0.15"/>
            <!-- Gorilla suit visible at neck -->
            <rect x="14" y="38" width="26" height="17" fill="#2a2a2a"/>
            <!-- Suit fur texture -->
            <g stroke="#333" stroke-width="0.5">
                <line x1="18" y1="42" x2="18" y2="46"/>
                <line x1="22" y1="41" x2="22" y2="45"/>
                <line x1="27" y1="40" x2="27" y2="44"/>
                <line x1="32" y1="41" x2="32" y2="45"/>
                <line x1="36" y1="42" x2="36" y2="46"/>
            </g>
        </svg>`,

        // Real gorilla - no seam, menacing
        gorilla_real: `<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
            <rect width="55" height="55" fill="#080808"/>
            <!-- Head - larger, more detailed -->
            <ellipse cx="27" cy="22" rx="17" ry="19" fill="#1e1e1e"/>
            <!-- Heavy brow -->
            <path d="M11 17 Q27 8 43 17" fill="#1a1a1a" stroke="#111" stroke-width="1"/>
            <!-- Intense eyes -->
            <ellipse cx="20" cy="20" rx="4" ry="3" fill="#111"/>
            <ellipse cx="34" cy="20" rx="4" ry="3" fill="#111"/>
            <circle cx="21" cy="19.5" r="1.5" fill="#666"/>
            <circle cx="35" cy="19.5" r="1.5" fill="#666"/>
            <!-- Wide nose -->
            <ellipse cx="27" cy="28" rx="6" ry="4" fill="#161616"/>
            <circle cx="24" cy="28" r="1.5" fill="#0e0e0e"/>
            <circle cx="30" cy="28" r="1.5" fill="#0e0e0e"/>
            <!-- Snarling mouth -->
            <path d="M20 33 Q27 38 34 33" fill="#111" stroke="#0e0e0e" stroke-width="0.7"/>
            <line x1="24" y1="33" x2="24" y2="35" stroke="#555" stroke-width="0.7"/>
            <line x1="27" y1="34" x2="27" y2="37" stroke="#555" stroke-width="0.7"/>
            <line x1="30" y1="33" x2="30" y2="35" stroke="#555" stroke-width="0.7"/>
            <!-- NO SEAM - real gorilla -->
            <!-- Massive shoulders -->
            <ellipse cx="27" cy="48" rx="22" ry="14" fill="#1a1a1a"/>
        </svg>`,

        // Scene description - magnifying glass
        scene: `<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
            <rect width="55" height="55" fill="#1a1a1a"/>
            <!-- Magnifying glass -->
            <circle cx="24" cy="22" r="12" fill="none" stroke="#666" stroke-width="2"/>
            <circle cx="24" cy="22" r="9" fill="#1a1a1a"/>
            <line x1="33" y1="31" x2="44" y2="44" stroke="#666" stroke-width="3" stroke-linecap="round"/>
            <!-- Eye icon inside glass -->
            <ellipse cx="24" cy="22" rx="5" ry="3" fill="none" stroke="#444" stroke-width="1"/>
            <circle cx="24" cy="22" r="1.5" fill="#444"/>
        </svg>`
    }
};
