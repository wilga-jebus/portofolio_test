
//const container = document.getElementsByTagName('main');
const image = document.getElementById('img_1');
const imagesArray = ["./resource/images/josh-hild-ttuS-GeWEao-unsplash.jpg","./resource/images/neom-gBCMAENwknA-unsplash.jpg","./resource/images/tanya-layko-ScLIyvFB13k-unsplash.jpg"];

let randomImage = Math.floor(Math.random()* 2)

image.addEventListener('click',(e) => {
    let imageSrc = e.target.src = imagesArray[randomImage]
    image.value = imageSrc;
})
    
   
    


