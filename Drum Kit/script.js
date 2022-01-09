function playSound(e) {

    //get the audio element if there is a data-key attribute with the keyCode attached to the key that has been pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //gets the element with the key class and keyCode that has been pressed
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio);

    if (!audio) return;   //stops the function from running further if keys without any audio tags attached are pressed
    audio.currentTime = 0;   //rewinds the audio to the start so that it plays however many times a particular key is pressed
    audio.play();

    key.classList.add('playing');
}

function removeTransitionEffect(e) {

    //console.log(e);
    if(e.propertyName != 'transform') return;   //skip if the properrty is not transform
    
    this.classList.remove('playing');

}


const keys = document.querySelectorAll('.key');   //nodeList of all the keys

keys.forEach(key => key.addEventListener('transitionend', removeTransitionEffect));   //for each key we are listening for the transition to end
//console.log(keys);

window.addEventListener('keydown', playSound);
