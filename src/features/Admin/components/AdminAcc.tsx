import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../counterSlice';

export function AdminAcc() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <div className="flex justify-center items-center space-evenly md:flex-row flex-col">
        <Tile number={0} title='Registrations' />
        <Tile number={1} title='Entries'/>
        <Tile number={0} title='Events' />
      </div>
    </>
  );
}
interface ModalProps {
  number : number;
  title : string;
}

const Tile : React.FC<ModalProps> = ({ number , title })  => {
  return (
    <div className="bg-gray-800 text-[#7546eb] p-4 m-4 rounded-lg md:w-64 w-80 h-40 text-center flex flex-col justify-center align-middle">
      <h2 className="text-4xl py-1 font-semibold">{number}</h2>
      <p className="text-4xl font-bold">{title}</p>
    </div>
  );
};

export {
  Tile
}

