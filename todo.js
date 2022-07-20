const button = document.querySelector('button');
let span = document.querySelector('span');
const body = document.querySelector('body');
console.log('working')
function addItem() {
    let valu = document.getElementById('textbox_id').value
    console.log(valu)
    var newItem = document.createElement('span')
    const newLine = document.createElement('br')
    var newContent = document.createTextNode(valu);
    newItem.appendChild(newContent);
    document.getElementById("store").appendChild(newItem);
    const br = document.createElement("br");
    document.getElementById("store").appendChild(br);
}