//1
function sumOfFourAndSix(){
  let sum = 0
    for(let i = 1; i <= 1000; i++){
        if(i % 4 == 0 && i % 6 == 0){
            sum += i
        }
    }
    return sum 
}
//console.log(sumOfFourAndSix())

//2
function oddAndEvenInFifteen(){
  for(let i = 0; i < 16; i++){
    if(i % 2 === 0){
        //return i +"is even"
      console.log(`${i} is even`)
    }else{
      console.log(`${i} is odd`)
    }    
  }
}

//console.log(oddAndEvenInFifteen())
//3
function assignGrade(num){
    if(num > 90){
      console.log(`A`)
    }else if(num > 80){
      console.log(`B`)
    }else if(num > 70){
      console.log(`C`)
    }else if(num > 64){
      console.log(`D`)
    }else{
      console.log(`F`)
    }
}
 
assignGrade(190)

