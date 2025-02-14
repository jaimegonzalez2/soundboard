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
        // sound4: new Audio('sounds/sound4.mp3'),
        // sound5: new Audio('sounds/sound5.mp3')
    };
    
    const soundboard = document.querySelector('.soundboard');
    
    // Dynamically create buttons for each sound
    for (const [key, sound] of Object.entries(sounds)) {
        const button = document.createElement('button');
        button.textContent = sound.label; // Set custom text
        button.onclick = () => playSound(key);
        soundboard.appendChild(button);
    }
    
    function playSound(soundKey) {
        if (sounds[soundKey]) {
            sounds[soundKey].file.currentTime = 0;
            sounds[soundKey].file.play();
        }
    }
});
