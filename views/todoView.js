app.views.TodoView = function(){
   this.handleEvent('editTodo');
   this.handleEvent('deleteTodo');
   this.handleEvent('checktodo');
  }
  
  app.views.TodoView.prototype.getText = function() {
    return {id, text};
  }
  
  app.views.TodoView.prototype.editTodo= function(text) {
    // var todo = getTodo(id)
    // todo.editTodo(text);
    console.log(text);
  }
  
  app.views.TodoView.prototype.renderTodo = function() {
  
  }
  app.views.TodoView.prototype.handleEvent = function(event, handler) {
    var self = this;
    switch (event) {

      case 'editTodo':

        $('.todo-list').on('dblclick', 'label', function(event) {
          $(this).hide();
          $(this).prev().val($(this).html());
          $(this).prev().show();
          $(this).prev().focus();
        })
        
        $('.todo-list').on('focusout', 'input.todo-editing', function(event){
          $(this).hide();
          $(this).next().html($(this).val());
          $(this).next().show();
        })
        break;

      case 'deleteTodo':

        $('.todo-list').on('mouseover', 'li', function(event){
          if($(this).children('.todo-editing').is(":visible") == false){
            $(this).children('button').show();
          }
        })

        $('.todo-list').on('mouseout', 'li', function(event){
          $(this).children('button').hide();
        })

        $('.todo-list').on('click', '.delete-todo', function(event){
          $(this).parent().remove();
        })
        break;

        case 'checktodo':

        $('body').on('click', '.check-todo', function (event) {

            if($(this).is(':checked')){
                $(this).next().next().css('text-decoration', 'line-through');
            } 
            if($(this).is(':not(:checked)')) {
                $(this).next().next().css('text-decoration', 'none');
            }   
        })
        break;

      case 'toggleTodo':
        $()
      default:
    }
  }