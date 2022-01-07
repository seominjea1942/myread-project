import React,{useState} from 'react';

function Book({book, changeStatus, bookStatus}) {

    return (
        <li>
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                <div className="book-shelf-changer">
                    <select onChange={(e)=>{
changeStatus(e.target.value, book)
                    }} defaultValue={book.shelf}>
                        <option value="move" disabled>Move to...</option>
                        {Object.keys(bookStatus).map((item)=>{
                            return(
                                <option key={`option-${item}`} value={bookStatus[item]}>{item}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
        </li>
    );
}

export default Book;