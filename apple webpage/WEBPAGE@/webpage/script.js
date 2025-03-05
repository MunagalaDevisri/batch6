const button=document.getElementById("home");
const button1=document.getElementById("about");
const button2=document.getElementById("friends");
const button3=document.getElementById("contact");
const output=document.getElementById("output");
button.addEventListener("click",()=>{
    output.style.display="block"
})
function scrollToSection(home){
    const section=document.getElementById(home);
    if(section){
        section.scrollIntoView({behaviour:'smooth'});
    }
}
function showImageInfo(imageSrc){
    const modal=document.getElementById('image-info');
        const image=document.getElementById('modal-image');
        image.src=imageSrc;
        modal.style.display='block';

}
function closeImageInfo(){
    const modal=document.getElementById('image-info');
    modal.style.display='none';
    
    document.getElementById('modal-image').src='images/1.jpg';
    document.getElementById('modal-image').src='images/2.jpg';
    document.getElementById('modal-image').src='images/3.jpg';
    document.getElementById('modal-image').src='images/4.jpg';
}
function scrollToSection(about){
    const section=document.getElementById(about);
    if(section){
        section.scrollIntoView({behaviour:'smooth'});
    }
}
function scrollToSection(friends){
    const section=document.getElementById(friends);
    if(section){
        section.scrollIntoView({behaviour:'smooth'});
    }
}
function showImageInfo(imageSrc){
    const modal=document.getElementById('image-info');
        const image=document.getElementById('modal-image');
        image.src=imageSrc;
        modal.style.display='block';

}
function closeImageInfo(){
    const modal=document.getElementById('image-info');
    modal.style.display='none';
    
    document.getElementById('modal-image').src='images/1.jpg';
    document.getElementById('modal-image').src='images/2.jpg';
    document.getElementById('modal-image').src='images/3.jpg';
    document.getElementById('modal-image').src='images/4.jpg';
}
function scrollToSection(contact){
    const section=document.getElementById(contact);
    if(section){
        section.scrollIntoView({behaviour:'smooth'});
    }
}
