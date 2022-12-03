const homeBtn = document.getElementById("btn-home");
const aboutBtn = document.getElementById("btn-aboutme");
const featuredArticle = document.getElementById("featured-article-title");
const navBar = document.getElementById("nav-bar");
const navContainer = document.getElementById("nav-container");

homeBtn.addEventListener('click', function(){
    if (document.getElementById("featured-article-preview").style.display == "none"){
        document.getElementById("featured-article-preview").style.display = "flex";
        document.getElementById("featured-blog").style.display = "none";
        document.getElementById("about-me").style.display = "none";   
    }
});

aboutBtn.addEventListener('click', function(){
    if (document.getElementById("about-me").style.display != 'block'){
        document.getElementById("about-me").style.display = "block";
        document.getElementById("featured-article-preview").style.display = "none";
        document.getElementById("featured-blog").style.display = "none";
    }
});

featuredArticle.addEventListener('click', function(){
        document.getElementById("featured-blog").style.display = "block";
        document.getElementById("about-me").style.display = "none";
        document.getElementById("featured-article-preview").style.display = "none";
});

document.addEventListener("click", function(e){
    if (e.target.id === "nav-bar"){
        navContainer.classList.toggle("navd-flex");
    }
    else{
        navContainer.classList.remove("navd-flex");
    }
});