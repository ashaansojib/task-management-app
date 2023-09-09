import React from 'react';
import { useForm } from 'react-hook-form';
const AddTask = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        reset();
        fetch('https://task-manager-json-server-afgl.onrender.com/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data), 
        })
    }
    return (
        <dialog id="my_modal_4" className="modal">
            <div className="modal-box pb-0 lg:w-[650px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-1'>
                        <input className='inline-block w-full p-2 border border-teal-300' type="text" placeholder="Task Title" {...register("title", { required: true })} />
                        <textarea {...register("description", { required: true })} placeholder='Type Description' className='inline-block w-full p-2 border border-teal-300' name="description" id="" cols="10" rows="5"></textarea>
                        <input {...register("date", { required: true })} className='inline-block w-full p-2 border border-teal-300' type="date" name="date" id="" />
                        <input {...register("asign", { required: true })} className='inline-block w-full p-2 border border-teal-300' type="text" name="asign" id="" placeholder='Asign Your Name' />
                        <select className='inline-block w-full p-2 border border-teal-300' {...register("priority")}>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        <select className='inline-block w-full p-2 border border-teal-300' {...register("status")}>
                            <option value="pending">Pending</option>
                            <option value="process">Process</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <input className='p-2 mt-2 bg-green-500 text-white rounded-lg' type="submit" value="Add Task" />
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default AddTask;