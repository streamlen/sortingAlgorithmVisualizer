// const bubbleSort = (numArray, divContainer) => {
//    let i, j;
//    let l = 0, k = 0;

//    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
//    const setColorPromise = (element, color) => new Promise(resolve => {
//      setColor(element, color);
//      resolve();
//    });

//    const loop = () => {
//      i = 0;
//      return loopI();
//    }

//    const loopI = () => {
//      if (i >= numArray.length - 1) {
//        return finalize();
//      }

//      j = 0;
//      return loopJ();
//    }

//    const loopJ = () => {
//      if (j >= numArray.length - 1 - i) {
//        return loopI();
//      }

//      l = 0;
//      k = 0;
//      while (divContainer.childNodes[l].style.order != numArray[j][1]) l++;
//      while (divContainer.childNodes[k].style.order != numArray[j + 1][1]) k++;

//      return sleep(1000)
//        .then(() => setColorPromise(divContainer.childNodes[l], "blue"))
//        .then(() => setColorPromise(divContainer.childNodes[k], "blue"))
//        .then(() => sleep(1000))
//        .then(() => {
//          if (numArray[j][0] > numArray[j + 1][0]) {
//             swap(numArray, j, divContainer.childNodes, l, k)
//             sleep(1000)
//              .then(() => setColorPromise(divContainer.childNodes[l], "red"))
//              .then(() => setColorPromise(divContainer.childNodes[k], "red"));
//          }
//        })
//        .then(() => setColorPromise(divContainer.childNodes[l], "red"))
//        .then(() => setColorPromise(divContainer.childNodes[k], "red"))
//        .then(() => {
//          j++;
//          return loopJ();
//        });
//    }

//    const finalize = () => {
//       sleep(1000)
//        .then(() => {
//          for (let m = 0; m < numArray.length; m++) {
//            if (divContainer.childNodes[m].innerHTML == numArray[j][0]) {
//              setColorPromise(divContainer.childNodes[m], "green");
//            }
//          }
//        })
//        .then(() => {
//          for (let m = 0; m < numArray.length; m++) {
//            if (divContainer.childNodes[m].style.backgroundColor != "green") {
//              setColorPromise(divContainer.childNodes[m], "green");
//            }
//          }
//        });
//    }

//    return loop();
//  };