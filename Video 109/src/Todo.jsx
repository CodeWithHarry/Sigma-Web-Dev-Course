import React from 'react'

const Todo = () => {
    let todo = {
        title: "This is todo title",
        desc: "Hey this is a todo description"
        
    }
  return (
    <div>
      <div className="flex">
        <div className="item">
            <h1>{todo.desc}</h1>
            <p>This is a demo paragraph</p>
            <p>This is a demo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nulla amet similique nostrum voluptates officia, dolorum atque maxime aperiam eos veniam cupiditate dignissimos, magnam aliquid pariatur non. Dolorum ea officiis ex rerum.</p>

            <div className="flex">
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
