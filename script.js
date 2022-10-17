const str = prompt("Введите данные не менее 10 символов", '');

let str2 = str;

if (str2.length < 10) {
   alert('Введите не менее 10 символов');
}
else {
   alert(`Обрезанный рядок до 5 символов : ${str2.slice(0, 5)}`);
}

console.log(str2.slice(0, 5));

console.log(str2.slice(-5, -1) + str2.slice(-1));

