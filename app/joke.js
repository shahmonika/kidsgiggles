"use strict";
var Joke = (function () {
    function Joke(_id, description, likesCount) {
        this._id = _id;
        this.description = description;
        this.likesCount = likesCount;
    }
    return Joke;
}());

exports.Joke = Joke;
//# sourceMappingURL=joke.js.map