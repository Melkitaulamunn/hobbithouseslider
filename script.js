const colorsContainers=document.getElementById("colorsContainer")
const bigColor=document.getElementById("bigColor")
const img=document.getElementById("img")
/*const color1=document.createElement("div")
color1.id="red"
color1.classList.add("smallBox")
color1.style.backgroundColor="red"
colorsContainers.appendChild(color1)*/
/*
const color2=document.createElement("div")
color2.id="yellow"
color2.classList.add("smallBox")
color2.style.backgroundColor="yellow"
colorsContainers.appendChild(color2)*/

/*const color3=document.createElement("div")
color3.id="blue"
color3.classList.add("smallBox")
color3.style.backgroundColor="blue"
colorsContainers.appendChild(color3)*/

/*color1.addEventListener("click",function(){
    bigColor.style.backgroundColor="red"

})

color2.addEventListener("click",function(){
    bigColor.style.backgroundColor="yellow"
})

color3.addEventListener("click",function(){
    bigColor.style.backgroundColor="blue"
})
*/
const images=["./hobbit.jpeg","./hobbit2.jpeg","./hobbit3.jpeg"]

for(let sayac=0;sayac<images.length;sayac++){
    const smallImg=document.createElement("img");
    smallImg.classList.add("smallBox")
    smallImg.setAttribute("src",images[sayac]);

    smallImg.addEventListener("click",function(){
       img.setAttribute("src",images[sayac]);
    });
    
    colorsContainers.appendChild(smallImg);
}