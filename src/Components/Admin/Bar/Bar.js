import React, { useState } from 'react';
import { SiAiqfome, SiSimpleanalytics } from "react-icons/si";
import { FaSignOutAlt } from 'react-icons/fa';
import {BarData} from '../../../Data/Data';
import { Link  } from "react-router-dom";


const Bar = () =>  {
    const [selected,setSelected] = useState(0);
    const ch1 ="flex items-center h-12 gap-1 mb-4 mt-2 mr-2 relative rounded-r-xl cursor-pointer "
    const ch2 = "bg-red-200 cursor-pointer transition-all duration-150 ease-in-out"
    return (
        <div className='flex flex-col relative pt-4'>
            <div className='flex gap-2 items-center ml-4 w-44' >
                <SiAiqfome className=' w-8 text-gray-600 mr-4 ml-2 h-1/6 animate-pulse' />
                <span className='text-gray-700 font-bold'>Bread Sh
                    <span className='text-red-200 font-bold'>o</span>
                    p
                </span>
            </div>
            <div className='mt-8 flex flex-col gap-4 mb-4 pl-2' >
                {BarData.map((item, index) => {
                    return (
                        <Link to={item.heading ==="Dashboard" ? "" : item.heading} className={selected === index ? ch1 + ch2 : ch1}
                                key={index}
                                onClick={()=> setSelected(index)}>
                                    {selected === index ? <div className=' w-2 h-8 bg-red-800 mr-12 ml-2'></div>
                                    : <div className=' w-2 h-8 mr-8 ml-2'></div>
                                    }
                                     
                            <item.icon />
                            <span className='font-semibold text-sm text-gray-800 ml-4 '>{item.heading}</span>
                        </Link>
                    )
                })}
          
                <div className='flex items-center h-16 gap-2 mt-12 w-40 pb-4 pl-4 relative bottom-0' >
                            <FaSignOutAlt />
                            <span className='font-semibold ml-2'>Sign Out</span>
                        </div>
            </div>
            
        </div> 
    )};

export default Bar;