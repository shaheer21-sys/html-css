const btn =  document.getElementById('button');
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