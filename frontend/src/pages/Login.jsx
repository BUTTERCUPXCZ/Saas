import React from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx';

const LoginUser = async (userData) => {
  const res = await fetch('http://localhost:3000/api/users/login', {
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

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const { login } = useAuth();
    const navigate = useNavigate();

   const mutation = useMutation({
       mutationFn: LoginUser, 
       onSuccess: (data) => {
        login(data.user, data.token);
        localStorage.setItem('token', data.token);
 
       if(data.user.role === 'INSTRUCTOR'){
           navigate('/instructor-dashboard');
       }else{
           navigate('/student-dashboard');
       }
     
       }
     });
   
     const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ email, password});
     }
  
  return (
    <>
  <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit}  className="space-y-6">
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
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 ">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-gray-900 hover:text-gray-700">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                />
              </div>
            </div>

            {mutation.isError && (
              <div className='text-sm text-red-600 text-center'>{mutation.error.message}</div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               {mutation.isPending ? 'Logging in ...' : 'Sign in'}
              </button>
            </div>
          </form>

          {/* social login divider + buttons */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => (window.location.href = '/auth/google')}
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm/6 font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                aria-label="Sign in with Google"
              >
                {/* Google logo */}
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M21.6 12.227c0-.68-.061-1.333-.175-1.956H12v3.708h5.78c-.249 1.34-1.012 2.476-2.164 3.238v2.695h3.496c2.047-1.886 3.219-4.667 3.219-7.685z" fill="#4285F4"/>
                  <path d="M12 22c2.916 0 5.366-.966 7.154-2.625l-3.496-2.695c-.97.651-2.216 1.042-3.658 1.042-2.81 0-5.187-1.896-6.037-4.442H2.31v2.788C4.08 19.95 7.77 22 12 22z" fill="#34A853"/>
                  <path d="M5.963 13.28A7.007 7.007 0 0 1 5.6 12c0-.415.05-.816.144-1.197V8.015H2.31A9.997 9.997 0 0 0 2 12c0 1.59.364 3.097 1.01 4.454l2.953-3.174z" fill="#FBBC05"/>
                  <path d="M12 6.5c1.586 0 3.01.545 4.132 1.614l3.098-3.098C17.362 2.374 14.912 1.4 12 1.4 7.77 1.4 4.08 3.45 2.31 6.787l3.434 2.871C6.813 7.396 9.19 6.5 12 6.5z" fill="#EA4335"/>
                </svg>
                Google
              </button>

              <button
                type="button"
                onClick={() => (window.location.href = '/auth/github')}
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm/6 font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                aria-label="Sign in with GitHub"
              >
                {/* GitHub logo */}
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.02c0 4.427 2.865 8.183 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.699-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.944 0-1.091.39-1.983 1.03-2.681-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.377.202 2.394.099 2.646.64.698 1.03 1.59 1.03 2.681 0 3.842-2.338 4.687-4.566 4.935.359.31.678.92.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .269.18.58.688.482C19.137 20.199 22 16.446 22 12.02 22 6.484 17.523 2 12 2z" />
                </svg>
                GitHub
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <Link to='/register' className="font-semibold text-gray-900 hover:text-gray-700">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login