import React, { useRef, useContext, useState } from "react";
import { XCircle, LocateFixed } from 'lucide-react';
import LocationContext from "../utils/Contexts/LocationContext";

const LocationPopup = ({ onClose }) => {

    const {cityName, setCityName} = useContext(LocationContext)
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleUpdateCityName = () => {
        setCityName(inputValue)
    }

    const modalRef = useRef()
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose()
        }
    }

    return (
        <div ref={modalRef} onClick={closeModal} className="z-50 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col mt-10 gap-5 ">
                <button className="flex place-self-end" onClick={onClose}><XCircle size={30} color="black" /></button>
                <div className="rounded-3xl bg-[#d5dbe0] opacity-80 h-[600px] w-[600px] flex justify-center items-center">
                    <div className="flex flex-col ">
                        <div className="flex justify-center items-center">
                            <input type="text"
                                placeholder="Custom focus style"
                                class="p-2 w-[310px] m-3 rounded-md focus:outline-none" 
                                onChange={handleInputChange}/>
                            <div>
                                <button className="px-6 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white" onClick={handleUpdateCityName}>Enter</button>
                            </div>
                        </div>
                        <div>
                            <div className="current-location m-3 p-4 bg-white shadow-xl rounded-none w-[400px] flex items-center">
                                <LocateFixed color="blue" size={25} />
                                <p className="text-[#111] px-4">Use your current location</p>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default LocationPopup