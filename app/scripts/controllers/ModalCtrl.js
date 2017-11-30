(function() {
    function ModalCtrl($uibModal) {

        this.show = function(){
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/room_modal.html',
                controller: 'NewRoomModalCtrl as newRoomModal',
            });
        }

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();
