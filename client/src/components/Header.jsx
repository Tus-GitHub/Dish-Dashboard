import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-8xl mx-auto p-3'>
            <Link to="/">
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>DISH-</span>
                <span className='text-slate-700'>DASHBOARD</span>
            </h1>
            </Link>
            <ul className="flex gap-4">
                <Link to ="/">
                <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
                </Link>
                <Link to="/about">
                <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
                </Link>
            </ul>
        </div>
    </header>

  )
}
