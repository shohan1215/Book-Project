import React from 'react';
import { Link } from 'react-router-dom';

const Booked = ({ booked }) => {
  const {bookId, image, bookName, author,tags,category } = booked;

  return (
     <Link to={`/booked/${bookId}`}>
      <div className="card bg-base-300 w-full max-w-sm mx-auto p-5 shadow-md rounded-xl">
      <figure className="bg-gray-300 rounded-md py-5">
        <img
          src={image}
         className='h-[166px]'
          alt={bookName}
        />
      </figure>

      <div className="card-actions justify-center flex-wrap gap-3 mt-3">
        <div className='flex justify-center gap-3'>
          {
            tags.map((tag,index) => <button className='btn btn-xm badge text-green-500 hover:text-green-700 bg-green-100 font-bold'>{tag}</button>)
          }
        </div>
      </div>

      
      <div className="mt-3  sm:text-left">
        <h2 className="card-title text-lg md:text-xl">{bookName}</h2>
        <p className="text-sm text-gray-600">By: {author}</p>
      </div>

      
      <div className="flex -mt-3 w-full flex-col ">
        <div className="divider"></div>
      </div>
      <div className='flex justify-between '> 
        <p>{category}</p>
       <div className="rating rating-lg">
  <input type="radio" name="rating-10" className="rating-hidden" aria-label="clear"  />
  <input type="radio" name="rating-10" className="mask mask-star-2" aria-label="1 star" />
  <input type="radio" name="rating-10" className="mask mask-star-2" aria-label="2 star" />
  <input type="radio" name="rating-10" className="mask mask-star-2" aria-label="3 star" />
  <input type="radio" name="rating-10" className="mask mask-star-2" aria-label="4 star"  defaultChecked />
  <input type="radio" name="rating-5" className="mask mask-star-2" aria-label="5 star" />
</div>

      </div>

    </div>
      </Link>
  );
};

export default Booked;
