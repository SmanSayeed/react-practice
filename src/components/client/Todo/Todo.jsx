import React, { useEffect, useState } from 'react'
import { TodoProvider, useTodo } from '../../../contexts';
import { Link } from 'react-router-dom';


const TodoComp = () => {
    const [todo,setTodo] = useState([]);
    const {todos,addTodo,updateTodo,deleteTodo,toggleComplete} = useTodo();

    const add = (e) => {
        e.preventDefault();
        if(!todo)return;
        addTodo({
            todo,
            completed:false
        })
        setTodo("")
    }
    return (
        <>
        Todo
        <div>
            <form onSubmit={add}>
                <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)} />
                <button type='submit'>Create</button>
            </form>        
        </div>
        <div>
            <ul>
                {
                    todos.map((t,i)=>(
                        <li key={i}>
                            <span>({i+1}) </span>
                            <Link className='link' to={'/todo/'+t.todo}>{t.todo} </Link>
                            <button>Edit</button>
                            <button onClick={()=>deleteTodo(t.id)}>delete</button>
                            {
                                t.completed ?    <button className='btn btn-danger' onClick={()=>toggleComplete(t.id)}>X</button> :    <button className='btn btn-success' onClick={()=>toggleComplete(t.id)}>OK</button>
                            }
                         
                    </li>
                    ))
                }
              
            </ul>
        </div>
        
        </>
    )
}
export default function Todo() {

  const [todos,setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
  }
  const updateTodo = (id,todo) => {
    setTodos((prev)=>prev.map(p=>p.id===id?todo:p))
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter(p=>p.id!==id))
  }
  const toggleComplete = (id) => {
    setTodos((prev)=>prev.map(p=>p.id===id ? {...p,completed:!p.completed} : p))
  }

  useEffect(() => {
   let todosData = localStorage.getItem("todos");
   if(todosData && todosData.length>0){    
        setTodos(JSON.parse(todosData))
   }
  }, []);

  useEffect(() => {
    if(todos.length>0)
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos]);

  return (
    <>
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
          <TodoComp/>
    </TodoProvider>
    </>
  
  )
}
