var Book = require('../models/book');
var Author = require('../models/author')
var BookInstance = require('../models/bookinstance')

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all Books.
exports.book_list = function(req, res, next) {

  Book.find({"title":"my_book"},function (err, book) {
    if (err) return next(err);
    var author_id = book[0]["author"]
    var book_id = book[0]["_id"]
    console.log(book_id);
    Author.find({_id :author_id },function (err, thisAuthor) {
      // console.log(thisAuthor);
     // var finalObj = {
     //   book: book,
     //    author: thisAuthor,
     //  }
     //  res.json(finalObj);
     BookInstance.find({book : book_id }, function(err,thisBookInstance){
      console.log(thisBookInstance);
      var finalObj = {
         book: book,
         author: thisAuthor,
         bookinstance: thisBookInstance,
      }
        res.json(finalObj);
    });

  });
  });

};

// Display detail page for a specific book.
exports.book_detail = function(req, res) {
    // res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
    var id = req.query.id
    Book.find({_id:new
    mongodb.objectId(id)})
};

// Display book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res,next) {
    // res.send('NOT IMPLEMENTED: Book create POST');
    var newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
    });
    newBook.save(function(err) {
      if (err) {
        console.log(err);
        return res.json({success: false, msg: 'Save book failed.'});
      }
      res.json({success: true, msg: 'Successful created new book.'});
    });
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};
