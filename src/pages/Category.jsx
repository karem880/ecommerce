import React, { useState, useEffect } from 'react';
// import Aside from '../commponent/curser/Asid/Aside';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Category() {
  
  const [categories, setcategories] = useState([]);
  const [loading, setLoading] = useState(true);

const [name,setname] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/categories/');
        setcategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/categories/${categoryId}`);
      // Update the category list after deletion
      setcategories((prevcategories) => prevcategories.filter((category) => category.id !== categoryId));
      toast.success('category deleted successfully');
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <section className='flex gap-20  m-5'>

<div className="overflow-scroll h-[90vh] rounded-lg border border-gray-200 shadow-md ">
  <table className="w-full border-collapse bg-white text-left text-sm h-[90vh] overflow-scroll text-gray-500">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">name</th>
        
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">


    {categories.map((category)=>(
      <>
          <tr className="hover:bg-gray-50">
        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
         
          <div className="text-sm">
            <div className="font-medium text-gray-700">{category.name}</div>
            {/* <div className="text-gray-400">{category.description}</div> */}
          </div>
        </th>
       
        
        <td className="px-6 py-4">
          <div className="flex justify-end gap-4">
          <a  onClick={() => handleDelete(category.id)} href="#">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
</a>

            <a x-data="{ tooltip: 'Edite' }" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </a>
          </div>
        </td>
      </tr>
      </>
    ))}

    
     
    </tbody>
  </table>
</div>

 <div className='flex gap-10 w-1/2'>
    <div className='flex flex-col w-[350px] h-[350px] items-center  rounded-lg text-center bg-white p-7'>
        <h1 className='text-2xl font-semibold mb-10 '>Create Category</h1>
        <form className='w-full flex flex-col justify-center items-center gap-10'>
            <input className='w-full h-[50px] border-2 border-gray-700 rounded-md' onChange={(e)=>setname(e.target.value)}></input>
            <button type='submit' className='w-2/3 bg-black p-4 text-white mt-10 rounded-md'>Add </button>
        </form>
    </div>
    <div className='hidden flex-col w-[350px] h-[350px] items-center  rounded-lg text-center bg-white p-7'>
        <h1 className='text-2xl font-semibold mb-10 '>Edit Category</h1>
        <form className='w-full flex flex-col justify-center items-center gap-10'>
            <input className='w-full h-[50px] border-2 border-gray-700 rounded-md' onChange={(e)=>setname(e.target.value)}></input>
            <button type='submit' className='w-2/3 bg-black p-4 text-white mt-10 rounded-md'>Update </button>
        </form>
    </div>
 </div>

    </section>
  );
}

export default Category;
