import React from 'react';
import AddEvents from '../AddEnvents/AddEvents';
import Sidebar from '../Sidebar/Sidebar';
import VolunteerList from '../VolunteerList/VolunteerList';
const AdminHome = () => {
    return (
        <div className='flex flex-row justify-start'>
            <div className='mr-8'>
                <Sidebar />
            </div>
            <div className='bg-gray'>
                <VolunteerList />
                <AddEvents />
            </div>
        </div>
    );
};

export default AdminHome;