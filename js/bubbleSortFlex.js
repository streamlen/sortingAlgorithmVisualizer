function sleep(ms, divContainer,j){
   // console.log(divElement[j].style.order)
   // console.log(divElement[j].style)

   // divElement[j + 1].parentNode.insertBefore(divElement[j + 1], divElement[j])
   //    temp = divElement[j].style.order
   //    // console.log(temp, typeof temp)
   //    divElement[j].style.order = divElement[j+1].style.order;
   //  divElement[j+1].style.order = temp;
   temp = divContainer[j].innerHTML;
   console.log(temp, typeof temp)
   divContainer[j].innerHTML = divContainer[j+1].innerHTML;
   divContainer[j+1].innerHTML = temp;
     const startTime = new Date().getTime();
     while(new Date().getTime()<startTime+ms);
}

const swap = (divArray , numArray ,j,divElement,divContainer) =>{

   // console.log(divElement)

   let temp = numArray[j];
   numArray[j] = numArray[j+1];
   numArray[j+1] = temp;

   temp = divArray[j];
   divArray[j] = divArray[j+1];
   divArray[j+1] = temp;

   // temp = divContainer[j].innerHTML;
   // console.log(temp, typeof temp)
   // divContainer[j].innerHTML = divContainer[j+1].innerHTML;
   // divContainer[j+1].innerHTML = temp;

   //  temp = divContainer[j]
   // // console.log(temp, typeof temp)
   // divContainer[j] = divContainer[j+1];
   // divContainer[j+1] = temp;



   // console.log(divContainer);

   // divElement[j].parentNode.insertBefore(divElement[j],divElement[j+1]);

   // console.log(divElement);
   // console.log(divArray);
   // console.log(divElement[j].outerHTML, divElement[j+1].outerHTML);
   sleep(1000,divContainer,j)
   // setTimeout(() => {
   //    // divElement[j].after(divElement[j+1])


   //    temp = divElement[j].style.order
   //    divElement[j].style.order = divElement[j+1].style.order;
   //    divElement[j+1].style.order = temp;
   //    console.log(divElement[j].outerHTML, divElement[j+1].outerHTML);
   // }, 1000 * increment);

}

const bubbleSort = (divArray,numArray,divContainer) =>{
   // console.log("hi"+divArray)
   let increment = 1;
   let divElement = document.querySelectorAll('.div-element');
   console.log(divContainer.childNodes);

   for(let i = 0; i<numArray.length-1;i++){
      // console.log(divArray)

      for(let j=0;j<numArray.length-1-i;j++){
         if(numArray[j] > numArray[j+1]){
            swap(divArray, numArray ,j, divElement,divContainer.childNodes);
            // increment++;
         }
      }
   }
   // console.log(divElement);
   // console.log(numArray);
   // console.log(divArray);
}