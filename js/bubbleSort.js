
function sleep(ms){
   const startTime = new Date().getTime();
   while(new Date().getTime()<startTime+ms);
}

// console.log("start");
// sleep(10);
// console.log("end");


const swap = (divArray , numArray ,j,divElement) =>{
   let increment = 1;
   console.log(divElement)

   let temp = numArray[j];
   numArray[j] = numArray[j+1];
   numArray[j+1] = temp;

   temp = divArray[j];
   divArray[j] = divArray[j+1];
   divArray[j+1] = temp;

   sleep(1000 * increment)

   // setTimeout(() => {
   //    // divElement[j].after(divElement[j+1])
   //    temp = divElement[j].outerHTML
   //    divElement[j].outerHTML = divElement[j+1].outerHTML;
   //    divElement[j+1].outerHTML = temp;
   // }, 1000 * increment)
   increment++;
   console.log(divElement)
}

const bubbleSort = (divArray,numArray,divContainer) =>{
   let divElement = document.querySelectorAll('.div-element');
   // console.log(numArray);
   // console.log(typeof divContainer.innerHTML)
   // console.log(divElement);
   for(let i = 0; i<numArray.length-1;i++){
      for(let j=0;j<numArray.length-1-i;j++){
         if(numArray[j] > numArray[j+1]){
            swap(divArray, numArray ,j, divElement);
            // divContainer.innerHTML = '';

            // for(let i = 0; i < divArray.length; i++){
            //    if(i === j ){

            //       divContainer.innerHTML+="<div></div>";
            //    }
            //    else  if(i === j + 1){
            //       setTimeout(() => {
            //          divContainer.innerHTML[j+1] = divArray[j+1];
            //       }, 2000)
            //       divContainer.innerHTML+="<div></div>";
            //    }
            // }
         }
      }
   }
   console.log(divElement);
   console.log(numArray);
   console.log(divArray);
}