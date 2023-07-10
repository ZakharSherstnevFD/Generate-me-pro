let seedersTemplates = [];

const name1 = ['Goji','Titan','Prostasen','Princess','Venerit'];
const name2 = ['cream', 'gel', 'mask', 'capsulle', 'muss'];
const region = ['VLG', 'VRN', 'MSK'];
const categories = ['Красота', 'Здоровье', 'Похудение'];
const type = ['Landing', 'Prelanding']

function randomEl(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

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



export default {seeders: seedersTemplates}
