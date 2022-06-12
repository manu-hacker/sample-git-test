import React,{useState} from 'react';
export const  AddTodo = ({addTodo})  =>{
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");  
  
  const submit =(e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description can not be blank");
        }else
      {  addTodo(title,desc);
        setTitle("");
        setDesc("");}
    }
  return (
    <div className='container my-3'>
    <h3>Add a to do</h3>
       <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">
      To do Title
    </label>
    <input
      type="text"
      value={title}
      onChange={(e)=>{setTitle(e.target.value)}}
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">
      Add Description about your work
    </label>
    <input
      type="text"
      className="form-control"
      id="desc"
      value={desc}
      onChange={(e)=>{setDesc(e.target.value)}}
    />
  </div>
  <div className="mb-3 form-check">
    
  </div>
  <button type="submit" className="btn btn-sm btn btn-success">
    Add to do
  </button>
</form>
    </div>
  )
}
