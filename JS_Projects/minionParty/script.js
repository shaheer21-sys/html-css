const btn =  document.getElementById('button1');
// console.log("hello");

const randomColor = () => {
    let hex = '0123456789ABCDEF';
    let hash ='#';

    for (let i = 0 ; i < 6 ;i++){
        hash+=hex[Math.floor(Math.random() * 16)];
    }

    return hash;
};

console.log(randomColor());

function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);


// Experiment on disco
const btn1 =document.getElementById("button2");


let disco = null;

//put first 4 lines of minon to creat only one minion

//audio tag creation
var sound = document.createElement('audio');
sound.id       = 'audio-player';
sound.controls = 'controls';
sound.src      = './minionJam.mp3';
sound.type     = 'audio/mp3';
// document.getElementById('song').appendChild(sound);


btn1.onclick = () =>{

    // //minion
    var img1 = document.createElement("img");
    img1.src ='https://media.tenor.com/xyftqV6FPvgAAAAi/minions.gif';
    img1.style.width='200px';
    img1.style.height='200px';
    img1.style.margin='auto';
    document.getElementById("minion").appendChild(img1);



    //start disco
    if(!disco){
        disco = setInterval(()=>{
            changeRandomColor();
        },100);

        btn1.innerText = "stop";
        console.log(disco);
        
        //removing gif 
        document.getElementById("minion").removeChild(img1);

                //audio
                document.getElementById('song').appendChild(sound);
                sound.play();

        

    }
    
    else{
        clearInterval(disco);
        disco=null;
        btn1.innerText ="disco";
        sound.pause();



    }

}

