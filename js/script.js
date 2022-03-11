window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display="none";
    },1000)
})





//Portfolio Item Filter

const filterContainer=document.querySelector(".portfolio-filter"),
filterBtns=filterContainer.children;
totalFilterBtn=filterBtns.lenghth;
portfolioItems=document.querySelectorAll(".portfolio-item"),
totalPortfolioItem=portfolioItems.length;

for(let i=0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener("click",function(){
        filterContainer.querySelector(".active").classList.remove("active");
       this.clickList.add(("active"));

        const filterValue= this.getAttribute("data-filter");
        for(let k=0; k<totalPortfolioItem; k++){
            if(filterValue === portfolioItems[k].getAttribute(".data-category")){
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else{
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if(filterValue === "all"){
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }
    })
}

//Portfolio Lightbox
const lightbox=document.querySelector(".lightbox"),
        lightboxImg=lightbox.querySelector(".lightbox-img"),
        lightboxClose=lightbox.querySelector(".lightbox-close"),
        lightboxText=lightbox.querySelector(".caption-text"),
        lightboxCounter=lightbox.querySelector(".caption-counter");

let itemIndex=0;

for(let i=0; i<totalPortfolioItem; i++){
    portfolioItems[i].addEventListener("click", function(){
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
}
//this function is used for working of next buttons
    function nextItem(){
        if(itemIndex === totalPortfolioItem-1){
            itemIndex-0;
         }
         else{
             itemIndex++
         }
        changeItem(); 
    }
    //this function is used for working of prev buttons
    function prevItem(){
        if(itemIndex === 0){
           itemIndex=totalPortfolioItem-1;
         }
         else{
             itemIndex--;
         }
        changeItem(); 
    }
// this functio is used to toggle open (class name ) which is used to zoom images on click
function toggleLightbox(){
    lightbox.classList.toggle("open");
}

function changeItem(){
    imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");//to fetch image source
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHtml;
    lightboxCounter.innerHtml= (itemIndex) + "of" + totalPortfolioItem;
}

//close lightbox
lightbox.addEventListener("click", function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
})

//Aside Navbar

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        // remove back section class
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                // add back section class
                allSection[j].classList.add("back-section");

            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);

            if(window.innerWidth < 1200){
                 asideSectionTogglerBtn();
             }
    })

}



function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")


}
 const navTogglerBtn=document.querySelector(".nav-toggler"),
 aside=document.querySelector(".aside");

 navTogglerBtn.addEventListener("click",() =>{
     asideSectionTogglerBtn();
 })

 function asideSectionTogglerBtn(){
     aside.classList.toggle("open");
     navTogglerBtn.classList.toggle("open");
    for (let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
 }



