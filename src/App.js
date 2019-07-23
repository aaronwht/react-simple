// src/App.js - displays API content
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default () => {
   const [books, setBooks] = useState([])
   
   useEffect(() => {
    (async () => {
      const { data: { books } } = await axios.get('/books.json')
	  setBooks(books)
    })()
  }, [])
  
   return (
      <>
         {books && books.map(book => {
            return (
              <div key={book._id}>
                 {book.title}
              </div>
            )
          })}
      </>
   )
}