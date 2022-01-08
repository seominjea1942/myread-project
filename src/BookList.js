import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf';
function BookList({books, changeStatus,bookStatus}) {



    return (
        <div>
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {Object.keys(bookStatus).map((item, index)=>{
                    return(
                        <BookShelf
                        bookShelfTitle={item}
                        books={books.filter(book=>book.shelf===bookStatus[item])}
                        changeStatus={changeStatus}
                        key={item}
                        bookStatus={bookStatus}
                        />
                    )
                })}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
                  <button>
                  Add a book
                  </button>
                  </Link>
            </div>
          </div>
        </div>
    );
}

export default BookList;