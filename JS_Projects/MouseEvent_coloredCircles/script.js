//inital message 
const msg = document.createElement("div");
msg.innerText ="Click anywhere on the white board 😇";
msg.classList.add("msg");
document.body.appendChild(msg);

//creating a button to clear the screen 
const btn = document.createElement("button");
btn.innerText= 'Clear Screen';
btn.classList.add("btn");

//white board box
const box = document.createElement("div");
box.classList.add('box')
document.body.appendChild(box);

const cirleColor = ["tomato","green","navy","cyan","blue","magenta","orange","purple"];

//event Listner 
box.addEventListener("click",(e) =>{


    const randomColor = cirleColor[Math.floor(Math.random() * cirleColor.length)];
    const circle =document.createElement("div");
    circle.classList.add("circle");

    // timeOut for scaling up

    setTimeout(() => {
        circle.style.transform='scale(1)';
    },100);

    // timeOut for scaling down

    setTimeout(() => {
        circle.style.transform='scale(0)';
    },5000);


    //circle color

    circle.style.backgroundColor = randomColor;

    //mouse event coordinates
    circle.style.left = e.clientX - 17 + "px";
    circle.style.top = e.clientY -17 + "px";

    console.log(e.clientX , e.clientY);
    box.appendChild(circle);

    document.body.appendChild(btn);





})

btn.addEventListener("click",()=>{
    box.innerHTML = "";
    document.body.removeChild(btn);
})


