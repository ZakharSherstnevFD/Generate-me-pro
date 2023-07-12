// создаю пустой массив заглушки (имитация сервера)
let seedersTemplates = [];

// шаблоны для рандомной подстановки данных
const name1 = ['Goji','Titan','Prostasen','Princess','Venerit'];
const name2 = ['cream', 'gel', 'mask', 'capsulle', 'muss'];
const region = ['VLG', 'VRN', 'MSK'];
const categories = ['Красота', 'Здоровье', 'Похудение'];
const type = ['Landing', 'Prelanding']

// функция принимает данные и возвращает рандомный элемент массива
function randomEl(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

// в цикле добавляю в пустой массив данные с помощь вызова функции генерируя рандомные значения
for(let i = 1; i < 100; i++) {
  seedersTemplates.push({
    id: i,
    name: `${randomEl(name1)} ${randomEl(name2)}`,
    region: randomEl(region),
    offer: 'Offer Name',
    categories: randomEl(categories),
    type: randomEl(type),
    uploadDate: new Date().toLocaleDateString(),
  })
}


// экспортирую готовый массив
export default {seeders: seedersTemplates}
