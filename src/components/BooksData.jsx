import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BooksData = () => {
  const [books, setBooks] = useState('');
  const apiUrl = 'https://www.anapioficeandfire.com/api/books?pageSize=30';

  const fetchData = async () => {
    const response = await axios.get(apiUrl);
    setBooks(response.data);
  };

  return (
    <div className='App'>
      <h1 data-cy='title'>Game of Thrones Books</h1>

      <div>
        <button
          className='fetch-button'
          data-cy='books-details'
          onClick={fetchData}>
          Books Details
        </button>
        <h3>Click above button  to see details of books</h3>
        <br />
      </div>
      <div className='books'>
        {books &&
          books.map((book, index) => {
            const releasedDate = new Date(book.released).toDateString();
            return (
              <div className='book'>
                <h3 data-cy='book-number'>Book {index + 1}</h3>
                <h2 data-cy='book-name'>{book.name}</h2>
                <div className='details'>
                  <p data-cy='author'>👨:{book.authors} </p>
                  <p data-cy='number-of-pages'>📖: {book.numberOfPages} </p>
                  <p data-cy='country'>🏘️:{book.country} </p>
                  <p data-cy='release-date'>⏰:{releasedDate} </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BooksData;
