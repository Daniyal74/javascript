# Project related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## Project 01

```javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons)

const body = document.querySelector('body');
// console.log(body)

// we apply Foreach with node list.

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }

```
## Project 2 solution

```Javascript
const form = document.querySelector('form')

// form will be submitted either by post type or get type. when form is submitted its values will be transferred to the server.

// we have to stop the default action of sending data to the server.

const height = parseInt(document.querySelector('#height').value)
// Above usecase will give an empty value.
form.addEventListener('submit', (e) => {
  e.preventDefault()

  // we can extract the value after submission not before submission.

  const height = parseInt(document.querySelector('#height').value) 
  // vlaue will be in string so, we have to convert it into integer.

  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === "" || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if(weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight: ${weight}`;
  } else{
    const BMI = (weight / ((height*height)/10000)).toFixed(2)

    // SHOWING RESULTS

    results.innerHTML = `<span>${BMI}</span>`
  }
})

```
