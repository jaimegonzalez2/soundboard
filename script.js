document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!");
    
    const sounds = {
        sound1: { file: new Audio('sounds/my_leg.mp3'), label:'My Leg'},
        sound2: { file: new Audio('sounds/simpsons.mp3'), label: 'In Danger'},
        sound3: { file: new Audio('sounds/workaholics.mp3'), label: 'Almost Died'},
        sound4: { file: new Audio('sounds/CHAINSAW.mp3'), label: 'Chainsaw'},
        sound5: { file: new Audio('sounds/Wilhelm_Scream.mp3'), label: 'Wilhelm Scream'},
        sound6: { file: new Audio('sounds/the_holy_grail_runaway.mp3'), label: 'Holy Grail'}
        // Add additional audio files here in the format below:
        // sound#: new Audio('sounds/sound4.mp3'),
    };

    let currentPlaying = null; // Track the currently playing sound
    
    const soundboard = document.querySelector('.soundboard');
    
    // Dynamically create buttons for each sound
    for (const [key, sound] of Object.entries(sounds)) {
        const button = document.createElement('button');
        button.textContent = sound.label; // Set custom text
        button.onclick = () => playSound(key);
        soundboard.appendChild(button);
    }
    
    function playSound(soundKey) {
        if (currentPlaying) {
            currentPlaying.pause(); // Stop the currently playing sound
            currentPlaying.currentTime = 0; // Reset to beginning
        }
        
        if (sounds[soundKey]) {
            currentPlaying = sounds[soundKey].file; // Update the current sound
            currentPlaying.play();
        }
    }
});
