
// ─── SVG SYMBOLS ──────────────────────────────────────────────────
const svgSymbols = {
  resistor: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="100" x2="50" y2="100" stroke="#f0a500" stroke-width="3"/>
    <rect x="50" y="80" width="100" height="40" rx="4" stroke="#f0a500" stroke-width="3" fill="rgba(240,165,0,0.1)"/>
    <line x1="150" y1="100" x2="180" y2="100" stroke="#f0a500" stroke-width="3"/>
    <text x="100" y="155" text-anchor="middle" fill="#6b7280" font-size="13" font-family="DM Mono"></text>
    <circle cx="20" cy="100" r="4" fill="#f0a500"/>
    <circle cx="180" cy="100" r="4" fill="#f0a500"/>
  </svg>`,

  capacitor: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="100" x2="90" y2="100" stroke="#00d4aa" stroke-width="3"/>
    <line x1="90" y1="65" x2="90" y2="135" stroke="#00d4aa" stroke-width="5"/>
    <line x1="110" y1="65" x2="110" y2="135" stroke="#00d4aa" stroke-width="5"/>
    <line x1="110" y1="100" x2="180" y2="100" stroke="#00d4aa" stroke-width="3"/>
    <text x="100" y="160" text-anchor="middle" fill="#6b7280" font-size="13" font-family="DM Mono"></text>
    <circle cx="20" cy="100" r="4" fill="#00d4aa"/>
    <circle cx="180" cy="100" r="4" fill="#00d4aa"/>
  </svg>`,

  inductor: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="100" x2="45" y2="100" stroke="#a78bfa" stroke-width="3"/>
    <path d="M45 100 Q55 70 65 100 Q75 70 85 100 Q95 70 105 100 Q115 70 125 100 Q135 70 145 100 Q155 70 165 100" stroke="#a78bfa" stroke-width="3" fill="none"/>
    <line x1="165" y1="100" x2="180" y2="100" stroke="#a78bfa" stroke-width="3"/>
    <text x="100" y="155" text-anchor="middle" fill="#6b7280" font-size="13" font-family="DM Mono">L (H)</text>
    <circle cx="20" cy="100" r="4" fill="#a78bfa"/>
    <circle cx="180" cy="100" r="4" fill="#a78bfa"/>
  </svg>`,

  diode: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="100" x2="70" y2="100" stroke="#f0a500" stroke-width="3"/>
    <polygon points="70,75 70,125 120,100" stroke="#f0a500" stroke-width="3" fill="rgba(240,165,0,0.2)"/>
    <line x1="120" y1="75" x2="120" y2="125" stroke="#f0a500" stroke-width="4"/>
    <line x1="120" y1="100" x2="180" y2="100" stroke="#f0a500" stroke-width="3"/>
    <text x="100" y="155" text-anchor="middle" fill="#6b7280" font-size="12" font-family="DM Mono">Anode → Cathode</text>
    <circle cx="20" cy="100" r="4" fill="#f0a500"/>
    <circle cx="180" cy="100" r="4" fill="#f0a500"/>
    <text x="62" y="145" fill="#6b7280" font-size="10" font-family="DM Mono">A</text>
    <text x="118" y="145" fill="#6b7280" font-size="10" font-family="DM Mono">K</text>
  </svg>`,

  transistorNPN: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="110" cy="100" r="55" stroke="#f0a500" stroke-width="3" fill="rgba(240,165,0,0.05)"/>
    <line x1="20" y1="100" x2="85" y2="100" stroke="#f0a500" stroke-width="3"/>
    <line x1="85" y1="65" x2="85" y2="135" stroke="#f0a500" stroke-width="4"/>
    <line x1="85" y1="80" x2="140" y2="55" stroke="#f0a500" stroke-width="3"/>
    <line x1="85" y1="120" x2="140" y2="145" stroke="#f0a500" stroke-width="3"/>
    <polygon points="128,60 140,55 135,67" fill="#f0a500"/>
    <line x1="140" y1="55" x2="160" y2="40" stroke="#f0a500" stroke-width="3"/>
    <line x1="140" y1="145" x2="160" y2="160" stroke="#f0a500" stroke-width="3"/>
    <text x="22" y="94" fill="#6b7280" font-size="11" font-family="DM Mono">B</text>
    <text x="160" y="38" fill="#6b7280" font-size="11" font-family="DM Mono">C</text>
    <text x="160" y="175" fill="#6b7280" font-size="11" font-family="DM Mono">E</text>
    <text x="100" y="185" text-anchor="middle" fill="#6b7280" font-size="11" font-family="DM Mono">NPN BJT</text>
  </svg>`,

  opamp: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="40,50 40,150 160,100" stroke="#00d4aa" stroke-width="3" fill="rgba(0,212,170,0.08)"/>
    <line x1="10" y1="75" x2="40" y2="75" stroke="#00d4aa" stroke-width="3"/>
    <line x1="10" y1="125" x2="40" y2="125" stroke="#00d4aa" stroke-width="3"/>
    <line x1="160" y1="100" x2="190" y2="100" stroke="#00d4aa" stroke-width="3"/>
    <text x="52" y="82" fill="#e8eaf0" font-size="14" font-family="DM Mono">-</text>
    <text x="52" y="130" fill="#e8eaf0" font-size="14" font-family="DM Mono">+</text>
    <text x="100" y="185" text-anchor="middle" fill="#6b7280" font-size="11" font-family="DM Mono">Op-Amp</text>
  </svg>`,

  led: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="100" x2="70" y2="100" stroke="#e05a5a" stroke-width="3"/>
    <polygon points="70,75 70,125 120,100" stroke="#e05a5a" stroke-width="3" fill="rgba(224,90,90,0.3)"/>
    <line x1="120" y1="75" x2="120" y2="125" stroke="#e05a5a" stroke-width="4"/>
    <line x1="120" y1="100" x2="180" y2="100" stroke="#e05a5a" stroke-width="3"/>
    <line x1="125" y1="60" x2="145" y2="40" stroke="#f0a500" stroke-width="2" stroke-dasharray="3,2"/>
    <line x1="130" y1="68" x2="153" y2="53" stroke="#f0a500" stroke-width="2" stroke-dasharray="3,2"/>
    <circle cx="148" cy="37" r="3" fill="#f0a500"/>
    <circle cx="156" cy="50" r="3" fill="#f0a500"/>
    <text x="100" y="160" text-anchor="middle" fill="#6b7280" font-size="11" font-family="DM Mono">LED</text>
  </svg>`,

  mosfet: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="110" cy="100" r="55" stroke="#a78bfa" stroke-width="3" fill="rgba(167,139,250,0.05)"/>
    <line x1="20" y1="100" x2="70" y2="100" stroke="#a78bfa" stroke-width="3"/>
    <line x1="70" y1="60" x2="70" y2="140" stroke="#a78bfa" stroke-width="4"/>
    <line x1="78" y1="70" x2="78" y2="90" stroke="#a78bfa" stroke-width="4"/>
    <line x1="78" y1="110" x2="78" y2="130" stroke="#a78bfa" stroke-width="4"/>
    <line x1="78" y1="80" x2="120" y2="80" stroke="#a78bfa" stroke-width="3"/>
    <line x1="78" y1="120" x2="120" y2="120" stroke="#a78bfa" stroke-width="3"/>
    <line x1="120" y1="80" x2="120" y2="60" stroke="#a78bfa" stroke-width="3"/>
    <line x1="120" y1="120" x2="120" y2="140" stroke="#a78bfa" stroke-width="3"/>
    <line x1="120" y1="60" x2="160" y2="40" stroke="#a78bfa" stroke-width="3"/>
    <line x1="120" y1="140" x2="160" y2="160" stroke="#a78bfa" stroke-width="3"/>
    <text x="22" y="94" fill="#6b7280" font-size="10" font-family="DM Mono">G</text>
    <text x="162" y="38" fill="#6b7280" font-size="10" font-family="DM Mono">D</text>
    <text x="162" y="175" fill="#6b7280" font-size="10" font-family="DM Mono">S</text>
  </svg>`,

  transformer: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="75" x2="40" y2="75" stroke="#f0a500" stroke-width="3"/>
    <line x1="10" y1="125" x2="40" y2="125" stroke="#f0a500" stroke-width="3"/>
    <path d="M40 75 Q50 55 60 75 Q70 55 80 75 Q90 55 100 75" stroke="#f0a500" stroke-width="3" fill="none"/>
    <path d="M40 125 Q50 105 60 125 Q70 105 80 125 Q90 105 100 125" stroke="#f0a500" stroke-width="3" fill="none"/>
    <line x1="100" y1="50" x2="100" y2="150" stroke="#6b7280" stroke-width="2" stroke-dasharray="5,3"/>
    <path d="M100 75 Q110 55 120 75 Q130 55 140 75 Q150 55 160 75" stroke="#00d4aa" stroke-width="3" fill="none"/>
    <path d="M100 125 Q110 105 120 125 Q130 105 140 125 Q150 105 160 125" stroke="#00d4aa" stroke-width="3" fill="none"/>
    <line x1="160" y1="75" x2="190" y2="75" stroke="#00d4aa" stroke-width="3"/>
    <line x1="160" y1="125" x2="190" y2="125" stroke="#00d4aa" stroke-width="3"/>
    <text x="100" y="175" text-anchor="middle" fill="#6b7280" font-size="10" font-family="DM Mono">Transformer</text>
  </svg>`,

  zener: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="100" x2="70" y2="100" stroke="#38bdf8" stroke-width="3"/>
    <polygon points="70,75 70,125 120,100" stroke="#38bdf8" stroke-width="3" fill="rgba(56,189,248,0.2)"/>
    <path d="M110 75 L120 75 L120 125 L130 125" stroke="#38bdf8" stroke-width="4" fill="none"/>
    <line x1="120" y1="100" x2="180" y2="100" stroke="#38bdf8" stroke-width="3"/>
    <text x="100" y="160" text-anchor="middle" fill="#6b7280" font-size="11" font-family="DM Mono">Zener Diode</text>
  </svg>`,

  scr: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="100" x2="70" y2="100" stroke="#e05a5a" stroke-width="3"/>
    <polygon points="70,75 70,125 120,100" stroke="#e05a5a" stroke-width="3" fill="rgba(224,90,90,0.2)"/>
    <line x1="120" y1="75" x2="120" y2="125" stroke="#e05a5a" stroke-width="4"/>
    <line x1="120" y1="100" x2="180" y2="100" stroke="#e05a5a" stroke-width="3"/>
    <line x1="95" y1="115" x2="95" y2="145" stroke="#e05a5a" stroke-width="3"/>
    <line x1="95" y1="145" x2="60" y2="145" stroke="#e05a5a" stroke-width="3"/>
    <text x="55" y="165" fill="#6b7280" font-size="10" font-family="DM Mono">Gate</text>
    <text x="100" y="175" text-anchor="middle" fill="#6b7280" font-size="10" font-family="DM Mono">SCR / Thyristor</text>
  </svg>`,

  photoresistor: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="100" x2="50" y2="100" stroke="#38bdf8" stroke-width="3"/>
    <rect x="50" y="80" width="100" height="40" rx="4" stroke="#38bdf8" stroke-width="3" fill="rgba(56,189,248,0.1)"/>
    <line x1="150" y1="100" x2="180" y2="100" stroke="#38bdf8" stroke-width="3"/>
    <line x1="80" y1="55" x2="95" y2="35" stroke="#f0a500" stroke-width="2" stroke-dasharray="3,2"/>
    <line x1="100" y1="50" x2="115" y2="30" stroke="#f0a500" stroke-width="2" stroke-dasharray="3,2"/>
    <circle cx="97" cy="32" r="3" fill="#f0a500"/>
    <circle cx="117" cy="27" r="3" fill="#f0a500"/>
    <text x="100" y="160" text-anchor="middle" fill="#6b7280" font-size="10" font-family="DM Mono">LDR / Photoresistor</text>
  </svg>`,
};

// ─── COMPONENT DATA ───────────────────────────────────────────────
const components = [
  {
    id: 'resistor', name: 'Resistor', category: 'passive',
    symbol: 'Symbol: Zig-zag line (ANSI) or rectangle (IEC) | Unit: Ohm (Ω)',
    desc: 'Limits or regulates the flow of electrical current in a circuit. The most fundamental passive component.',
    tags:['passive','ohm','linear'],
    specs:[
      {label:'Unit', value:'Ohm (Ω)'},
      {label:'Common Values', value:'1Ω - 10MΩ'},
      {label:'Power Rating', value:'¼W, ½W, 1W, 2W'},
      {label:'Tolerance', value:'±1%, ±5%, ±10%'},
    ],
    howItWorks:`A resistor opposes current flow by converting electrical energy into heat. It is made of a resistive material (carbon film, metal film, or wire-wound) between two terminals. According to Ohm's Law (V = IR), for a given voltage, a higher resistance means lower current flows. Resistors are non-polar — they work in both directions.`,
    advantages:['Simple, reliable, no moving parts','Available in a vast range of values','Very low cost','Works for both AC and DC','Stable over wide temperature ranges'],
    disadvantages:['Dissipates power as heat (inefficient for large currents)','Fixed value (unless variable/potentiometer)','Tolerance errors can affect precision circuits','Cannot amplify signals'],
    wiringDiagrams:[
      {
        title:'Series Resistors',
        difficulty:'easy',
        svgKey:'seriesR',
        steps:['Connect the positive terminal of the battery to the first resistor (R1).','Connect the other end of R1 to the first terminal of R2.','Connect the second terminal of R2 to the negative terminal of the battery.','Measure voltage across each — they share the voltage proportionally.','Total resistance: R_total = R1 + R2.']
      },
      {
        title:'Voltage Divider',
        difficulty:'easy',
        svgKey:'voltageDivider',
        steps:['Connect Vin across the series combination of R1 and R2.','Take Vout from the junction between R1 and R2 and GND.','Vout = Vin x R2 / (R1 + R2).','Used to scale down voltages, bias transistors, and sensor interfaces.']
      }
    ],
    formulas:[
      {label:"Ohm's Law", formula:"V = I x R", desc:"Voltage equals current times resistance."},
      {label:"Power Dissipated", formula:"P = I² x R = V²/R", desc:"Power converted to heat in a resistor."},
      {label:"Series Resistance", formula:"R_T = R1 + R2 + ... + Rn", desc:"Total resistance of resistors in series."},
      {label:"Parallel Resistance", formula:"1/R_T = 1/R1 + 1/R2 + ... + 1/Rn", desc:"Total resistance of resistors in parallel."},
      {label:"Voltage Divider", formula:"Vout = Vin x R2/(R1+R2)", desc:"Output voltage of a resistive divider."},
    ],
    applications:[
      {icon:'🔊',name:'Audio circuits'},
      {icon:'💡',name:'LED current limiting'},
      {icon:'🌡️',name:'Temperature sensing (NTC/PTC)'},
      {icon:'📶',name:'Signal conditioning'},
      {icon:'⚡',name:'Pull-up/pull-down'},
      {icon:'🔋',name:'Battery discharge'},
    ],
    applicationDesc:`Resistors appear in virtually every electronic circuit. Common uses include current limiting for LEDs, creating voltage dividers, biasing transistor bases, pull-up/pull-down on logic lines, and as feedback elements in op-amp circuits.`,
    quiz:[
      {q:'What is the total resistance of 10Ω and 40Ω in series?', opts:['50Ω','8Ω','400Ω','25Ω'], answer:0, explanation:'Series: R_total = 10 + 40 = 50Ω'},
      {q:'In a voltage divider with R1=1kΩ, R2=1kΩ and Vin=10V, what is Vout?', opts:['10V','2.5V','5V','7.5V'], answer:2, explanation:'Vout = 10 x 1000/(1000+1000) = 5V'},
      {q:'Which colour band on a resistor represents tolerance of ±5%?', opts:['Silver','Gold','Brown','Red'], answer:1, explanation:'Gold = ±5%, Silver = ±10%'},
    ]
  },

  {
    id: 'capacitor', name: 'Capacitor', category: 'passive',
    symbol: 'Symbol: Two parallel lines | Unit: Farad (F)',
    desc: 'Stores and releases electrical energy in an electric field. Used for filtering, timing, and energy storage.',
    tags:['passive','farad','storage'],
    specs:[
      {label:'Unit', value:'Farad (F)'},
      {label:'Common Values', value:'1pF - 10,000µF'},
      {label:'Types', value:'Ceramic, Electrolytic, Tantalum, Film'},
      {label:'Voltage Rating', value:'6.3V - 1000V+'},
    ],
    howItWorks:`A capacitor stores electric charge between two conductive plates separated by a dielectric (insulating) material. When voltage is applied, charge accumulates on the plates — one positive, one negative — creating an electric field. When the source is removed, the capacitor can release this stored charge back into the circuit. Electrolytic capacitors are polarised and must be connected the right way.`,
    advantages:['Can charge and discharge very quickly','Does not consume power in ideal state (no DC steady-state current)','Blocks DC while passing AC','Wide range of values and types','Long life if used within ratings'],
    disadvantages:['Electrolytic capacitors are polarised (can explode if reversed)','Limited energy storage compared to batteries','ESR and leakage in real capacitors','Can cause surge currents when charging','Value drifts with temperature and age'],
    wiringDiagrams:[
      {
        title:'Decoupling Capacitor on Power Rail',
        difficulty:'easy',
        svgKey:'decouplingCap',
        steps:['Place a 100nF ceramic capacitor between the VCC pin and GND pin of an IC.','Place the capacitor as close as possible to the IC power pins.','Also add a 10µF electrolytic in parallel for bulk decoupling.','This suppresses high-frequency noise and prevents supply voltage droops.']
      },
      {
        title:'RC Low-Pass Filter',
        difficulty:'medium',
        svgKey:'rcFilter',
        steps:['Connect a resistor (R) in series with the input signal.','Connect a capacitor from the junction of R and the output to GND.','The output is taken across the capacitor.','Cutoff frequency: f_c = 1 / (2π x R x C).','Frequencies above f_c are attenuated.']
      }
    ],
    formulas:[
      {label:"Capacitance", formula:"Q = C x V", desc:"Charge stored equals capacitance times voltage."},
      {label:"Energy Stored", formula:"E = ½ x C x V²", desc:"Energy stored in the electric field."},
      {label:"RC Time Constant", formula:"τ = R x C", desc:"Time to charge to ~63.2% of supply voltage."},
      {label:"Reactance", formula:"Xc = 1 / (2π x f x C)", desc:"Impedance of capacitor at frequency f."},
      {label:"Series Capacitance", formula:"1/C_T = 1/C1 + 1/C2", desc:"Capacitors in series decrease total capacitance."},
      {label:"Parallel Capacitance", formula:"C_T = C1 + C2 + ... + Cn", desc:"Capacitors in parallel add directly."},
    ],
    applications:[
      {icon:'🔇',name:'Noise filtering'},
      {icon:'⏱️',name:'Timing circuits'},
      {icon:'📡',name:'Tuning / RF'},
      {icon:'🔋',name:'Energy storage'},
      {icon:'🔊',name:'Audio coupling'},
      {icon:'💻',name:'Power supply filter'},
    ],
    applicationDesc:`Capacitors are used in power supply filters to smooth rectified voltage, in audio circuits for AC coupling, in timing circuits (555 timer), in RF tuning circuits, and as bypass capacitors on PCBs to stabilise power rails near ICs.`,
    quiz:[
      {q:'A 10µF capacitor is charged to 5V. What energy is stored?', opts:['125µJ','250µJ','50µJ','500µJ'], answer:0, explanation:'E = ½ x 10x10⁻⁶ x 5² = 125µJ'},
      {q:'Electrolytic capacitors must be connected with correct polarity — why?', opts:['They explode or fail if reversed','They just lose value','They change to inductors','No reason'], answer:0, explanation:'Reverse voltage breaks down the oxide layer, causing failure or explosion.'},
      {q:'What happens to capacitive reactance (Xc) as frequency increases?', opts:['Increases','Stays the same','Decreases','Doubles'], answer:2, explanation:'Xc = 1/(2πfC) — as f increases, Xc decreases (capacitor becomes a short at high freq).'},
    ]
  },

  {
    id: 'inductor', name: 'Inductor', category: 'passive',
    symbol: 'Symbol: Series of loops | Unit: Henry (H)',
    desc: 'Stores energy in a magnetic field when current flows through it. Opposes changes in current.',
    tags:['passive','henry','magnetic'],
    specs:[
      {label:'Unit', value:'Henry (H)'},
      {label:'Common Values', value:'1nH - 100H'},
      {label:'Types', value:'Air-core, Iron-core, Toroidal, SMD'},
      {label:'Q Factor', value:'Ratio of reactance to resistance'},
    ],
    howItWorks:`When current flows through a coil of wire, a magnetic field is created around it. Any change in the current causes a change in this magnetic field, which in turn induces a voltage that opposes the change (Lenz's Law). This property — inductance — makes inductors ideal for filtering, energy storage in switching supplies, and impedance in RF circuits.`,
    advantages:['Stores energy in a magnetic field (used in switching regulators)','Blocks high-frequency AC while passing DC','No power consumption in ideal inductor (only reactive power)','Essential in filter and resonant circuits','Can handle large currents (power inductors)'],
    disadvantages:['Physically larger and heavier than capacitors','Real inductors have DC resistance (DCR) causing losses','Can cause voltage spikes (back-EMF) when current is interrupted','More expensive than resistors/capacitors','Susceptible to electromagnetic interference'],
    wiringDiagrams:[
      {
        title:'RL Low-Pass Filter',
        difficulty:'medium',
        svgKey:'rlFilter',
        steps:['Connect inductor L in series with the signal path.','Connect resistor R from the output junction to GND.','Output is taken across R.','Cutoff: f_c = R / (2π x L).','Low frequencies pass; high frequencies are blocked by the inductor.']
      }
    ],
    formulas:[
      {label:"Induced EMF", formula:"V = L x (dI/dt)", desc:"Voltage induced is proportional to rate of change of current."},
      {label:"Energy Stored", formula:"E = ½ x L x I²", desc:"Energy stored in the magnetic field."},
      {label:"Inductive Reactance", formula:"XL = 2π x f x L", desc:"Impedance increases with frequency."},
      {label:"Time Constant", formula:"τ = L / R", desc:"Time for current to reach ~63.2% in an RL circuit."},
    ],
    applications:[
      {icon:'🔌',name:'Switching power supplies'},
      {icon:'📡',name:'RF/antenna circuits'},
      {icon:'🔇',name:'EMI filtering'},
      {icon:'⚡',name:'Motor drives'},
      {icon:'🎛️',name:'LC oscillators'},
      {icon:'🔋',name:'Buck/boost converters'},
    ],
    applicationDesc:`Inductors are found in switch-mode power supplies (buck, boost, flyback), LC oscillator tanks, RF matching networks, EMI suppression filters, and motor/relay snubber circuits to absorb back-EMF spikes.`,
    quiz:[
      {q:'What property does an inductor exploit to store energy?', opts:['Electric field','Magnetic field','Chemical reaction','Thermal energy'], answer:1, explanation:'Inductors store energy in the magnetic field around the coil.'},
      {q:'As frequency increases, inductive reactance XL...', opts:['Decreases','Stays constant','Increases','Becomes zero'], answer:2, explanation:'XL = 2πfL — XL increases linearly with frequency.'},
      {q:'What does back-EMF from an inductor do when current is suddenly interrupted?', opts:['Causes a voltage spike','Reduces current','Has no effect','Heats the wire'], answer:0, explanation:'Stored magnetic energy collapses, generating a high-voltage spike (can damage components).'},
    ]
  },

  {
    id: 'diode', name: 'Diode', category: 'active',
    symbol: 'Symbol: Triangle with bar | Unit: Voltage (V_f forward)',
    desc: 'A one-way valve for electrical current. Allows current in one direction only.',
    tags:['active','rectifier','semiconductor'],
    specs:[
      {label:'Forward Voltage', value:'~0.6V (Si), ~0.3V (Ge)'},
      {label:'Peak Inverse Voltage', value:'50V - 1000V+'},
      {label:'Types', value:'Rectifier, Schottky, Zener, LED'},
      {label:'Material', value:'Silicon, Germanium, SiC'},
    ],
    howItWorks:`A diode is formed by joining P-type and N-type semiconductors, creating a P-N junction. In forward bias (anode +, cathode -), the depletion region narrows and current flows after the forward voltage threshold (~0.6V for silicon). In reverse bias, the depletion region widens and (ideally) no current flows. This asymmetric behaviour makes diodes essential for rectification, protection, and signal detection.`,
    advantages:['Simple current direction control','Very fast switching (Schottky diodes switch in nanoseconds)','Low cost and widely available','No moving parts, highly reliable','Used in virtually every power supply'],
    disadvantages:['Forward voltage drop causes power loss','Limited power handling (heating)','Not bidirectional','Can fail if reverse voltage (PIV) is exceeded','Leakage current in reverse bias'],
    wiringDiagrams:[
      {
        title:'Half-Wave Rectifier',
        difficulty:'easy',
        svgKey:'halfWaveRect',
        steps:['Connect the AC source to the anode of the diode.','Connect the cathode of the diode to the load resistor (R_L).','Connect the other end of R_L to the AC source neutral/GND.','Only the positive half-cycle passes through the diode.','Add a filter capacitor in parallel with R_L to smooth the output.']
      },
      {
        title:'Full-Wave Bridge Rectifier',
        difficulty:'medium',
        svgKey:'bridgeRect',
        steps:['Arrange four diodes in a bridge (diamond) configuration.','Connect the AC input to the two side nodes of the bridge.','Connect the positive DC output from the top node.','Connect GND from the bottom node.','Both positive and negative half-cycles contribute to DC output.','Filter with a large electrolytic capacitor across the output.']
      }
    ],
    formulas:[
      {label:"Forward Voltage Drop (Si)", formula:"V_f ≈ 0.6V - 0.7V", desc:"Approximate forward bias threshold for silicon."},
      {label:"Shockley Equation", formula:"I = I_s x (e^(V/V_T) - 1)", desc:"I_s = saturation current, V_T = thermal voltage (~26mV at 25°C)."},
      {label:"Rectified Average Voltage", formula:"V_avg = V_peak / π (half-wave)", desc:"Average DC output of a half-wave rectifier."},
      {label:"Bridge Rectifier Output", formula:"V_avg = 2 x V_peak / π", desc:"Average DC from a full-wave bridge."},
    ],
    applications:[
      {icon:'⚡',name:'AC-to-DC rectification'},
      {icon:'🛡️',name:'Reverse polarity protection'},
      {icon:'💡',name:'LED lighting'},
      {icon:'📡',name:'Signal demodulation'},
      {icon:'🔋',name:'Battery charging'},
      {icon:'🔒',name:'Clipping & clamping'},
    ],
    applicationDesc:`Diodes are used in power supplies (rectification), protecting circuits from reverse battery insertion, in radio receivers (AM detection), as freewheeling diodes in relay/motor driver circuits, and forming the basis of LEDs and photodiodes.`,
    quiz:[
      {q:'What is the approximate forward voltage drop of a silicon diode?', opts:['0.2V','0.6V','1.2V','2.0V'], answer:1, explanation:'Silicon diodes have ~0.6V-0.7V forward voltage drop.'},
      {q:'In which bias condition does a diode conduct?', opts:['Reverse bias','Forward bias','Both','Neither'], answer:1, explanation:'Forward bias (anode positive with respect to cathode) allows conduction.'},
      {q:'How many diodes are in a full-wave bridge rectifier?', opts:['1','2','3','4'], answer:3, explanation:'A bridge rectifier uses 4 diodes to rectify both half-cycles of AC.'},
    ]
  },

  {
    id: 'transistorNPN', name: 'NPN Transistor (BJT)', category: 'active',
    symbol: 'Symbol: BJT with arrow pointing out on emitter | Terminals: Base (B), Collector (C), Emitter (E)',
    desc: 'A three-terminal semiconductor device used for amplification and switching. Controls large currents with small base currents.',
    tags:['active','amplifier','switch'],
    specs:[
      {label:'Terminals', value:'Base, Collector, Emitter'},
      {label:'h_FE (Beta)', value:'20-1000 (current gain)'},
      {label:'Common Types', value:'2N2222, BC547, 2N3904'},
      {label:'Max Voltage (V_CE)', value:'20V - 100V+'},
    ],
    howItWorks:`In an NPN BJT, the base-emitter junction is forward biased with a small current (I_B). This controls a much larger collector current (I_C). The ratio I_C / I_B is the current gain β (hFE). In saturation, the transistor acts as a closed switch. In cut-off, it acts as an open switch. In the active region, it amplifies the signal. The emitter is the reference terminal; collector is the output terminal.`,
    advantages:['High current gain (β can be 100-1000)','Fast switching speeds','Available in many packages','Low cost, robust design','Can amplify both voltage and current'],
    disadvantages:['Requires base current to operate (some power lost)','Thermal runaway if not designed carefully','β varies with temperature and between units','Not ideal for very high-frequency RF applications (use FETs)','Saturation/cutoff transitions are not perfectly sharp'],
    wiringDiagrams:[
      {
        title:'NPN as a Switch (LED Driver)',
        difficulty:'easy',
        svgKey:'npnSwitch',
        steps:['Connect a current-limiting base resistor (R_B ~10kΩ) from the microcontroller GPIO pin to the base of the NPN transistor.','Connect the collector to the negative terminal of the LED (cathode), through a series resistor.','Connect the positive of the LED to VCC.','Connect the emitter directly to GND.','When GPIO goes HIGH → base current flows → transistor saturates → LED turns ON.','When GPIO goes LOW → transistor cuts off → LED turns OFF.']
      },
      {
        title:'Common Emitter Amplifier',
        difficulty:'medium',
        svgKey:'ceAmplifier',
        steps:['Set up a voltage divider (R1, R2) from VCC to GND to bias the base at ~1/3 VCC.','Connect collector resistor R_C from VCC to collector.','Connect emitter resistor R_E from emitter to GND (with bypass capacitor for AC gain).','Couple the AC input through a capacitor to the base.','Output (inverted and amplified) is taken from the collector via another coupling capacitor.']
      }
    ],
    formulas:[
      {label:"Current Gain", formula:"β = I_C / I_B", desc:"Collector current is β times the base current."},
      {label:"Kirchhoff at Emitter", formula:"I_E = I_C + I_B", desc:"Emitter current is the sum of collector and base currents."},
      {label:"Base Resistor", formula:"R_B = (V_in - V_BE) / I_B", desc:"V_BE ≈ 0.7V for silicon NPN."},
      {label:"Collector Current (active)", formula:"I_C = β x I_B", desc:"Output current in active mode."},
      {label:"Voltage Gain (CE)", formula:"Av = -R_C / r_e,  r_e ≈ 26mV/I_C", desc:"Common emitter small-signal voltage gain."},
    ],
    applications:[
      {icon:'💡',name:'LED/relay driver'},
      {icon:'🔊',name:'Audio amplifier'},
      {icon:'🔁',name:'Logic inverter'},
      {icon:'📡',name:'RF signal amplifier'},
      {icon:'🤖',name:'Motor driver'},
      {icon:'⏱️',name:'Oscillator/timer'},
    ],
    applicationDesc:`BJT transistors are used as switches in digital logic, drivers for LEDs and relays, audio amplifiers (pre-amp stages), RF small-signal amplifiers, and in oscillator circuits. The NPN type is most common in low-side switching configurations.`,
    quiz:[
      {q:'In active mode, what controls collector current in a BJT?', opts:['Collector voltage','Base current','Emitter voltage','Temperature'], answer:1, explanation:'I_C = β x I_B. The base current controls the collector current.'},
      {q:'A transistor in saturation acts like...', opts:['An open circuit','A current source','A closed switch','A voltage source'], answer:2, explanation:'Saturation = fully ON = very low V_CE ≈ 0.2V, behaves like a closed switch.'},
      {q:'If β=100 and I_B=20µA, what is I_C?', opts:['2µA','0.2mA','2mA','200mA'], answer:2, explanation:'I_C = β x I_B = 100 x 20µA = 2000µA = 2mA.'},
    ]
  },

  {
    id: 'opamp', name: 'Operational Amplifier', category: 'ic',
    symbol: 'Symbol: Triangle with +/- inputs and one output | Terminals: V+, V-, Vout, V_CC+, V_CC-',
    desc: 'A high-gain voltage amplifier IC with differential inputs. The backbone of analog signal processing.',
    tags:['ic','analog','amplifier'],
    specs:[
      {label:'Common ICs', value:'LM741, LM358, TL071, LM324'},
      {label:'Open-Loop Gain', value:'100,000+ (100dB)'},
      {label:'Supply Voltage', value:'±5V to ±15V (dual) or 3V-32V (single)'},
      {label:'Input Impedance', value:'Very high (MΩ to GΩ)'},
    ],
    howItWorks:`An op-amp amplifies the difference between its two inputs (V+ non-inverting and V- inverting) by an extremely high open-loop gain (~100,000). In practice, negative feedback is used to set a defined, stable gain. The inverting configuration inverts the signal; non-inverting preserves polarity. The "virtual short" concept (V+ ≈ V- with feedback) simplifies circuit analysis greatly.`,
    advantages:['Extremely high open-loop gain','Very high input impedance (minimal loading)','Low output impedance','Versatile — comparator, amplifier, integrator, filter','Wide bandwidth with proper compensation'],
    disadvantages:['Requires dual or single supply with correct biasing','Output slew rate limits high-frequency performance','Rail-to-rail output not always possible','Offset voltage and bias currents cause errors','Can oscillate if improperly compensated'],
    wiringDiagrams:[
      {
        title:'Inverting Amplifier',
        difficulty:'medium',
        svgKey:'invertingAmp',
        steps:['Connect the input signal through R1 to the inverting input (V-).','Connect feedback resistor Rf between the output and V-.','Connect the non-inverting input (V+) to GND through a resistor equal to R1 ∥ Rf (to balance bias currents).','Apply dual supply (e.g. ±12V) to the op-amp power pins.','Gain Av = -Rf / R1 (negative sign = inverted output).','For Av = -10: use R1=10kΩ, Rf=100kΩ.']
      },
      {
        title:'Non-Inverting Amplifier',
        difficulty:'easy',
        svgKey:'nonInvertingAmp',
        steps:['Connect input signal directly to V+ (non-inverting input).','Connect V- to the junction of R1 (to GND) and Rf (to output).','Gain Av = 1 + Rf/R1 (always ≥ 1, output in phase with input).','For unity gain (buffer): remove R1 and Rf, short V- to output.','A voltage follower/buffer has Av=1 and very low output impedance.']
      }
    ],
    formulas:[
      {label:"Inverting Gain", formula:"Av = -Rf / R1", desc:"Negative feedback sets gain; output is phase-inverted."},
      {label:"Non-Inverting Gain", formula:"Av = 1 + Rf / R1", desc:"In-phase output with gain ≥ 1."},
      {label:"Virtual Short Principle", formula:"V+ ≈ V- (with feedback)", desc:"Key assumption: differential input is ~0V in closed loop."},
      {label:"Bandwidth (GBW)", formula:"f_3dB = GBW / |Av|", desc:"Gain-Bandwidth Product is constant for a given op-amp."},
      {label:"Slew Rate", formula:"SR = ΔVout / Δt (V/µs)", desc:"Maximum rate at which output voltage can change."},
    ],
    applications:[
      {icon:'📶',name:'Signal amplification'},
      {icon:'🔍',name:'Comparators'},
      {icon:'∫',name:'Integrators/differentiators'},
      {icon:'🔊',name:'Audio pre-amps'},
      {icon:'📊',name:'Active filters'},
      {icon:'⚖️',name:'Instrumentation amps'},
    ],
    applicationDesc:`Op-amps are at the heart of analog electronics. They are used as precision amplifiers, voltage comparators, signal integrators/differentiators, active filters (low-pass, high-pass, band-pass), sample-and-hold circuits, audio pre-amplifiers, and as the core of instrumentation amplifiers for sensor data acquisition.`,
    quiz:[
      {q:'An inverting amplifier has R1=10kΩ and Rf=100kΩ. What is the gain?', opts:['+10','-10','+1','-100'], answer:1, explanation:'Av = -Rf/R1 = -100k/10k = -10.'},
      {q:'What principle allows simplified analysis of op-amp circuits?', opts:['Superposition','Virtual short','Norton equivalence','Thevenin equivalence'], answer:1, explanation:'Virtual short: V+ ≈ V- in a closed-loop configuration.'},
      {q:'A unity-gain op-amp buffer has a gain of:', opts:['0','10','1','-1'], answer:2, explanation:'Buffer (voltage follower) has Av = 1, used for impedance isolation.'},
    ]
  },

  {
    id: 'led', name: 'LED', category: 'active',
    symbol: 'Symbol: Diode with arrows for emitted light | Unit: Forward Voltage (V_f)',
    desc: 'A Light Emitting Diode that produces light when forward biased. Efficient, durable, and available in many colours.',
    tags:['active','light','semiconductor'],
    specs:[
      {label:'Forward Voltage', value:'1.8V (IR/Red) - 3.5V (Blue/White)'},
      {label:'Forward Current', value:'5mA - 30mA (standard)'},
      {label:'Colours', value:'Red, Green, Blue, White, IR, UV'},
      {label:'Luminous Efficacy', value:'10-200 lm/W'},
    ],
    howItWorks:`An LED is a specially doped P-N junction. When forward biased, electrons and holes recombine at the junction. The energy released during this recombination is emitted as photons (light) rather than heat (unlike a regular resistor). The wavelength (colour) depends on the semiconductor material used: AlGaAs for red/IR, GaN for blue/white, GaP for green.`,
    advantages:['Very energy efficient compared to incandescent bulbs','Long lifespan (50,000+ hours)','Small and lightweight','Instant on/off (no warm-up)','Directional light emission','Available in many colours including RGB'],
    disadvantages:['Requires current-limiting resistor','Forward voltage varies with colour','Sensitive to reverse voltage (low PIV)','Brightness varies with temperature','More expensive per unit than traditional bulbs','Light output degrades over time'],
    wiringDiagrams:[
      {
        title:'LED with Current-Limiting Resistor',
        difficulty:'easy',
        svgKey:'ledResistor',
        steps:['Identify the anode (+, longer lead) and cathode (-, shorter lead/flat side) of the LED.','Calculate resistor: R = (V_supply - V_f) / I_f. For 5V supply, red LED (V_f=2V), I_f=20mA: R = (5-2)/0.02 = 150Ω.','Connect the resistor in series with the anode.','Connect the cathode to GND.','Connect the free end of the resistor to the supply voltage.','Never connect an LED directly to power without a resistor!']
      }
    ],
    formulas:[
      {label:"Current-Limiting Resistor", formula:"R = (V_s - V_f) / I_f", desc:"Protects the LED from excess current."},
      {label:"Power Dissipated in LED", formula:"P = V_f x I_f", desc:"Power consumed by the LED itself."},
      {label:"Power in Resistor", formula:"P_R = (V_s - V_f) x I_f", desc:"Power dissipated in the series resistor."},
    ],
    applications:[
      {icon:'💡',name:'Lighting & displays'},
      {icon:'📟',name:'Status indicators'},
      {icon:'📺',name:'Backlights (LCD/OLED)'},
      {icon:'📡',name:'IR remotes & sensors'},
      {icon:'🌱',name:'Grow lights'},
      {icon:'🔦',name:'Flashlights & torches'},
    ],
    applicationDesc:`LEDs are ubiquitous in modern electronics. From simple status indicators on circuit boards, to high-power lighting, display backlights, IR proximity sensors, optical communication, and phototherapy devices. RGB LEDs combine three diodes for full colour control.`,
    quiz:[
      {q:'You have a 9V supply and a red LED (V_f=2V, I_f=20mA). What resistor value is needed?', opts:['100Ω','350Ω','150Ω','470Ω'], answer:1, explanation:'R = (9-2)/0.02 = 7/0.02 = 350Ω. Use the nearest standard value (330Ω or 390Ω).'},
      {q:'What is responsible for the colour of an LED?', opts:['Resistance value','Doping material/semiconductor type','Supply voltage','Current level'], answer:1, explanation:'The semiconductor material and its bandgap determines the photon wavelength (colour).'},
      {q:'Why should you never connect an LED directly to 5V without a resistor?', opts:['It will be too dim','Excessive current will destroy the LED','LEDs only work with AC','The voltage is too low'], answer:1, explanation:'Without current limiting, forward current is unrestricted and will burn the LED instantly.'},
    ]
  },

  {
    id: 'mosfet', name: 'MOSFET', category: 'active',
    symbol: 'Symbol: Field-effect symbol with gate, drain, source | Terminals: Gate (G), Drain (D), Source (S)',
    desc: 'Metal-Oxide-Semiconductor Field-Effect Transistor — the fundamental building block of digital ICs and high-efficiency power switching.',
    tags:['active','switch','power'],
    specs:[
      {label:'Terminals', value:'Gate, Drain, Source'},
      {label:'Control', value:'Voltage-controlled (no gate current)'},
      {label:'Common Types', value:'N-channel, P-channel, Enhancement, Depletion'},
      {label:'R_DS(on)', value:'mΩ to Ω (very low for power MOSFETs)'},
    ],
    howItWorks:`In an enhancement N-channel MOSFET, applying a positive voltage (V_GS) above the threshold voltage (V_th) to the gate attracts electrons to form a conductive channel between drain and source. This allows current to flow from drain to source. Since the gate is insulated by a thin oxide layer, no gate current flows in steady state — making it voltage-controlled and extremely power-efficient for switching applications.`,
    advantages:['Voltage-controlled: no static gate current (very low drive power)','Very fast switching (nanosecond range)','Low on-resistance (R_DS(on)) in modern power devices','Extremely small when integrated (billions per chip in CPUs)','Easy to parallel for higher current handling'],
    disadvantages:['Gate oxide is fragile (ESD-sensitive)','Body diode can cause issues in some topologies','Can be destroyed by V_GS exceeding gate oxide breakdown','Threshold voltage varies with temperature','More complex drive requirements than BJT for some applications'],
    wiringDiagrams:[
      {
        title:'N-Channel MOSFET Low-Side Switch',
        difficulty:'easy',
        svgKey:'mosfetSwitch',
        steps:['Connect the load (e.g. motor or LED) between VDD and the drain of the MOSFET.','Connect the source of the MOSFET to GND.','Connect a 10kΩ gate resistor between the microcontroller output and the gate.','Add a 100kΩ pull-down resistor from gate to GND (ensures MOSFET is OFF when drive is floating).','Apply V_GS > V_th (e.g. 5V for logic-level MOSFET) to turn ON.','Ensure V_GS never exceeds the gate voltage rating (usually ±20V).']
      }
    ],
    formulas:[
      {label:"Drain Current (saturation)", formula:"I_D = (k_n/2) x (V_GS - V_th)²", desc:"k_n is process transconductance. Valid when V_DS > V_GS - V_th."},
      {label:"On-State Resistance", formula:"P = I_D² x R_DS(on)", desc:"Power lost in the switch when conducting."},
      {label:"Switching Energy", formula:"E_sw = ½ x C_iss x V_GS²", desc:"Energy to charge gate capacitance."},
      {label:"Gate Charge Time", formula:"t = Q_g / I_gate", desc:"Time to switch, given gate drive current and total gate charge."},
    ],
    applications:[
      {icon:'⚡',name:'Power switching'},
      {icon:'💻',name:'CPU/GPU logic'},
      {icon:'🔋',name:'Battery management'},
      {icon:'🤖',name:'Motor speed control'},
      {icon:'🔌',name:'Inverters/converters'},
      {icon:'📡',name:'RF amplifiers'},
    ],
    applicationDesc:`MOSFETs are used in virtually all modern power electronics: buck/boost converters, H-bridge motor drivers, battery protection circuits, solar inverters, Class-D audio amplifiers, and as the transistors inside every CPU and memory chip at nanometer scale.`,
    quiz:[
      {q:'What type of input does a MOSFET gate use?', opts:['Current input','Voltage input','Power input','Resistive input'], answer:1, explanation:'MOSFET is voltage-controlled. The gate draws essentially no current in steady state.'},
      {q:'What happens to a MOSFET if V_GS exceeds the gate oxide breakdown voltage?', opts:['It amplifies more','The gate oxide is destroyed permanently','It switches faster','Nothing'], answer:1, explanation:'The thin gate oxide ruptures irreversibly — usually ESD damage.'},
      {q:'N-channel MOSFET turns ON when V_GS is:', opts:['Negative','Zero','Above threshold voltage','Below threshold voltage'], answer:2, explanation:'Enhancement N-MOSFET requires V_GS > V_th (typically 2-4V for logic-level devices).'},
    ]
  },

  {
    id: 'transformer', name: 'Transformer', category: 'power',
    symbol: 'Symbol: Two coupled coils | Unit: Turns ratio (N1:N2)',
    desc: 'Transfers electrical energy between two circuits through electromagnetic induction. Steps voltage up or down.',
    tags:['power','ac','magnetic'],
    specs:[
      {label:'Principle', value:'Mutual induction'},
      {label:'Works On', value:'AC only (typically 50/60Hz or high-frequency)'},
      {label:'Efficiency', value:'95%-99% for power transformers'},
      {label:'Types', value:'Step-up, Step-down, Isolation, Auto, HF'},
    ],
    howItWorks:`A transformer uses Faraday's Law of electromagnetic induction. An AC current in the primary winding creates a changing magnetic flux in the core. This changing flux induces a voltage in the secondary winding. The ratio of voltages equals the ratio of turns: V1/V2 = N1/N2. Power is conserved (ignoring losses): V1xI1 ≈ V2xI2.`,
    advantages:['Steps voltage up or down with high efficiency','Provides electrical isolation between circuits','No moving parts — extremely reliable','Can handle very high power levels','Essential for power distribution (grid infrastructure)'],
    disadvantages:['Only works with AC (not DC)','Heavy and bulky at low frequencies','Produces heat from core and copper losses','Large transformers are expensive','Efficiency drops at very low or very high loads'],
    wiringDiagrams:[
      {
        title:'Step-Down Transformer in a Power Supply',
        difficulty:'medium',
        svgKey:'stepDownPSU',
        steps:['Connect the 230V AC mains to the primary winding of the step-down transformer.','The secondary outputs a lower AC voltage (e.g. 12V AC).','Connect the secondary to a bridge rectifier (4 diodes).','Connect a large filter capacitor (e.g. 1000µF) across the rectifier output.','Add a voltage regulator (e.g. LM7812) for stable regulated DC output.','Add output capacitors (100µF and 100nF) on the regulator output.']
      }
    ],
    formulas:[
      {label:"Voltage Ratio", formula:"V1/V2 = N1/N2", desc:"Output voltage scales with turns ratio."},
      {label:"Current Ratio", formula:"I1/I2 = N2/N1", desc:"Output current is inversely proportional to turns ratio."},
      {label:"Power Conservation", formula:"P1 = P2 (ideal)", desc:"Input and output power are equal in an ideal transformer."},
      {label:"Reflected Impedance", formula:"Z_primary = (N1/N2)² x Z_load", desc:"Used for impedance matching in audio applications."},
    ],
    applications:[
      {icon:'🔌',name:'Power supplies (AC-DC)'},
      {icon:'🏭',name:'Grid distribution'},
      {icon:'🔊',name:'Audio output stage'},
      {icon:'🛡️',name:'Galvanic isolation'},
      {icon:'⚡',name:'Voltage conversion'},
      {icon:'📡',name:'RF matching networks'},
    ],
    applicationDesc:`Transformers are critical in the power grid for long-distance transmission at high voltage, in mains power supplies for stepping down to safe voltages, in audio amplifiers for impedance matching to speakers, and in isolated DC-DC converters (flyback, forward converter topologies).`,
    quiz:[
      {q:'A transformer has N1=500 turns, N2=50 turns, and V1=240V. What is V2?', opts:['24V','2400V','12V','48V'], answer:0, explanation:'V2 = V1 x N2/N1 = 240 x 50/500 = 24V.'},
      {q:'Why does a transformer not work with DC?', opts:['DC is too dangerous','No changing magnetic flux is produced','DC has too high a voltage','DC damages the core'], answer:1, explanation:'Faraday\'s Law requires a changing flux — only AC produces this. DC produces constant flux (no induction).'},
      {q:'In an ideal transformer, if the voltage is stepped up, the current is:', opts:['Also stepped up','Unchanged','Stepped down proportionally','Zero'], answer:2, explanation:'Power is conserved: P=VI. If V doubles, I halves (ideal transformer).'},
    ]
  },

  {
    id: 'zener', name: 'Zener Diode', category: 'active',
    symbol: 'Symbol: Diode with bent cathode bar | Used for: Voltage regulation',
    desc: 'A special diode designed to operate in reverse breakdown, maintaining a constant reference voltage.',
    tags:['active','regulator','reference'],
    specs:[
      {label:'Zener Voltage', value:'2.4V - 200V'},
      {label:'Power Rating', value:'0.5W, 1W, 5W'},
      {label:'Temperature Coefficient', value:'Negative below ~5V, positive above'},
      {label:'Common Types', value:'BZX79, 1N4733, 1N4148Z'},
    ],
    howItWorks:`Unlike a regular diode, a zener diode is designed to operate in controlled reverse breakdown. At the zener voltage (V_Z), it maintains an almost constant voltage across its terminals regardless of the current through it (within rated limits). This is due to either the Zener effect (quantum tunneling, <5V) or avalanche breakdown (>7V). The result is a reliable voltage reference.`,
    advantages:['Simple, low-cost voltage regulation','Maintains stable output voltage over a range of currents','Available in precise voltages','No active components required','Can be combined with op-amps for high-precision references'],
    disadvantages:['Inefficient — excess voltage dropped as heat','Not suitable for high current regulation (use LDO/SMPS)','Noise can be high near the knee of the curve','Zener voltage changes slightly with temperature','Series resistor must be carefully chosen'],
    wiringDiagrams:[
      {
        title:'Zener Voltage Regulator',
        difficulty:'easy',
        svgKey:'zenerReg',
        steps:['Connect the series resistor R_s between V_in and the cathode of the zener diode.','Connect the anode of the zener to GND.','The load R_L is connected in parallel with the zener (cathode to node, anode to GND).','V_out = V_Z (zener voltage, e.g. 5.1V).','Calculate R_s: R_s = (V_in - V_Z) / (I_Z + I_L). Ensure I_Z ≥ 5mA for stable regulation.','Choose a zener with P = V_Z x I_Z_max within its power rating.']
      }
    ],
    formulas:[
      {label:"Series Resistor", formula:"R_s = (V_in - V_Z) / (I_Z + I_L)", desc:"Limits current through the zener and provides load current."},
      {label:"Zener Power", formula:"P_Z = V_Z x I_Z", desc:"Must be less than the rated power of the zener."},
      {label:"Load Regulation", formula:"ΔV_out = I_Z_change x r_Z", desc:"r_Z is the dynamic (bulk) resistance of the zener."},
    ],
    applications:[
      {icon:'⚖️',name:'Voltage reference'},
      {icon:'🛡️',name:'Overvoltage protection'},
      {icon:'🔌',name:'Simple regulation'},
      {icon:'📡',name:'Clipping circuits'},
      {icon:'🔋',name:'Battery monitoring'},
      {icon:'⚡',name:'Surge protection'},
    ],
    applicationDesc:`Zener diodes are used as voltage references in ADC circuits, for overvoltage protection (transient suppression), in simple low-power voltage regulators, clipping circuits in analog signal processing, and as voltage-clamping elements in protection circuits.`,
    quiz:[
      {q:'A zener diode is normally operated in which bias condition?', opts:['Forward bias','No bias','Reverse breakdown','Both forward and reverse'], answer:2, explanation:'Zener diodes are designed to operate in controlled reverse breakdown to maintain V_Z.'},
      {q:'You need a 5V regulated output from 12V with a 100mA load. Roughly what series resistor is needed? (V_Z=5V, I_Z=10mA)', opts:['70Ω','620Ω','100Ω','1kΩ'], answer:0, explanation:'R = (12-5) / (0.1+0.01) = 7/0.11 ≈ 63.6Ω → use 68Ω or 82Ω standard value.'},
      {q:'Zener diodes below ~5V use which breakdown mechanism?', opts:['Avalanche','Thermal','Zener effect (tunneling)','Impact ionization'], answer:2, explanation:'Below 5V, quantum mechanical tunneling (Zener effect) dominates. Above 7V, avalanche breakdown dominates.'},
    ]
  },

  {
    id: 'scr', name: 'SCR / Thyristor', category: 'power',
    symbol: 'Symbol: Diode with gate terminal | Terminals: Anode (A), Cathode (K), Gate (G)',
    desc: 'A four-layer PNPN semiconductor device that switches large AC/DC loads using a small gate pulse.',
    tags:['power','switch','thyristor'],
    specs:[
      {label:'Terminals', value:'Anode, Cathode, Gate'},
      {label:'Voltage Ratings', value:'Up to 10kV'},
      {label:'Current Ratings', value:'Up to 5kA'},
      {label:'Latching', value:'Stays ON after gate pulse removed'},
    ],
    howItWorks:`An SCR is a PNPN four-layer device. It remains OFF (blocking) until a positive gate pulse triggers it. Once triggered, it latches ON and conducts current from anode to cathode — even if the gate signal is removed. It can only be turned OFF by reducing the anode current below the holding current (I_H), or in AC circuits when the voltage naturally crosses zero. This makes it ideal for high-power AC control.`,
    advantages:['Can control very high voltages and currents','Latching behaviour needs only a brief gate pulse','Very low on-state losses','Robust and reliable in industrial environments','Essential in AC power control (dimmers, motor drives)'],
    disadvantages:['Cannot be turned off by gate signal alone','Requires commutation circuit for DC switching','Slow switching speed vs MOSFETs','Gate requires careful isolation','Noise can false-trigger the SCR'],
    wiringDiagrams:[
      {
        title:'SCR AC Power Control (Light Dimmer)',
        difficulty:'hard',
        svgKey:'scrDimmer',
        steps:['Connect the SCR (or TRIAC) in series with the AC load (e.g. light bulb).','Use a phase control circuit (RC network + DIAC) to generate a delayed gate trigger.','By varying the RC delay, the firing angle changes — controlling the portion of AC cycle the load receives.','A snubber circuit (R-C across the SCR) prevents false triggering from dV/dt.','Add a fuse and MOV for overcurrent and surge protection.','For full TRIAC operation: use a DIAC to threshold the gate trigger symmetrically.']
      }
    ],
    formulas:[
      {label:"Gate Trigger Current", formula:"I_GT (typically 5-200mA)", desc:"Minimum gate current required to turn the SCR on."},
      {label:"Holding Current", formula:"I_H (typically 5-100mA)", desc:"Minimum anode current to keep SCR latched ON."},
      {label:"Power to Load (phase control)", formula:"P = P_max x (1 - a/π + sin(2a)/2π)", desc:"a is firing angle (radians), P_max is full-wave power."},
    ],
    applications:[
      {icon:'💡',name:'Light dimmers'},
      {icon:'⚡',name:'Motor speed control'},
      {icon:'🔋',name:'Battery chargers'},
      {icon:'🏭',name:'Industrial heating'},
      {icon:'🔌',name:'UPS / power control'},
      {icon:'🛡️',name:'Crowbar protection'},
    ],
    applicationDesc:`SCRs are used in AC power control: lamp dimmers, motor speed controllers, industrial heating (firing furnaces), HVDC power transmission, battery chargers, and as crowbar circuits that short the supply in overvoltage events to blow a fuse and protect downstream equipment.`,
    quiz:[
      {q:'How do you turn OFF an SCR in a DC circuit?', opts:['Remove the gate signal','Reduce anode current below holding current','Reverse the gate signal','Increase gate voltage'], answer:1, explanation:'SCR latches on. To turn it off in DC, you must reduce I_A below I_H using a commutation circuit.'},
      {q:'How many P-N junctions does an SCR have?', opts:['1','2','3','4'], answer:2, explanation:'SCR is a PNPN four-layer device with 3 P-N junctions (J1, J2, J3).'},
      {q:'What is used to create smooth power control in AC circuits with an SCR?', opts:['Duty cycle modulation','Phase angle control','Frequency modulation','PWM'], answer:1, explanation:'Phase angle (firing angle) control varies the portion of each AC half-cycle delivered to the load.'},
    ]
  },

  {
    id: 'photoresistor', name: 'Photoresistor (LDR)', category: 'sensor',
    symbol: 'Symbol: Resistor with light arrows | Unit: Resistance (Ω) varies with light',
    desc: 'A light-dependent resistor whose resistance decreases as incident light intensity increases.',
    tags:['sensor','light','passive'],
    specs:[
      {label:'Dark Resistance', value:'1MΩ - 10MΩ'},
      {label:'Light Resistance', value:'50Ω - 1kΩ (bright light)'},
      {label:'Response Time', value:'20ms - 200ms'},
      {label:'Spectral Peak', value:'~540nm (green/yellow light)'},
    ],
    howItWorks:`An LDR is made of a photosensitive material (usually cadmium sulfide, CdS). When photons hit the material, they excite electrons, increasing the number of charge carriers and reducing resistance. In darkness, very few carriers exist and resistance is very high. This resistance change (up to 5 decades) can be easily read by a voltage divider connected to a microcontroller ADC.`,
    advantages:['Very simple to use — just a two-terminal resistor','Low cost','Wide resistance range gives high sensitivity','Works with any voltage (within power rating)','No polarity required'],
    disadvantages:['Non-linear response to light','Slow response (not suitable for fast light pulses)','Resistance varies with temperature as well as light','CdS contains cadmium (RoHS concerns)','Not spectrally specific (responds to visible spectrum broadly)'],
    wiringDiagrams:[
      {
        title:'LDR Voltage Divider for ADC Reading',
        difficulty:'easy',
        svgKey:'ldrDivider',
        steps:['Connect 5V to one end of the LDR.','Connect the other end of the LDR to a 10kΩ resistor (R_fixed).','Connect the other end of R_fixed to GND.','Take the ADC measurement from the junction between LDR and R_fixed.','In bright light: LDR resistance drops, junction voltage drops (if LDR is on top).','In darkness: LDR resistance is high, junction voltage rises.','Connect to Arduino analogRead() — map value to light level.']
      }
    ],
    formulas:[
      {label:"Voltage Divider Output", formula:"V_out = V_cc x R_fixed / (R_LDR + R_fixed)", desc:"Output voltage depends on light level (R_LDR changes)."},
      {label:"LDR Resistance (approx)", formula:"R_LDR ≈ k x E^(-a)", desc:"k and a are material constants; E is illuminance in lux."},
    ],
    applications:[
      {icon:'💡',name:'Automatic street lights'},
      {icon:'📷',name:'Camera light metering'},
      {icon:'🌙',name:'Night lights'},
      {icon:'🤖',name:'Robotics (line sensors)'},
      {icon:'🏠',name:'Smart home automation'},
      {icon:'🔒',name:'Alarm systems'},
    ],
    applicationDesc:`LDRs are used in automatic street light controllers (turn on at dusk), camera exposure meters, burglar alarms, garden lights, and simple robotics line-following sensors. They are commonly interfaced to 555 timers or microcontroller ADC pins for light level measurement.`,
    quiz:[
      {q:'What happens to an LDR resistance in bright light?', opts:['Increases significantly','Decreases significantly','Remains the same','Becomes zero'], answer:1, explanation:'More photons = more electron-hole pairs = lower resistance. LDR resistance decreases with increasing illumination.'},
      {q:'What is a major disadvantage of CdS photoresistors?', opts:['They require AC only','They contain cadmium (RoHS concern)','They are very expensive','They work only in infrared'], answer:1, explanation:'Cadmium sulfide contains cadmium, a toxic heavy metal restricted by the EU RoHS directive.'},
      {q:'LDRs are NOT suitable for detecting:', opts:['Room brightness','Sunrise/sunset','High-speed optical data pulses','Low or high light levels'], answer:2, explanation:'LDRs have a slow response (20-200ms) — not suitable for fast optical signals like fibre optic data.'},
    ]
  },
];

// ─── WIRING SVGs ──────────────────────────────────────────────────
const wiringSVGs = {
  seriesR: `<svg viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="50" x2="50" y2="50" stroke="#f0a500" stroke-width="2.5"/>
    <rect x="50" y="38" width="60" height="24" rx="3" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="80" y="28" text-anchor="middle" fill="#f0a500" font-size="10" font-family="DM Mono">R1=10Ω</text>
    <line x1="110" y1="50" x2="170" y2="50" stroke="#f0a500" stroke-width="2.5"/>
    <rect x="170" y="38" width="60" height="24" rx="3" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="200" y="28" text-anchor="middle" fill="#f0a500" font-size="10" font-family="DM Mono">R2=40Ω</text>
    <line x1="230" y1="50" x2="290" y2="50" stroke="#f0a500" stroke-width="2.5"/>
    <circle cx="10" cy="50" r="5" fill="#f0a500"/>
    <circle cx="290" cy="50" r="5" fill="#f0a500"/>
    <text x="150" y="85" text-anchor="middle" fill="#6b7280" font-size="10" font-family="DM Mono">R_total = 50Ω</text>
  </svg>`,

  voltageDivider: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="20" y="30" fill="#f0a500" font-size="11" font-family="DM Mono">Vin</text>
    <line x1="30" y1="35" x2="100" y2="35" stroke="#f0a500" stroke-width="2.5"/>
    <rect x="80" y="35" width="40" height="50" rx="3" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="100" y="30" text-anchor="middle" fill="#6b7280" font-size="10" font-family="DM Mono">R1</text>
    <line x1="100" y1="85" x2="100" y2="100" stroke="#f0a500" stroke-width="2.5"/>
    <line x1="100" y1="100" x2="160" y2="100" stroke="#00d4aa" stroke-width="2.5" stroke-dasharray="4,2"/>
    <text x="165" y="104" fill="#00d4aa" font-size="11" font-family="DM Mono">Vout</text>
    <rect x="80" y="100" width="40" height="50" rx="3" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="100" y="96" text-anchor="middle" fill="#6b7280" font-size="10" font-family="DM Mono">R2</text>
    <line x1="100" y1="150" x2="100" y2="175" stroke="#f0a500" stroke-width="2.5"/>
    <line x1="80" y1="175" x2="120" y2="175" stroke="#6b7280" stroke-width="2"/>
    <text x="100" y="190" text-anchor="middle" fill="#6b7280" font-size="10" font-family="DM Mono">GND</text>
  </svg>`,

  decouplingCap: `<svg viewBox="0 0 280 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="50" width="80" height="50" rx="5" stroke="#a78bfa" stroke-width="2" fill="rgba(167,139,250,0.1)"/>
    <text x="140" y="80" text-anchor="middle" fill="#a78bfa" font-size="11" font-family="DM Mono">IC</text>
    <line x1="10" y1="55" x2="100" y2="55" stroke="#f0a500" stroke-width="2.5"/>
    <text x="50" y="48" text-anchor="middle" fill="#f0a500" font-size="10" font-family="DM Mono">VCC</text>
    <line x1="10" y1="95" x2="100" y2="95" stroke="#6b7280" stroke-width="2.5"/>
    <text x="50" y="113" text-anchor="middle" fill="#6b7280" font-size="10" font-family="DM Mono">GND</text>
    <line x1="30" y1="55" x2="30" y2="70" stroke="#00d4aa" stroke-width="2"/>
    <line x1="22" y1="70" x2="38" y2="70" stroke="#00d4aa" stroke-width="3"/>
    <line x1="22" y1="76" x2="38" y2="76" stroke="#00d4aa" stroke-width="3"/>
    <line x1="30" y1="76" x2="30" y2="95" stroke="#00d4aa" stroke-width="2"/>
    <text x="45" y="75" fill="#00d4aa" font-size="9" font-family="DM Mono">100nF</text>
  </svg>`,

  rcFilter: `<svg viewBox="0 0 280 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="60" x2="50" y2="60" stroke="#f0a500" stroke-width="2.5"/>
    <text x="30" y="50" text-anchor="middle" fill="#f0a500" font-size="10" font-family="DM Mono">Vin</text>
    <rect x="50" y="48" width="60" height="24" rx="3" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="80" y="43" text-anchor="middle" fill="#6b7280" font-size="10" font-family="DM Mono">R</text>
    <line x1="110" y1="60" x2="180" y2="60" stroke="#f0a500" stroke-width="2.5"/>
    <line x1="175" y1="45" x2="175" y2="75" stroke="#00d4aa" stroke-width="4"/>
    <line x1="185" y1="45" x2="185" y2="75" stroke="#00d4aa" stroke-width="4"/>
    <line x1="185" y1="60" x2="230" y2="60" stroke="#00d4aa" stroke-width="2.5"/>
    <text x="230" y="55" fill="#00d4aa" font-size="10" font-family="DM Mono">Vout</text>
    <line x1="180" y1="75" x2="180" y2="110" stroke="#6b7280" stroke-width="2"/>
    <line x1="165" y1="110" x2="195" y2="110" stroke="#6b7280" stroke-width="2"/>
    <text x="180" y="125" text-anchor="middle" fill="#6b7280" font-size="10" font-family="DM Mono">GND</text>
    <text x="200" y="75" fill="#00d4aa" font-size="9" font-family="DM Mono">C</text>
  </svg>`,

  halfWaveRect: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="75" r="28" stroke="#6b7280" stroke-width="2" fill="transparent"/>
    <text x="40" y="72" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">AC</text>
    <text x="40" y="83" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">~</text>
    <line x1="68" y1="75" x2="110" y2="75" stroke="#f0a500" stroke-width="2.5"/>
    <polygon points="110,58 110,92 145,75" stroke="#f0a500" stroke-width="2.5" fill="rgba(240,165,0,0.2)"/>
    <line x1="145" y1="58" x2="145" y2="92" stroke="#f0a500" stroke-width="3.5"/>
    <line x1="145" y1="75" x2="210" y2="75" stroke="#f0a500" stroke-width="2.5"/>
    <rect x="210" y="60" width="40" height="30" rx="3" stroke="#6b7280" stroke-width="2" fill="rgba(255,255,255,0.03)"/>
    <text x="230" y="79" text-anchor="middle" fill="#6b7280" font-size="10" font-family="DM Mono">RL</text>
    <line x1="250" y1="75" x2="270" y2="75" stroke="#f0a500" stroke-width="2.5"/>
    <line x1="270" y1="75" x2="270" y2="120" stroke="#6b7280" stroke-width="2"/>
    <line x1="12" y1="75" x2="12" y2="120" stroke="#6b7280" stroke-width="2"/>
    <line x1="12" y1="120" x2="270" y2="120" stroke="#6b7280" stroke-width="2"/>
    <text x="150" y="140" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">GND (return)</text>
  </svg>`,

  bridgeRect: `<svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="100" r="28" stroke="#6b7280" stroke-width="2" fill="transparent"/>
    <text x="40" y="97" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">AC</text>
    <text x="40" y="108" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">~</text>
    <line x1="68" y1="85" x2="130" y2="60" stroke="#f0a500" stroke-width="2"/>
    <line x1="68" y1="115" x2="130" y2="140" stroke="#f0a500" stroke-width="2"/>
    <!-- 4 diodes in bridge -->
    <polygon points="130,50 130,70 155,60" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.2)"/>
    <line x1="155" y1="50" x2="155" y2="70" stroke="#f0a500" stroke-width="2.5"/>
    <polygon points="130,130 130,150 155,140" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.2)"/>
    <line x1="155" y1="130" x2="155" y2="150" stroke="#f0a500" stroke-width="2.5"/>
    <polygon points="155,50 180,60 155,70" stroke="#00d4aa" stroke-width="2" fill="rgba(0,212,170,0.2)"/>
    <line x1="155" y1="50" x2="155" y2="70" stroke="#00d4aa" stroke-width="2.5"/>
    <polygon points="155,130 180,140 155,150" stroke="#00d4aa" stroke-width="2" fill="rgba(0,212,170,0.2)"/>
    <line x1="155" y1="130" x2="155" y2="150" stroke="#00d4aa" stroke-width="2.5"/>
    <line x1="180" y1="60" x2="220" y2="40" stroke="#00d4aa" stroke-width="2"/>
    <line x1="180" y1="140" x2="220" y2="160" stroke="#6b7280" stroke-width="2"/>
    <line x1="220" y1="40" x2="260" y2="40" stroke="#00d4aa" stroke-width="2.5"/>
    <line x1="220" y1="160" x2="260" y2="160" stroke="#6b7280" stroke-width="2"/>
    <text x="265" y="44" fill="#00d4aa" font-size="10" font-family="DM Mono">DC+</text>
    <text x="265" y="164" fill="#6b7280" font-size="10" font-family="DM Mono">GND</text>
  </svg>`,

  npnSwitch: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="85" width="50" height="30" rx="4" stroke="#00d4aa" stroke-width="2" fill="rgba(0,212,170,0.1)"/>
    <text x="35" y="103" text-anchor="middle" fill="#00d4aa" font-size="9" font-family="DM Mono">MCU GPIO</text>
    <line x1="60" y1="100" x2="90" y2="100" stroke="#f0a500" stroke-width="2.5"/>
    <rect x="90" y="92" width="30" height="16" rx="2" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="105" y="85" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">10kΩ</text>
    <line x1="120" y1="100" x2="145" y2="100" stroke="#f0a500" stroke-width="2.5"/>
    <circle cx="160" cy="100" r="22" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.05)"/>
    <line x1="145" y1="100" x2="153" y2="100" stroke="#f0a500" stroke-width="2"/>
    <line x1="153" y1="82" x2="153" y2="118" stroke="#f0a500" stroke-width="3"/>
    <line x1="153" y1="90" x2="175" y2="72" stroke="#f0a500" stroke-width="2"/>
    <line x1="153" y1="110" x2="175" y2="128" stroke="#f0a500" stroke-width="2"/>
    <polygon points="165,76 175,72 172,83" fill="#f0a500"/>
    <line x1="175" y1="72" x2="195" y2="55" stroke="#f0a500" stroke-width="2"/>
    <line x1="175" y1="128" x2="195" y2="145" stroke="#f0a500" stroke-width="2"/>
    <line x1="195" y1="55" x2="195" y2="30" stroke="#f0a500" stroke-width="2"/>
    <line x1="195" y1="30" x2="220" y2="30" stroke="#f0a500" stroke-width="2"/>
    <text x="225" y="34" fill="#e05a5a" font-size="10" font-family="DM Mono">VCC+LED</text>
    <line x1="195" y1="145" x2="195" y2="170" stroke="#6b7280" stroke-width="2"/>
    <line x1="180" y1="170" x2="210" y2="170" stroke="#6b7280" stroke-width="2"/>
    <text x="195" y="185" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">GND</text>
  </svg>`,

  invertingAmp: `<svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="80" x2="50" y2="80" stroke="#f0a500" stroke-width="2"/>
    <text x="10" y="72" fill="#f0a500" font-size="9" font-family="DM Mono">Vin</text>
    <rect x="50" y="72" width="35" height="16" rx="2" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="67" y="65" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">R1</text>
    <line x1="85" y1="80" x2="120" y2="80" stroke="#f0a500" stroke-width="2"/>
    <polygon points="120,55 120,145 200,100" stroke="#00d4aa" stroke-width="2.5" fill="rgba(0,212,170,0.07)"/>
    <line x1="200" y1="100" x2="250" y2="100" stroke="#00d4aa" stroke-width="2.5"/>
    <text x="252" y="104" fill="#00d4aa" font-size="9" font-family="DM Mono">Vout</text>
    <!-- Feedback -->
    <line x1="225" y1="100" x2="225" y2="60" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,2"/>
    <line x1="225" y1="60" x2="102" y2="60" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,2"/>
    <rect x="150" y="52" width="30" height="16" rx="2" stroke="#6b7280" stroke-width="1.5" fill="rgba(255,255,255,0.03)"/>
    <text x="165" y="45" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">Rf</text>
    <line x1="102" y1="60" x2="102" y2="80" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,2"/>
    <line x1="120" y1="120" x2="100" y2="120" stroke="#6b7280" stroke-width="2"/>
    <line x1="100" y1="120" x2="100" y2="155" stroke="#6b7280" stroke-width="2"/>
    <line x1="85" y1="155" x2="115" y2="155" stroke="#6b7280" stroke-width="2"/>
    <text x="100" y="170" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">GND (V+)</text>
    <text x="130" y="85" fill="#e8eaf0" font-size="10" font-family="DM Mono">-</text>
    <text x="130" y="122" fill="#e8eaf0" font-size="10" font-family="DM Mono">+</text>
  </svg>`,

  mosfetSwitch: `<svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="88" width="45" height="25" rx="3" stroke="#00d4aa" stroke-width="2" fill="rgba(0,212,170,0.1)"/>
    <text x="32" y="104" text-anchor="middle" fill="#00d4aa" font-size="8" font-family="DM Mono">GPIO</text>
    <line x1="55" y1="100" x2="80" y2="100" stroke="#a78bfa" stroke-width="2"/>
    <rect x="80" y="93" width="28" height="14" rx="2" stroke="#a78bfa" stroke-width="2" fill="rgba(167,139,250,0.1)"/>
    <text x="94" y="87" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">10kΩ</text>
    <line x1="108" y1="100" x2="130" y2="100" stroke="#a78bfa" stroke-width="2"/>
    <!-- MOSFET symbol simplified -->
    <circle cx="155" cy="100" r="28" stroke="#a78bfa" stroke-width="2" fill="rgba(167,139,250,0.05)"/>
    <text x="155" y="97" text-anchor="middle" fill="#a78bfa" font-size="9" font-family="DM Mono">N-MOS</text>
    <text x="155" y="109" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">G  D  S</text>
    <line x1="183" y1="88" x2="210" y2="60" stroke="#a78bfa" stroke-width="2"/>
    <line x1="183" y1="112" x2="210" y2="140" stroke="#a78bfa" stroke-width="2"/>
    <line x1="210" y1="60" x2="210" y2="30" stroke="#a78bfa" stroke-width="2"/>
    <text x="215" y="28" fill="#f0a500" font-size="9" font-family="DM Mono">VDD + Load</text>
    <line x1="210" y1="140" x2="210" y2="170" stroke="#6b7280" stroke-width="2"/>
    <line x1="195" y1="170" x2="225" y2="170" stroke="#6b7280" stroke-width="2"/>
    <text x="210" y="185" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">GND</text>
  </svg>`,

  zenerReg: `<svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="55" fill="#f0a500" font-size="10" font-family="DM Mono">Vin</text>
    <line x1="35" y1="50" x2="80" y2="50" stroke="#f0a500" stroke-width="2.5"/>
    <rect x="80" y="42" width="35" height="16" rx="2" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="97" y="37" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">Rs</text>
    <line x1="115" y1="50" x2="160" y2="50" stroke="#f0a500" stroke-width="2.5"/>
    <text x="165" y="42" fill="#00d4aa" font-size="10" font-family="DM Mono">Vout</text>
    <!-- Zener -->
    <line x1="140" y1="50" x2="140" y2="70" stroke="#38bdf8" stroke-width="2"/>
    <polygon points="125,70 125,100 155,85" stroke="#38bdf8" stroke-width="2" fill="rgba(56,189,248,0.15)"/>
    <path d="M145 70 L155 70 L155 100 L165 100" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
    <line x1="155" y1="85" x2="155" y2="110" stroke="#38bdf8" stroke-width="2"/>
    <line x1="140" y1="110" x2="170" y2="110" stroke="#6b7280" stroke-width="2"/>
    <text x="155" y="125" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">GND</text>
    <!-- Load -->
    <line x1="160" y1="50" x2="215" y2="50" stroke="#00d4aa" stroke-width="2"/>
    <rect x="215" y="40" width="25" height="50" rx="2" stroke="#00d4aa" stroke-width="2" fill="rgba(0,212,170,0.08)"/>
    <text x="227" y="70" text-anchor="middle" fill="#00d4aa" font-size="9" font-family="DM Mono">RL</text>
    <line x1="227" y1="90" x2="227" y2="110" stroke="#6b7280" stroke-width="2"/>
    <line x1="215" y1="110" x2="240" y2="110" stroke="#6b7280" stroke-width="2"/>
  </svg>`,

  ledResistor: `<svg viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="45" fill="#f0a500" font-size="10" font-family="DM Mono">5V</text>
    <line x1="30" y1="50" x2="70" y2="50" stroke="#f0a500" stroke-width="2.5"/>
    <rect x="70" y="40" width="40" height="20" rx="2" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="90" y="35" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">150Ω</text>
    <line x1="110" y1="50" x2="145" y2="50" stroke="#f0a500" stroke-width="2.5"/>
    <polygon points="145,35 145,65 180,50" stroke="#e05a5a" stroke-width="2.5" fill="rgba(224,90,90,0.3)"/>
    <line x1="180" y1="35" x2="180" y2="65" stroke="#e05a5a" stroke-width="3.5"/>
    <line x1="185" y1="30" x2="200" y2="15" stroke="#f0a500" stroke-width="1.5" stroke-dasharray="3,2"/>
    <line x1="190" y1="38" x2="208" y2="28" stroke="#f0a500" stroke-width="1.5" stroke-dasharray="3,2"/>
    <line x1="180" y1="50" x2="250" y2="50" stroke="#e05a5a" stroke-width="2.5"/>
    <line x1="250" y1="50" x2="250" y2="90" stroke="#6b7280" stroke-width="2"/>
    <line x1="30" y1="50" x2="30" y2="90" stroke="#6b7280" stroke-width="2"/>
    <line x1="30" y1="90" x2="250" y2="90" stroke="#6b7280" stroke-width="2"/>
    <text x="140" y="108" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">GND return</text>
    <text x="163" y="45" fill="#e8eaf0" font-size="9" font-family="DM Mono">A</text>
    <text x="183" y="45" fill="#e8eaf0" font-size="9" font-family="DM Mono">K</text>
  </svg>`,

  ldrDivider: `<svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="100" y="22" text-anchor="middle" fill="#f0a500" font-size="10" font-family="DM Mono">5V (VCC)</text>
    <line x1="100" y1="28" x2="100" y2="50" stroke="#f0a500" stroke-width="2.5"/>
    <!-- LDR -->
    <rect x="78" y="50" width="44" height="35" rx="3" stroke="#38bdf8" stroke-width="2" fill="rgba(56,189,248,0.1)"/>
    <text x="100" y="72" text-anchor="middle" fill="#38bdf8" font-size="9" font-family="DM Mono">LDR</text>
    <line x1="92" y1="38" x2="104" y2="25" stroke="#f0a500" stroke-width="1.5" stroke-dasharray="3,2"/>
    <line x1="104" y1="38" x2="116" y2="25" stroke="#f0a500" stroke-width="1.5" stroke-dasharray="3,2"/>
    <line x1="100" y1="85" x2="100" y2="110" stroke="#38bdf8" stroke-width="2.5"/>
    <!-- ADC output -->
    <line x1="100" y1="110" x2="160" y2="110" stroke="#00d4aa" stroke-width="2" stroke-dasharray="4,2"/>
    <text x="165" y="114" fill="#00d4aa" font-size="9" font-family="DM Mono">→ ADC</text>
    <!-- Fixed R -->
    <rect x="78" y="110" width="44" height="35" rx="3" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="100" y="132" text-anchor="middle" fill="#f0a500" font-size="9" font-family="DM Mono">10kΩ</text>
    <line x1="100" y1="145" x2="100" y2="175" stroke="#6b7280" stroke-width="2.5"/>
    <line x1="82" y1="175" x2="118" y2="175" stroke="#6b7280" stroke-width="2"/>
    <text x="100" y="195" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">GND</text>
  </svg>`,

  rlFilter: `<svg viewBox="0 0 300 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="45" fill="#a78bfa" font-size="10" font-family="DM Mono">Vin</text>
    <line x1="35" y1="50" x2="65" y2="50" stroke="#a78bfa" stroke-width="2.5"/>
    <path d="M65 50 Q73 35 81 50 Q89 35 97 50 Q105 35 113 50 Q121 35 129 50 Q137 35 145 50" stroke="#a78bfa" stroke-width="2.5" fill="none"/>
    <text x="105" y="38" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">L</text>
    <line x1="145" y1="50" x2="190" y2="50" stroke="#a78bfa" stroke-width="2.5"/>
    <rect x="190" y="38" width="35" height="24" rx="3" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="207" y="33" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">R</text>
    <line x1="225" y1="50" x2="265" y2="50" stroke="#00d4aa" stroke-width="2.5"/>
    <text x="265" y="45" fill="#00d4aa" font-size="10" font-family="DM Mono">Vout</text>
    <line x1="207" y1="62" x2="207" y2="100" stroke="#6b7280" stroke-width="2"/>
    <line x1="35" y1="50" x2="35" y2="100" stroke="#6b7280" stroke-width="2"/>
    <line x1="35" y1="100" x2="265" y2="100" stroke="#6b7280" stroke-width="2"/>
    <text x="150" y="115" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">GND</text>
  </svg>`,

  stepDownPSU: `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="50" fill="#e05a5a" font-size="9" font-family="DM Mono">230V AC</text>
    <line x1="10" y1="60" x2="50" y2="60" stroke="#e05a5a" stroke-width="2"/>
    <line x1="10" y1="80" x2="50" y2="80" stroke="#e05a5a" stroke-width="2"/>
    <!-- Transformer -->
    <rect x="50" y="45" width="60" height="50" rx="4" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.07)"/>
    <text x="80" y="73" text-anchor="middle" fill="#f0a500" font-size="9" font-family="DM Mono">XFMR</text>
    <text x="80" y="84" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">12V AC</text>
    <line x1="110" y1="60" x2="140" y2="60" stroke="#f0a500" stroke-width="2"/>
    <line x1="110" y1="80" x2="140" y2="80" stroke="#f0a500" stroke-width="2"/>
    <!-- Bridge -->
    <rect x="140" y="48" width="45" height="44" rx="3" stroke="#00d4aa" stroke-width="2" fill="rgba(0,212,170,0.07)"/>
    <text x="162" y="71" text-anchor="middle" fill="#00d4aa" font-size="8" font-family="DM Mono">Bridge</text>
    <text x="162" y="82" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">Rectifier</text>
    <line x1="185" y1="60" x2="215" y2="60" stroke="#00d4aa" stroke-width="2"/>
    <!-- Cap -->
    <line x1="215" y1="45" x2="215" y2="55" stroke="#00d4aa" stroke-width="2"/>
    <line x1="205" y1="55" x2="225" y2="55" stroke="#00d4aa" stroke-width="3"/>
    <line x1="205" y1="63" x2="225" y2="63" stroke="#00d4aa" stroke-width="3"/>
    <line x1="215" y1="63" x2="215" y2="92" stroke="#6b7280" stroke-width="2"/>
    <text x="230" y="60" fill="#6b7280" font-size="8" font-family="DM Mono">1000µF</text>
    <line x1="215" y1="60" x2="245" y2="60" stroke="#00d4aa" stroke-width="2"/>
    <!-- Regulator -->
    <rect x="245" y="48" width="40" height="30" rx="3" stroke="#38bdf8" stroke-width="2" fill="rgba(56,189,248,0.07)"/>
    <text x="265" y="64" text-anchor="middle" fill="#38bdf8" font-size="8" font-family="DM Mono">LM7812</text>
    <line x1="285" y1="60" x2="310" y2="60" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="305" y="52" fill="#38bdf8" font-size="9" font-family="DM Mono">12V DC</text>
    <line x1="185" y1="92" x2="265" y2="92" stroke="#6b7280" stroke-width="2"/>
    <text x="155" y="130" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">GND bus</text>
  </svg>`,

  scrDimmer: `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="90" r="25" stroke="#6b7280" stroke-width="2" fill="transparent"/>
    <text x="35" y="87" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">AC</text>
    <text x="35" y="97" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">~</text>
    <line x1="60" y1="90" x2="90" y2="90" stroke="#e05a5a" stroke-width="2.5"/>
    <polygon points="90,75 90,105 120,90" stroke="#e05a5a" stroke-width="2.5" fill="rgba(224,90,90,0.2)"/>
    <line x1="120" y1="75" x2="120" y2="105" stroke="#e05a5a" stroke-width="3"/>
    <line x1="108" y1="100" x2="108" y2="130" stroke="#e05a5a" stroke-width="2"/>
    <line x1="108" y1="130" x2="80" y2="130" stroke="#e05a5a" stroke-width="2"/>
    <rect x="50" y="122" width="30" height="16" rx="2" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="65" y="134" text-anchor="middle" fill="#f0a500" font-size="8" font-family="DM Mono">RC</text>
    <text x="65" y="155" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">Phase ctrl</text>
    <line x1="120" y1="90" x2="165" y2="90" stroke="#e05a5a" stroke-width="2.5"/>
    <rect x="165" y="75" width="60" height="30" rx="3" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.08)"/>
    <text x="195" y="92" text-anchor="middle" fill="#f0a500" font-size="9" font-family="DM Mono">LOAD</text>
    <line x1="225" y1="90" x2="275" y2="90" stroke="#6b7280" stroke-width="2.5"/>
    <line x1="275" y1="90" x2="275" y2="140" stroke="#6b7280" stroke-width="2"/>
    <line x1="10" y1="90" x2="10" y2="140" stroke="#6b7280" stroke-width="2"/>
    <line x1="10" y1="140" x2="275" y2="140" stroke="#6b7280" stroke-width="2"/>
    <text x="140" y="160" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">AC return / neutral</text>
  </svg>`,

  ceAmplifier: `<svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="35" fill="#f0a500" font-size="9" font-family="DM Mono">VCC</text>
    <line x1="150" y1="30" x2="150" y2="55" stroke="#f0a500" stroke-width="2.5"/>
    <rect x="135" y="55" width="30" height="20" rx="2" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.1)"/>
    <text x="150" y="50" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">Rc</text>
    <line x1="150" y1="75" x2="150" y2="95" stroke="#f0a500" stroke-width="2.5"/>
    <circle cx="165" cy="100" r="20" stroke="#f0a500" stroke-width="2" fill="rgba(240,165,0,0.05)"/>
    <text x="165" y="104" text-anchor="middle" fill="#f0a500" font-size="8" font-family="DM Mono">NPN</text>
    <line x1="145" y1="100" x2="155" y2="100" stroke="#f0a500" stroke-width="2"/>
    <line x1="155" y1="88" x2="155" y2="112" stroke="#f0a500" stroke-width="2.5"/>
    <line x1="155" y1="93" x2="175" y2="82" stroke="#f0a500" stroke-width="2"/>
    <line x1="155" y1="107" x2="175" y2="118" stroke="#f0a500" stroke-width="2"/>
    <polygon points="166,85 175,82 173,92" fill="#f0a500"/>
    <!-- Base bias -->
    <rect x="80" y="55" width="25" height="18" rx="2" stroke="#6b7280" stroke-width="1.5" fill="rgba(255,255,255,0.03)"/>
    <text x="92" y="68" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">R1</text>
    <rect x="80" y="82" width="25" height="18" rx="2" stroke="#6b7280" stroke-width="1.5" fill="rgba(255,255,255,0.03)"/>
    <text x="92" y="95" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">R2</text>
    <line x1="92" y1="55" x2="92" y2="30" stroke="#f0a500" stroke-width="1.5"/>
    <line x1="92" y1="73" x2="92" y2="82" stroke="#6b7280" stroke-width="1.5"/>
    <line x1="92" y1="100" x2="105" y2="100" stroke="#6b7280" stroke-width="1.5"/>
    <line x1="105" y1="100" x2="145" y2="100" stroke="#6b7280" stroke-width="1.5"/>
    <!-- Input coupling cap -->
    <line x1="20" y1="100" x2="50" y2="100" stroke="#00d4aa" stroke-width="2"/>
    <text x="20" y="93" fill="#00d4aa" font-size="9" font-family="DM Mono">Vin</text>
    <line x1="50" y1="88" x2="50" y2="112" stroke="#00d4aa" stroke-width="3"/>
    <line x1="58" y1="88" x2="58" y2="112" stroke="#00d4aa" stroke-width="3"/>
    <line x1="58" y1="100" x2="92" y2="100" stroke="#00d4aa" stroke-width="2"/>
    <!-- Output -->
    <line x1="175" y1="82" x2="150" y2="75" stroke="#f0a500" stroke-width="2"/>
    <line x1="175" y1="118" x2="175" y2="165" stroke="#6b7280" stroke-width="2"/>
    <line x1="155" y1="165" x2="195" y2="165" stroke="#6b7280" stroke-width="2"/>
    <text x="175" y="182" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">GND (Re)</text>
    <!-- Collector output -->
    <line x1="150" y1="75" x2="235" y2="75" stroke="#00d4aa" stroke-width="2" stroke-dasharray="4,2"/>
    <line x1="235" y1="75" x2="235" y2="87" stroke="#00d4aa" stroke-width="2"/>
    <line x1="235" y1="87" x2="243" y2="87" stroke="#00d4aa" stroke-width="3"/>
    <line x1="235" y1="93" x2="243" y2="93" stroke="#00d4aa" stroke-width="3"/>
    <line x1="243" y1="90" x2="275" y2="90" stroke="#00d4aa" stroke-width="2"/>
    <text x="275" y="94" fill="#00d4aa" font-size="9" font-family="DM Mono">Vout</text>
  </svg>`,

  nonInvertingAmp: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="115" x2="115" y2="115" stroke="#f0a500" stroke-width="2.5"/>
    <text x="10" y="107" fill="#f0a500" font-size="9" font-family="DM Mono">Vin</text>
    <polygon points="115,75 115,155 195,115" stroke="#00d4aa" stroke-width="2.5" fill="rgba(0,212,170,0.07)"/>
    <text x="125" y="92" fill="#e8eaf0" font-size="10" font-family="DM Mono">-</text>
    <text x="125" y="125" fill="#e8eaf0" font-size="10" font-family="DM Mono">+</text>
    <line x1="195" y1="115" x2="250" y2="115" stroke="#00d4aa" stroke-width="2.5"/>
    <text x="252" y="119" fill="#00d4aa" font-size="9" font-family="DM Mono">Vout</text>
    <!-- Feedback to V- -->
    <line x1="222" y1="115" x2="222" y2="90" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,2"/>
    <line x1="222" y1="90" x2="148" y2="90" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,2"/>
    <rect x="148" y="82" width="28" height="16" rx="2" stroke="#6b7280" stroke-width="1.5" fill="rgba(255,255,255,0.03)"/>
    <text x="162" y="94" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">Rf</text>
    <line x1="148" y1="90" x2="115" y2="90" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,2"/>
    <rect x="115" y="90" width="0" height="0"/>
    <!-- R1 to GND -->
    <line x1="115" y1="90" x2="90" y2="90" stroke="#6b7280" stroke-width="1.5"/>
    <rect x="70" y="82" width="20" height="16" rx="2" stroke="#6b7280" stroke-width="1.5" fill="rgba(255,255,255,0.03)"/>
    <text x="80" y="94" text-anchor="middle" fill="#6b7280" font-size="8" font-family="DM Mono">R1</text>
    <line x1="70" y1="90" x2="50" y2="90" stroke="#6b7280" stroke-width="1.5"/>
    <line x1="50" y1="90" x2="50" y2="150" stroke="#6b7280" stroke-width="2"/>
    <line x1="35" y1="150" x2="65" y2="150" stroke="#6b7280" stroke-width="2"/>
    <text x="50" y="165" text-anchor="middle" fill="#6b7280" font-size="9" font-family="DM Mono">GND</text>
  </svg>`,
};

// ─── STATE ────────────────────────────────────────────────────────
let currentComponent = null;
let currentQuizIndex = 0;
let quizAnswered = false;

// ─── RENDER CARDS ─────────────────────────────────────────────────
function renderCards(list){
  const grid = document.getElementById('componentsGrid');
  grid.innerHTML = '';
  list.forEach(c => {
    const badgeClass = `badge-${c.category}`;
    const div = document.createElement('div');
    div.className = 'component-card';
    div.setAttribute('data-filter-card', c.category);
    div.onclick = () => openDetail(c.id);
    div.innerHTML = `
      <div class="card-image">
        <span class="card-category-badge ${badgeClass}">${c.category}</span>
        ${svgSymbols[c.id] || `<svg viewBox="0 0 200 200"><text x="100" y="105" text-anchor="middle" fill="#6b7280" font-size="12" font-family="DM Mono">${c.name}</text></svg>`}
      </div>
      <div class="card-body">
        <div class="card-name">${c.name}</div>
        <div class="card-symbol">${c.symbol.split('|')[0]}</div>
        <div class="card-desc">${c.desc}</div>
      </div>
      <div class="card-footer">
        <div class="card-tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="card-arrow">→</div>
      </div>`;
    grid.appendChild(div);
  });
}

renderCards(components);

// ─── FILTERS ──────────────────────────────────────────────────────
function filterCategory(cat, btn){
  document.querySelectorAll('.pill').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  const cards = document.querySelectorAll('[data-filter-card]');
  cards.forEach(card => {
    if(cat==='all' || card.getAttribute('data-filter-card')===cat){
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

function filterSearch(val){
  const v = val.toLowerCase();
  const cards = document.querySelectorAll('[data-filter-card]');
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.classList.toggle('hidden', !text.includes(v));
  });
}

// ─── NAVIGATION ───────────────────────────────────────────────────
function showHome(){
  document.getElementById('home-page').classList.add('active');
  document.getElementById('detail-page').classList.remove('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

function openDetail(id){
  const comp = components.find(c=>c.id===id);
  if(!comp) return;
  currentComponent = comp;
  currentQuizIndex = 0;
  quizAnswered = false;

  // Breadcrumb & header
  document.getElementById('detail-breadcrumb').textContent = comp.name;
  document.getElementById('detail-name').textContent = comp.name;
  document.getElementById('detail-symbol').textContent = comp.symbol;
  document.getElementById('detail-description').textContent = comp.desc;

  // Badge
  const catLabels = {passive:'Passive Component',active:'Active Component',power:'Power Component',ic:'Integrated Circuit',sensor:'Sensor'};
  const catClass = `badge-${comp.category}`;
  document.getElementById('detail-category-badge').innerHTML =
    `<span class="card-category-badge ${catClass}" style="margin-bottom:0.75rem;display:inline-block">${catLabels[comp.category]||comp.category}</span>`;

  // Image
  document.getElementById('detail-main-image').innerHTML =
    svgSymbols[comp.id] || `<div style="color:var(--muted);font-size:0.8rem">${comp.name}</div>`;

  // Specs
  document.getElementById('detail-specs').innerHTML =
    comp.specs.map(s=>`<div class="spec-item"><div class="spec-label">${s.label}</div><div class="spec-value">${s.value}</div></div>`).join('');

  // Overview
  document.getElementById('how-it-works').textContent = comp.howItWorks;
  document.getElementById('advantages-list').innerHTML =
    comp.advantages.map(a=>`<li>${a}</li>`).join('');
  document.getElementById('disadvantages-list').innerHTML =
    comp.disadvantages.map(d=>`<li>${d}</li>`).join('');

  // Wiring
  document.getElementById('wiring-container').innerHTML =
    comp.wiringDiagrams.map(w=>`
      <div class="wiring-card">
        <div class="wiring-card-header">
          <h3>${w.title}</h3>
          <span class="wiring-difficulty diff-${w.difficulty}">${w.difficulty}</span>
        </div>
        <div class="wiring-body">
          <div class="wiring-svg-wrap">${wiringSVGs[w.svgKey]||'<span style="color:var(--muted)">Diagram</span>'}</div>
          <div class="wiring-steps">
            <h4>Step-by-Step Wiring</h4>
            <ol class="step-list">${w.steps.map((s,i)=>`<li><span class="step-num">${i+1}</span><span>${s}</span></li>`).join('')}</ol>
          </div>
        </div>
      </div>`).join('');

  // Formulas
  document.getElementById('formulas-container').innerHTML =
    comp.formulas.map(f=>`
      <div class="formula-section">
        <div class="section-label">${f.label}</div>
        <div class="formula-box">${f.formula}</div>
        <div class="formula-desc">${f.desc}</div>
      </div>`).join('');

  // Applications
  document.getElementById('applications-desc').textContent = comp.applicationDesc;
  document.getElementById('applications-grid').innerHTML =
    comp.applications.map(a=>`<div class="app-card"><div class="app-icon">${a.icon}</div><div class="app-name">${a.name}</div></div>`).join('');

  // Quiz
  loadQuizQuestion(comp.quiz[0]);

  // Switch to overview tab
  document.querySelectorAll('.dtab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-overview').classList.add('active');
  document.querySelector('.dtab').classList.add('active');

  // Show
  document.getElementById('home-page').classList.remove('active');
  document.getElementById('detail-page').classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

// ─── TABS ─────────────────────────────────────────────────────────
function switchTab(tab, btn){
  document.querySelectorAll('.dtab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-'+tab).classList.add('active');
}

// ─── QUIZ ─────────────────────────────────────────────────────────
function loadQuizQuestion(q){
  if(!q) return;
  quizAnswered = false;
  document.getElementById('quiz-question').textContent = `Q${currentQuizIndex+1}. ${q.q}`;
  document.getElementById('quiz-options').innerHTML =
    q.opts.map((o,i)=>`<button class="quiz-opt" onclick="answerQuiz(${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join('');
  document.getElementById('quiz-feedback').className = 'quiz-feedback';
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('quiz-next-btn').style.display = 'none';
}

function answerQuiz(idx){
  if(quizAnswered || !currentComponent) return;
  quizAnswered = true;
  const q = currentComponent.quiz[currentQuizIndex];
  const opts = document.querySelectorAll('.quiz-opt');
  opts[q.answer].classList.add('correct');
  if(idx !== q.answer) opts[idx].classList.add('wrong');
  const fb = document.getElementById('quiz-feedback');
  fb.textContent = (idx===q.answer ? '✓ Correct! ' : '✗ Incorrect. ') + q.explanation;
  fb.className = 'quiz-feedback show ' + (idx===q.answer ? 'correct' : 'wrong');
  if(currentQuizIndex < currentComponent.quiz.length-1){
    document.getElementById('quiz-next-btn').style.display = 'inline-block';
  }
}

function nextQuestion(){
  currentQuizIndex++;
  if(currentComponent && currentQuizIndex < currentComponent.quiz.length){
    loadQuizQuestion(currentComponent.quiz[currentQuizIndex]);
  }
}