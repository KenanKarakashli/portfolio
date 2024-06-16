let secCount = document.querySelector(".sec_count");

let count = 0;
setInterval(function(){
  let d = new Date();
  let secondsHolder = d.getSeconds();
  let paddedCount = count.toString().padStart(3,'0');
  secCount.textContent = `${paddedCount} seconds.`;
  count++
},1000);