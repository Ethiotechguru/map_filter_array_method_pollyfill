const funcOne = ()=>{
    let letterList = [];
    let luckyLetter = '';
    let set;

    setInterval(()=>{
        let alpha = [
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z'
            ]
        let idx = Math.floor(Math.random()*26);
        letterList.push(alpha[idx]);
        luckyLetter = alpha[idx];
        set = new Set(letterList);
        if(set.size === 26){
            console.log('all letters are pushed');
            letterList = [];
        }
    },1000)

    return ()=>{
        console.log(letterList);
        console.log(luckyLetter);
        console.log(set)
    }
}
