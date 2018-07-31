import React from 'react'

const DeleteBtn = (props) => {
  return (
    <button onClick={props.deleteArticle} className="btn btn-danger">Delete</button>
  )
}

export default DeleteBtn
