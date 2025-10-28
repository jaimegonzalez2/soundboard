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
        sound13: { file: new Audio('sounds/GlitterSound.mp3'), label: 'Glitter', category: 'sound-effects' },
        sound14: { file: new Audio('sounds/Reveille_Bugle.mp3'), label: 'Trumpet', category: 'sound-effects' },
        
        // Audio Clips Category
        sound15: { file: new Audio('sounds/Im_a_fireball.mp3'), label: 'Fireball', category: 'audio-clips' },
        sound16: { file: new Audio('sounds/simpsons.mp3'), label: 'I\'m In Danger', category: 'audio-clips' },
        sound17: { file: new Audio('sounds/Kamehameha.mp3'), label: 'Kamehameha', category: 'audio-clips' },
        sound18: { file: new Audio('sounds/workaholics.mp3'), label: 'I Almost Died', category: 'audio-clips' },
        sound19: { file: new Audio('sounds/but_did_you_die.mp3'), label: 'But Did You Die?', category: 'audio-clips' },
        sound20: { file: new Audio('sounds/Alakablam.mp3'), label: 'Alakablam', category: 'audio-clips' },
        sound21: { file: new Audio('sounds/The_Waco_Kid.mp3'), label: 'Shot Me In The Ass', category: 'audio-clips' },
        sound22: { file: new Audio('sounds/sydney_doing_math.mp3'), label: 'Sydney Doing Math', category: 'audio-clips' },
        sound23: { file: new Audio('sounds/my_leg.mp3'), label: 'My Leg', category: 'audio-clips' },
        sound24: { file: new Audio('sounds/the_holy_grail_runaway.mp3'), label: 'Holy Grail Runaway', category: 'audio-clips' },
        sound25: { file: new Audio('sounds/I_see_dead_people.mp3'), label: 'I See Dead People', category: 'audio-clips' },
        sound26: { file: new Audio('sounds/your_one_warning.mp3'), label: 'Your One Warning', category: 'audio-clips' },
        sound27: { file: new Audio('sounds/suspicious.mp3'), label: 'Don\'t Be Suspicious', category: 'audio-clips' },
        sound28: { file: new Audio('sounds/LastTime_DragonBallZsound.mp3'), label: 'Dragonball Z', category: 'audio-clips' },
        sound29: { file: new Audio('sounds/roxSound.mp3'), label: 'ROX', category: 'audio-clips' },
        sound30: { file: new Audio('sounds/YameteKudasai.mp3'), label: 'Yamete Kudasai (18+)', category: 'audio-clips' },
        sound31: { file: new Audio('sounds/uwuSound.mp3'), label: 'UWU', category: 'audio-clips' },
        sound32: { file: new Audio('sounds/Dora.mp3'), label: 'We Did It!', category: 'audio-clips' }
    };

    document.addEventListener("DOMContentLoaded", () => {
    const sounds = document.querySelectorAll(".dice-button");
    const trickyButton = document.querySelector(".tricky-button");
    const ageModal = document.getElementById("ageModal");
    const btnYes = document.getElementById("ageYes");
    const btnNo = document.getElementById("ageNo");

    let cancelCount = 0;
    let runningAway = false;

    // 🎵 Sound playback
    sounds.forEach((button) => {
        const sound = new Audio(button.dataset.sound);
        button.addEventListener("click", () => {
            if (button.classList.contains("tricky-button")) {
                // Open age modal for tricky button
                ageModal.style.display = "flex";
            } else {
                sound.currentTime = 0;
                sound.play();
            }
        });
    });

    // ✅ Age modal logic
    btnYes.addEventListener("click", () => {
        ageModal.style.display = "none";
        cancelCount = 0;
        runningAway = false;

        const sound = new Audio(trickyButton.dataset.sound);
        sound.play();
    });

    btnNo.addEventListener("click", () => {
        cancelCount++;
        showFunnyMessage();

        if (cancelCount === 3) {
            startRunningAway();
            ageModal.style.display = "none";
        } else {
            // Move button randomly
            moveTrickyButton();
        }
    });

    // 🧠 Helper: Move the red button slightly each Cancel click
    function moveTrickyButton() {
        const offsetX = Math.random() * 200 - 100;
        const offsetY = Math.random() * 200 - 100;
        trickyButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }

    // 🧠 Helper: Make button run away from mouse
    function startRunningAway() {
        runningAway = true;
        trickyButton.classList.add("moving");

        document.addEventListener("mousemove", (e) => {
            if (!runningAway) return;

            const rect = trickyButton.getBoundingClientRect();
            const dx = e.clientX - (rect.left + rect.width / 2);
            const dy = e.clientY - (rect.top + rect.height / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                const moveX = (rect.left - dx * 0.5);
                const moveY = (rect.top - dy * 0.5);
                trickyButton.style.position = "fixed";
                trickyButton.style.left = `${Math.max(0, Math.min(window.innerWidth - rect.width, moveX))}px`;
                trickyButton.style.top = `${Math.max(0, Math.min(window.innerHeight - rect.height, moveY))}px`;
            }
        });
    }

    // 🗯 Funny floating message generator
    function showFunnyMessage() {
        const messages = [
            "Nice try.",
            "You sure about that?",
            "Can’t catch me!",
            "Denied.",
            "Too slow!",
            "Try again, mortal!"
        ];

        const msg = document.createElement("div");
        msg.textContent = messages[Math.floor(Math.random() * messages.length)];
        msg.style.position = "fixed";
        msg.style.left = `${trickyButton.getBoundingClientRect().left}px`;
        msg.style.top = `${trickyButton.getBoundingClientRect().top - 40}px`;
        msg.style.color = "gold";
        msg.style.fontFamily = "'Times New Roman', serif";
        msg.style.fontWeight = "bold";
        msg.style.textShadow = "0 0 10px red";
        msg.style.transition = "opacity 1s, transform 1s";
        msg.style.zIndex = "2000";

        document.body.appendChild(msg);

        // Float up and fade out
        setTimeout(() => {
            msg.style.opacity = "0";
            msg.style.transform = "translateY(-30px)";
        }, 100);

        setTimeout(() => msg.remove(), 1200);
    }
});


