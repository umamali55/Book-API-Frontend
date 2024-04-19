import React from 'react';
import Book from './Components/Book';
import UpdateBook from './Components/Update';

const App = () => {
  return (
    <div className="App">
      <h1>Book Management System</h1>
      <Book />
      <UpdateBook/>
    </div>
  );
};

export default App;
