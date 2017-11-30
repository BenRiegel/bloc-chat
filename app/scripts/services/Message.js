(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");

        Message.getByRoomId = function(roomId) {
            var newRef = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
            return $firebaseArray(newRef);
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
