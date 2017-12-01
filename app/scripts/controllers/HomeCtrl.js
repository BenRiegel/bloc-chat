(function() {
    function HomeCtrl(Room, Message, $cookies) {
        this.allRooms = Room.all;

        this.activeRoom = null;
        this.allMessages = null;

        this.selectRoom = function(room){
            this.activeRoom = room;
            this.allMessages = Message.getByRoomId(room.$id);
        }

        this.sendMessage = function(){
            var timeStamp = new Date();
            var messageObj = {
              content: this.messageText,
              roomId: this.activeRoom.$id,
              username: $cookies.get('blocChatCurrentUser'),
              sentAt: timeStamp.toDateString() + " " + timeStamp.toLocaleTimeString()
            }
            Message.send(messageObj);
            this.messageText="";
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
