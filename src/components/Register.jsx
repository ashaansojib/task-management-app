import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
    const { createUser, updateUserInfo } = useContext(AuthContext)

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                setError("");
                updateUserInfo(name, photo)
                navigate(from)
                setSuccess('User Created Succefuly!!');
            })
            .catch(error => {
                setSuccess("");
                setError(error.message);
            });
        updateUserInfo()
            .then(result => { })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })
        form.reset();
    }
    return (
        <div className='lg:w-[450px] mx-auto lg:pt-6'>
            <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' required placeholder="Type Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="give your photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' required placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                    </div>
                    <label className="label">
                        {
                            error ? <span className="label-text text-red-600">{error}</span> : <span className="label-text text-green-600">{success}</span>

                        }
                    </label>
                    <div className="form-control mt-6">
                        <button className="btn bg-white text-black hover:text-white border">Create Account</button>
                    </div>
                    <label className="label">
                        <span className="label-text">Already Have An Account? <Link className='underline' to="/login">Login</Link></span>
                    </label>
                </div>
            </form>

        </div>
    );
};

export default Register;