
const bubbleSort =  async (numArray,divContainer) =>{
   let divElement = document.querySelectorAll('.div-element');
   // console.log(divContainer.childNodes);
   let i ,j;
   let l =0 , k=0;
   for( i = 0; i<numArray.length-1;i++){
      for( j=0;j<numArray.length-1-i;j++){
         l=0;
         k=0;
         console.log(numArray);
         while(divContainer.childNodes[l].style.order!=numArray[j][1])   l++;
         while(divContainer.childNodes[k].style.order!=numArray[j+1][1])   k++;
         await sleep(1000)
         setColor(divContainer.childNodes[l],"blue")
         setColor(divContainer.childNodes[k],"blue")
         await sleep(1000)
         if(numArray[j][0] > numArray[j+1][0]){
            swap( numArray ,j,divContainer.childNodes,l,k);
            await sleep(1000)
            setColor(divContainer.childNodes[l],"red")
           setColor(divContainer.childNodes[k],"red")
         }
         setColor(divContainer.childNodes[l],"red")
         setColor(divContainer.childNodes[k],"red")
      }
      await sleep(1000);
      for(let m = 0 ;m< numArray.length;m++){
         if(divContainer.childNodes[m].innerHTML == numArray[j][0]){
            setColor(divContainer.childNodes[m],"green")
         }
      }
   }
   await sleep(1000);
   for(let m = 0 ;m< numArray.length;m++){
      if(divContainer.childNodes[m].style.backgroundColor != "green"){
         setColor(divContainer.childNodes[m],"green")
      }
   }
}

