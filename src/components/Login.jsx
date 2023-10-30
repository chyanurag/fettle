import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate()
	if(auth.currentUser !== null){
		return(
			<>
				<h1>You are logged in by {auth.currentUser.email}</h1>
				<button onClick={() => { signOut(auth); navigate('/')} }>Logout</button>
			</>
		)
	}
	const handleLogin = () => {
		if(email === ''){
			alert('Email can\'t be empty');
			return;
		}
		if(password === ''){
			alert('Password can\'t be emtpy');
			return;
		}
		signInWithEmailAndPassword(auth, email, password).then(res => {
			alert('You have been logged in!');
			navigate('/')
		}).catch(err => {
			alert(err)
		});
	}
	return(
		<>
		<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto justify-center align-center">
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2 justify-center align-center">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Email</label>
            <input onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Password</label>
            <input onChange={e => setPassword(e.target.value)} type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
        </div>
        <div className="p-2 w-full">
          <button onClick={handleLogin} style={{backgroundColor: 'green'}} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
        </div>
      </div>
    </div>
  </div>
</section>
		</>
	)
}

export default Login;
