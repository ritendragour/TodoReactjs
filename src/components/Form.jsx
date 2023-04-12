import React, { useEffect, useState } from 'react'

export default function Form({addTodo, edit, updateTodo}) {

  const [text, setText] =useState("")
  const handleSubmit= (e) => {
    e.preventDefault()
    if(edit.isEdit){
      updateTodo(text , edit.todo.id)
    }else{
      addTodo(text)
    }
    setText("") 
  }

  useEffect(()=>{
    setText(edit.todo.text)
  },[edit])


  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="mb-3 w-50">
        <input value={text} type="text" className="form-control" placeholder='Enter Todo' 
                  onChange={(e)=>setText(e.target.value)} required/>
      </div>
      <button type="submit" className="btn btn-success w-50">Submit</button>
    </form>
  )
}
