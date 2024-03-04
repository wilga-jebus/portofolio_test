

const image = document.getElementById('img_1');
const arrayOfImages = ['https://images.unsplash.com/photo-1505533321630-975218a5f66f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80','https://images.unsplash.com/photo-1696456195495-1b420d4ebd3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80','https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'];

const navAbout = document.getElementById('nav-test_1');
const navProjects = document.getElementById('nav-test_2');
const navContacts = document.getElementById('nav-test');

if(navAbout){
    navAbout.innerHTML=
    `<header>
<div class="nav">
    <h1 class="name">Marie Poirot</h1>
    <nav class="nav-elt">
        <ul class="header-ul">
            <li class="li-nav"><a href='#'>AboutMe</a></li>
            <li class="li-nav"><a href="./navigation/projects.html">Projects</a></li>
            <li class="li-nav li-skills">Skills</li>
            <li class="li-nav-3 li-nav"><a href="./navigation/contact.html">Contact</a></li>
        </ul>
    </nav>
</div>
</header>
`;
document.getElementById('nav-test2').innerHTML =`
         <footer>
            <div>
                <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, ipsum a tincidunt maximus,
                    leo felis aliquam nisl, et suscipit diam nisi sit amet nisi. Proin et dolor ex. Pellentesque
                    eleifend vitae arcu ac euismod. Nulla aliquam nisi tellus, eget egestas massa viverra quis. Nullam
                    sed ipsum vitae quam convallis lobortis sit amet in augue. Quisque sagittis risus non mauris mollis
                    scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    Quisque dictum urna ac fermentum tristique.

                </p>
            </div>
        </footer>
`
} else if (navProjects){

    navProjects.innerHTML =
    `<header>
   <div class="nav">
    <h1 class="name">Marie Poirot</h1>
    <nav class="nav-elt">
        <ul class="header-ul">
            <li class="li-nav"><a href="/">AboutMe</a></li>
            <li class="li-nav"><a href="./navigation/projects.html">Projects</a></li>
            <li class="li-nav li-skills">Skills</li>
            <li class="li-nav-3 li-nav"><a href="./contact.html">Contact</a></li>
        </ul>
    </nav>
</div>
</header>
`;
} else if(navContacts){
    navContacts.innerHTML=
    `<header>
<div class="nav">
    <h1 class="name">Marie Poirot</h1>
    <nav class="nav-elt">
        <ul class="header-ul">
            <li class="li-nav"><a href='/'>AboutMe</a></li>
            <li class="li-nav"><a href="./projects.html">Projects</a></li>
            <li class="li-nav li-skills">Skills</li>
            <li class="li-nav-3 li-nav"><a href="#">Contact</a></li>
        </ul>
    </nav>
</div>
</header>
`;
}





document.getElementById('nav-test2').innerHTML =`
         <footer>
            <div>
                <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, ipsum a tincidunt maximus,
                    leo felis aliquam nisl, et suscipit diam nisi sit amet nisi. Proin et dolor ex. Pellentesque
                    eleifend vitae arcu ac euismod. Nulla aliquam nisi tellus, eget egestas massa viverra quis. Nullam
                    sed ipsum vitae quam convallis lobortis sit amet in augue. Quisque sagittis risus non mauris mollis
                    scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    Quisque dictum urna ac fermentum tristique.

                </p>
            </div>
        </footer>
`
function overHandler(e) {
    /*e.target.src = arrayOfImages[0];*/
    setTimeout(()=> {
      e.target.style.width = '100%';
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

image.addEventListener('mouseover', overHandler);




          






    

  
   
    


