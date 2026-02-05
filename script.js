document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!");

    const sounds = {
        // 🎵 Sound Effects
        sound1: { file: new Audio('sounds/CritSuccess.mp3'), label: 'Critical Success', category: 'sound-effects' },
        sound2: { file: new Audio('sounds/CritFail.mp3'), label: 'Critical Failure', category: 'sound-effects' },
        sound3: { file: new Audio('sounds/Gunshot.mp3'), label: 'Gunshot', category: 'sound-effects' },
        sound4: { file: new Audio('sounds/CHAINSAW.mp3'), label: 'Chainsaw', category: 'sound-effects' },
        sound5: { file: new Audio('sounds/Wilhelm_Scream.mp3'), label: 'Wilhelm Scream', category: 'sound-effects' },
        sound6: { file: new Audio('sounds/KABOOM.mp3'), label: 'Explosion', category: 'sound-effects' },
        sound7: { file: new Audio('sounds/Electric_shock.mp3'), label: 'Electric Zap', category: 'sound-effects' },
        sound8: { file: new Audio('sounds/Stitch_Laugh.mp3'), label: 'Stitch Laugh', category: 'sound-effects' },
        sound9: { file: new Audio('sounds/RippingPaper.mp3'), label: 'Sheet Rip', category: 'sound-effects' },
        sound10: { file: new Audio('sounds/Stabby_Sound.mp3'), label: 'Stab', category: 'sound-effects' },
        sound11: { file: new Audio('sounds/Cowboy_Standoff.mp3'), label: 'Cowboy Standoff', category: 'sound-effects' },
        sound12: { file: new Audio('sounds/Toy_Story_OOH.mp3'), label: 'Toy Story', category: 'sound-effects' },
        sound13: { file: new Audio('sounds/GlitterSound.mp3'), label: 'Glitter', category: 'sound-effects' },
        sound14: { file: new Audio('sounds/Reveille_Bugle.mp3'), label: 'Trumpet', category: 'sound-effects' },
        sound15: { file: new Audio('sounds/Cricket.mp3'), label: 'Cricket', category: 'sound-effects' },
        sound16: { file: new Audio('sounds/Air_Raid_Siren.mp3'), label: 'Air Raid Siren', category: 'sound-effects' },
        sound17: { file: new Audio('sounds/Jeopardy_music.mp3'), label: 'Jeopardy Music', category: 'sound-effects' },
        sound18: { file: new Audio('sounds/R2D2.mp3'), label: 'R2D2', category: 'sound-effects' },

        // 🔊 Audio Clips
        sound19: { file: new Audio('sounds/Im_a_fireball.mp3'), label: 'Fireball', category: 'audio-clips' },
        sound20: { file: new Audio('sounds/simpsons.mp3'), label: 'I\'m In Danger', category: 'audio-clips' },
        sound21: { file: new Audio('sounds/Kamehameha.mp3'), label: 'Kamehameha', category: 'audio-clips' },
        sound22: { file: new Audio('sounds/workaholics.mp3'), label: 'I Almost Died', category: 'audio-clips' },
        sound23: { file: new Audio('sounds/but_did_you_die.mp3'), label: 'But Did You Die?', category: 'audio-clips' },
        sound24: { file: new Audio('sounds/Alakablam.mp3'), label: 'Alakablam', category: 'audio-clips' },
        sound25: { file: new Audio('sounds/The_Waco_Kid.mp3'), label: 'Shot Me In The Ass', category: 'audio-clips' },
        sound26: { file: new Audio('sounds/sydney_doing_math.mp3'), label: 'Sydney Doing Math', category: 'audio-clips' },
        sound27: { file: new Audio('sounds/my_leg.mp3'), label: 'My Leg', category: 'audio-clips' },
        sound28: { file: new Audio('sounds/the_holy_grail_runaway.mp3'), label: 'Holy Grail Runaway', category: 'audio-clips' },
        sound29: { file: new Audio('sounds/I_see_dead_people.mp3'), label: 'I See Dead People', category: 'audio-clips' },
        sound30: { file: new Audio('sounds/your_one_warning.mp3'), label: 'Your One Warning', category: 'audio-clips' },
        sound31: { file: new Audio('sounds/suspicious.mp3'), label: 'Don\'t Be Suspicious', category: 'audio-clips' },
        sound32: { file: new Audio('sounds/LastTime_DragonBallZsound.mp3'), label: 'Dragonball Z', category: 'audio-clips' },
        sound33: { file: new Audio('sounds/roxSound.mp3'), label: 'ROX', category: 'audio-clips' },
        sound34: { file: new Audio('sounds/YameteKudasai.mp3'), label: 'Yamete Kudasai (18+)', category: 'audio-clips' },
        sound35: { file: new Audio('sounds/uwuSound.mp3'), label: 'UWU', category: 'audio-clips' },
        sound36: { file: new Audio('sounds/Dora.mp3'), label: 'We Did It!', category: 'audio-clips' },
        sound37: { file: new Audio('sounds/NotPrepared.mp3'), label: 'You Are Not Prepared', category: 'audio-clips' },
        sound38: { file: new Audio('sounds/Lizard.mp3'), label: 'Lizard', category: 'audio-clips' },
        sound39: { file: new Audio('sounds/TuskenRaider.mp3'), label: 'Tusken Raider', category: 'audio-clips' }
    };

    let currentPlaying = null;
    let cancelCount = 0;
    let pendingButton = null;

    const ageModal = document.getElementById('ageModal');
    const btnYes = document.getElementById('ageYes');
    const btnNo = document.getElementById('ageNo');

    // Create buttons
    for (const [key, sound] of Object.entries(sounds)) {
        const button = document.createElement('button');
        button.classList.add("dice-button");
        button.innerHTML = `<span>${sound.label}</span>`;

        const categoryContainer = document.getElementById(sound.category);
        categoryContainer.appendChild(button);

        if (sound.label.includes("Yamete Kudasai")) {
            button.classList.add("tricky-button");
            button.addEventListener("click", (e) => {
                e.preventDefault();
                pendingButton = { key, button };
                showAgeModal();
            });
        } else {
            button.addEventListener("click", () => playSound(key));
        }
    }

    // Modal functions
    function showAgeModal() {
        ageModal.style.display = 'flex';
    }

    function hideAgeModal() {
        ageModal.style.display = 'none';
    }

    btnYes.addEventListener("click", () => {
        hideAgeModal();
        cancelCount = 0;
        if (pendingButton) playSound(pendingButton.key);
    });

    btnNo.addEventListener("click", () => {
        hideAgeModal();
        cancelCount++;
        if (pendingButton) {
            if (cancelCount >= 3) activateRunAwayMode(pendingButton.button);
            else moveTrickyButton(pendingButton.button);
        }
    });

    // Play sound
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

    // Move button randomly
    function moveTrickyButton(button) {
        const parent = button.parentElement;
        const maxX = parent.clientWidth - button.offsetWidth;
        const maxY = parent.clientHeight - button.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.position = 'absolute';
        button.style.transition = 'all 0.4s ease-in-out';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }

    // Run away mode
    function activateRunAwayMode(button) {
        button.style.position = 'absolute';
        button.style.transition = 'transform 0.1s ease';
        const runAway = (event) => {
            const rect = button.getBoundingClientRect();
            const dx = event.clientX - (rect.left + rect.width / 2);
            const dy = event.clientY - (rect.top + rect.height / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
                const moveX = (Math.random() * 200 - 100);
                const moveY = (Math.random() * 200 - 100);
                button.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        };
        window.addEventListener("mousemove", runAway);
        setTimeout(() => {
            window.removeEventListener("mousemove", runAway);
            button.style.transform = 'none';
            cancelCount = 0;
        }, 10000);
    }
});






