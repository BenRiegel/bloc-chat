(function() {
     function NewUserModalCtrl($cookies, $uibModalInstance) {
         this.setUsername = function(){
             $cookies.put('blocChatCurrentUser', this.username);
             $uibModalInstance.close();
         }
     }

     angular
         .module('blocChat')
         .controller('NewUserModalCtrl', ['$cookies', '$uibModalInstance', NewUserModalCtrl]);
 })()
