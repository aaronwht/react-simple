# Simple React App using Hooks

[Contact me](https://www.aaronwht.com/contact-me) if you run into problems using this code. 

This repo is created using (notice npx not npm) `npx create-react-app` with as minimal amount of changes as possible.

The files to modify and add include:
- `src/index.js`
- `src/App.js`
- `public/books.json` (Create this file)

`App.js` with comments:
```
// src/App.js
import React, { useState, useEffect } from 'react' // Imports React and the useState and useEffect hooks
import axios from 'axios' // Imports axios, the promise-based library used to retrieve JSON data

// Exporting the app module as the default
export default () => {
   // Establishing and destructuring the state tuple
   const [books, setBooks] = useState([])
   
   // Executes the useEffect hook
   useEffect(() => {
    // Creates an anonymous function
    (async () => {
      // Makes promise-based request and destructures the response
      const { data: { books } } = await axios.get('/books.json')
          // Sets the book state
	  setBooks(books)
    })() // Immediately Invoked Function Expression (IIFE)
  }, []) // Empty dependency array ensures the Effect is only invoked upon initial render
  
   return (
      <> // Syntactic Sugar for <React.Fragment>
      	 // Truthy statement ensuring books exists, then iterates over the array
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

If this helped you consider supporting me at [Patreon](https://www.patreon.com/aaronwht)
