import React, { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
const Login = () => {
    const { userLogin, singInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
                setError("");
            })
            .catch(error => {
                setError(error.message)
            })
        form.reset();
    }
    const googleLogin = () => {
        singInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true });
                fetch('https://task-manager-json-server-afgl.onrender.com/task-user', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className='lg:w-[450px] mx-auto lg:pt-10'>
            <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <label className="label">
                        {error && <span className="label-text text-red-500">{error}</span>}
                    </label>
                    <div className="form-control mt-6">
                        <button className="btn bg-white text-black hover:text-white border">Login</button>
                    </div>
                    <label className="label">
                        <span className="label-text">Don't Have Any Account? <Link className='underline' state={location.state} to="/register">Register</Link></span>
                    </label>
                </div>
            </form>
            <div className='lg:w-[370px] p-4 lg:flex justify-between'>
                <button onClick={googleLogin} className='btn flex items-center py-2 px-4 bg-[#8DC63F] text-white hover:bg-white hover:text-black  rounded-full'> <span className='pr-2'><FaGoogle></FaGoogle></span>With Google</button>
            </div>
        </div>
    );
};

export default Login;