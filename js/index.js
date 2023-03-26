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
   for(let i = 0; i < inputLength; i++){
      const r = randomNum()
      const s = r ;
      let position = 10*i;
      divArray.push(`<div style="order: ${i};" class="div-element" id="div-element-${i}">${s}</div>`)
      numArray.push([s,i,position]);
   }
   renderDiv(divArray)
}


const renderDiv = async (divArray) => {
   for(let i = 0; i < divArray.length; i++){
      divContainer.innerHTML += divArray[i];
   }
   // await sleep(1000);
   // let divElement = document.querySelectorAll('.div-element');
   // for(let i=0;i<divArray.length;i++){
   //   let a =  divElement[i].getBoundingClientRect().top;
   //   let b = divElement[i].getBoundingClientRect().left;
   //    numArray[i].push(b);
   // }
   console.log(numArray);
   bubbleSort(numArray,divContainer);
}


