var moongose = require('mongoose');

var Schema = moongose.Schema;

var genreSchema = Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 100}
})


genreSchema
.virtual('url')
.get(function () {
    return "/catalog/genre/" + this._id;
});

module.exports = moongose.model("Genre",genreSchema);