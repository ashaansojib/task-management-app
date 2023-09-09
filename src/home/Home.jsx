import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Tasks from '../components/Tasks';
import Aside from '../components/Aside';
import { useForm } from 'react-hook-form';

const Home = () => {

    const [tasks, setTasks] = useState([]);
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        fetch('https://task-manager-json-server-afgl.onrender.com/api/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    const pendingTask = tasks.filter(pending => pending.status === 'pending');
    const progressTask = tasks.filter(process => process.status === 'process');
    const completedTask = tasks.filter(complete => complete.status === 'completed');


    const onSubmit = (data) => {
        tasks.sort((a, b) => {
            // You can customize the sorting order as needed. For example, you can use a custom order:
            const priorityOrder = { "High": 1, "Medium": 2, "Low": 3 };
          
            // Compare the "priority" property using the custom order
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          });
        }
    return (
            <div>
                <Navbar />
                <div>
                    <form className='py-2 flex justify-center items-center gap-2' onSubmit={handleSubmit(onSubmit)}>
                        <div className='space-y-1'>
                            <select className='inline-block w-full p-2 border border-teal-300' {...register("priority")}>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                        <input className='p-2 bg-orange-500 text-white inline-block' type="submit" value="Sorting Task" />
                    </form>
                </div>
                <div className='my-container grid grid-cols-3 gap-4'>
                    <div className='col-span-2 grid grid-cols-3 gap-2'>
                        {/* tasks */}
                        <div>
                            <h2 className='text-center border-b mb-1 p-1 bg-gray-200'>Pending Task</h2>
                            {
                                pendingTask.map(singleTask => <Tasks
                                    key={singleTask.id}
                                    singleTask={singleTask}
                                ></Tasks>)
                            }
                        </div>
                        <div>
                            <h2 className='text-center border-b mb-1 p-1 bg-gray-200'>Processing Task</h2>
                            {
                                progressTask.map(singleTask => <Tasks
                                    key={singleTask.id}
                                    singleTask={singleTask}
                                ></Tasks>)
                            }
                        </div>
                        <div>
                            <h2 className='text-center border-b mb-1 p-1 bg-gray-200'>Completed Task</h2>
                            {
                                completedTask.map(singleTask => <Tasks
                                    key={singleTask.id}
                                    singleTask={singleTask}
                                ></Tasks>)
                            }
                        </div>

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