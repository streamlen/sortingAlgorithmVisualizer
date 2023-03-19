const btnRand = document.querySelector('.btn_rand');
const btnSubmit = document.querySelector('.btn_submit');
const randInput = document.querySelector('.rand_input');
const divContainer = document.querySelector('.div-container')
let divArray = [];
let numArray = [];

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
   return Math.floor(Math.random() * 10000)
}

const showDynamicArrayDiv = (inputLength) => {
   for(let i = 0; i < inputLength; i++){
      const r = randomNum()
      const s = r ;
      numArray.push(s);
      divArray.push(`<div style="order: ${i};" class="div-element" id="div-element-${s}">${s}</div>`)
   }
   // console.log(numArray)
      //  numArray.push(5);
      //  numArray.push(1);
      //  numArray.push(2);
      //  numArray.push(7);
      //  numArray.push(6);
      //  numArray.push(8);
      // divArray.push(`<div style="order: ${0};" class="div-element" id="div-element-${5}">${5}</div>`)
      // divArray.push(`<div style="order: ${1};" class="div-element" id="div-element-${1}">${1}</div>`)
      // divArray.push(`<div style="order: ${2};" class="div-element" id="div-element-${2}">${2}</div>`)
      // divArray.push(`<div style="order: ${3};" class="div-element" id="div-element-${7}">${7}</div>`)
      // divArray.push(`<div style="order: ${4};" class="div-element" id="div-element-${6}">${6}</div>`)
      // divArray.push(`<div style="order: ${5};" class="div-element" id="div-element-${8}">${8}</div>`)
   renderDiv(divArray)
}

const renderDiv = (divArray) => {
   // console.log(divArray)
   // divArray.push(`<div class="div-element">4</div>`)
   for(let i = 0; i < divArray.length; i++){
      divContainer.innerHTML += divArray[i]
   }
   bubbleSort(divArray,numArray,divContainer);
   // divContainer.innerHTML="";
   // for(let i = 0; i < divArray.length; i++){
   //    divContainer.innerHTML += divArray[i]
   // }
}


