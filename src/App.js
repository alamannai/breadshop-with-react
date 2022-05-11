import logo from './logo.svg';
import './App.css';
import CreateBread from './Components/Admin/CreateBread';
import Bar from './Components/Admin/Bar/Bar';

function App() {
  return (
    <div className='m-0 h-screen flex bg-gradient-to-r from-yellow-200 to-sky-200 p-4 
                    justify-center'> 
      <div className='grid grid-cols-1 h-full w-full rounded-2xl bg-[#00ffff] shadow-lg overflow-hidden'> 
        <div className='w-48 '><Bar /></div>
        <div className='w-auto '></div>
        <div className='w-80 '></div>
      </div>
    </div>
  );
}

export default App;
