"use strict";
// №2
// Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по клику на другую кнопку на экран выводится, сколько кликов было сделано по первой кнопке.
/* <input type="submit" id="button" data-num="  ">
<input type="submit" id="button2" value=""></input>

// let button = document.querySelector('#button');
// let button2 = document.querySelector('#button2'); */
// button2.addEventListener('click' , function(){
//     button2.value = button.dataset.num;
// })
// button.addEventListener('click' , function(){
// button.dataset.num++;
// })



// №4В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.
// <input id="elem" data-length="5">
// let elem = document.querySelector('#elem');
// let doc = document.querySelector('input')
// elem.addEventListener('blur', function(){
//     if(Number(elem.dataset.length) == Number(doc.value.length) ){
//         console.log('количество символов  соответсвтует пяти');
//     }else{
//         console.log('no');
//     }
// })

// №5В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.
/* <input id="elem" data-min="5" data-max="10"></input>
let elem = document.querySelector('#elem');
let doc = document.querySelector('input');
elem.addEventListener('blur', function(){
    if(Number(doc.value.length<=10 && doc.value.length>=5)){
        console.log('входит в диапазон ');
    }
}) */

// №6Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.
/* <div id="elem" data-product-price="1000" data-product-amount="5">
	товар яблоки
</div>
let elem = document.querySelector('#elem');
elem.addEventListener('click', function(){
    console.log(Number(elem.dataset.productPrice*elem.dataset.productAmount));
}) */

// №7 Переберите циклом все узлы этого дива и выведите их в консоль.
/* <div id="elem">txt<b>tag</b><!--com-->
	txt<b>tag</b><!--com--></div> */
    // let elem = document.querySelector('#elem');
    // for(let node of elem.childNodes){
    //     console.log(node);
    // }


    // №8 Переберите циклом все узлы этого дива и выведите в консоль их названия.
    // <div id="elem">txt<b>tag</b><!--com-->
	// txt<b>tag</b><!--com--></div> 
    // let elem = document.querySelector('#elem');
    // for(let node of elem.childNodes){
      
    //     console.log(node.data = node.data + node.nodeType);
    // }

//    №9 По клику на кнопку текст абзаца должен стать жирным:

// <p>text</p>
// <button>click</button>
// let button = document.querySelector('button');
// let elem   = document.querySelector('p');

// button.addEventListener('click', function() {
// 	elem.innerHTML = '<b>elem.innerHTML</b>';
// });
//    let button = document.querySelector('button');
//    let elem = document.querySelector('p');
   
//    button.addEventListener('click', function(){
//     elem.style.fontWeight = 'bold'
  
//    })

// №10По клику на кнопку должна вывестись сумма чисел из абзацев:
// <p>1</p>
// <p>2</p>
// <p>3</p>

// <button>click</button>

// let button = document.querySelector('button');
// let elems = document.querySelectorAll('p');
// let sum = 0;
// button.addEventListener('click', function(){
//    for(let elem of elems){
//     sum += Number(elem.textContent)
    
    
//    }
//    console.log(sum);
   
// })

// №11 По клику на абзац ему в конец должен добавиться заданный текст
// <p>1</p>
// <p>2</p>
// <p>3</p>
// let elems = document.querySelectorAll('p');
// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         this.textContent = elem.textContent +'!!!'
//     })
// }

// №12По клику на кнопку текст каждого абзаца должен стать жирным:

// <p>text1</p>
// <p>text2</p>
// <p>text3</p>
// <button>click</button>
// let button = document.querySelector('button');
// let elems = document.querySelectorAll('p');
// button.addEventListener('click', function(){
//     for(let elem of elems){
//         elem.style.fontWeight = 'bold'
//     }
// })
// №13 По клику на кнопку в консоль должна вывестись сумма чисел из абзацев:

// <p>1</p>
// <p>2</p>
// <p>3</p>

// <button>click</button>
// let elems = document.querySelectorAll('p');
// let button = document.querySelector('button');
// let sum = 0;
// for (let elem of elems) {
// 	sum += Number(elem.textContent) ;
	
// 	button.addEventListener('click', function() {
// 		console.log(sum);
// 	});
// }

// №14 В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма чисел из инпутов:

// <input>
// <input>
// <input>

// <button>click</button>
// let button = document.querySelector('button');
// let elems = document.querySelectorAll('input');
// let sum = 0;
// button.addEventListener('click', function(){
// for(let elem of elems){
//     sum+=Number(elem.value)
//     console.log(sum);
// }
// })
// №15В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:

// <input id="inp1">
// <input id="inp2">
// <input id="inp3">

// <button id="btn">click</button>
// let btn = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// btn.addEventListener('click', function(){
//     inp3.value = Number(inp1.value) + Number(inp2.value);
   
// })


// № 16В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма введенных чисел:
// <input>
// <input>
// <input>

// <button id="btn">click</button>
// let button = document.querySelector('#btn');
// let inputs = document.querySelectorAll('input');
// let sum = 0;
// button.addEventListener('click', function (){
//     for(let input of inputs){
//         sum+=Number(input.value);
//     }
//     console.log(sum);



// №17В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:

// <input id="inp1">
// <input id="inp2">
// <input id="inp3">
// /* 
// <button id="btn">click</button>
// let btn = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// let sum = 0

// btn.addEventListener('click', function(){
// sum+=Number(inp1.value) +Number( inp2.value);
// inp3.value = sum;


// }) */


// №18Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца
/* <input id="inp">
<p>redano</p>
// let elem = document.querySelector('#inp');
// let text = document.querySelector('p');
// elem.addEventListener('blur', function(){ */
//     text.textContent = text.textContent + elem.value;
// })

// №19Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
/* <input id="inp1" type="text">
<input id="inp2" type="text">
<p></p>
<input id="button" type="submit">
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let button = document.querySelector('#button');
let elem = document.querySelector('p');
let sum = 0;
button.addEventListener('click', function(){
 
    elem.textContent = Number(inp1.value)+Number(inp2.value);

}) */

// №20Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
/* <input type="text">
let elem = document.querySelector('input');
let sum = 0
elem.addEventListener('blur', function(){
const  arrFromValue = elem.value.split('');
for(let i=0; i<arrFromValue.length; i++){
    sum+=Number(arrFromValue[i])
}
console.log(sum);
}) */

// Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// <input type="text">
// let elem = document.querySelector('input');
// elem.addEventListener('blur', function(){
//     let sum = 0;
//     let result = 0;
//     const arrFromValue = elem.value.split(',');
//     for(let i=0; i<arrFromValue.length; i++){
//         sum+=Number(arrFromValue[i])
//     }
//     result = sum/arrFromValue.length;
//     console.log(result);
// })

// №22Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// <input id="inp1" type="text">
// <div></div>
// let inp1 = document.querySelector('#inp1');
// let divs = document.querySelector('div')
// inp1.addEventListener('blur', function (){
//     const arrFromValue = inp1.value.split(' ');
//     for(let i=0; i<arrFromValue.length; i++){
//         const  createInput = document.createElement('input')
//         createInput.value = arrFromValue[i];
//         divs.appendChild(createInput)

//     }
// })
//  №23Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
// <input id="elem" type="text" placeholder="Введите свое ФИО" onblur="f06()" >

// function f06(){
//     let fio = document.querySelector('#elem');
//     let arr = fio.value.split(' ');
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] = fBig(arr[i])
//     }
//     fio.value = arr.join(' ')
// }
// function fBig(str){
//     let letter = str.split('');
//     letter[0] = letter[0].toUpperCase();
//     return letter.join('')
// }

// №24Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
// <input type="text">
// let inp = document.querySelector('input');
// inp.addEventListener('blur', function(){
//   inp.value =  inp.value.split('.').reverse().join('-')
// })

// №25Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// <input type="text">
// let elem = document.querySelector('input');
// let text = document.querySelectorAll('p');

// elem.addEventListener('blur', function(){
//     let arr = elem.value.split('').reverse().join('')
//    if(elem.value === arr){
//     console.log('слово читается одинаково с начала до конца');
//    }else{
//     console.log('не правильно');
//    }  
// })

// №26Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let elem = document.querySelector('input');
// elem.addEventListener('blur', function (){
//     let arr = elem.value.split('').reverse()
//     if(arr[0]==3){
//         console.log('вы ввели число содержащее число 3');
//     }else{
//         console.log('введено число не содержащее число 3');
//     }
// })


//№27 Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// let button = document.querySelector('#button');
// let elems = document.querySelectorAll('p');
// button.addEventListener('click', function (){
//     for(let i=0; i < elems.length; i++){
//         elems[i].innerHTML = elems[i].innerHTML + (i+1)
//     }

// № 28Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
// let elems = document.querySelectorAll('p');
// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         this.textContent++
//     })
// }

// № 29Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
// let elem = document.querySelector('input');
// elem.addEventListener('blur', function (){
//     let arr = elem.value.split('.').reverse()
//     let date = new Date(Number(arr[0]), Number(arr[1])-1, Number(arr[2]));
//     let arr1 = ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];
//     console.log(elem.value  = elem.value +' ' + arr1[date.getDay()]);
// })

// № 30 Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля
// <input id="elem" type="text" value="0">
// <input id="btn1" type="submit">
// <input id="btn2" type="submit">
// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// btn1.addEventListener('click', function(){
//     elem.value++
// })
// btn2.addEventListener('click', function(){
    
// if(elem.value>0){
//     elem.value--

// }
// })
// №31Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
// <input id="elem" type="text" >
// <input id="button" type="submit"></input>
// let elem =document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function (){
//     elem.disabled = true;
// })
// №32Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
{/* <input id="elem" type="text">
<input type="submit" id="btn1" value="отключить">
<input type="submit" id="btn2" value="включить"> */}
// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// btn1.addEventListener('click', function(){
// elem.disabled = true;
// });
// btn2.addEventListener('click', function(){
//     elem.disabled = false;
// })

// №33 Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
// <input type="checkbox" checked id="elem">
// <input type="submit" id="btn1" value="включить">
// <input type="submit" id="btn2" value="отключить"></input>
// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// btn1.addEventListener('click', function(){
//     elem.checked = true;
// })
// btn2.addEventListener('click', function (){
//     elem.checked = false;
// })


// №34 Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.
// <input type="checkbox" checked id = "elem" disabled>
// <input type="submit" id="button">
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function (){
//     elem.disabled = !elem.disabled;
// })


// №35 Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
// <input type="radio" name="elem" value="1" checked>
// <input type="radio" name="elem" value="2">
// <input type="radio" name="elem" value="3">
// <input type="submit" id="button">
// <p id="text"></p>
// let button = document.querySelector('#button');
// let radios = document.querySelectorAll('input[type = "radio"]');
// let text = document.querySelector('#text')
// button.addEventListener('click', function (){
// for(let radio of radios){
//     if(radio.checked){
//         text.textContent = radio.value
//     }
// }
// })
