let todoList = [
  {
    item:'Learn JavaScript',
    Due:'09-01-2024'
  },
  {
    item:'Attend Class',
    Due:'09-01-2024'
  }
];

displayItems();


function addTodo(){
  let inputelement = document.querySelector('#todo-input');
  let dateelement = document.querySelector('#todo-date')
  let todoItem = inputelement.value;
  let tododate = dateelement.value ;
  
  todoList.push({item:todoItem,Due:tododate});
  inputelement.value = '';
  dateelement.value = '';
  displayItems();

}
function displayItems(){
  let displayelement = document.querySelector('.todo-container');
  let newHtml = ' ';
  
  for (let i =0; i<todoList.length ; i++){
    // let disitem= todoList[i];
    let {item,Due} = todoList[i];
    if(todoList[i] !== null){
    newHtml += `
    <span> ${item}</span>
    <span>  ${Due}</span> 
    <button id="deletebutton" onclick=
    "todoList.splice(${i},1);
    displayItems();"
    > Delete </button>
    `; }
  }
  displayelement.innerHTML = newHtml;
}