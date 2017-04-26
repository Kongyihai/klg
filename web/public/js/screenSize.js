function setRem(){
    document.documentElement.style.fontSize = window.innerWidth / 18.75 +"px";
};
window.onresize = function(){
    setRem();
};
setRem();