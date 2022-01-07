import React from 'react';
import Book from './Book';
import uuid from 'react-uuid'
function BookShelf({bookShelfTitle, books, changeStatus, bookStatus}) {
    return (
        <div className="bookshelf">
                  <h2 className="bookshelf-title">{bookShelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books!== undefined?books.map(book=><Book
                        book={book}
                        key={uuid()}
                        changeStatus={changeStatus}
                        bookStatus={bookStatus}
                        />
                        ):null}
                    </ol>
                </div>
        </div>
    );
}

export default BookShelf;