const btnRand = document.querySelector('.btn_rand');
const btnSubmit = document.querySelector('.btn_submit');
const randInput = document.querySelector('.rand_input');
const divContainer = document.querySelector('.div-container')
let divArray = [];
let numArray = new Map([]);

btnRand.addEventListener('click' , ()=>{
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
   divContainer.innerHTML = ""
   divArray=[]
   numArray=[]
   showDynamicArrayDiv(inputLength);
})

const randomNum = () => {
   return Math.floor(Math.random() * 100)
}

const showDynamicArrayDiv = (inputLength) => {
   let j =inputLength;
   let k =inputLength%2!=0?1:0;
   let ans;
   let gapLenth = 50;
   for(let i = 0; i < inputLength; i++){
      const r = randomNum()
      let xSize = divContainer.offsetWidth/2;
      if(j>0){
         ans = -(j*gapLenth);
        j= j-2;
      }
      else{
         ans = (k*gapLenth);
         k+=2;
      }
      divArray.push(`<div style="order: ${i}; transform:translateX(${ans}px);" class="div-element" id="div-element-${i}">${r}</div>`)

      numArray.push([r,i,ans]);
   }
   renderDiv(divArray)
}


const renderDiv = async (divArray) => {
   for(let i = 0; i < divArray.length; i++){
      divContainer.innerHTML += divArray[i];
   }
   console.log(numArray);
   bubbleSort(numArray,divContainer);
}


