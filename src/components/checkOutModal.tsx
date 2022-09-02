import React from "react";

interface Props {
    show: boolean,
    handleClose: () => void,
    children: any
}

const CheckOutModal = ({show, handleClose, children}: Props) => {
    const modalClassName = show ? "fixed left-0 bottom-0 w-full h-full bg-dark-white" : "hidden";
    return (
        <div className={modalClassName}>
            <div className="fixed bg-white p-6 w-2/4 top-2/4 left-2/4 h-4/5 -translate-y-1/2 -translate-x-1/2 rounded-xl shadow-2xl overflow-y-scroll">
                <button className="float-right font-bold text-red-600" onClick={handleClose}>Close</button>
                {children}
            </div>
        </div>
    );
}

export default CheckOutModal;