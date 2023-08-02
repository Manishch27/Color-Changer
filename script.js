const color = document.getElementsByClassName("color");
const colorArray = Array.from(color);

colorArray.map(elem =>{
    elem.addEventListener('click', (e)=>{
        const background = e.target.getAttribute("id");
        document.body.style.backgroundColor = background;
    })
});