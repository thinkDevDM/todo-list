var app = angular.module('myApp', []);

	app.controller('TodoCtrl', ['$scope', function($scope) {

		// Default priority
		$scope.todos = [
			{text:'Finish portfolio project', priority: 'high'},
			{text:'Clean apartment', priority: 'medium'},
			{text: 'Grocery shopping', priority: 'low'}
		];

		$scope.priority = 'low';

		// Add todos (into above array)
		$scope.addTodo = function() {
			if(event.keyCode == 13 && $scope.todoText){
				$scope.todos.push({"text":$scope.todoText, "done":false, "priority":$scope.priority});
				$scope.todoText = '';
			}
		};

		/* Note: The above function pushes the text entered 
		in the input field (type="text") to the todos array 
		upon pressing the Enter key (keycode 13). */
		

		// Make edits to todos
		$scope.toggleEdit = function() {
			$(event.target).closest('li').toggleClass('editing');
		};

		$scope.editOnEnter = function(todo) {
			if(event.keyCode == 13 && todo.text && todo.priority) {
				$scope.toggleEdit();
			}
		};
		

		// Delete todos
		$scope.deleteTodo = function(index) {
			$scope.todos.splice(index, 1);
		}
}]);