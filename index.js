let hamburgerIcon = document.querySelector(".icon");
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

hamburgerIcon.addEventListener("click", function(){
  var navList = document.querySelector(".nav_bar_list");
  if(navList.style.display === "block" && window.innerWidth <= 1400){
    navList.style.display = "none"
  } else {
    navList.style.display = "block"

  }
});

