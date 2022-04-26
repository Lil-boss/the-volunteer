import React from 'react';
import Card from '../card/Card';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-8 '>
                <h1 className='text-center text-4xl font-medium'>I grow by helping people in need.</h1>
                <div class="relative w-1/4 mx-auto rounded mt-8">
                    <input type="search" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-2 outline-none " placeholder="Search" required />
                    <button type="submit" class="absolute top-0 right-0 h-11 w-20 text-sm font-medium text-white bg-[#3F90FC] rounded-r-lg">Search</button>
                </div>
            </div>
            <div className='w-4/5 mx-auto'>
                <div className='grid grid-cols-4 gap-y-28 mt-14'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Home;