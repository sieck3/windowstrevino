let startbtn = document.getElementById('start');
let page = document.getElementById('page');
let soundActive = document.getElementById('soundActive');
let soundInactive = document.getElementById('soundInactive');
let clock =  document.getElementById("clock");
let pokemon_icon = document.getElementById('pokemon_icon');
let toolbar_task = document.getElementById('toolbar_task');
let app_container = document.getElementById('app_container');
let frame = document.getElementById('frame');

let snake_icon = document.getElementById('snake_icon');
let snake_task = document.getElementById('snake_task');
let app_close_btn = document.getElementById('app_close_btn');

let header_icon = document.getElementById('header_icon');
let header_title = document.getElementById('header_title');
let toolbar_icon = document.getElementById('toolbar_icon');
let toolbar_title = document.getElementById('toolbar_title');

snake_icon.addEventListener(
     "click",
     function(){
          app_container.style.display = 'block';
          frame.src = 'https://sieck3.github.io/Js/snake';
          header_icon.src = 'img/snakes.png';
          header_title.innerHTML = 'Snake Game';
          toolbar_icon.src = 'img/snakes.png';
          toolbar_task.style.display = 'flex';
          toolbar_title.innerHTML = 'Snake Game';
     }
);





pokemon_icon.addEventListener(
     "click",
     function(){
          app_container.style.display = 'block';
          toolbar_task.style.display = 'flex';
          frame.src = 'https://sieck3.github.io/Js/memoire';
          header_icon.src = 'img/Daco_4475114.png';
          header_title.innerHTML = 'Pokemon Game';
          toolbar_icon.src = 'img/Daco_4475114.png';
          toolbar_title.innerHTML = 'Pokemon Game';

     }
);

app_close_btn.addEventListener(
     "click",
     function(){
          app_container.style.display = 'none';
          toolbar_task.style.display = 'none';
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