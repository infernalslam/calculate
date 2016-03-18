angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.title = 'Calculate'
    todoList.sum = 0
    var num1 = '' , num2 = ''
    todoList.return = false
    

    todoList.add = function(num , action){
        if (action == false) {
          num1 = num1 + num
          console.log(num1)
        } else if (action == true) {
          num2 = num2 + num
          console.log(num2)
        } 
    }
    
    todoList.plus = function() {
      if (todoList.return == false) {
        todoList.return = true
        todoList.sum = parseInt(num1)
        console.log('plus' + num1)
      } else console.log('+')
    }
    
    todoList.total = function () {
      todoList.sum = todoList.sum + parseInt(num2)
      num2=''

      console.log ('todoList.total = '+todoList.sum)
    }

    todoList.clear = function (){
      todoList.sum = 0
      num1 = ''
      num2 = ''
      todoList.return = false
      console.log(todoList.sum)
    }

  })
