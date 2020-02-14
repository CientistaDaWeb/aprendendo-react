import React from 'react'
import TodoListItem from './TodoListItem'

export const TodoList = (props) => {
  const {items, removeFromItems} = props
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <TodoListItem key={index} index={index} item={item} removeFromItems={removeFromItems}/>
      ))}
    </ul>
  )
}
