
let startmenu=document.getElementsByClassName("startmenu")[0]
let taskbar=document.getElementsByClassName("taskbar")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom=="41px")
    {
        startmenu.style.bottom="-650px"
    }
    else{
        startmenu.style.bottom="41px" 
    }

})