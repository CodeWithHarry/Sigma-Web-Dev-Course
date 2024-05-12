import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showfinished, setshowfinished] = useState(true)

  useEffect(() => {
    let todostring = localStorage.getItem("todos")
    if (todostring) {
      let totaltodos = JSON.parse(localStorage.getItem("todos"))
      settodos(totaltodos)
    }
  }, [])


  // const saveTodos = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos))

  // }

  function handleAdd() {
    settodos([...todos, { id: uuidv4(), todo, isComplete: false }])
    localStorage.setItem("todos", JSON.stringify([...todos, { id: uuidv4(), todo, isComplete: false }]))
    settodo("")


  }

  function handleEdit(id, e) {
    let Todo = todos.filter(i => i.id === id)
    settodo(Todo[0].todo)
    let newtodos = todos.filter(item => {
      return item.id != id
    })
    settodos(newtodos)
    localStorage.setItem("todos", JSON.stringify(newtodos))

  }

  function handleDelete(id, e) {

    let newtodos = todos.filter(item => {
      return item.id != id
    })
    settodos(newtodos)
    localStorage.setItem("todos", JSON.stringify(newtodos))
  }


  function handleChange(e) {
    settodo(e.target.value)
  }

  function handleCheckbox(e) {
    let id = e.target.name
    console.log(id)

    let index = todos.findIndex(item => {
      return item.id === id
    })

    let newtodos = [...todos]
    newtodos[index].isComplete = !newtodos[index].isComplete
    settodos(newtodos)
    localStorage.setItem("todos", JSON.stringify(newtodos))
  }


  const Toggleshowfinished = (e) => {
    setshowfinished(!showfinished)
  }

  return (

    <>


      <Navbar />


      <div className=" md:container mx-2 md:mx-auto bg-pink-200 my-5 p-5 rounded-xl min-h-[80vh] md:w-1/2">
        <h1 className='font-bold text-center' >Itask - Manage your tasks</h1>

        <div className="add my-4 flex flex-col gap-4">
          <h2 className='font-bold text-lg'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" placeholder='write a Todo' className='border border-blue-700 w-full rounded-md px-2 py-[2px]' />
          <button onClick={handleAdd} disabled={todo.length < 3} className='bg-pink-900 mx-3 px-3 rounded-md font-bold text-white hover:bg-pink-950 disabled:bg-black '>Save</button>
        </div>


        <input type="checkbox" checked={showfinished} onChange={Toggleshowfinished} /> Show finished
        <h2 className='font-bold text-lg'>Your Todos</h2>


        <div className="todos">
          {/* {todos.length === 0 && <div className='mx-5'>No todos available</div>} */}
          {todos.length === 0 ? <div className='mx-5'>No todos available</div> : todos.map((item) => {
            return (showfinished || !item.isComplete) && <div key={item.id} className=' todo w-full md:w-1/2 flex gap-5 justify-between my-4'>
              <div className="flex gap-5 text-wrap">
                <input name={item.id} type="checkbox" onChange={handleCheckbox} checked={item.isComplete} />
                <h3 className={item.isComplete ? "line-through" : ""}>{item.todo}</h3>
              </div>

              <div className="buttons flex items-center">
                <button onClick={(e) => handleEdit(item.id, e)} className='bg-pink-900 mx-2 px-3 py-1 rounded-md font-bold text-white hover:bg-pink-950 ' ><FaEdit /></button>
                <button onClick={(e) => handleDelete(item.id, e)} className='bg-pink-900 mx-2 px-3 py-1 rounded-md font-bold text-white hover:bg-pink-950 ' ><MdDelete /></button>
              </div>

            </div>

          })
          }
          {/* {
            todos.map((item) => {
              return (showfinished || !item.isComplete) && <div key={item.id} className=' todo w-full md:w-1/2 flex gap-5 justify-between my-4'>
                <div className="flex gap-5 text-wrap">
                  <input name={item.id} type="checkbox" onChange={handleCheckbox} checked={item.isComplete} />
                  <h3 className={item.isComplete ? "line-through" : ""}>{item.todo}</h3>
                </div>

                <div className="buttons flex items-center">
                  <button onClick={(e) => handleEdit(item.id, e)} className='bg-pink-900 mx-2 px-3 py-1 rounded-md font-bold text-white hover:bg-pink-950 ' ><FaEdit /></button>
                  <button onClick={(e) => handleDelete(item.id, e)} className='bg-pink-900 mx-2 px-3 py-1 rounded-md font-bold text-white hover:bg-pink-950 ' ><MdDelete /></button>
                </div>

              </div>

            })
          } */}



        </div>



      </div>
    </>
  )
}

export default App
