const couchModel = require('../models/couchConnectionModel');
const couchConn  = new couchModel('localhost', '5984');
const couchAdapter = require('../lib/couchAdapter');
const couchdb = new couchAdapter(couchConn);

const skillCollection = couchdb.createDatabase('skills');
skillCollection.bulk({docs: [{
    _id: 'archery',
    name: 'Archery',
    type: 'active',
    group: 'Combat',
    attribute: 'Agility',
    default: true,
    skillGroup: null,
    specializations: [
        'Bow',
        'Crossbow',
        'Non-Standard',
        'Ammunition',
        'Slingshot'
    ]
},
{
    _id: 'automatics',
    name: 'Automatics',
    type: 'active',
    group: 'Combat',
    attribute: 'Agility',
    default: true,
    skillGroup: 'Firearms',
    specializations: [
        'Assault Rifles',
        'Cyber-Implant',
        'Machine Pistols',
        'Submachine Guns'
    ]
}, {
    _id: 'blades',
    name: 'Blades',
    type: 'active',
    group: 'Combat',
    attribute: 'Agility',
    default: true,
    skillGroup: 'Close Combat',
    specializations: [
        'Axes',
        'Knives',
        'Swords',
        'Parrying'
    ]
}, {
    _id: 'clubs',
    name: 'Clubs',
    type: 'active',
    group: 'Combat',
    attribute: 'Agility',
    default: true,
    skillGroup: 'Close Combat',
    specializations: [
        'Batons',
        'Hammers',
        'Saps',
        'Staves',
        'Parrying'
    ]
}, {
    _id: 'exotic_ranged_weapon',
    name: 'Exotic Ranged Weapon (Specific)',
    type: 'active',
    group: 'Combat',
    attribute: 'Agility',
    default: false,
    skillGroup: null,
    specializations: null
}, {
    _id: 'heavy_weapons',
    name: 'Heavy Weapons',
    type: 'active',
    group: 'Combat',
    attribute: 'Agility',
    default: true,
    skillGroup: null,
    specializations: [
        'Assault Cannons',
        'Grenade Launchers',
        'Guided Missles',
        'Machine Guns',
        'Rocket Launchers'
    ]
}, {
    _id: 'longarms',
    name: 'Longarms',
    type: 'active',
    group: 'Combat',
    attribute: 'Agility',
    default: true,
    skillGroup: 'Firearms',
    specializations: [
        'Extended-Range Shots',
        'Long-Range Shots',
        'Shotguns',
        'Sniper Rifles'
    ]
}, {
    _id: 'pistols',
    name: 'Pistols',
    type: 'active',
    group: 'Combat',
    attribute: 'Agility',
    default: true,
    skillGroup: 'Firearms',
    specializations: [
        'Holdouts',
        'Revolvers',
        'Semi-Automatics',
        'Tasers'
    ]
}, {
    _id: 'throwing_weapons',
    name: 'Throwing Weapons',
    type: 'active',
    group: 'Combat',
    attribute: 'Agility',
    default: true,
    skillGroup: null,
    specializations: [
        'Aerodynamic',
        'Blades',
        'Non-Aerodynamic'
    ]
}, {
    _id: 'unarmed_combat',
    name: 'Unarmed Combat',
    type: 'active',
    group: 'Combat',
    attribute: 'Agility',
    default: true,
    skillGroup: 'Close Combat',
    specializations: [
        'Blocking',
        'Cyber-Implants',
        'Subduing Combat',
        'Martial Arts'
    ]
}, {
    _id: 'disguise',
    name: 'Disguise',
    type: 'active',
    group: 'Physical',
    attribute: 'Intuition',
    default: true,
    skillGroup: 'Stealth',
    specializations: [
        'Camoflage',
        'Cosmetic',
        'Theatrical',
        'Trideo & Video'
    ]
}, {
    _id: 'diving',
    name: 'Diving',
    type: 'active',
    group: 'Physical',
    attribute: 'Body',
    default: true,
    skillGroup: null,
    specializations: [
        { 
            apparatus: [
                'Liquid Breathing',
                'Mixed Gas',
                'Oxygen Extraction',
                'SCUBA'
            ],
            condition: [
                'Arctic',
                'Cave',
                'Commercial',
                'Military'
            ],
            other: [
                'Controlled Hyperventilation'
            ]
        }
    ]
}, {
    _id: 'escape_artist',
    name: 'Escape Artist',
    type: 'active',
    group: 'Physical',
    attribute: 'Agility',
    default: true,
    skillGroup: null,
    specializations: [
        {
            restraint: [
                'Cuffs',
                'Ropes',
                'Zip Ties'
            ],
            other: [
                'Contortionism'
            ]
        }
    ]
}, {
    _id: 'free_fall',
    name: 'Free-Fall',
    type: 'active',
    group: 'Physical',
    attribute: 'Body',
    default: true,
    skillGroup: null,
    specializations: [
        'BASE Jumping',
        'Break-Fall',
        'Bungee',
        'HALO',
        'Low Altitude',
        'Parachute',
        'Static Line',
        'Wingsuit',
        'Zip Line'
    ]
}, {
    _id: 'gymnastics',
    name: 'Gymnastics',
    type: 'active',
    group: 'Physical',
    attribute: 'Agility',
    default: true,
    skillGroup: 'Athletics',
    specializations: [
        'Balance',
        'Climbing',
        'Dance',
        'Leaping',
        'Parkour',
        'Rolling'
    ]
}, {
    _id: 'palming',
    name: 'Palming',
    type: 'active',
    group: 'Physical',
    attribute: 'Agility',
    default: false,
    skillGroup: 'Stealth',
    specializations: [
        'Legerdmain',
        'Pickpocket',
        'Pilfering'
    ]
}, {
    _id: 'perception',
    name: 'Perception',
    type: 'active',
    group: 'Physical',
    attribute: 'Intuition',
    default: true,
    skillGroup: null,
    specializations: [
        'Hearing',
        'Scent',
        'Searching',
        'Taste',
        'Touch',
        'Visual'
    ]
}, {
    _id: 'running',
    name: 'Running',
    type: 'active',
    group: 'Physical',
    attribute: 'Strength',
    default: true,
    skillGroup: 'Athletics',
    specializations: [
        {
            terrain: [
                'Desert',
                'Urban',
                'Wilderness'
            ],
            other: [
                'Distance',
                'Sprinting'
            ]
        }
    ]
}, {
    _id: 'sneaking',
    name: 'Sneaking',
    group: 'Physical',
    type: 'active',
    attribute: 'Agility',
    default: true,
    skillGroup: 'Stealth',
    specialization: [
        'Jungle',
        'Urban',
        'Desert'
    ]
}, {
    _id: 'survival',
    name: 'Survival',
    type: 'active',
    group: 'Physical',
    attribute: 'Willpower',
    default: true,
    skillGroup: 'Outdoors',
    specialization: [
        'Desert',
        'Forest',
        'Jungle',
        'Mountain',
        'Polar',
        'Urban'
    ]
}, {
    _id: 'swimming',
    name: 'Swimming',
    type: 'active',
    group: 'Physical',
    attribute: 'Strength',
    default: true,
    skillGroup: 'Athletics',
    specialization: [
        'Dash',
        'Long Distance'
    ]
}, {
    _id: 'tracking',
    name: 'Tracking',
    type: 'active',
    group: 'Physical',
    attribute: 'Intuition',
    default: true,
    skillGroup: 'Outdoors',
    specialization: [
        'Desert',
        'Forest',
        'Jungle',
        'Mountain',
        'Polar',
        'Urban'
    ]
}, {
    _id: 'con',
    name: 'Con',
    type: 'active',
    group: 'Social',
    attribute: 'Charisma',
    default: true,
    skillGroup: 'Acting',
    specialization: [
        'Fast Talking',
        'Seduction'
    ]
}, {
    _id: 'etiquette',
    name: 'Etiquette',
    type: 'active',
    group: 'Social',
    attribute: 'Charisma',
    default: true,
    skillGroup: 'Influence',
    specialization: [
        'Corporate',
        'High Society',
        'Media',
        'Mercenary',
        'Street',
        'Yakuza'
    ]
}, {
    _id: 'impersonation',
    name: 'Impersonation',
    type: 'active',
    group: 'Social',
    attribute: 'Charisma',
    default: true,
    skillGroup: 'Acting',
    specialization: [
        'Dwarf',
        'Elf',
        'Human',
        'Ork',
        'Troll'
    ]
}, {
    _id: 'instruction',
    name: 'Instruction',
    type: 'active',
    group: 'Social',
    attribute: 'Charisma',
    default: true,
    skillGroup: null,
    specialization: [
        'Combat',
        'Language',
        'Magical',
        'Academic Knowledge',
        'Street Knowledge'
    ] 
}, {
    _id: 'intimidation',
    name: 'Intimidation',
    type: 'active',
    group: 'Social',
    attribute: 'Charisma',
    default: true,
    skillGroup: null,
    specialization: [
        'Interrogation',
        'Mental',
        'Physical',
        'Torture'
    ]
}, {
    _id: 'leadership',
    name: 'Leadership',
    type: 'active',
    group: 'Social',
    attribute: 'Charisma',
    default: true,
    skillGroup: 'Influence',
    specialization: [
        'Command',
        'Direct',
        'Inspire',
        'Rally'
    ]
}, {
    _id: 'negotiation',
    name: 'Negotiation',
    type: 'active',
    group: 'Social',
    attribute: 'Charisma',
    default: true,
    skillGroup: 'Influence',
    specialization: [
        'Bargaining',
        'Contacts',
        'Diplomacy'
    ]
}, {
    _id: 'performance',
    name: 'Performance',
    type: 'active',
    group: 'Social',
    attribute: 'Charisma',
    default: true,
    skillGroup: 'Acting',
    specialization: [
        'Presentation',
        'Acting',
        'Comedy',
        'Guitar',
        'Drums',
        'Keyboard'
    ]
}, {
    _id: 'alchemy',
    name: 'Alchemy',
    type: 'active',
    group: 'Magical',
    attribute: 'Magic',
    default: false,
    skillGroup: 'Enchanting',
    specialization: [
        { 
            trigger: [
                'Command',
                'Contact',
                'Time'
            ],
            spell_type: [
                'Combat Spells',
                'Detection Spells'
            ]
        }
    ]
}, {
    _id: 'arcana',
    name: 'Arcana',
    type: 'active',
    group: 'Magical',
    attribute: 'Logic',
    default: false,
    skillGroup: null,
    specialization: [
        'Spell Design',
        'Focus Design',
        'Spirit Formula'
    ]
}, {
    _id: 'artificing',
    name: 'Artificing',
    type: 'active',
    group: 'Magical',
    attribute: 'Magic',
    default: false,
    skillGroup: 'Enchanting',
    specialization: [
        'Focus Analysis',
        'Crafting'
    ]
}, {
    _id: 'assensing',
    name: 'Assensing',
    type: 'active',
    group: 'Magical',
    attribute: 'Intuition',
    default: false,
    skillGroup: null,
    specialization: [
        {
            aura_type: [
                'Metahumans',
                'Spirits',
                'Foci',
                'Wards'
            ],
            other: [
                'Aura Reading',
                'Astral Signatures',
            ]
        }
    ]
}, {
    _id: 'astral_combat',
    name: 'Astral Combat',
    type: 'active',
    group: 'Magical',
    attribute: 'Willpower',
    default: false,
    skillGroup: null,
    specialization: [
        'Magicians',
        'Spirits',
        'Mana Barriers'
    ]
}, {
    _id: 'banishing',
    name: 'Banishing',
    type: 'active',
    group: 'Magical',
    attribute: 'Magic',
    default: false,
    skillGroup: 'Conjuring',
    specialization: [
        'Spirits of Air',
        'Spirits of Man'
    ]
}, {
    _id: 'binding',
    name: 'Binding',
    type: 'active',
    group: 'Magical',
    attribute: 'Magic',
    default: true,
    skillGroup: 'Conjuring',
    specialization: [
        'Spirits of Fire',
        'Spirits of Earth'
    ]
}, {
    _id: 'counterspelling',
    name: 'Counterspelling',
    type: 'active',
    group: 'Magical',
    attribute: 'Magic',
    default: false,
    skillGroup: 'Sorcery',
    specialization: [
        'Combat Spells',
        'Detection Spells'
    ]
}, {
    _id: 'disenchanting',
    name: 'Disenchanting',
    type: 'active',
    group: 'Magical', 
    attribute: 'Magic',
    default: false,
    skillGroup: 'Enchanting',
    specialization: [
        'Alchemical',
        'Preparations',
        'Power Foci'
    ]
}, {
    _id: 'ritual_spellcasting',
    name: 'Ritual Spellcasting',
    type: 'active',
    group: 'Magical',
    attribute: 'Magic',
    default: false,
    skillGroup: 'Sorcery',
    specialization: [
        'Anchored',
        'Spell'
    ]
}, {
    _id: 'spellcasting',
    name: 'Spellcasting',
    type: 'active',
    group: 'Magical',
    attribute: 'Magic',
    default: false,
    skillGroup: 'Sorcery',
    specialization: [
        'Combat Spells',
        'Detection Spells'
    ]
}, {
    _id: 'summoning',
    name: 'Summoning',
    type: 'active',
    group: 'Magical',
    attribute: 'Magic',
    default: false,
    skillGroup: 'Conjuring',
    specialization: [
        'Spirits of Earth',
        'Spirits of Man'
    ]
}, {
    _id: 'compiling',
    name: 'Compiling',
    type: 'active',
    group: 'Resonance',
    attribute: 'Resonance',
    default: false,
    skillGroup: 'Tasking',
    specialization: [
        'Data Sprites',
        'Machine Sprites'
    ]
}, {
    _id: 'decompiling',
    name: 'Decompiling',
    type: 'active',
    group: 'Resonance',
    attribute: 'Resonance',
    default: false,
    skillGroup: 'Tasking',
    specialization: [
        'Courier Sprites',
        'Fault Sprites'
    ]
}, {
    _id: 'registering', 
    name: 'Registering',
    type: 'active',
    group: 'Resonance',
    attribute: 'Resonance',
    default: false,
    skillGroup: 'Tasking',
    specialization: [
        'Crack Sprites',
        'Data Sprites'
    ]
}, {
    _id: 'aeronautics_mechanic',
    name: 'Aeronautics Mechanic',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: false,
    skillGroup: 'Engineering',
    specialization: [
        'Aerospace',
        'Fixed Wing',
        'LTA (blimp)',
        'Rotary Wing',
        'Tilt Wing',
        'Vector Thrust'
    ]
}, {
    _id: 'animal_handling',
    name: 'Animal Handling',
    type: 'active',
    group: 'Technical',
    attribute: 'Charisma',
    default: true,
    skillGroup: null,
    specialization: [
        {
            animal: [
                'Cat',
                'Bird',
                'Hell Hound',
                'Dolphin'
            ],
            other: [
                'Herding',
                'Riding',
                'Training'
            ]
        }
    ]
}, {
    _id: 'armorer',
    name: 'Armorer',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: true,
    skillGroup: null,
    specialization: [
        'Armor',
        'Artillery',
        'Explosives',
        'Firearms',
        'Melee Weapons',
        'Heavy Weapons',
        'Weapon Accessories'
    ]
}, {
    _id: 'artisan',
    name: 'artisan',
    type: 'active',
    group: 'Technical',
    attribute: 'Intuition',
    default: false,
    skillGroup: null,
    specialization: [
        'Cooking',
        'Sculpting',
        'Drawing',
        'Carpentry'
    ]
}, {
    _id: 'automotive_mechanic',
    name: 'Automotive Mechanic',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: false,
    skillGroup: 'Engineering',
    specialization: [
        'Walker',
        'Hover',
        'Tracked',
        'Wheeled'
    ]
}, {
    _id: 'biotechnology',
    name: 'Biotechnology',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: false,
    skillGroup: null,
    specialization: [
        'Bioinformatics',
        'Bioware',
        'Cloning',
        'Gene Therapy',
        'Vat Maintenance'
    ]
}, {
    _id: 'chemistry',
    name: 'Chemistry',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: false,
    skillGroup: null,
    specialization: [
        'Analytical',
        'Biochemistry',
        'Inorganic',
        'Organic',
        'Physical'
    ]
}, {
    _id: 'computer',
    name: 'Computer',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: true,
    skillGroup: 'Electronics',
    specialization: [
        'Edit File',
        'Matrix Perception',
        'Matrix Search'
    ]
}, {
    _id: 'cybercombat',
    name: 'Cybercombat',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: true,
    skillGroup: 'Cracking',
    specialization: [
        'Devices',
        'Grids',
        'IC',
        'Personas',
        'Sprites'
    ]
}, {
    _id: 'cybertechnology',
    name: 'Cybertechnology',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: true,
    skillGroup: 'Biotech',
    specialization: [
        'Bodyware',
        'Cyberlimbs',
        'Headware',
        'Repair'
    ]
}, {
    _id: 'demolitions',
    name: 'Demolitions',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: true,
    skillGroup: null,
    specialization: [
        'Commercial Explosives',
        'Defusing',
        'Improvised Explosives',
        'Plastic Explosives'
    ]
}, {
    _id: 'electronic_warfare',
    name: 'Electronic Warfare',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: false,
    skillGroup: 'Cracking',
    specialization: [
        'Communications',
        'Encryption',
        'Jamming',
        'Sensor Operations',
    ]
}, {
    _id: 'first_aid',
    name: 'First Aid',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: true,
    skillGroup: 'Biotech',
    specialization: [
        'Gunshot Wounds',
        'Resuscitation',
        'Broken Bones',
        'Burns'
    ]
}, {
    _id: 'forgery',
    name: 'Forgery',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: true,
    skillGroup: null,
    specialization: [
        'Counterfeiting',
        'Credstick Forgery',
        'False ID',
        'Image Doctoring',
        'Paper Forgery'
    ]
}, {
    _id: 'hacking',
    name: 'Hacking',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: true,
    skillGroup: 'Cracking',
    specialization: [
        'Devices',
        'Files',
        'Hosts',
        'Personas'
    ]
}, {
    _id: 'hardware',
    name: 'Hardware',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: false,
    skillGroup: 'Electronics',
    specialization: [
        'Commlinks',
        'Cyberdecks',
        'Smartguns'
    ]
}, {
    _id: 'industrial_mechanic',
    name: 'Industrial Mechanic',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: false,
    skillGroup: 'Engineering',
    specialization: [
        'Electrical Power System',
        'Hydraulics',
        'HVAC',
        'Industrial Robotics',
        'Structural',
        'Welding'
    ]
}, {
    _id: 'locksmith',
    name: 'Locksmith',
    type: 'active',
    group: 'Technical',
    attribute: 'Agility',
    default: false,
    skillGroup: null,
    specialization: [
        'Combination',
        'Keypad',
        'Maglock',
        'Tumbler',
        'Voice Recognition'
    ]
}, {
    _id: 'medicine',
    name: 'Medicine',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: false,
    skillGroup: 'Biotech',
    specialization: [
        'Cosmetic Surgery',
        'Extended Care',
        'Implant Surgery',
        'Magical Health',
        'Organ Culture',
        'Trauma Surgery'
    ]
}, {
    _id: 'nautical_mechanic',
    name: 'Nautical Mechanic',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: false,
    skillGroup: 'Engineering',
    specialization: [
        'Motorboat',
        'Sailboat',
        'Ship',
        'Submarine'
    ]
}, {
    _id: 'navigation',
    name: 'Navigation',
    type: 'active',
    group: 'Technical',
    attribute: 'Intuition',
    default: true,
    skillGroup: 'Outdoors',
    specialization: [
        'Augmented Reality Markers',
        'Celestial',
        'Compass',
        'Maps',
        'GPS'
    ]
}, {
    _id: 'software',
    name: 'Software',
    type: 'active',
    group: 'Technical',
    attribute: 'Logic',
    default: false,
    skillGroup: 'Electronics',
    specialization: [
        {
            complex_form: [
                'Editor',
                'Resonance Spike',
                'Tattletale'
            ],
            other: [
                'Data Bomb'
            ]
        }
    ]
}, {
    _id: 'gunnery',
    name: 'Gunnery',
    type: 'active',
    group: 'Vehicle',
    attribute: 'Agility',
    default: true,
    skillGroup: null,
    specialization: [
        'Artillery',
        'Ballistic',
        'Energy',
        'Guided Missle',
        'Rocket'
    ]
}, {
    _id: 'pilot_aerospace',
    name: 'Pilot Aerospace',
    type: 'active',
    group: 'Vehicle',
    attribute: 'Reaction',
    default: false,
    skillGroup: null,
    specialization: [
        'Deep Space',
        'Launch Craft',
        'Remote Operation',
        'Semiballistic',
        'Suborbital'
    ]
}, {
    _id: 'pilot_aircraft',
    name: 'Pilot Aircraft',
    type: 'active',
    group: 'Vehicle',
    attribute: 'Reaction',
    default: false,
    skillGroup: null,
    specialization: [
        'Fixed-Wing',
        'Lighter-Than-Air',
        'Remote Operation',
        'Rotary Wing',
        'Tilt Wing',
        'Vectored Thrust'
    ]
}, {
    _id: 'pilot_walker',
    name: 'Pilot Walker',
    type: 'active',
    group: 'Vehicle',
    attribute: 'Reaction',
    default: false,
    skillGroup: null,
    specialization: [
        'Biped',
        'Multiped',
        'Quadruped',
        'Remote'
    ]
}, {
    _id: 'pilot_exotic_vehicle',
    name: 'Pilot Exotic Vehicle',
    type: 'active',
    group: 'Vehicle',
    attribute: 'Reaction',
    default: false,
    skillGroup: null,
    specialization: null
}, {
    _id: 'pilot_ground_craft',
    name: 'Pilot Ground Craft',
    type: 'active',
    group: 'Vehicle',
    attribute: 'Reaction',
    default: false,
    skillGroup: null,
    specialization: [
        'Bike',
        'Hovercraft',
        'Remote Operation',
        'Tracked',
        'Wheeled'
    ]
}, {
    _id: 'pilot_watercraft',
    name: 'Pilot Watercraft',
    type: 'active',
    group: 'Vehicle',
    attribute: 'Reaction',
    default: true,
    skillGroup: null,
    specialization: [
        'Hydrofoil',
        'Motorboat',
        'Remote Operation',
        'Sail',
        'Ship',
        'Submarine'
    ]
}]}, (err, body) => {
    if (err) {
        console.log(err);
        return 1;
    }
    return 0;
});