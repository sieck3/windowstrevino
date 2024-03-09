let startbtn = document.getElementById('start');
let page = document.getElementById('page');
let soundActive = document.getElementById('soundActive');
let soundInactive = document.getElementById('soundInactive');
let clock =  document.getElementById("clock");


function myTimer() {
     const d = new Date();
     console.log(d.toLocaleTimeString());
     clock.innerHTML = d.toLocaleTimeString();
}

setInterval(myTimer, 1000);


startbtn.addEventListener("click",function(){



     if(startbtn.className == "active"){

          startbtn.className = "start";
          page.style.display = "none";


     }else{

          startbtn.className = "active";
          page.style.display = "flex";

     }


});

page.addEventListener("click",function(){

     // page.style.display = "block";


});

soundActive.addEventListener("click",function(){

     
     if( soundActive.style.display == 'block'){
     
           soundActive.style.display='none';
           soundInactive.style.display='block';
     }
});


soundInactive.addEventListener("click",function(){

     
     if( soundInactive.style.display == 'block'){
     
          soundInactive.style.display='none';
          soundActive.style.display='block';
     }
});