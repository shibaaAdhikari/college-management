import React, { useEffect, useState } from 'react';
import { addBook } from '../../redux/slice/book';
import { useDispatch, useSelector } from 'react-redux';
import { getPeriodic } from '../../redux/slice/periodic';

const AddBook = () => {
  const dispatch = useDispatch();
  const periodics = useSelector((state) => state.periodics.periodics || []);

  // Fetch periodics when the component loads
  useEffect(() => {
    dispatch(getPeriodic());
  }, [dispatch]);

  // State object for book details, including periodic_id
  const [bookDetails, setBookDetails] = useState({
    name: '',
    quantity: '',
    category: '',
    author: '',
    periodic_id: '',  // Added field for periodic_id
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBook(); // Call to add book on submit
  };

  const handleAddBook = () => {
    const { name, quantity, category, author, periodic_id } = bookDetails;

    // Ensure that all fields are filled
    if (name.trim() && quantity.trim() && category.trim() && author.trim() && periodic_id.trim()) {
      dispatch(addBook({ 
        name, 
        quantity, 
        category, 
        author, 
        periodic_id  // Send periodic_id to the backend
      }))
        .unwrap()
        .then(() => {
          // Clear the form after successful addition
          setBookDetails({
            name: '',
            quantity: '',
            category: '',
            author: '',
            periodic_id: ''  // Clear periodic_id
          });
        })
        .catch((error) => {
          console.error("Failed to add book", error);
        });
    } else {
      console.error("All fields are required.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Book Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={bookDetails.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
            Quantity:
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={bookDetails.quantity}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={bookDetails.category}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookDetails.author}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="periodic_id" className="block text-gray-700 font-medium mb-2">
            Periodic:
          </label>
          <select
            id="periodic_id"
            name="periodic_id"
            value={bookDetails.periodic_id}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Periodic</option>
            {periodics.map((periodic) => (
              <option key={periodic.id} value={periodic.periodic_id}>
                {periodic.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
