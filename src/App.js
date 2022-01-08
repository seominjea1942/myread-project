import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import CreateBook from './CreateBook';
import BookList from './BookList';
import * as BooksAPI from './BooksAPI'

function App() {

  const [books, setBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  const changeStatus =(shelf,book)=>{
    book.shelf = shelf
    let newBooks = books.filter(item=>item.title!==book.title)
    setBooks([...newBooks,book])
    BooksAPI.update(book,shelf)
  }

  const searchBook =(keyword)=>{
    BooksAPI.search(keyword)
    .then(result=>{
      if(result&&result.length>0){
      books.forEach((book)=>{
       result.forEach((item)=>{
        if(book.title===item.title && book.description === item.description){
          item.shelf = book.shelf
        }
       })
      })
      setSearchedBooks(result)
    }
    })
  }

  useEffect(()=> {
      BooksAPI.getAll()
      .then((fetchedBooks)=>{
        setBooks(fetchedBooks)
      })
  },[]);

  const bookStatus = {
    "Currently Reading": 'currentlyReading',
    "Want to Read": 'wantToRead',
    "Read": 'read',
    "None": 'none'
}

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BookList
          books={books}
          changeStatus={changeStatus}
          bookStatus={bookStatus}
          />}/>
        <Route path='/create' element={<CreateBook
          searchBook={searchBook}
          searchedBooks={searchedBooks}
          changeStatus={changeStatus}
          bookStatus={bookStatus}
          setSearchedBooks={setSearchedBooks}
          />}/>
      </Routes>
    </div>
  );
}

export default App;
