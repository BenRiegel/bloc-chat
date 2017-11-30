(function() {
    function HomeCtrl(Room, Message) {
        this.allRooms = Room.all;

        this.activeRoom = null;
        this.allMessages = null;

        this.selectRoom = function(room){
            this.activeRoom = room;
            this.allMessages = Message.getByRoomId(room.$id);
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
