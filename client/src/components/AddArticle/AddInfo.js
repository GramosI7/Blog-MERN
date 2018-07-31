import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddInfo = (props) => {
    return (
            <div className="container">
                <br/>
                <h1>Add Article</h1>
                <br/>
                    <form onSubmit={props.postData}>
                        <div className="form-group">
                            <input
                            name="title"
                            type="text"
                            placeholder="Title"
                            onChange={props.onHandleChangeTitle}
                            className="form-control"
                            />
                            <br/>
                            {/* <input
                            name="author"
                            type="text"
                            placeholder="Author"
                            onChange={props.onHandleChangeTitle}
                            className="form-control"
                            /> */}
                        </div>
                        <div className="form-group">
                            <ReactQuill
                            theme="snow"
                            modules={AddInfo.modules}
                            formats={AddInfo.formats}
                            placeholder="Description"
                            onChange={props.onHandleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Post</button>
                    </form>
                <br />
            </div>
    )
}

AddInfo.modules = {
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
  
  AddInfo.formats = [
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

export default AddInfo
