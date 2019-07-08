import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer.js';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : []; //sets data to existing local storage
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books]); //initial data display on component mount
  return (
    <BookContext.Provider value={{books, dispatch}}>
      { props.children }
    </BookContext.Provider>
  );
}

export default BookContextProvider;


// // WITH DISPATCH, BEFORE ADDING LOCAL STORAGE:

// import React, { createContext, useReducer } from 'react';
// import { bookReducer } from '../reducers/bookReducer';

// export const BookContext = createContext();

// const BookContextProvider = (props) => {
//   const [books, dispatch] = useReducer(bookReducer, []);
//   return (
//     <BookContext.Provider value={{books, dispatch}}>
//       { props.children }
//     </BookContext.Provider>
//   );
// }

// export default BookContextProvider;


// WITHOUT REDUCER:

// import React, { createContext, useState } from 'react';
// import uuid from 'uuid/v1'; // npm install that generates random id

// export const BookContext = createContext();

// const BookContextProvider = (props) => {
//   const [books, setBooks] = useState([
//     {title: 'The Idiot', author: 'Fyodor Dostoyevsky', id: 1}, // initial state
//     {title: 'Franny & Zooey', author: 'JD Salinger', id: 2},
//   ]);
//   const addBook = (title, author) => {
//     setBooks([...books, { title, author, id: uuid() }]);
//   };
//   const removeBook = (id) => {
//     setBooks(books.filter(book => book.id !== id));
//   }
//   return (
//     <BookContext.Provider value={{books, addBook, removeBook}}>
//       { props.children }
//     </BookContext.Provider>
//   );
// }

// export default BookContextProvider;