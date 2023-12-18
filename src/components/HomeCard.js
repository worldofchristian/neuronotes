import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const HomeCard = ({ SystemName, SystemDescription, SystemImage }) => {
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
            <img 
            src={SystemImage}
            alt="Shoes" 
            />
        </figure>
        
        <div className="card-body">
            <h2 className="card-title"
            >{SystemName}
            </h2>

            <p
            >{SystemDescription}
            </p>
            
            <div className="card-actions justify-end">
                <button className="btn btn-neutral text-white mt-2"
                >Read more<FaAngleDoubleRight className='ml-2' />
                </button>
            </div>
        </div>
    </div>
    </>
  );
};

export default HomeCard