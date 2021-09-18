function findSimilarLetters(str){
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
            if(str.charAt(i)==str.charAt(j)){
                console.log("Thats a string with similar letters")
            }
            else{
                console.log("that's a string without letters")
            }
        }
    }
}
//findSimilarLetters("DHL");
findSimilarLetters("wohnen");
//findSimilarLetters("Deutschland");
