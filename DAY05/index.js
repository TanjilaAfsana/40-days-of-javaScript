console.log("Day 05");


for(let count = 1; count<= 5; count++){
    console.log("Iteration/loop", count);
}

for(let i =2;i<3 ; i++){
    console.log("Hello",i)

}

//addition of even numbets between 1 to 100
let sum = 0;
for(let i =1;i<=100;i++){
    if(i%2==0){
        console.log("this number is even number",i)
        sum = sum+i;
        console.log("sum of the even number",sum)
        
    }
    
}
console.log(sum);

let language = "javaScript";

for (let i=0; i< language.length; i++){
    console.log(language.charAt(i))
}

//break and continue

for(let i = 1; i<=5; i++){
    console.log(i)
    if (i===3){
        break;
    }
    
}

for(let i =1;i<=5;i++){
    if (i===3)
        continue;
    console.log(i)
}

//two counter in one loop (counter means variable like i, j or count etc)
//or multiple counters for single loop
for (let i =1, j=10; i<=10 && j>=1 ; i++,j--)
{
        console.log(i,j)
}

/*
*
* *
* * *
* * * * 
* * * * *
*/

for(let i=1;i<=5;i++){
    for(let j= 1; j<=i; j++){
       console.log("*",i,"*",j) 
    
    }
   
    
    
}


//while loop
/* while(condition){
    //code
}
    */

let counter = 1;
while(counter<=5){
    console.log(counter);
    counter++;
}

//do-while
console.log("do while loop:")

let num = 1;
do{
    console.log(num);
    num++
}while(num <= 5)