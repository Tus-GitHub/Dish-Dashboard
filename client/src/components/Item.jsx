import React from 'react'

export default function Item() {
  return (
    <div className='bg-white shadow-md hover:shadow-lg 
    transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px] flex flex-col gap-4'>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYW-D6bGuaaGwkQFGOVIgUvaMhpK7vNDFVA&s"
        alt="Dish-Image"
        className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
       />
      <div className='flex flex-col gap-4 p-3 w-full'>
        <p className='truncate text-lg font-semibold text-slate-700 uppercase'>Dish-Name</p>
        <p className='uppercase truncate text-lg font-semibold text-slate-700'>Published</p>
      </div>
      <div className='px-20 py-3 mx-5'>
        <button className='py-2 px-4 mt-3 rounded font bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
          Publish
        </button>
      </div>
    </div>
  )
}
