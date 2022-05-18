import Bar from '../Bar/Bar';
import { Outlet, Link  } from "react-router-dom";

function Admin() {
  return (
      <div className='m-0 h-screen flex bg-gradient-to-r from-yellow-200 to-sky-200 p-4 
                          justify-center'> 
        <div className='flex flex-row h-full w-full rounded-xl bg-[#00ffff] shadow-lg overflow-hidden'> 
          <div className='w-60 '><Bar /></div>
          <div className=' bg-indigo-400 w-2/3'><Outlet/></div>
          <div className='w-80 bg-indigo-600'>left</div>
        </div>
      </div>
  );
}

export default Admin;
