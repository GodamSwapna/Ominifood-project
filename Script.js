//Make mobile navigation work//

const btnNavEl=document.querySelector(".btn-mobile-nav")
const headerEl=document.querySelector(".header");

btnNavEl.addEventListener('click',function(){
    headerEl.classList.toggle("nav-open");
})

// smoth scrolling animation

const allLinks=document.querySelectorAll('a:link')
// console.log(allLinks)

allLinks.forEach(function(link){
    link.addEventListener('click',function(e){
       e.preventDefault();
       const href=link.getAttribute("href");
    })
})

// sticky navigation
const sectionHeroEl=document.querySelector(".section-hero")
const obs=new IntersectionObserver(function(entries){
    const ent=entries[0];
    if(ent.isIntersecting===false){
        document.body.classList.add("sticky");
    }
    if(ent.isIntersecting===true){
        document.body.classList.remove("sticky");
    }
   
},{
    // In the viewport 
    root:null,
    threshold:0,
    rootMargin:"-80px",
})

obs.observer();