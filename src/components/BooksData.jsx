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
      <h1>Game of Thrones Books</h1>
      <div>
        <button className='fetch-button' onClick={fetchData}>Books Details</button>
        <br />
      </div>
      <div className='books'>
        <div className='book'>
          {books &&
            books.map((book, index) => {
              const releasedDate = new Date(book.released).toDateString();
              return (
                <div className='book'>
                  <h3>Book {index + 1}</h3>
                  <h2>{book.name}</h2>
                  <div className='details'>
                    <p>👨:{book.authors} </p>
                    <p>📖: {book.numberOfPages} </p>
                    <p>🏘️:{book.country} </p>
                    <p>⏰:{releasedDate}  </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BooksData;
