document.addEventListener("DOMContentLoaded", function () {
    const realmSelect = document.getElementById("realm");
    const raceSelect = document.getElementById("race");
    const classSelect = document.getElementById("class");
    const rankSelect = document.getElementById("rank");
    const levelSelect = document.getElementById('level');
    const statsBar = document.getElementById('stats-bar');
    const dropdownMain = document.querySelector('.dropdown-main'); // Assure-toi que tu as bien cette classe
    const dropdownSecondary = document.querySelector('.dropdown-secondary'); // Assure-toi que tu as bien cette classe
    const buttons = document.querySelectorAll('.menu-btn'); // Récupérer tous les boutons

    // Fonction pour afficher la page en fonction du bouton cliqué
    function changePage(pageId) {
        // Cacher toutes les pages
        const pages = document.querySelectorAll('.page-content');
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Afficher la page correspondante avec un fondu
        const pageToShow = document.getElementById(pageId);
        pageToShow.classList.add('active');
    }

    // Écouter les clics sur les boutons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const pageId = button.getAttribute('data-page');
            changePage(pageId);
        });
    });

    /* ------------------------------ Data ------------------------------ */
    const races = {
        Albion: ['Avalonian', 'Briton', 'Highlander', 'Saracen', 'Inconnu', 'Half Ogre'],
        Hibernia: ['Celt', 'Elf', 'Firbolg', 'Lurikeen', 'Sylvan', 'Shar'],
        Midgard: ['Dwarf', 'Kobold', 'Norseman', 'Troll', 'Valkyn', 'Frostalf']
    };
    const classes = {
        Avalonian: ['Cleric', 'Friar', 'Paladin', 'Sorcerer', 'Wizard', 'Theurgist', 'Cabalist', 'Necromancer'],
        Briton: ['Armsman', 'Cleric', 'Friar', 'Mercenary', 'Paladin', 'Scout', 'Sorcerer', 'Wizard', 'Theurgist', 'Cabalist', 'Necromancer'],
        Highlander: ['Armsman', 'Friar', 'Mercenary', 'Paladin', 'Scout'],
        Saracen: ['Armsman', 'Mercenary', 'Paladin', 'Scout', 'Infiltrator'],
        'Half Ogre': [],
        Inconnu: [],

        Celt: ['Animist', 'Bainshee', 'Bard', 'Blademaster', 'Champion', 'Druid', 'Enchanter', 'Hero', 'Mentalist', 'Nightshade', 'Ranger', 'Warden', 'ValeWalker', 'Vampir'],
        Elf: ['Animist', 'Bainshee', 'Bard', 'Blademaster', 'Champion', 'Druid', 'Enchanter', 'Hero', 'Mentalist', 'Nightshade', 'Ranger', 'ValeWalker'],
        Firbolg: ['Animist', 'Bainshee', 'Bard', 'Blademaster', 'Champion', 'Druid', 'Hero', 'Mentalist', 'Warden', 'ValeWalker'],
        Lurikeen: ['Animist', 'Bainshee', 'Bard', 'Blademaster', 'Champion', 'Druid', 'Enchanter', 'Hero', 'Mentalist', 'Nightshade', 'Ranger', 'ValeWalker'],
        Sylvan: ['Animist', 'Bainshee', 'Bard', 'Blademaster', 'Champion', 'Druid', 'Hero', 'Mentalist', 'Nightshade', 'Ranger', 'Warden'],
        Shar: ['Bainshee', 'Bard', 'Blademaster', 'Champion', 'Druid', 'Hero', 'Mentalist', 'Nightshade', 'Ranger', 'Warden', 'ValeWalker'],

        Dwarf: ['Berserker', 'Runemaster', 'Spiritmaster', 'Thane', 'Warrior', 'Mauler'],
        Kobold: ['Bonedancer', 'Healer', 'Hunter', 'Runemaster', 'Shadowblade', 'Spiritmaster', 'Shaman', 'Warlock', 'Mauler'],
        Troll: ['Berserker', 'Bonedancer', 'Healer', 'Hunter', 'Shadowblade', 'Shaman', 'Savage', 'Warrior', 'Mauler'],
        Norseman: ['Berserker', 'Bonedancer', 'Healer', 'Hunter', 'Runemaster', 'Shadowblade', 'Shaman', 'Spiritmaster', 'Thane', 'Warrior', 'Mauler'],
        Valkyn: ['Berserker', 'Bonedancer', 'Shadowblade', 'Savage', 'Warrior', 'Valkyrie'],
        Frostalf: ['Runemaster', 'Spiritmaster', 'Shaman', 'Warlock', 'Healer', 'Thane', 'Valkyrie']
    };
    const dropdownStats = {
        stats: ["Strength", "Constitution", "Dexterity", "Quickness", "Intelligence", "Piety", "Charisma", "Empathy", "Power", "HP", "AF"],
        resist: ["Body", "Cold", "Heat", "Energy", "Matter", "Spirit", "Crush", "Slash", "Thrust"],
        cap: ["Cap Strength", "Cap Constitution", "Cap Dexterity", "Cap Quickness", "Cap Intelligence", "Cap Piety", "Cap Charisma", "Cap Empathy", "Cap Power", "Cap Hitpoints"],
        toa: ["Power pool", "Debuff effectiveness", "Buff effectiveness", "Healing effectiveness", "Spell duration", "Casting speed", "Spell Range", "Spell Damage", "Style Damage", "Melee Damage", "Melee Combat Speed", "Resist Pierce", "Fatigue"],
        skill: ["Polearm", "Critical Strike", "Evenom", "Stealth", "Regrowth", "Instruments", "Parry"]
    };
    const maxValues = {
        "strength": document.getElementById("max-value-str"),
        "constitution": document.getElementById("max-value-con"),
        "dexterity": document.getElementById("max-value-dex"),
        "quickness": document.getElementById("max-value-qui"),
        "intelligence": document.getElementById("max-value-int"),
        "piety": document.getElementById("max-value-pie"),
        "empathy": document.getElementById("max-value-emp"),
        "charisma": document.getElementById("max-value-cha"),
        "power": document.getElementById("max-value-pow"),
        "hp": document.getElementById("max-value-hp"),
        "af": document.getElementById("max-value-af"),
        "body": document.getElementById("max-value-body"),
        "cold": document.getElementById("max-value-cold"),
        "heat": document.getElementById("max-value-heat"),
        "energy": document.getElementById("max-value-energy"),
        "matter": document.getElementById("max-value-matter"),
        "spirit": document.getElementById("max-value-spirit"),
        "crush": document.getElementById("max-value-crush"),
        "slash": document.getElementById("max-value-slash"),
        "thrust": document.getElementById("max-value-thrust")
    };
    const statMultipliers = {
        "strength": 1.5,
        "constitution": 1.5,
        "dexterity": 1.5,
        "quickness": 1.5,
        "intelligence": 1.5,
        "piety": 1.5,
        "empathy": 1.5,
        "charisma": 1.5,
        "power": 0.5,
        "hp": 4.0,
        "af": 1.0,
        "body": 0.52,
        "cold": 0.52,
        "heat": 0.52,
        "energy": 0.52,
        "matter": 0.52,
        "spirit": 0.52,
        "crush": 0.52,
        "slash": 0.52,
        "thrust": 0.52
    };
    const totalStats = {
        "strength": 0,
        "constitution": 0,
        "dexterity": 0,
        "quickness": 0,
        "intelligence": 0,
        "piety": 0,
        "empathy": 0,
        "charisma": 0,
        "power": 0,
        "hp": 0,
        "af": 0,
        "body": 0,
        "cold": 0,
        "heat": 0,
        "energy": 0,
        "matter": 0,
        "spirit": 0,
        "crush": 0,
        "slash": 0,
        "thrust": 0
    };
    /* ------------------------------ save equipment stats ------------------------------ */
    let selectedArmorPart = null;
    const armorStats = {
        helm: [],
        hands: [],
        torso: [],
        arms: [],
        jewel: [],
        "l ring": [],
        "l wrist": [],
        belt: [],
        "r ring": [],
        "r wrist": [],
        necklace: [],
        myth: [],
        cloak: [],
        legs: [],
        feet: [],
        "r hand": [],
        "l hand": [],
        "2 hand": [],
        ranged: []
    };

    // Handle armor part selection
    const armorButtons = document.querySelectorAll('.slot, .slot-mini');
    armorButtons.forEach(button => {
        button.addEventListener('click', function () {
            selectedArmorPart = this.getAttribute('data-slot');
            updateItemStatsTitle(selectedArmorPart);
            loadArmorStats(selectedArmorPart);
        });
    });

    // Function to update the item stats title
    function updateItemStatsTitle(armorPart) {
        const itemStatsTitle = document.getElementById('item-stats-title');
        itemStatsTitle.textContent = `Item Stats - ${armorPart.charAt(0).toUpperCase() + armorPart.slice(1)}`;
    }

    // Function to load armor stats into input fields
    function loadArmorStats(armorPart) {
        const stats = armorStats[armorPart];
        const statRows = document.querySelectorAll('.stats-row');
        statRows.forEach((row, index) => {
            const dropdownMain = row.querySelector('.dropdown-main');
            const dropdownSecondary = row.querySelector('.dropdown-secondary');
            const input = row.querySelector('.value-input');
            if (stats[index]) {
                dropdownMain.value = stats[index].main || '';
                populateDropdownSecondary(dropdownMain, dropdownSecondary, stats[index].main);
                dropdownSecondary.value = stats[index].secondary || '';
                input.value = stats[index].value || '';
                input.dataset.previousValue = stats[index].value || 0;
                input.dataset.previousSecondary = stats[index].secondary || '';
            } else {
                dropdownMain.value = '';
                dropdownSecondary.innerHTML = '';
                input.value = '';
                input.dataset.previousValue = 0;
                input.dataset.previousSecondary = '';
            }
        });
    }

    // Function to update the total stats and progress bar
    function updateTotalStats(statType, value, previousValue = 0) {
        totalStats[statType] += value - previousValue;
        console.log(`Updated total stats for ${statType}:`, totalStats[statType]);
        updateProgressBar(statType, totalStats[statType]);
    }

    // Handle stat input and update armor stats and progress bar in real-time
    const statInputs = document.querySelectorAll('.value-input');
    statInputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.dataset.previousValue = this.value;
        });

        input.addEventListener('blur', function () {
            if (selectedArmorPart) {
                const row = this.closest('.stats-row');
                const dropdownMain = row.querySelector('.dropdown-main').value;
                const dropdownSecondary = row.querySelector('.dropdown-secondary').value;
                const value = parseInt(this.value, 10);
                const previousValue = parseInt(this.dataset.previousValue, 10) || 0;
                const previousSecondary = this.dataset.previousSecondary;

                if (!isNaN(value)) {
                    const index = Array.from(row.parentNode.children).indexOf(row);

                    // Update the previous stats
                    if (previousSecondary) {
                        updateTotalStats(previousSecondary, 0, previousValue);
                    }

                    // Update the current stats
                    armorStats[selectedArmorPart][index] = {
                        main: dropdownMain,
                        secondary: dropdownSecondary,
                        value: value
                    };
                    updateTotalStats(dropdownSecondary, value, 0);

                    console.log(`Updated stats for ${selectedArmorPart} at index ${index}:`, armorStats[selectedArmorPart][index]);

                    // Update the previous value and secondary stat type
                    this.dataset.previousValue = value;
                    this.dataset.previousSecondary = dropdownSecondary;
                }
            }
        });
    });

    // Handle dropdown changes and update armor stats
    document.addEventListener("change", (event) => {
        if (event.target.classList.contains("dropdown-main") || event.target.classList.contains("dropdown-secondary")) {
            const row = event.target.closest('.stats-row');
            const dropdownMain = row.querySelector('.dropdown-main').value;
            const dropdownSecondary = row.querySelector('.dropdown-secondary').value;
            const input = row.querySelector('.value-input');
            const value = parseInt(input.value, 10);
            const previousSecondary = input.dataset.previousSecondary;
            const previousValue = parseInt(input.dataset.previousValue, 10) || 0;
            const index = Array.from(row.parentNode.children).indexOf(row);

            if (selectedArmorPart && !isNaN(value)) {
                // Update the previous stats
                if (previousSecondary) {
                    updateTotalStats(previousSecondary, 0, previousValue);
                }

                // Update the current stats
                armorStats[selectedArmorPart][index] = { main: dropdownMain, secondary: dropdownSecondary, value: value };
                updateTotalStats(dropdownSecondary, value, 0);

                console.log(`Updated stats for ${selectedArmorPart} at index ${index}:`, armorStats[selectedArmorPart][index]);

                // Update the previous value and secondary stat type
                input.dataset.previousValue = value;
                input.dataset.previousSecondary = dropdownSecondary;
            }
        }
    });

    // Function to update the progress bar
    function updateProgressBar(statType, value) {
        const progressBar = document.getElementById(`progress-${statType}`);
        const currentValueElement = document.getElementById(`current-value-${statType}`);
        const differenceValueElement = document.getElementById(`difference-value-${statType}`);
        if (progressBar) {
            const maxStatValue = parseInt(progressBar.max, 10);
            progressBar.value = Math.min(value, maxStatValue);
            if (currentValueElement) {
                currentValueElement.textContent = progressBar.value;
            }
            if (differenceValueElement) {
                const difference = value - maxStatValue;
                differenceValueElement.textContent = difference;
                differenceValueElement.style.color = getColorForDifference(difference, maxStatValue);
            }
        }
    }

    function getColorForDifference(difference, maxStatValue) {
        const ratio = Math.abs(difference) / maxStatValue;
        let r, g, b;

        if (difference < 0) {
            r = 255;
            g = Math.floor(255 * (1 - ratio));
            b = 0;
        } else if (difference === 0) {
            r = 0;
            g = 255;
            b = 0;
        } else {
            r = 0;
            g = 255;
            b = 0;
        }

        return `rgb(${r},${g},${b})`;
    }
    /* ------------------------------ Populate Dropdowns ------------------------------ */
    document.addEventListener("change", (event) => {
        if (event.target.classList.contains("dropdown-main")) {
            const dropdownMain = event.target;
            const dropdownRow = dropdownMain.closest(".stats-row");
            const dropdownSecondary = dropdownRow.querySelector(".dropdown-secondary");

            const selectedCategory = dropdownMain.value;
            populateDropdownSecondary(dropdownMain, dropdownSecondary, selectedCategory);

            // Update the stats when dropdown-main changes
            const input = dropdownRow.querySelector('.value-input');
            const value = parseInt(input.value, 10);
            const previousSecondary = input.dataset.previousSecondary;
            const previousValue = parseInt(input.dataset.previousValue, 10) || 0;
            const index = Array.from(dropdownRow.parentNode.children).indexOf(dropdownRow);

            if (selectedArmorPart && !isNaN(value)) {
                // Update the previous stats
                if (previousSecondary) {
                    updateTotalStats(previousSecondary, 0, previousValue);
                }

                // Update the current stats
                armorStats[selectedArmorPart][index] = { main: dropdownMain.value, secondary: dropdownSecondary.value, value: value };
                updateTotalStats(dropdownSecondary.value, value, 0);

                console.log(`Updated stats for ${selectedArmorPart} at index ${index}:`, armorStats[selectedArmorPart][index]);

                // Update the previous value and secondary stat type
                input.dataset.previousValue = value;
                input.dataset.previousSecondary = dropdownSecondary.value;
            }
        }
    });

    // Function to populate dropdown-secondary based on dropdown-main selection
    function populateDropdownSecondary(dropdownMain, dropdownSecondary, selectedCategory) {
        // Effacer les anciennes options
        dropdownSecondary.innerHTML = '';

        // Ajouter les nouvelles options
        if (dropdownStats[selectedCategory]) {
            dropdownStats[selectedCategory].forEach((item) => {
                const optionElement = document.createElement("option");
                optionElement.value = item.toLowerCase().replace(/\s+/g, "-");
                optionElement.textContent = item;
                dropdownSecondary.appendChild(optionElement);
            });
        }
    }

    // Initialiser tous les dropdown-secondary lors du chargement
    document.querySelectorAll(".stats-row").forEach((row) => {
        const dropdownMain = row.querySelector(".dropdown-main");
        const dropdownSecondary = row.querySelector(".dropdown-secondary");

        const initialCategory = dropdownMain.value;
        populateDropdownSecondary(dropdownMain, dropdownSecondary, initialCategory);
    });

    // Simulate click on torso button to select it by default
    document.querySelector('.slot[data-slot="torso"]').click();

    /* ------------------------------ Populate Race/Class ------------------------------ */
    function updateRaces() {
        const selectedRealm = realmSelect.value;
        const availableRaces = races[selectedRealm] || [];
        raceSelect.innerHTML = '';
        availableRaces.forEach(race => {
            const option = document.createElement('option');
            option.value = race;
            option.textContent = race;
            raceSelect.appendChild(option);
        });
        updateClasses();
    }

    function updateClasses() {
        const selectedRace = raceSelect.value;
        const availableClasses = classes[selectedRace] || [];
        classSelect.innerHTML = '';
        availableClasses.forEach(classItem => {
            const option = document.createElement('option');
            option.value = classItem;
            option.textContent = classItem;
            classSelect.appendChild(option);
        });
    }
    /* ------------------------------ Populate Level ------------------------------ */
    function populateLevels() {
        // Remplir les options de niveau
        for (let i = 1; i <= 50; i++) {
            const option = document.createElement('option');
            option.value = i;  // Chaque niveau correspond à sa valeur
            option.textContent = i;  // Affiche le niveau entier
            levelSelect.appendChild(option);

            // Gestion des niveaux avec une décimale (40 à 50)
            if (i >= 40 && i < 50) {
                const halfOption = document.createElement('option');
                halfOption.value = i + 0.5;  // Niveau avec décimale
                halfOption.textContent = (i + 0.5).toFixed(1);  // Affiche le niveau avec une décimale
                levelSelect.appendChild(halfOption);
            }
        }
    }

    function updateStatsBarMax() {
        const level = parseFloat(levelSelect.value); // Utiliser parseFloat pour gérer les décimales

        // Calculer et mettre à jour les valeurs des stats
        for (let stat in statMultipliers) {
            const multiplier = statMultipliers[stat];
            const statValue = Math.floor(level * multiplier);

            // Mettre à jour la valeur max affichée
            const maxStatValue = statValue;
            const maxStatElement = maxValues[stat];
            const progressBar = document.getElementById(`progress-${stat}`);

            if (maxStatElement) {
                maxStatElement.textContent = maxStatValue; // Met à jour le texte
            }

            if (progressBar) {
                progressBar.max = maxStatValue; // Met à jour la valeur maximale de la barre
            }
        }
    }
    levelSelect.addEventListener("change", updateStatsBarMax);
    /* ------------------------------ Populate Level and Rank ------------------------------ */
    function populateRanks() {
        for (let i = 1; i <= 12; i++) {
            for (let j = 1; j <= 9; j++) {
                const option = document.createElement('option');
                option.value = `${i}L${j}`;
                option.textContent = `${i}L${j}`;
                rankSelect.appendChild(option);
            }
        }
    }

    // Initialisation des autres données
    updateRaces();  // Mettre à jour les races dès le début
    populateLevels();
    populateRanks(); // Remplir les rangs
    realmSelect.addEventListener("change", updateRaces);
    raceSelect.addEventListener("change", updateClasses);
});
