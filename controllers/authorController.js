var Author = require('../models/author');

// Display list of all Authors.
exports.author_list = function(req, res) {
    // res.send('NOT IMPLEMENTED: Author list');
    Author.find(function(err,authors){
      if(err) return next(err);
      res.json(authors);
    });
};

// Display detail page for a specific Author.
exports.author_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display Author create form on GET.
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST.
exports.author_create_post = function(req, res) {
    // res.send('NOT IMPLEMENTED: Author create POST');
    var newAuthor = new Author({
      first_name: req.body.first_name,
      family_name: req.body.family_name,

    });
    newAuthor.save(function(err) {
      if (err) {
        console.log(err);
        return res.json({success: false, msg: 'Save author failed.'});
      }
      res.json({success: true, msg: 'Successful created new author.'});
    });
};

// Display Author delete form on GET.
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};
