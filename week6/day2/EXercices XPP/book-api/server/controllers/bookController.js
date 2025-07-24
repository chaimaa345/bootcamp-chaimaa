const Book = require('../models/bookModel');

exports.getAllBooks = async (req, res) => {
  const books = await Book.getAllBooks();
  res.json(books);
};

exports.getBookById = async (req, res) => {
  const book = await Book.getBookById(req.params.bookId);
  if (book) res.json(book);
  else res.status(404).json({ message: 'Book not found' });
};

exports.createBook = async (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  await Book.createBook({ title, author, publishedYear });
  res.status(201).json({ message: 'Book created' });
};

exports.updateBook = async (req, res) => {
  const updated = await Book.updateBook(req.params.bookId, req.body);
  if (updated) res.json({ message: 'Book updated' });
  else res.status(404).json({ message: 'Book not found' });
};

exports.deleteBook = async (req, res) => {
  const deleted = await Book.deleteBook(req.params.bookId);
  if (deleted) res.json({ message: 'Book deleted' });
  else res.status(404).json({ message: 'Book not found' });
};
