"use client"
import Link from "next/link";
import { useState } from "react";
import { useFormik } from 'formik';
import { registerSchema } from '@/validation/schemas'
import { useCreateUserMutation } from "@/lib/services/auth";
import { useRouter } from 'next/navigation'

const initialValues = {
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
}

const Register = () => {
  const [serverErrorMessage, setServerErrorMessage] = useState('')
  const [serverSuccessMessage, setServerSuccessMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const [createUser] = useCreateUserMutation()
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values, action) => {
      setLoading(true);
      try {
        // console.log(values);
        const response = await createUser(values)
        // console.log(response);
        if (response.data && response.data.status === "success") {
          setServerSuccessMessage(response.data.message)
          setServerErrorMessage('')
          action.resetForm()
          setLoading(false);
          router.push('/account/verify-email')
        }
        if (response.error && response.error.data.status === "failed") {
          setServerErrorMessage(response.error.data.message)
          setServerSuccessMessage('')
          setLoading(false);
        }
      } catch (error) {
        // console.log(error);
        setLoading(false);
      }
    }
  })
  const handleGoogleLogin = async () => {
    window.open(
      `http://localhost:8000/auth/google`,
      "_self"
    );
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              placeholder="Enter your name"
            />
            {errors.name && <div className="text-sm text-red-500 px-2">{errors.name}</div>}

          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              placeholder="Enter your email"
            />
            {errors.email && <div className="text-sm text-red-500 px-2">{errors.email}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              placeholder="Enter your password"
            />
            {errors.password && <div className="text-sm text-red-500 px-2">{errors.password}</div>}

          </div>
          <div className="mb-6">
            <label htmlFor="password_confirmation" className="block font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              value={values.password_confirmation}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              placeholder="Confirm your password"
            />
            {errors.password_confirmation && <div className="text-sm text-red-500 px-2">{errors.password_confirmation}</div>}

          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 disabled:bg-gray-400" disabled={loading}>Register</button>
        </form>
        <p className="text-sm text-gray-600 p-1">Already an User ? <Link href="/account/login" className="text-indigo-500 hover:text-indigo-600 transition duration-300 ease-in-out">Login</Link></p>
        <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6 mr-2 text-indigo-500 fill-current">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <span>Register with Google</span>
        </button>
        {serverSuccessMessage && <div className="text-sm text-green-500 font-semibold px-2 text-center">{serverSuccessMessage}</div>}
        {serverErrorMessage && <div className="text-sm text-red-500 font-semibold px-2 text-center">{serverErrorMessage}</div>}

      </div>

    </div>
  )
}

export default Register