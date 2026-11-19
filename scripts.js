//1.crwate a constant
const startElement= document.getElementById("start"); // get by id because it has the id start and thats why we say start in the parantehstis nad do the same stuff for reset and stop and aso the timer, Find an HTML element that has the ID start
const stopElement= document.getElementById("stop");
const resetElement= document.getElementById("reset");
const timerElement= document.getElementById("timer");
// 5. create variable inetrval
let interval
//12. to create an alarm sound we can add an mp4 audio, new Audio() creates an audio object. and hen we set it under clear inetrval in the if sats. by .play() method
const alarmSound= new Audio("alarm.mp4")
let timeLeft =10; // measn 25 mins this is sec we want to convert this to m inutes
//6. crate a function 
 function updateTimer(){
    //crwat the sec min
    let minutes=Math.floor(timeLeft/60)
    let seconds=timeLeft%60 // remainser is the seconds
    let formattedTime=    `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`//8. here we can see that we have in this format towards the end of time: 1.51 but we wnat to hae it in this format: 01.51. or vice verca 01.03 minutes left etc. so we use : padstart(how many digits lets say 2, - "0" = If characters are missing, add zeros at the beginning. ) but we convert the minutes and sec intostring
    timerElement.innerHTML=formattedTime;// innerhTML means: Look inside an HTML element and read or change the HTML content inside it.
    // 7.now we need to call this function inside the starttimer to update it, inside the parameter of setinterval
 }
//3. create function, and for others
//befor it was like this: 
// function startTimer(){
//console.log("start")
//}
// 4. now we want to start with the starttimer function
function startTimer(){
    // we want to creat an inetrvall so evry one second we want yo update the atimer. so create a variable called interval
    interval= setInterval(()=>{
        timeLeft--;
        updateTimer();//8. since we want the time to decrese every one sec, so we use timeleft-= function
        //9. after the updating we want tp create an alert.
        if(timeLeft==0){
            clearInterval(interval)
            
            alarmSound.currentTime = 0;//Start from the beginning,Sets the audio playback position to the beginning.
            alarmSound.play();//Starts playing the alarm.

            setTimeout(() => {//Executes code once after a delay,Think of it as setting an alarm clock!Wait 6 seconds, THEN stop the alarm.
                alarmSound.pause();//stops the audio.
                alarmSound.currentTime = 0;//rewinds the audio.
            }, 6000);//6000 milliseconds = 6 seconds
            alert("Times up!") // if we did this with lets say 10 sec we saw that we get and alert and ween we press ok the time decreased agin into negatie numbers, so we need to clear the intervall which will set the time to zero, we need tot then set the timer back, so think of intervas as having the condition forst outside and the insider runs after then condition is fulfilled.
            
            timeLeft=1500;
            updateTimer()//we want to update timeleeft
        }
    },1000)// set the interval to function called set ineterval , built in function trigger the function every 1000 milliseconds
}
function stopTimer(){
    //10.when we click on this we want to clear the inetrvall
    clearInterval(interval)//so when we peess stop it is going to stop the timer as is. and when pressing start again it wil continue.
}
function resetTimer(){
    //11. same here, but then set the timeleeft to 25 mins backa again.
    clearInterval(interval)
    timeLeft=1500// and also want to update timer
    updateTimer()
}
// 2.now add the event listener to the buttons, we add click when we click on the button we want to trigger the function and call the function startTimer, and then do the same for all
startElement.addEventListener("click",startTimer);
stopElement.addEventListener("click",stopTimer);
resetElement.addEventListener("click",resetTimer);// after this u can check the console when clicking the buttons it returns thoses

alarmSound.play();