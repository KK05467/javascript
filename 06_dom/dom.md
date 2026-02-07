****\*\*\*\*****Dom manipulation****\*\*\*\*****

Hover to the part of webpage you want to manipulate!
Go to that part and get the attribute for it
eX:-
document.getELementById('**_ID OF THE PART YOU WANT TO MANIPULATE_**')
document.getElementById('**_ID OF THE PART YOU WANT TO MANIPULATE_**').innerHTML = "<h1>Chai aur Code</h1>"

you will see that the changes (here Chai aur Code appears in place of the part you want to manipulate)

******\*\*******Console Window Operation********\*********
document.getElementById('title')

<h1 id=​"title" class=​"heading">​DOM Learning on Chai aur Code​</h1>​
Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below and press Enter to allow pasting.
document.getElementById('title').id
'title'
document.getElementById('title')
<h1 id=​"title" class=​"heading">​DOM Learning on Chai aur Code​</h1>​
document.getElementById('title').class
undefined
document.getElementById('title').className
'heading'
document.getElementById('title').getAttribute()
VM500:1 Uncaught TypeError: Failed to execute 'getAttribute' on 'Element': 1 argument required, but only 0 present.
    at <anonymous>:1:34
(anonymous) @ VM500:1Understand this error
document.getElementById('title').getAttribute('id)
VM623:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').setAttribute('class', 'test')
undefined
const title = document.getElementById('title')
undefined
title.style.backgroundColor = 'green'
'green'
title.style.paddding = "15px"
'15px'

****\*****innerContent V/s innerText******\*******
title.textContent
'DOM Learning on Chai aur Code'
title.innerHTML
'DOM Learning on Chai aur Code'
title.innerText
'DOM Learning on Chai aur Code'

This shows that all of the three functions give same value but there is a difference among them

//Refer to one.html in dom folder there is a span tag whose style is display:none

title.innerText
'DOM Learning on Chai aur Code'
title.innerContent
undefined
title.textContent
'DOM Learning on Chai aur Codetest text'

******\*\*******querySelector********\*********
document.querySelector('ul')

<ul>​…​</ul>​
const myul = document.querySelector('ul')
undefined
myul.querySelector('li')
<li>​…​</li>​
const turnGreen = myul.querySelector('li')
undefined
turnGreen = myul.querySelector('li')
VM8035:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:11
(anonymous) @ VM8035:1Understand this error
const turnGreen = myul.querySelector('li')
undefined
turnGreen.style.backgroundColor = "green"
'green'
turnGreen.style.backgroundColor = "10px"
'10px'
turnGreen.innerText
'one'
turnGreen.innerText = "five"
'five'

###### querySelectorAll

const tempLiList = document.querySelectorAll('li')
undefined
tempLiList
NodeList(3) [li, li, li]
tempLiList.style.color = 'green'
VM10253:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
at <anonymous>:1:24
(anonymous) @ VM10253:1Understand this error
tempLiList[0].style.color = 'green'
'green'

**\*\***It looks like array and operates like array but is not an array as it does not contain elements like map, push,etc in its dropdown list of operations

##### console window

document.getElementByclassName('list-item')
VM784:1 Uncaught TypeError: document.getElementByclassName is not a function
at <anonymous>:1:10
(anonymous) @ VM784:1Understand this error
document.getElementsByclassName('list-item')
VM958:1 Uncaught TypeError: document.getElementsByclassName is not a function
at <anonymous>:1:10
(anonymous) @ VM958:1Understand this error
document.getElementByClassName('list-item')
VM998:1 Uncaught TypeError: document.getElementByClassName is not a function
at <anonymous>:1:10
(anonymous) @ VM998:1Understand this error
document.getElementsByClassName('list-item')
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: HTMLCollection
const tempClassList = document.getElementsByClassName('list-item')
undefined
tempClassList
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
tempClassList.forEach(function(li)){
console.log(li)
}
VM1362:1 Uncaught SyntaxError: Unexpected token ')'Understand this error
Array.from(tempClassList)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: Array(0)
const myConvertedArray = Array.from(tempClassList)
undefined
myConvertedArray.forEach(function(li)){
VM1804:1 Uncaught SyntaxError: Unexpected token ')'Understand this error
myConvertedArray.forEach(function(li)){
li.style.color = 'orange'
}
VM1907:1 Uncaught SyntaxError: Unexpected token ')'Understand this error
myConvertedArray.forEach(function(li){
li.style.color = 'orange'
}
VM1953:3 Uncaught SyntaxError: missing ) after argument listUnderstand this error
myConvertedArray.forEach(function(li)){
li.style.color = 'orange'
})
VM1989:1 Uncaught SyntaxError: Unexpected token ')'Understand this error
myConvertedArray.forEach(function(li){
li.style.color = 'orange'
})
undefined
