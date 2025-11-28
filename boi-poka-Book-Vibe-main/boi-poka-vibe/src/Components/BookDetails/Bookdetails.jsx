import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Bookdetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  const handleMarkasRead = () =>{


  }

  useEffect(() => {
    fetch('/booksData.json')
      .then(res => res.json())
      .then(data => {
        const foundBook = data.find(b => b.bookId === parseInt(bookId));
        setBook(foundBook);
      });
  }, [bookId]);

  if (!book) {
    return <h2 className="text-center mt-10 text-xl">Loading book details...</h2>;
  }

  return (
    <div>
     <h2 className="text-4xl font-bold text-center pb-5 mt-10">Books</h2>


      <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={book.image}
          alt={book.bookName}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="lg:ml-20">
          <h1 className="text-4xl font-bold">{book.bookName}</h1>
          <p className="text-lg text-gray-600 mt-2">By: {book.author}</p>
          
          <p className="py-6">{book.description}</p>
          <div className="flex gap-3 mt-3 flex-wrap">
            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="badge text-green-600 bg-green-100 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-3 font-medium">Category: {book.category}</p>
           <div className='flex gap-5 mt-10'>
           <button className="btn btn-outline btn-primary">Primary</button>
           <button onClick={handleMarkasRead} className="btn btn-primary">Mark As Read</button>
        </div>
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default Bookdetails;
