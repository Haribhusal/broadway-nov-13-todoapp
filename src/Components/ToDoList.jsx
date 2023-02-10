import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ViewTodos from './ViewTodos';





const ToDoList = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    const handleChange = () => {
    }
    const handleInputChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title == '') return;
        // prevent the default reloading behaviour
        setTodos((oldTodos) => {
            return [...oldTodos, { id: uuidv4(), title: title, isCompleted: false }]
        })
        setIsOpen(false);
        setTitle('');
    }
    console.log(todos);
    return (
        <>

        <div className='todowrapper border-2 my-10 rounded-md  border-gray-400 p-10 w-[50%] mx-auto'>
            <div className="heading flex  mb-5 items-center justify-between border-b-2 pb-5 border-gray-400">
                <h3 className="title text-3xl font-bold  ">
                    My Todos
                </h3>
                <button onClick={() => setIsOpen(true)} className='bg-purple-700 text-white px-5 py-3 rounded-md hover:bg-purple-500 transition-all'>Add New Todo</button>
            </div>
            {todos.length < 1 ?
                <div>No Data Found</div>
                :
                todos.map((item) => (
                    <div className="todoitem flex items-center gap-5 mb-3" key={item.id}>
                        <input type="checkbox" checked={item.isCompleted} className='h-6 w-6' onChange={handleChange} />
                        <h1 className='cursor-pointer text-xl font-bold'>{item.title}</h1>
                    </div>
                ))
            }


            {isOpen &&
                <div className="popup fixed h-screen w-screen bg-[#00000096] top-0 left-0 flex items-center justify-center">
                    <div className="popup-content bg-white w-[50%] p-10 rounded-md">
                        <div className="heading flex  mb-5 items-center justify-between border-b-2 pb-5 border-gray-400">
                            <h3 className="title text-3xl font-bold  ">
                                Add New Todo
                            </h3>
                            <button onClick={() => setIsOpen(false)} className='bg-gray-200 text-black px-5 py-3 rounded-md hover:bg-gray-300 transition-all'>Close</button>
                        </div>
                        <form className='my-5 flex gap-5' onSubmit={handleSubmit}>
                            <input autoFocus onChange={handleInputChange} type="text" placeholder='Enter todo' className='border-2 border-gray-400 px-5 py-3 rounded-md w-full' />
                            <button type='submit' className='bg-purple-700 text-white px-5 rounded-md'>Add</button>
                        </form>
                    </div>
                </div>
            }
        </div>

        <ViewTodos todos={todos}/>
        </>
    )
}

export default ToDoList