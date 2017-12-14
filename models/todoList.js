app.models.TodoList = function(){
    this.todos = [];
}

app.models.TodoList.prototype.addTodo = function(todo){
    this.todos.push(todo);
}

app.models.TodoList.prototype.deleteTodo = function(id){
    var indexDeleteTodo = '';
    this.todos.find(function(todo, index) {
       indexDeleteTodo = index
      return todo.id === id
    });
    this.todos.splice(indexDeleteTodo, 1)
}