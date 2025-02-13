const sounds = {
    sound1: { file: new Audio('sounds/my_leg.mp3'), label:'MyLeg'},
    sound2: { file: new Audio('sounds/simpsons.mp3'), label: 'InDanger'},
    sound3: { file: new Audio('sounds/workaholics.mp3'), label: 'AlmostDied'}
    // Add additional audio files here in the format below:
    // sound4: new Audio('sounds/sound4.mp3'),
    // sound5: new Audio('sounds/sound5.mp3')
};

const soundboard = document.querySelector('.soundboard');

// Dynamically create buttons based on the sounds object
for (const [key] of Object.entries(sounds)) {
    const button = document.createElement('button');
    button.textContent = key.replace('sound', 'Sound '); // Format button text
    button.onclick = () => playSound(key);
    soundboard.appendChild(button);
}

function playSound(soundKey) {
    if (sounds[soundKey]) {
        sounds[soundKey].currentTime = 0;
        sounds[soundKey].play();
    }
}
