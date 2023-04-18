document.getElementById("switch-mode").onclick = function(){
    document.getElementById("body").classList.toggle('dark-mode');
}

document.getElementById("button__navb").onclick = function(){
    var addClass = document.getElementById("bnt__overlay__open");
    addClass.classList.add("overlay__open");
}

document.getElementById("bnt__overplay__close").onclick = function(){
    var removeClass = document.getElementById("bnt__overlay__open");
    removeClass.classList.remove("overlay__open");
}