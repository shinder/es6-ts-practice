import Person from './person';

const info = document.querySelector('#info');

const p1 = new Person('Bill', 22);

info.innerHTML += p1 +'<br>';
console.log(JSON.stringify(p1));

// import  my,{ar1, ar2} from './my-export02';
// import  {ar1 as bbb} from './my-export02';
// import Cookies from 'js-cookie';
// const info = document.querySelector('#info');
//
// Cookies.set('hello', 'world');
//
// info.innerHTML += my(7) +'<br>';
// info.innerHTML += ar1.toString() +'<br>';
// info.innerHTML += ar2.toString() +'<br>';
// info.innerHTML += (ar1===bbb) +'<br>';


// const f = name=> `Hello ${name}`;
//
// document.querySelector('#info').innerHTML = f('Flora 123');
