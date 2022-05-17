function sentence (statement){
    let removespace = statement.split(" ").join("");
    let los = 0;
    let vowel = ["a","e","i","o","u"];
    let vowcount = []
    let noofWords = statement.split(" ");
    
    for(let i=0; i<removespace.length; i++){
      
      los = los + 1;
      
      if(vowel.includes(statement[i])){
        vowcount.push(statement[i]);
         
      }
       
      
      
    }
    console.log("vowel sound is : "+ vowcount.length);
    
    console.log("No of words is : "+ noofWords.length) ;
    console.log( "No of character is "+ los) ;
    
    
    
  }
  console.log(sentence("This is due to essential maintenance We apologise for any inconvenience this may cause."));