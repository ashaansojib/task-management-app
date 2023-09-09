import React from 'react';
const Tasks = ({singleTask}) => {
    const {title, description, date, priority } = singleTask;

    return (
        <div className="bg-secondary/10 rounded-md p-5 mb-2">
            <h1
                className={`text-lg font-semibold mb-3  ${priority === 'High' ? 'text-red-500' : ''
                    } ${priority === 'Medium' ? 'text-yellow-500' : ''} ${priority === 'Low' ? 'text-green-500' : ''
                    }`}
            >
                {title}
            </h1>
            <p className="mb-3">{description}</p>
            <p className="text-sm">Assigned to -</p>
            <div className="flex justify-between mt-3">
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Tasks;