(function() {
     function NewRoomModalCtrl($uibModalInstance, Room) {
         this.cancel = function() {
             $uibModalInstance.close();
         }

         this.addRoom = function(){
             Room.add(this.roomname);
             $uibModalInstance.close();
         }
     }

     angular
         .module('blocChat')
         .controller('NewRoomModalCtrl', ['$uibModalInstance', 'Room',  NewRoomModalCtrl])
 })()
