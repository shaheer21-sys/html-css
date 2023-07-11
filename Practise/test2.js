function setState(){
    let score = 22;
    return [score]
}

let [myScore] = setState();
myScore = 12;
console.log(myScore);
