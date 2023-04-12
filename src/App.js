import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ListGroup from './components/ListGroup';
import Navbar from './components/Navbar';

function App() {
  let [navbar, setNavbar] = useState("Todo App")
  const [version, setVersion] = useState(2)
  const [todos, setTodos] = useState([{
    id: 1,
    text: "Demo"
  }])

  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false
  })

  const addTodo = (text) => {
    const newTodo = { id: crypto.randomUUID(), text: text }
    setTodos([...todos, newTodo])
  }
  
  const editTodo = (todo) => {
    setEdit({
      todo: todo,
      isEdit: true
    })
  }
  
  const updateTodo = (text, id) => {
    setTodos(todos.map(item => item.id === id ? { ...item, text: text } : item))
    setEdit({
      todo: {},
      isEdit: false
    })
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id))
  }
  return (
    <>
    <div className='bg_img'>
      <Navbar navbar={navbar} version={version} />
      <iframe className='float-end m-3 mx-5' src="https://free.timeanddate.com/clock/i8s2vcpx/n1618/fn6/fs16/fcfff/tc000/ftb/pa8/tt0/tw1/th1/ta1/tb4" frameborder="0" width="212" height="54"></iframe>
      <div className='container p-5 mt-5'>
        <button className="btn btn-success m-2 float-end" onClick={() => setVersion(version + 0.1)}>
          New Version
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg></button>
        <button className="btn btn-danger m-2 float-end" onClick={() => setVersion(version - 0.1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>Old Version</button>
        <button className='float-end btn btn-info m-2' onClick={() => setNavbar(prompt("Enter Todo Name") + " " + "Todo")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-text-center" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg> Enter Todo Name</button>

        <Form addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
        <ListGroup todo={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
      </div>
    </>
  );
}


export default App;
