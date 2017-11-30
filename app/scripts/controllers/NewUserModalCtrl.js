(function() {
     function NewUserModalCtrl($cookies, $uibModalInstance) {

         this.setUserName = function(){
             var modalInputText = document.getElementById("modal-input-text");
             var userName = modalInputText.value.trim();
             if (userName){
                 $cookies.put('blocChatCurrentUser', userName);
                 $uibModalInstance.close();
             } else {
                 document.getElementById("modal-error-message").classList.toggle('hidden');
                 modalInputText.value = "";
                 modalInputText.focus();
             }
         }
     }

     angular
         .module('blocChat')
         .controller('NewUserModalCtrl', ['$cookies', '$uibModalInstance', NewUserModalCtrl]);
 })()
