function sleep(ms){
   return new Promise((resolve) => setTimeout(resolve, ms));
}


const swap = ( numArray ,j,node,i,k) =>{
   let temp = numArray[j];
   numArray[j] = numArray[j+1];
   numArray[j+1] = temp;

   temp = numArray[j][1];
   numArray[j][1] = numArray[j+1][1];
   numArray[j+1][1] = temp;

   temp = numArray[j][2];
   numArray[j][2] = numArray[j+1][2];
   numArray[j+1][2] = temp;

   node[i].style.transform = `translateX(${numArray[j][2]}px)`;
   node[k].style.transform = `translateX(${-numArray[j+1][2]}px)`;
console.log(node[i].style.transform , node[i].style.order);
   temp = node[i].style.order;
   node[i].style.order = node[k].style.order;
   node[k].style.order = temp;

}

const setColor = (node,color) =>{
   node.style.backgroundColor = color;
}