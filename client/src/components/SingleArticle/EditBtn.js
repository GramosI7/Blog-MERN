import React from 'react';
import {NavLink} from 'react-router-dom';


const EditBtn = (props) => {
  return (
        <NavLink to={`/article/edit/${props.id}`} className="btn btn-primary">Edit</NavLink>
  )
}

export default EditBtn
