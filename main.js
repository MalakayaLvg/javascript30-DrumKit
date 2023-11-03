window.addEventListener('keydown',function (event) {
    //console.log(event.code)
    const audio = document.querySelector(`audio[class="${event.code}"]`)
    //console.log(audio)
    const key = document.querySelector(`.touch${event.code}`)
    //console.log(key)
    key.classList.add("playing")
    if (!audio) return
    audio.currentTime = 0;
    audio.play()
});

keys = document.querySelectorAll('.key')
console.log(keys)

keys.forEach((key)=> {
    console.log(key)
    key.addEventListener('transitionend', ()=>{
        key.classList.remove("playing")
    });
})



