function ContactController() {
  var vm = this;

  vm.name = 'Kris';
  vm.email = 'kris@kris.com';
  vm.phone = '9402212299';

  vm.changeName = function() {
    vm.name = 'Something else!';
  };
}

angular
.module('app')
.controller('ContactController', ContactController);