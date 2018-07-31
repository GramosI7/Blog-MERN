import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditInfo = (props) => {
  return (
    <div>
      <div className="container">
      <br/>
      <h1>Edit Article</h1>
      <br/>
        <form onSubmit={props.postData}>
        <div className="form-group">
        <input
              name="title"
              type="text"
              value={props.value.title}
              onChange={props.onHandleChangeTitle}
              className="form-control"
            />
        </div>
          <div className="form-group">
            <ReactQuill
                theme="snow"
              modules={EditInfo.modules}
              formats={EditInfo.formats}
              value={props.value.body}
              placeholder="Description"
              onChange={props.onHandleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Post</button>
        </form>
        <br />
      </div>
    </div>
  )
}

EditInfo.modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
      ['code-block']
    ]
  };
  
  EditInfo.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
  ];

export default EditInfo
