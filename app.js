/**
 * Created by hungnm on 12/21/2016.
 */
var app = require("express")();
var bodyParser = require("body-parser");
var bookController = require("./app/controller/book");
var data = require("./app/models/book");

app.use(bodyParser.urlencoded());

app.route('/books')
    .get(bookController.getAll)
    .post(bookController.create)
    .put()
    .delete();
app.route('/books/:id')
    .get(bookController.getOne)
    .post()
    .put(bookController.update)
    .delete(bookController.delete);

app.listen(3333);
