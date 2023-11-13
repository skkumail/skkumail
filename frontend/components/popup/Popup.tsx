import React from 'react';
import CloseIcon from '../icon/CloseIcon';

interface PopupProps {
    title: string
    children: any;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, children, onClose }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <div className='flex flex-row justify-between items-center justify-center'>
            <div className='flex'>
              <span className=''>{title}</span>
            </div>
            <div className='ml-auto'>
              <button className="bg-blue-500 text-black px-4 py-2 rounded" onClick={onClose}>
                <CloseIcon />
              </button>
            </div>
          </div>
          <div style={{  display: 'flex' }}>
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default Popup;  
  
