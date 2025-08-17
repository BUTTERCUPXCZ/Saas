import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const registerUser = async (userData) => {
  const res = await fetch('http://localhost:3000/api/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(userData),
  });
    if(!res.ok) {
      const errorBody = await res.json().catch(() => null);
      throw new Error(errorBody?.message || res.statusText || 'Failed to register');
    }
    return res.json();
}

const Register = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [role, setRole] = useState('STUDENT')
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerUser, 
    onSuccess: () => {
      navigate("/login");
    }
  });

  const handleSubmit = (e) => {
     e.preventDefault();
     mutation.mutate({name, email, password, role});
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6" >
          <div>
            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="role" className="block text-sm/6 font-medium text-gray-900">
              Select Role
            </label>
            <div className="mt-2">
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="STUDENT">Student</option>
                <option value="INSTRUCTOR">Instructor</option>
              </select>
            </div>
          </div>
           {mutation.isError && (
             <div className='text-sm text-red-600 text-center'>{mutation.error.message}</div>
           )}

           {mutation.isSuccess && (
             <div className='text-sm text-green-600'>Registration successful!</div>
           )}

          <div>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              {mutation.isPending ? 'Signing up ...' : 'Sign up'}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm/6 text-gray-500">
          Already have an account?{" "}
          <Link to='/login' className="font-semibold text-gray-900 hover:text-gray-700">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
