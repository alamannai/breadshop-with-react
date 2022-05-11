import React, { useState} from 'react';
import axios from 'axios';

function CreateBread() {
    const [title, setTitle] = useState('') 
    const [price, setPrice] = useState(0)
    const [alertText, setAlertText] = useState('')
    
      // Post a project
    const addProjectHandler = () => {
        if (title.length  < 4  || title.charAt(title.length -1) === " " ) {
            title.length  < 4 ?
            setAlertText("Title shouldn't be empty or less than 4 characters .")
            : 
            setAlertText("Title shouldn't end with space .")
           ;

        } else {
            axios.post('http://localhost:8000/api/breads/', { 'name': title, 'price': price });
            setAlertText("");
            setTitle("");
            setPrice(0);
        }
};

const resetProjectHandler = () => {
    setTitle("");
    setPrice(0);
    setAlertText("");
};

  return (
    <div className="grid grid-cols-6 gap-3 bg-gray-200 rounded-lg p-3 mt-10 pb-6" >
        <h5 className="mt-2 block text-gray-700 text-sm font-bold col-start-2 mb-4 col-span-4">Add Bread</h5>

        <label 
            className="mt-2 self-center block text-gray-700 text-sm font-bold col-start-1 col-span-2"
         > Bread Name </label>

        <input 
            className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-bold col-start-3 
            col-span-4" 
            placeholder='Bread name'
            onChange={event => setTitle(event.target.value)}
            value={title}/>
        <div className='w-full col-start-3 text-red-600 col-span-4'>{alertText}</div>

        <label 
            className="mt-2 self-center block text-gray-700 text-sm font-bold col-start-1 col-span-2"
        > Price </label>
        <input 
            className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-bold col-start-3 
            col-span-4" 
            placeholder='0'
            type="number" 
            onChange={event => setPrice(event.target.value)}
            value={price}/>

        <button 
            className="grow h-8 w-14 mt-3 hover:w-16 transition-all 
            duration-250 ease-in-out bg-white font-semibold text-center rounded-lg
            col-start-4 col-span-1 shadow-lg place-self-center text-gray-700 " onClick={resetProjectHandler}>
            Reset
            </button>

        <button 
            className="grow h-8 w-10/12 mt-3 text-sky-200 bg-gray-800 hover:w-11/12 transition-all 
            duration-250 ease-in-out font-semibold text-center rounded-full
            col-start-5 col-span-2 shadow-lg text-white place-self-center " onClick={addProjectHandler}>
            ADD
            </button>

    </div>
  );
}

export default CreateBread;
