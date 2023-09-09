import React from 'react';
import {
    CheckIcon,
    DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
const Aside = () => {
    const item = {
        id: 1,
        status: 'pending',
        title: 'Remove Button',
        description:
            'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
        date: '2023-08-28',
        assignedTo: 'Mir Hussain',
        priority: 'high',
    };
    return (
        <div>
            <h1 className="text-xl">Members</h1>
            <div className="flex gap-3 mt-3">
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                        alt=""
                        className="object-cover h-full w-full "
                    />
                </div>
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                        alt=""
                        className="object-cover h-full w-full "
                    />
                </div>
            </div>
            <h1 className="text-xl my-3">My Tasks</h1>
            <div
                key={item.id}
                className="bg-secondary/10 rounded-md p-3 flex justify-between"
            >
                <h1>{item.title}</h1>
                <div className="flex gap-3">
                    <button className="grid place-content-center" title="Details">
                        <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                    </button>
                    <button className="grid place-content-center" title="Done">
                        <CheckIcon className="w-5 h-5 text-primary" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Aside;