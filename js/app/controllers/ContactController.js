function ContactController() {
  var vm = this;
  this.name = 'Kris';
  this.email = 'kris@kris.com';
  this.phone = '9402212299';

  this.changeName = function() {
    vm.name = 'Something else!';
  };
}

angular
.module('app')
.controller('ContactController', ContactController);