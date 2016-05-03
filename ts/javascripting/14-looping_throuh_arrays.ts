let pets: String[] = ['cat', 'dog', 'rat'];
// for (var i = 0; i < pets.length; i++) {
//     pets[i].concat('s');
// }
pets = pets.map(i=>i.concat('s'));
console.log(pets);