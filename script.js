document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!");
    
    const sounds = {
        sound1: { file: new Audio('sounds/my_leg.mp3'), label:'My Leg'},
        sound2: { file: new Audio('sounds/simpsons.mp3'), label: 'I\'m In Danger'},
        sound3: { file: new Audio('sounds/workaholics.mp3'), label: 'I Almost Died'},
        sound4: { file: new Audio('sounds/CHAINSAW.mp3'), label: 'Chainsaw'},
        sound5: { file: new Audio('sounds/Wilhelm_Scream.mp3'), label: 'Wilhelm Scream'},
        sound6: { file: new Audio('sounds/the_holy_grail_runaway.mp3'), label: 'Holy Grail Runaway'},
        sound7: { file: new Audio('sounds/sydney_doing_math.mp3'), label: 'Sydney Doing Math'},
        sound8: { file: new Audio('sounds/Stitch_Laugh.mp3'), label: 'Stitch Laugh'},
        sound9: { file: new Audio('sounds/your_one_warning.mp3'), label: 'Your One Warning'},
        sound10: { file: new Audio('sounds/Cowboy_Standoff.mp3'), label: 'Cowboy Standoff'},
        sound11: { file: new Audio('sounds/Im_a_fireball.mp3'), label: 'Fireball'},
        sound12: { file: new Audio('sounds/Jeopardy_music.mp3'), label: 'Jeopardy Music'},
        sound13: { file: new Audio('sounds/but_did_you_die.mp3'), label: 'But Did You Die'},
        sound14: { file: new Audio('sounds/Kamehameha.mp3'), label: 'Kamehameha'},
        sound15: { file: new Audio('sounds/Stabby_Sound.mp3'), label: 'Stab'},
        sound16: { file: new Audio('sounds/Air_Raid_Siren.mp3'), label: 'Air Raid Siren'},
        sound17: { file: new Audio('sounds/Alakablam.mp3'), label: 'Alakablam'},
        sound18: { file: new Audio('sounds/The_Waco_Kid.mp3'), label: 'Shot Me In The Ass'},
        sound19: { file: new Audio('sounds/Electric_shock.mp3'), label: 'Electric Zap'},
        sound20: { file: new Audio('sounds/Gunshot.mp3'), label: 'Gunshot'},
        sound21: { file: new Audio('sounds/KABOOM.mp3'), label: 'Explosion'},
        sound22: { file: new Audio('sounds/I_see_dead_people.mp3'), label: 'I See Dead People'},
        sound23: { file: new Audio('sounds/spell_casting.mp3'), label: 'Spell Casting'},
        sound24: { file: new Audio('sounds/suspicious.mp3'), label: 'Don\'t Be Suspicious'}
        // Add additional audio files here in the format below:
        // sound#: new Audio('sounds/sound#.mp3'),
    };

    let currentPlaying = null;

    const soundboard = document.querySelector('.soundboard');
    
    // Dynamically create buttons for each sound
    for (const [key, sound] of Object.entries(sounds)) {
        const button = document.createElement('button');
        button.classList.add("dice-button"); // Add the d20 dice styling
        button.innerHTML = `<span>${sound.label}</span>`; // Ensures text stays inside the dice
        button.onclick = () => playSound(key);
        soundboard.appendChild(button);
    }
    
    function playSound(soundKey) {
        if (currentPlaying) {
            currentPlaying.pause();
            currentPlaying.currentTime = 0;
        }
        
        if (sounds[soundKey]) {
            currentPlaying = sounds[soundKey].file;
            currentPlaying.play();
        }
    }
});
