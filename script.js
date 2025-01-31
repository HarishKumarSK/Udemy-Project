let aside=document.getElementById('aside');
let menubar=document.getElementById('menubar');
let closebtn=document.getElementById('closebtn');
let blurscreen=document.querySelector('.blurblackscreen');
    menubar.addEventListener('click',()=>{
            aside.style.left = "0px"
            blurscreen.style.display='block'
    })

    closebtn.addEventListener('click',()=>{
        aside.style.left='-60%'
        blurscreen.style.display='none';
    })