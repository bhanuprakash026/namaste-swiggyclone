import React, { useRef } from "react";
import { XCircle } from 'lucide-react';

const LocationPopup = ({onClose}) => {
    const modalRef = useRef()

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose()
        }
    }
    

    return (
        <div ref={modalRef} onClick={closeModal} className="z-50 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col mt-10 gap-5 ">
                <button className="flex place-self-end" onClick={ onClose }><XCircle size={30} color="black" /></button>
                <div className="rounded-3xl bg-[#d5dbe0] opacity-80 h-[600px] w-[600px] flex justify-center items-center">
                    <div>
                        <h1>Download eBook</h1>
                        <p>Bhanu Prakash Tankasala</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default LocationPopup