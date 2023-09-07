import React, { useState } from 'react'

const Filter = ({ nam, arr }: any) => {
    const [drop,setDrop]=useState('hidden');
    const [array,setArray] = useState([{
        t:""
    }]);
    const handleDrop = () => {
        setArray(arr)
        
        if (drop==='') {
            setDrop('hidden');
        } else {
            setDrop('');
        }
    }

    return (
        <div>
            <div className='hidden md:block'>

                <button onClick={handleDrop} className="text-gray-500 bg-white hover:bg-white  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button">
                    { nam}
                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                <div id="dropdown" className={`z-10 ${drop} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

                        {
                            array.map((item) => (
                                <li key={item.t}>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item.t}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            <div className='md:hidden '>

            </div>
        </div>
    )
}

export default Filter