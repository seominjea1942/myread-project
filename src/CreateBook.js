import React from 'react';
import Book from './Book';
import {Link} from 'react-router-dom'
import uuid from 'react-uuid'

function CreateBook({searchBook, searchedBooks,changeStatus, bookStatus, setSearchedBooks}) {
    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/"
              onClick={()=>setSearchedBooks([])}
              >Go back</Link>
              <div className="search-books-input-wrapper">
                <input type="text" onChange={(e)=>{
                    if(e.target.value !==''){
                    searchBook(e.target.value)
                    }
                }} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {(searchedBooks&&searchedBooks.length>0)?
                  searchedBooks.map(book=><Book
                  book={book}
                  key={uuid()}
                  changeStatus={changeStatus}
                  bookStatus={bookStatus}
                  />):
                  <div className="search-term-example">
                <h5>Try this keyword to Search</h5>
                <p>'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'</p>
            </div>
                  }
              </ol>
            </div>
          </div>
    );
}

export default CreateBook;