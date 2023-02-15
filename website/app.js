const wrapper = document.querySelector(".carousel_wrapper");
const imgNo = document.querySelectorAll(".imgNo");
var x = window.matchMedia("(max-width: 1000px)");
var setIndex = 0
var milliseconds = 5500
imgNo.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        if (x.matches)
            wrapper.style.transform = `translateX(${-100* index}vw)`;
        else
            wrapper.style.transform = `translateX(${-60* index}vw)`;
        setIndex = index
    })
})
 

setInterval(()=>{
    if(setIndex<9){
        if (setIndex == 8){
            setIndex == 0;
        }
        if (x.matches)
            wrapper.style.transform = `translateX(${-100* setIndex}vw)`;
        else
            wrapper.style.transform = `translateX(${-60* setIndex}vw)`;
        setIndex++;

    }
}, milliseconds)