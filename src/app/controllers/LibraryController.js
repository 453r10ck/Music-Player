class LibraryController {
    // [GET] /library
    index(req, res) {
        res.render('library');
    }
}

module.exports = new LibraryController;