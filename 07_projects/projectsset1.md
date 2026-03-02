# Projects related to DOM

## project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-qosbrsgs?file=index.html)

# Solution Code

## project 1

```javascript
console.log("hitesh");

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2

```javscript
const form = document.querySelector('form')
//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results');

  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`
  }
  else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the result

    results.innerHTML = `<span>${bmi}</span>`
  }
  // results.inerHTML = `${height}`
})
```

## project 3

```javascript
const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')

//Above both lines are same with diff syntax


setInterval(function(){
  let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();

}, 1000)
```