import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
}

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  navItems: NavItem[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, toggleModal, navItems }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`} style={{ zIndex: 999 }}>
      <div className="bg-black bg-opacity-50 fixed inset-0"></div>
      <div className="bg-[#1E1E1E] p-5 rounded-lg flex flex-col justify-center items-center z-50 text-white">
        <ul className="flex flex-col items-center gap-1 px-10">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
        <button onClick={toggleModal} className="mt-5 bg-[#10107B] text-white px-3 py-2 rounded-md">Close</button>
      </div>
    </div>
  );
}

export default Modal;
