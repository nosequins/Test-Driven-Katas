
const wrap=(line, maxLen)=>{

    let splitLine= line.split('')
    let finalString=''
    let counter=-1
    let str1=''
    for(let i=0; i< splitLine.length; i++){
        
        counter++
        if(counter === maxLen){
            finalString+= str1+'\n';
            counter=-1;
            str1=''
            i--
        }else{
            str1+=splitLine[i];
        }
        
    }
    
 return finalString;
}

module.exports= wrap;