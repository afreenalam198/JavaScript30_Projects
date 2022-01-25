const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    //console.log(seconds);

    //converting the seconds to degrees and adding 90 to offset the 90deg rotation that we had initially given to the second hand
    const secondsToDegrees = (seconds * 360 / 60) + 90;       
    secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;

    //to account for the snapback effect which happens when the hand reaches 90 degrees
    if (secondsToDegrees === 90) {

        secondHand.style.transition = 'none';
    
    } else {

        secondHand.style.transition = 'all 0.05s cubic-bezier(0.42, 0, 0, 3.65)';

    }

    const minutes = currentTime.getMinutes();
    const minutesToDegrees = (minutes * 360 / 60) + 90;       
    minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;
    if (minutesToDegrees === 90) {

        minuteHand.style.transition = 'none';

    } else {

        minuteHand.style.transition = 'all 0.05s cubic-bezier(0.42, 0, 0, 3.65)';

    }

    const hours = currentTime.getHours();
    const hoursToDegrees = (hours * 360 / 12) + 90;       
    hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
    if (hoursToDegrees === 90) {

        hourHand.style.transition = 'none';

    } else {

        hourHand.style.transition = 'all 0.05s cubic-bezier(0.42, 0, 0, 3.65)';

    }

    


}


setInterval(setDate, 1000);