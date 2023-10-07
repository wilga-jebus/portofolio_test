

const image = document.getElementById('img_1');
const arrayOfImages = ['https://images.unsplash.com/photo-1505533321630-975218a5f66f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80','https://images.unsplash.com/photo-1696456195495-1b420d4ebd3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80','https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'];

function clickHandler(e) {
    e.target.src = arrayOfImages[0];
    setTimeout(()=> {
      e.target.style.width = '300px';
      e.target.style.height = '300px';
      e.target.src = arrayOfImages[1];
    },1000);
    setTimeout(()=> {
      e.target.src = arrayOfImages[2];
    },2000);
    setTimeout(()=> {
      e.target.src = './resource/images/josh-hild-ttuS-GeWEao-unsplash.jpg';
    },3000);
}

image.addEventListener('mouseover', clickHandler);





    

  
   
    


