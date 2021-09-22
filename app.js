function findSimilarLetters(str){
    let obj=new Set();
    for(let i=0;i<str.length;i++){
        if(obj.has(str[i])){
            return false;
            console.log("answer it has similar letters");
        }else{
            obj.add(str[i])
        }
    }
    return true;
}