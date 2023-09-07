"use client"

import React from 'react'

const Chat = ({fun}:any) => {
    return (
        <div className="w-2/3 md:w-96 px-5 flex flex-col justify-between fixed top-40 right-5 bg-gray-100">
            <button onClick={fun} className='absolute left-0'>X</button>
            <div className="flex flex-col mt-5">

                <div className="flex justify-end mb-4">
                    <div
                        className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                    >
                        Hi !
                    </div>
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                </div>


                <div className="flex justify-start mb-4">
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                    <div
                        className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                    >
                        Hello How Can I help you?
                    </div>
                </div>

                <div className="flex justify-end mb-4">
                    <div>
                        <div
                            className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                        >
                            show me some kurtas as gift for my aunt
                        </div>
                    </div>
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                </div>

                <div className="flex justify-start mb-4">
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                    <div
                        className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                    >
                        Here you go
                    </div>
                </div>

            </div>
            <div className="py-5 flex">
                <input
                    className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                    type="text"
                    placeholder="type your message here..."
                />
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>

                </button>
            </div>

        </div>
    )
}

export default Chat