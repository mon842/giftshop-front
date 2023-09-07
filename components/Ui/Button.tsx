import React from 'react'

const Button = ({text}:any) => {
    return (
        <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-1 px-2 md:py-2 md:px-2 border border-gray-500 hover:border-transparent rounded">
            {text}
        </button>
    )
}

export default Button