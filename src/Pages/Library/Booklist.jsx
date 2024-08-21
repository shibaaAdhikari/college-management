import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../../redux/slice/book';

const Booklist = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books);

    useEffect(() => {
        dispatch(getBook());
    }, [dispatch]);

    return (
      <>
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
      </>
    );
};

export default Booklist;
