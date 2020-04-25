import React from 'react'
import ReactDOM from 'react-dom'

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} page</p>
    </section>
  )
}

const Library = ({books}) => {
  return (
    <div>
      {books.map(
        book => <>
      )}     
    </div>
  )
}

ReactDOM.render(
  <Library></Library>,
  document.getElementById('root')
)
