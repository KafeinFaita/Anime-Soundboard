let drumPads = document.querySelectorAll(".drum-pad");
let sounds = document.querySelectorAll("audio");
let letters = ["Q", "W", "E", "A", "S", "D", "Z","X", "C"]

function playMusic(index) {
    sounds[index].currentTime = 0;
    sounds[index].play();
}

drumPads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
        playMusic(index);
        pad.style.border = "2px solid goldenrod";     
        setTimeout(() => pad.style.border = "none", 100) 
        document.getElementById('display').innerHTML = pad.getAttribute("data-display");
    })

})

window.addEventListener('keypress', (event) => {
    letters.forEach((keyPress, index) => {
        if (keyPress == event.key.toUpperCase()) {
            playMusic(index);
            drumPads[index].style.border = "2px solid goldenrod";
            setTimeout(() => drumPads[index].style.border = "none", 100)
            document.getElementById('display').innerHTML = drumPads[index].getAttribute("data-display");     
        }
    })
}) 



