import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
  };
  
  const FEEDBACK_FORM = 'feedback-form-state';

  refs.form.addEventListener('submit', onFormSubmit);
  refs.form.addEventListener('input', throttle(onInput, 500));

  settleInput();

 function onFormSubmit(evt) {
    evt.preventDefault();
  
    evt.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM);
    console.log(formData);
  }

 const formData = {};

 function onInput (evt)  {
   formData[evt.target.name] = evt.target.value;
   localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
 }
   
 function settleInput() {
   const savedMessage =  localStorage.getItem(FEEDBACK_FORM);
   const parsedMessage = JSON.parse(savedMessage);

 if (parsedMessage) {
    refs.input.value = parsedMessage.email;
    refs.textarea.value = parsedMessage.message;
 } 
 }
 
