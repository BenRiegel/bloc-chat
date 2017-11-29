(function() {
    function HomeCtrl(Room, Message) {
        this.allRooms = Room.all;

        this.activeRoomName = "test room name";
        this.allMessages = Message.all;

        this.selectRoom = function(evt){
            console.log(this.allMessages);
            this.activeRoomName = evt.target.textContent;
            var activeRoomId = evt.target.dataset.id;
            console.log("new active room id " + activeRoomId);
            console.log("new active room name " + this.activeRoomName);
            Message.getByRoomId(activeRoomId);
            this.allMessages = Message.all;
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
