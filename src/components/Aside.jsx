import React, { useEffect, useState } from 'react';
import {
    CheckIcon,
    DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
const Aside = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://task-manager-json-server-afgl.onrender.com/task-user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h1 className="text-xl">Members</h1>
            <div className="flex gap-3 mt-3">
                {
                    users.map(singleUser => 
                    <div key={singleUser.id} className="h-10 w-10 rounded-xl overflow-hidden">
                        <img
                            src={singleUser.photo}
                            alt=""
                            className="object-cover h-full w-full "
                        />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Aside;