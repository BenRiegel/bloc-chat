(function() {
     function NewRoomModalCtrl($uibModalInstance, Room) {
         this.cancel = function() {
             $uibModalInstance.close();
         }

         this.addRoom = function(){
             var roomName = document.getElementById("modal-input-text").value;
             Room.add(roomName);
             $uibModalInstance.close();
         }
     }

     angular
         .module('blocChat')
         .controller('NewRoomModalCtrl', ['$uibModalInstance', 'Room',  NewRoomModalCtrl])
 })()
