let startbtn = document.getElementById('start');
let page = document.getElementById('page');
let soundActive = document.getElementById('soundActive');
let soundInactive = document.getElementById('soundInactive');




startbtn.addEventListener("click",function(){

     console.log("test");
     console.log(startbtn.className);

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

     console.log("clock");
     console.log(soundActive.style.display);
     
     if( soundActive.style.display == 'block'){
     
           soundActive.style.display='none';
           soundInactive.style.display='block';
     }
});

soundInactive.addEventListener("click",function(){

     console.log("clock");
     console.log(soundInactive.style.display);
     
     if( soundInactive.style.display == 'block'){
     
          soundInactive.style.display='none';
          soundActive.style.display='block';
     }
});