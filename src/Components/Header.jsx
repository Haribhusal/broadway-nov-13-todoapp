import React from 'react'

const Header = () => {
    return (
        <header className='flex justify-between items-center px-10 border-b-[1px] border-gray-400 py-5'>
            <div className="logo">
                <a href="#" className='flex items-center gap-5'>
                    <img src="https://picsum.photos/id/45/100/100" className=' outline outline-offset-4  outline-purple-700 outline-offset-2 h-20 w-20 rounded-full object-cover object-center' alt="" />
                    <h1 className='text-2xl font-bold'>My ToDo App</h1>
                </a>
            </div>
            <nav>
                <ul className='flex gap-10'>
                    <li>
                        <a href="#">My Todo</a>
                    </li>
                    <li>
                        <a href="#">Add New Todo</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#" className='bg-purple-700 text-white px-5 py-3 rounded-md hover:bg-purple-500 transition-all'>Register</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header