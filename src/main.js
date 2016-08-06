function generateTodoHtml(todoItems) {
  let string='';
  let count=0;
  string+=`
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>`
  string+='\n'
for({name,completed}of todoItems){
    if(completed===true){
      string+=`            <li>
                <div><input type="checkbox" checked="checked"/><label>${name}</label></div>
                <form><input type="text"/></form>
            </li>`
        string+='\n'
    }
    else{
      string+=`            <li>
                <div><input type="checkbox"/><label>${name}</label></div>
                <form><input type="text"/></form>
            </li>`
      string+='\n'
    }
}
todoItems.map(x=>{
  if (x.completed===false){
    count++;
  }
})
  string+=`        </ul>
    </section>
    <footer>
        <strong>${count}</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>`
  require('fs').writeFileSync('1.txt',string);
  return string;

}

module.exports = {
  generateTodoHtml: generateTodoHtml
}