import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook, deleteBook, editBook } from '../../redux/slice/book';

const Booklist = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState({
    id: '',
    name: '',
    quantity: '',
    category: '',
    author: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  const handleEditClick = (book) => {
    setIsEditing(true);
    setCurrentBook({
      id: book.book_id,
      name: book.name,
      quantity: book.quantity,
      category: book.category,
      author: book.author,
    });
    setErrors({});  // Clear errors when opening the form
  };

  const handleDeleteClick = (bookId) => {
    dispatch(deleteBook(bookId))
      .unwrap()
      .then(() => {
        console.log(`Book with ID ${bookId} deleted successfully`);
        dispatch(getBook());  // Fetch the updated list of books
      })
      .catch((error) => {
        console.error('Failed to delete the book:', error);
      });
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentBook({ ...currentBook, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id: currentBook.id, details: currentBook }))
      .unwrap()
      .then(() => {
        setIsEditing(false);
        setCurrentBook({
          id: '',
          name: '',
          quantity: '',
          category: '',
          author: '',
        });
        setErrors({});
        dispatch(getBook());  // Fetch the updated list of books
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.errors) {
          setErrors(error.response.data.errors);  // Capture validation errors
        } else {
          console.error('An error occurred:', error);
        }
      });
  };
  

  return (
    <>
      {/* Booklist table */}
      <div className='mb-4'>
        <h2 className='text-lg font-semibold mb-2'>Book List</h2>
        <table className='w-full border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border-b px-4 py-2 text-left'>Book Name</th>
              <th className='border-b px-4 py-2 text-left'>Quantity</th>
              <th className='border-b px-4 py-2 text-left'>Category</th>
              <th className='border-b px-4 py-2 text-left'>Author</th>
              <th className='border-b px-4 py-2 text-left'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books && books.length > 0 ? (
              books.map((book) => (
                <tr key={book.id}>
                  <td className='border-b px-4 py-2 text-left'>{book.name}</td>
                  <td className='border-b px-4 py-2 text-left'>{book.quantity}</td>
                  <td className='border-b px-4 py-2 text-left'>{book.category}</td>
                  <td className='border-b px-4 py-2 text-left'>{book.author}</td>
                  <td className='border-b px-4 py-2'>
                    <button
                      className="
                        bg-blue-500
                        hover:bg-blue-600
                        text-white
                        font-semibold
                        py-1
                        px-2
                        rounded
                        mr-2
                        transition
                        duration-300
                        ease-in-out
                      "
                      onClick={() => handleEditClick(book)}
                    >
                      Edit
                    </button>
                    <button
                      className="
    bg-red-500
    hover:bg-red-600
    text-white
    font-semibold
    py-1
    px-2
    rounded
    transition
    duration-300
    ease-in-out
  "
                      onClick={() => handleDeleteClick(book.book_id)}  // Fix typo here
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">No books available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Form Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl mb-4">Edit Book</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Book Name</label>
                <input
                  type="text"
                  name="name"
                  value={currentBook.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name[0]}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={currentBook.quantity}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <input
                  type="text"
                  name="category"
                  value={currentBook.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Author</label>
                <input
                  type="text"
                  name="author"
                  value={currentBook.author}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Booklist;
