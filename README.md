## Simple React App using Hooks

This repo is created using `create-react-app` with as minimal amount of changes as possible.

The files to modify and add include:
- `src/index.js`
- `src/App.js`
- `public/books.json` (Create this file)

`App.js` with comments:
```
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
```
