let startbtn = document.getElementById('start');
let page = document.getElementById('page');
let soundActive = document.getElementById('soundActive');
let soundInactive = document.getElementById('soundInactive');
let clock =  document.getElementById("clock");
let pokemon_icon = document.getElementById('pokemon_icon');
let app_container = document.getElementById('app_container');

let app_close_btn = document.getElementById('app_close_btn');

app_close_btn.addEventListener(
     "click",
     function(){
          app_container.style.display = 'none';
     }
);

pokemon_icon.addEventListener(
     "click",
     function(){
          app_container.style.display = 'block';
     }
);

function myTimer() {
     const d = new Date();
     clock.innerHTML = d.toLocaleTimeString();
}

setInterval(myTimer, 1000);


startbtn.addEventListener("click",function(){



     if(startbtn.className == "active"){

          startbtn.className = "start";
          page.classList.remove('on');

     }else{

          startbtn.className = "active";
          console.log( page.style);
          // page.style.display = "flex";
          page.classList.add('on');
          console.log( page);
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