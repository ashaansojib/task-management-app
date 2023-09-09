import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { Link } from 'react-router-dom';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import AddTask from './AddTask';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { })
    }
    const navItem = <>
        <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
            <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
        <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
            <BellIcon className="h-6 w-6" />
        </button>
        <button onClick = {()=> document.getElementById('my_modal_4').showModal()} className="btn btn-primary btn-sm">Add Task</button>
    </>
    return (
        <nav className="navbar border-b border-slate-300 justify-between">
            <AddTask />
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu gap-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Task Manager</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-2 items-center menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="justify-between">
                            Profile
                        </button>
                    </li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><button onClick={handleLogOut}>Logout</button></li>
                </ul>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <figure className='flex justify-center'>
                            <img src={user?.photoURL} alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                        </figure>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                            <p>Programmer can anything new that who didn't done yet?</p>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </nav>
    );
};

export default Navbar;