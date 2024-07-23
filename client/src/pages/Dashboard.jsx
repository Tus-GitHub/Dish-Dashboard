import { useEffect, useState } from 'react'
import Item from '../components/Item'

export default function Dashboard() {
  const [dishes, setDishes] = useState([]);
  const [dish, setDish] = useState([]);
  useEffect(() => {
    const listing = async () =>{
      try{
        const res = await fetch(`/api/listing/get`);
        const data = await res.json();
        setDishes(data);
      } catch(error){
        console.log(error);
      }
    }
    listing();
  },[]);
  const togglePublishStatus = async (id) => {
    try{
    const res = await fetch(`/api/listing/toggle/${id}`,{
      method: 'POST'
    });
    }catch(error){
      console.log(error);
    }
  };
  return (
    <div className='flex gap-4 flex-col'>
      <h1 className='uppercase text-lg'>Dish Dashboard</h1>
      <ul className='flex flex-row gap-4'>
       {dishes.map((dish) => (
        <Item key={dish.dishId} dish={dish} onToggle={togglePublishStatus} />
       ))}
      </ul>
    </div>
  )
}
