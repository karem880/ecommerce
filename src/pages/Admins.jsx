import React, { useState, useEffect } from 'react';
import Aside from '../commponent/curser/Asid/Aside';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Admins() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    
      e.preventDefault();
      axios.post('http://localhost:3000/register', { firstname, lastname, email, password })
        .then((res) => {
          console.log(res);
          toast.success("تم الإضافة بنجاح");
          // Refresh the user list after addition
          fetchUsers();
        navigate('/login')

        })
        .catch((error) => {
          console.error(error);
          toast.error("لم يتم الإضافة");
        });
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
    }

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:3000/delete/${userId}`)
      .then(response => {
        console.log(response.data);
        toast.success("تم الحذف بنجاح");
        // Refresh the user list after deletion
        fetchUsers();
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        toast.error("لم يتم الحذف");
      });
  };

  const fetchUsers = () => {
    axios.get('http://localhost:3000/')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users from your server when the component mounts
    fetchUsers();
  }, []);

  return (
    <section className='flex'>
      <ToastContainer position="bottom-left" />
      <Aside className="w-[500px]" />

      <div className='flex-grow ml-0 md:ml-10'>
        <div className='w-full flex flex-col md:flex-row justify-around gap-8'>
          <div className='w-full md:w-[50%]'>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FirstName</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LastName</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-gray-200  divide-y divide-gray-200">
                {users.map(user => (
                  <tr key={user._id}>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='w-full md:w-[30%]' dir='rtl'>
            <h1 className="text-2xl text-gray-800 mb-4">إضافة مستخدم</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  الاسم الأول
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="الاسم الأول"
                  onChange={(e)=>setFirstname(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  الاسم الأخير
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="الاسم الأخير"
                  onChange={(e)=>setLastname(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  البريد الإلكتروني
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="البريد الإلكتروني"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  كلمة المرور
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="كلمة المرور"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-center md:justify-end">
                <button
                  className="w-full md:w-auto px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-600 transition duration-150 ease-in-out"
                  type="submit"
                >
                  إضافة
                </button>
                {/* Add a cancel or reset button if needed */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admins;
