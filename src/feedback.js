import debounce from 'lodash.debounce';
import  storage from './storage.js';
import './css/styles.css';

const refs = {
  form: document.querySelector('#feedback-form')
};

// const messBack = localStorage.getItem('myKey');

// if(messBack) {
//   const text = refs.form.elements.message;
//   text.value = messBack;
// };

// refs.form.addEventListener('input', local);

// function local(e) {

//   const text = e.currentTarget.elements.message.value;

//  localStorage.setItem('myKey', text);
// };

// с функциями из storage.js

const messBack = storage.get('myKey');

if(messBack) {
  const text = refs.form.elements.message;
  // console.log(messBack)
  text.value = messBack;
};

refs.form.addEventListener('input', debounce(localAdd, 300));

function localAdd(e) {
  console.log(e)
  const textArea = e.target;
  storage.set('myKey', textArea.value);
};

refs.form.addEventListener('submit', cleanForm);

function cleanForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('myKey');
}
