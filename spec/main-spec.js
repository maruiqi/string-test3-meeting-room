let {generateTodoHtml} = require('../src/main.js');

describe('string-test3', () => {

  it('generate todo html with some items selected', () => {
    let todoItems = [
      {name: '吃饭', completed: true},
      {name: '练习', completed: false},
      {name: '锻炼', completed: true},
      {name: '睡觉', completed: false}
    ];
    let result = generateTodoHtml(todoItems);
    let expected = `
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>
            <li>
                <div><input type="checkbox" checked="checked"/><label>吃饭</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox"/><label>练习</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox" checked="checked"/><label>锻炼</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox"/><label>睡觉</label></div>
                <form><input type="text"/></form>
            </li>
        </ul>
    </section>
    <footer>
        <strong>2</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>`
    require('fs').writeFileSync('2.txt',expected)

    expect(result).toEqual(expected);
  });

  it('generate todo html with no item selected', ()=> {
    let todoItems = [
      {name: '吃饭', completed: false},
      {name: '练习', completed: false},
      {name: '锻炼', completed: false},
      {name: '睡觉', completed: false}
    ];
    let result = generateTodoHtml(todoItems);
    let expected = `
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>
            <li>
                <div><input type="checkbox"/><label>吃饭</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox"/><label>练习</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox"/><label>锻炼</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox"/><label>睡觉</label></div>
                <form><input type="text"/></form>
            </li>
        </ul>
    </section>
    <footer>
        <strong>4</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>`;
    require('fs').writeFileSync('3.txt',expected )
    expect(result).toEqual(expected);
  });

});