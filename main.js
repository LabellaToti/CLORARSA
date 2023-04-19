console.log("putos todos")

const nav = document.querySelector('nav')

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        nav.classList.add('bg-dark-nav','shadow') 
    }
    else{
        nav.classList.remove('bg-dark-nav','shadow')
    }
})



document.addEventListener('DOMContentLoaded', ()=>{
    const elementosCarousel = document.querySelectorAll('.carousel')
    M.Carousel.init(elementosCarousel,{
        duration: 15,
        dist:0,
        shift: 5,
        padding:5,
        numVisible:5,
        indicators: true,
        noWrap:false
    })
})

document.addEventListener('DOMContentLoaded', ()=>{
   const imgLightBox = document.querySelectorAll(".materialboxed")
    M.Materialbox.init(imgLightBox,{
        inDuration: 500,
        outDuration: 500
    })
})
