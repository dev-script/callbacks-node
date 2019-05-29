var BookInstance = require('../models/bookinstance');
var Book = require('../models/book');
// Display list of all BookInstances.
exports.bookinstance_list = function(req, res) {
    // res.send('NOT IMPLEMENTED: BookInstance list');
    BookInstance.find(function(err,bookinstances){
      if(err) return next(err);
      res.json(bookinstances);
    });
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function(req, res) {
  var newBookInstance = new BookInstance({
    book: req.body.book,
    imprint: req.body.imprint,
    status: req.body.status,
    due_back: req.body.due_back,

  });
  newBookInstance.save(function(err) {
    if (err) {
      console.log(err);
      return res.json({success: false, msg: 'Save bookinstance failed.'});
    }
    res.json({success: true, msg: 'Successful created new bookinstance.'});
  });
    // res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};
