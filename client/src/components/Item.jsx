import React from 'react'

export default function Item({dish, onToggle}) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg 
    transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px] flex flex-col gap-4'>
      <img
        src= {dish.imageUrl}
        alt="Dish-Image"
        className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
       />
      <div className='flex flex-col gap-4 p-3 w-full'>
        <p className='truncate text-lg font-semibold text-slate-700 uppercase'>{dish.dishName}</p>
        <p className='uppercase truncate text-lg font-semibold text-slate-700'>{dish.isPublished}</p>
      </div>
      <div className='px-20 py-3 mx-5'>
        <button
        onClick = {() => onToggle(dish.dishId)} 
        className='py-2 px-4 mt-3 rounded font bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
          Publish
        </button>
      </div>
    </div>
  )
}
