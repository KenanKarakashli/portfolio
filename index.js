let secCount = document.querySelector(".sec_count");

let count = 0;
let myInterval = setInterval(function(){
  let d = new Date();
  let secondsHolder = d.getSeconds();
    let paddedCount = count.toString().padStart(3,'0');
    secCount.textContent = `${paddedCount} seconds.`;
  count++
    if(count === 999){
      count = 0;
    }
},1000);

