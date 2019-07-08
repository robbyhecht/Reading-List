import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return ( 
    <div className="navbar">
      <h1>My Reading List</h1>
      <p>You have {books.length} {books.length === 1 ? 'book' : 'books'} to read</p>
    </div>
   );
}
 
export default Navbar;