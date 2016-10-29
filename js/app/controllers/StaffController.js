function StaffController() {
  this.name = 'Carlos'
  this.email = 'cmartinez88@gmail.com'
  this.phone = '2210801'
}

angular
.module('app')
.controller('StaffController', StaffController)