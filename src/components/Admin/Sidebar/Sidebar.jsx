import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logos/Group 1329.png'
const Sidebar = () => {
    return (
        <div className='h-full'>
            <aside>
                <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 h-24 flex justify-center items-center">
                    <div class="container flex flex-wrap  items-center mx-auto">
                        <a href="https://flowbite.com" class="flex items-center">
                            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        </a>
                    </div>
                </nav>
                <div className='mt-6 flex flex-col justify-center'>
                    <Link to="/volunteer">
                        <div className='ml-10 mb-8 hover:text-[#3F90FC]'>Volunteer Register List</div>
                    </Link>
                    <Link to="/addevent">
                        <div className='ml-10 hover:text-[#3F90FC]'>Add Event</div>
                    </Link>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;