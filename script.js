document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!");
    
    const sounds = {
        // Sound Effects Category
        sound1: { file: new Audio('sounds/Gunshot.mp3'), label: 'Gunshot', category: 'sound-effects' },
        sound2: { file: new Audio('sounds/Air_Raid_Siren.mp3'), label: 'Air Raid Siren', category: 'sound-effects' },
        sound3: { file: new Audio('sounds/Jeopardy_music.mp3'), label: 'Jeopardy Music', category: 'sound-effects' },
        sound4: { file: new Audio('sounds/CHAINSAW.mp3'), label: 'Chainsaw', category: 'sound-effects' },
        sound5: { file: new Audio('sounds/Wilhelm_Scream.mp3'), label: 'Wilhelm Scream', category: 'sound-effects' },
        sound6: { file: new Audio('sounds/KABOOM.mp3'), label: 'Explosion', category: 'sound-effects' },
        sound7: { file: new Audio('sounds/Electric_shock.mp3'), label: 'Electric Zap', category: 'sound-effects' },
        sound8: { file: new Audio('sounds/Stitch_Laugh.mp3'), label: 'Stitch Laugh', category: 'sound-effects' },
        sound9: { file: new Audio('sounds/spell_casting.mp3'), label: 'Spell Casting', category: 'sound-effects' },
        sound10: { file: new Audio('sounds/Stabby_Sound.mp3'), label: 'Stab', category: 'sound-effects' },
        sound11: { file: new Audio('sounds/Cowboy_Standoff.mp3'), label: 'Cowboy Standoff', category: 'sound-effects' },
        sound12: { file: new Audio('sounds/Toy_Story_OOH.mp3'), label: 'Toy Story', category: 'sound-effects' },
        
        // Audio Clips Category
        sound13: { file: new Audio('sounds/Im_a_fireball.mp3'), label: 'Fireball', category: 'audio-clips' },
        sound14: { file: new Audio('sounds/simpsons.mp3'), label: 'I\'m In Danger', category: 'audio-clips' },
        sound15: { file: new Audio('sounds/Kamehameha.mp3'), label: 'Kamehameha', category: 'audio-clips' },
        sound16: { file: new Audio('sounds/workaholics.mp3'), label: 'I Almost Died', category: 'audio-clips' },
        sound17: { file: new Audio('sounds/but_did_you_die.mp3'), label: 'But Did You Die', category: 'audio-clips' },
        sound18: { file: new Audio('sounds/Alakablam.mp3'), label: 'Alakablam', category: 'audio-clips' },
        sound19: { file: new Audio('sounds/The_Waco_Kid.mp3'), label: 'Shot Me In The Ass', category: 'audio-clips' },
        sound20: { file: new Audio('sounds/sydney_doing_math.mp3'), label: 'Sydney Doing Math', category: 'audio-clips' },
        sound21: { file: new Audio('sounds/my_leg.mp3'), label: 'My Leg', category: 'audio-clips' },
        sound22: { file: new Audio('sounds/the_holy_grail_runaway.mp3'), label: 'Holy Grail Runaway', category: 'audio-clips' },
        sound23: { file: new Audio('sounds/I_see_dead_people.mp3'), label: 'I See Dead People', category: 'audio-clips' },
        sound24: { file: new Audio('sounds/your_one_warning.mp3'), label: 'Your One Warning', category: 'audio-clips' },
        sound25: { file: new Audio('sounds/suspicious.mp3'), label: 'Don\'t Be Suspicious', category: 'audio-clips' }
    };

    let currentPlaying = null;

    // Dynamically create buttons for each sound in the correct category
    for (const [key, sound] of Object.entries(sounds)) {
        const button = document.createElement('button');
        button.classList.add("dice-button");
        button.innerHTML = `<span>${sound.label}</span>`;
        button.onclick = () => playSound(key);

        // Append the button to the correct category
        const categoryContainer = document.getElementById(sound.category);
        if (categoryContainer) {
            categoryContainer.appendChild(button);
        }
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
