import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Tasks from '../components/Tasks';
import Aside from '../components/Aside';

const Home = () => {

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://task-manager-json-server-afgl.onrender.com/api/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])

    return (
        <div>
            <Navbar />
            <div className='my-container grid grid-cols-3 py-6 gap-4'>
                <div className='col-span-2 grid grid-cols-3 gap-2'>
                    {/* tasks */}
                    {
                        tasks.map( singleTask => <Tasks 
                        key={singleTask.id}
                        singleTask={singleTask}
                        ></Tasks>)
                    }
                </div>
                <div className='border p-2'>
                    {/* sidebar */}
                    <Aside />
                </div>
            </div>
        </div>
    );
};

export default Home;