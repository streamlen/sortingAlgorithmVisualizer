const btnRand = document.querySelector('.btn_rand');
const btnMan = document.querySelector('.btn_man');
const btnManSubmit = document.querySelector('.btn_man_submit');
const btnSubmit = document.querySelector('.btn_submit');
const randInput = document.querySelector('.rand_input');
const manInput = document.querySelector('.man_input');
const divContainer = document.querySelector('.div-container-bar')
const typeElem = document.querySelector('#elemType');
let divArray = [];
let manArray;
let numArray = new Map([]);

typeElem.addEventListener('input',(elem)=>{
   
})

btnRand.addEventListener('click' , ()=>{
   btnMan.setAttribute('disabled',true);
   btnRand.classList.add('disable');
   randInput.classList.remove('disable');
   btnSubmit.classList.remove('disable');
   divContainer.innerHTML = ""
})

btnSubmit.addEventListener('click',()=>{
  let  inputLength = randInput.value;
   randInput.classList.add('disable');
   btnSubmit.classList.add('disable');
   btnRand.classList.remove('disable');
   btnMan.removeAttribute('disabled');
   divContainer.innerHTML = ""
   divArray=[]
   numArray=[]
   showDynamicArrayDiv(inputLength);
})

const randomNum = () => {
   return Math.floor(Math.random() * 100)
}

const showDynamicArrayDiv = (inputLength) => {
   let j =Math.floor(inputLength/2);
   console.log(j);
   // let k =inputLength%2!=0?1:0;
   let ans;
   let gapLenth;
   if(inputLength%2===0){
      gapLenth = -((j*100)+50);
   }
   else{
      gapLenth = -((j*100)+100)
   }

   for(let i = 0; i < inputLength; i++){
      const r = randomNum()
      ans = gapLenth+100;
      gapLenth+=100;
      // if(j>0){
      //    ans = -(j*gapLenth);
      //   j= j-2;
      // }
      // else{
      //    ans = (k*gapLenth);
      //    k+=2;
      // }
      divArray.push(`<div style="order: ${i}; transform:translateX(${ans}px); height:${r+100}px" class="div-element-bar" id="div-element-${i}">${r}</div>`)

      numArray.push([r,i,ans]);
   }
   renderDiv(divArray)
}


const renderDiv = async (divArray) => {
   for(let i = 0; i < divArray.length; i++){
      divContainer.innerHTML += divArray[i];
   }
   console.log(numArray);
   // bubbleSort(numArray,divContainer);
   // selectionSort(numArray,divContainer);
   // insertionSort(numArray,divContainer);
}

btnMan.addEventListener('click' , ()=>{
   btnRand.setAttribute('disabled',true);
   btnMan.classList.add('disable');
   manInput.classList.remove('disable');
   btnManSubmit.classList.remove('disable');
   divContainer.innerHTML = ""
})

btnManSubmit.addEventListener('click',()=>{
   let  inputLength = manInput.value;
   console.log(inputLength);
    manInput.classList.add('disable');
    btnManSubmit.classList.add('disable');
    btnMan.classList.remove('disable');
    btnRand.removeAttribute('disabled');
    divContainer.innerHTML = ""
    divArray=[]
    numArray=[]
    showManArrayDiv(inputLength);
 })

 const showManArrayDiv = (inputLength)=>{
   manArray = inputLength.split(',');
   let length = manArray.length;
   let j =Math.floor(length/2);
   console.log(j);
   // let k =inputLength%2!=0?1:0;
   let ans;
   let gapLenth;
   if(length%2===0){
      gapLenth = -((j*100)+50);
   }
   else{
      gapLenth = -((j*100)+100)
   }

   for(let i = 0; i < length; i++){
      ans = gapLenth+100;
      gapLenth+=100;
      manArray[i] = Number(manArray[i]);
      divArray.push(`<div style="order: ${i}; transform:translateX(${ans}px);" class="div-element" id="div-element-${i}">${manArray[i]}</div>`)
      numArray.push([manArray[i],i,ans]);
   }

   console.log(manArray);
   renderDiv(divArray)
 };

