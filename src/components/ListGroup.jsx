import React from 'react'
import ListGroupItem from './ListGroupItem'

export default function ListGroup({todo, deleteTodo , editTodo}) {
  return (
    <ul className="list-group mt-5">
      {todo.map((to)=>
        <ListGroupItem key={to.id} todo={to} deleteTodo={deleteTodo} editTodo={editTodo}/>
      )}
</ul>
  )
}
