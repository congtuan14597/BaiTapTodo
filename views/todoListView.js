app.views.TodoListView = function() {
  // this.todoList = new TodoList();
  this.ENTER = 13;
  this.handleEvent('addTodo');
}
    
// TodoListView.prototype.renderTodos = function(todos) {
  
//     // $(ele).append(todo[i])
//     $('.todo-list').append(
//       '<li data-id='+ todo[i].id +'>' +
//         '<input/>' +
//         '<lable>' + todo[i].text + '</label>' +
//         '<button>' + 'x' + '</button>'+
//       '</li>')
// }

app.views.TodoListView.prototype.getDeleteTodo = function(self) {
  var id = self.attr('data-id'); // attribute
}

app.views.TodoListView.prototype.deleteTodo = function(id) {
  var todoList = getTodoList()
  todoList.deleteTodo(id);
}

app.views.TodoListView.prototype.handleEvent = function(event, handler) {
  var self = this;
  switch (event) {
    case 'addTodo':

      $('body').on('keypress', '.form-control', function(e) {
        if(e.keyCode === self.ENTER) {
          var todo = new app.models.Todo($('.form-control').val());
          app.todoList.addTodo(todo);
          console.log(self.todoList);

          $('.todo-list').append('<li class="item-list" >' +         
            '<input class="check-todo" type="checkbox" />' +
            '<input hidden class="todo-editing" type="text" />' +
            '<label id="'+ todo.id +'" class="text-todo">'+ $('.text-in').val() +
            '</label>' +
            '<button hidden class="delete-todo">X</button>' +
            '</li>');

          $('.form-control').val('');   
        }
      })
      break;
    default:
      break;
  }
}