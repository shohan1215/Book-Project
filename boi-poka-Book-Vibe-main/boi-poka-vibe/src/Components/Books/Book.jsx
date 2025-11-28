import React, { useEffect, useState } from 'react';
import Booked from '../Booked/Booked';

const Book = () => {

    const [books,setBooks] = useState([]);
      
     useEffect(() =>{

      fetch('./booksData.json')
      .then(res =>res.json())
      .then(data => setBooks(data));
     },[]);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-10">Books</h2>

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10
       '>
        {
          books.map(book =><Booked booked={book} key={book.bookId}></Booked>)
        }
       </div>
    </div>
  );
};

export default Book;