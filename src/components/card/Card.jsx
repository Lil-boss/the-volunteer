import React from 'react';
import image from "../../images/babySit.png"

const Card = () => {
    return (
        <div>
            <div className='h-52 w-52 relative ml-12 rounded-sm '>
                <img src={image} alt="" />
                <button className='absolute top-52 bg-[#FFBD3E] rounded-b-sm'>Babysit during PTA
                    meetings.</button>
            </div>
        </div>
    );
};

export default Card;