(function() {
    function RoomCtrl(Room) {
      this.allRooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
