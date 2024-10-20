// burger

const burger = document.querySelector('.burger');
const clouseMenu = document.querySelector('.clouse_menu')
const menu = document.querySelector('.menu');


burger.addEventListener('click',()=>{
menu.classList.add('active');
});

clouseMenu.addEventListener('click',()=>{
   menu.classList.remove('active')
})


//temukan tabs
const temukan1 = document.querySelector('#temukan1');
const temukan2 = document.querySelector('#temukan2');
const temukan3 = document.querySelector('#temukan3');
const temukanForm1 = document.querySelector('#temukan__form1');
const temukanForm2 = document.querySelector('#temukan__form2');
const temukanForm3 = document.querySelector('#temukan__form3');

temukan1.addEventListener('click',()=>{
   temukan1.classList.add('active');
   temukan2.classList.remove('active');
   temukan3.classList.remove('active');

   temukanForm2.classList.remove('focus');
   temukanForm2.classList.add('nofocus');
   temukanForm3.classList.remove('focus');
   temukanForm3.classList.add('nofocus');
   temukanForm1.classList.remove('nofocus');
   temukanForm1.classList.add('focus');

   

})
temukan2.addEventListener('click',()=>{
   temukan1.classList.remove('active');
   temukan2.classList.add('active');
   temukan3.classList.remove('active');
   temukanForm1.classList.remove('focus');
   temukanForm1.classList.add('nofocus');
   temukanForm3.classList.remove('focus');
   temukanForm3.classList.add('nofocus');
   temukanForm2.classList.remove('nofocus');
   temukanForm2.classList.add('focus');
   

})
temukan3.addEventListener('click',()=>{
   temukan1.classList.remove('active');
   temukan2.classList.remove('active');
   temukan3.classList.add('active');

   temukanForm2.classList.remove('focus');
   temukanForm2.classList.add('nofocus');
   temukanForm1.classList.remove('focus');
   temukanForm1.classList.add('nofocus');
   temukanForm3.classList.remove('nofocus');
   temukanForm3.classList.add('focus');
   

})


// swiper


let swiper = new Swiper(".swiper", {
   // slidesPerView: "auto",
   centeredSlides: true,
   loop: true,
   
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 8,
        
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1000:{
         slidesPerView: 4,
         spaceBetween: 16,
      }
    }
 });

 //popap
 const open = document.querySelector('.header__link');
 const dialog = document.querySelector('.dialog');
 const close = document.querySelector('.close-modal');

 const openModal = ()=>{
   dialog.showModal();
   document.body.classList.add('scroll-block')
   
 }

 const returnScroll = ()=>{
   document.body.classList.remove('scroll-block')
 }
 const closeModal =()=>{
   dialog.close();
   returnScroll()
 }

 open.addEventListener('click',openModal );
 close.addEventListener('click', closeModal);


const closeOnOwerlayClick = (e)=>{
   if(e.target === dialog ){
      dialog.close();
   }
}
dialog.addEventListener('click',closeOnOwerlayClick);
dialog.addEventListener('cancel',()=>{
   returnScroll()
})

//futer form

const form = document.getElementById('footer-form');
const inputFields = form.getElementsByClassName('application__input');
const sendMessege = document.querySelector('.send-massege');
for(const item of inputFields ){
  item.addEventListener('blur', (e)=>{
    validateForm(e);
   
  });
};

const setError = (element, messsage)=>{
   const errorSaction = element.parentElement.querySelector(".error");
 errorSaction.innerText = messsage;
 element.classList.add("invalid");
 element.classList.remove("valid");
 }

const setValid = (element)=>{
   const errorSaction =   element.parentElement.querySelector(".error");
   errorSaction.innerText = "";
   element.classList.remove("invalid");
   element.classList.add("valid");
   
 }

 const validateName =(nameFiled) =>{
   if(nameFiled.value=== ""){
     setError(nameFiled, "Name is required")
   }else if (nameFiled.value.length < 3){
      setError(nameFiled, "Name is so sort")
   }else if (nameFiled.value.length > 12){
      setError(nameFiled, "Name is so large")
   }else(setValid(nameFiled))
}

const validateEmail = (emailField)=>{
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(emailField.value ===""){
     setError(emailField, "Email is required" )
   }else if (!regex.test(emailField.value)){
     setError(emailField, "Email is incorrect" )
   } else{ setValid(emailField)}
 }

 const validateForm = (e)=>{
   switch(e.target.id){
     case "name": validateName(e.target);
       break;
     case "email": validateEmail(e.target);
       break;
       
       
     default: alert("Validation error!");
   }
 }


 const  sendForm = async (e)=>{
   e.preventDefault();
   for(const item of inputFields ){
     
      if(item.value==='') {return}
      if(item.classList.contains('invalid')) {return}
   }

   let formData = new FormData(form);
   
   // await fetch('http://127.0.0.1:5500/datasend', {
   //    method: 'POST',
   //    body: formData
   // });
   e.target.reset();

   sendMessege.innerHTML='Your application has been accepted'
   setTimeout(()=>{
      sendMessege.innerHTML='';
   }, 2000)
}

form.addEventListener('submit', sendForm);


//form register

const formRegister = document.getElementById('form-registre');
const inputFieldsReg = formRegister.getElementsByClassName('form__input');
const sendMessageReg = document.querySelector('.send-message-reg')
console.log(inputFieldsReg)
for(const item of inputFieldsReg ){
  item.addEventListener('blur', (e)=>{
   validateFormReg(e);
  });
};

const validatePassword = (passwordField)=>{
   const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/;
   if(passwordField.value ===""){
      setError(passwordField, "password is required")
      }else if(!regex.test(passwordField.value)){
        setError(passwordField," Passwprd is mast config at least & symbols, one digit and one special character")
      } else{ 
       setValid(passwordField)}
 }

 const validateFormReg = (e)=>{
   switch(e.target.id){
     case "username": validateName(e.target);
       break;
     
     case "password": validatePassword(e.target);
       break;
       
     default: alert("Validation error!");
   }
 }


 const  sendFormReg = async (e)=>{
   e.preventDefault();
   for(const item of inputFieldsReg ){
      if(item.value==='') {return}
      if(item.classList.contains('invalid')) return}

   let formDataR = new FormData(formRegister);
   
   // await fetch('http://127.0.0.1:5500/datasend', {
   //    method: 'POST',
   //    body: formDataR
   // });
   formRegister.reset();
   sendMessageReg.innerText='You have entered the site';
   setTimeout(()=>{ dialog.close()}, 1000);
   
  
}

formRegister.addEventListener('submit', sendFormReg);



//animation


const animates = document.querySelectorAll('.animate')
const animatesText = document.querySelectorAll('.animate-text')

const callback = (items, observer) => {
   items.forEach((item) => {
     if (item.isIntersecting) {
   
 
       item.target.classList.add('activ-anim')
       observer.unobserve(item.target)
     }
   })
 }

 
const observer = new IntersectionObserver(callback);
animates.forEach((block) => observer.observe(block))
animatesText.forEach((block) => observer.observe(block))