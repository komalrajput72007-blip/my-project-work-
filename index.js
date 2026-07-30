function toggleList(){
    const specs= document.getElementById("specs");
    const arrow=document.getElementById("arrow");
    specs.classList.toggle("show");
    if(specs.classList.contains("show")){
        arrow.classList.remove("fa-angle-down");
        arrow.classList.add("fa-angle-up");
    }else{
        arrow.classList.remove("fa-angle-up");
        arrow.classList.add("fa-angle-down")
    }
}

let x=document.getElementById('menu');
let menuBtn=document.querySelector('.menubtn');
let closeBtn=document.querySelector('.closebtn')

function openMenu(){
    x.style.display ='block';
    menuBtn.style.display='none';
    closeBtn.style.display='block';
}
function closeMenu(){
    x.style.display ='none';
    menuBtn.style.display='block';
    closeBtn.style.display='none';
}
