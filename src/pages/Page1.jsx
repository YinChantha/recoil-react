import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GetCounterAtom,
  ResetCounterAtom,
  SetCounterAtom,
} from "../statemanagement/state";

const Page1 = () => {
  const navigate = useNavigate();
  const setCounterAtom = SetCounterAtom();
  const getCounterAtom = GetCounterAtom();
  const resetCounterAtom = ResetCounterAtom();
  const [counter, setCounter] = useState(0);

  const incremment = () => {
    setCounterAtom((num) => {
      return num + 1;
    });
  };

  const decremment = () => {
    setCounterAtom((num) => {
      return num - 1;
    });
  };

  const resetcounter = () => {
    resetCounterAtom();
  };

  useEffect(() => {
    setCounter(getCounterAtom);
  }, [getCounterAtom]);

  return (
    <div className="flex flex-col justify-center items-center h-screen  bg-gradient-to-r from-purple-500 to-pink-500">
      <h1 className="text-white text-xl">Page1 </h1>
      <p className="text-white text-lg">
        This project is the basic to get starting with the useRecoilState{" "}
      </p>
      <br />
      <h1 className="text-white text-xl">Counter State : {counter}</h1>
      <div className="mt-20">
        <button
          onClick={() => navigate("/page2")}
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600  hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Go to page2
        </button>
        <button
          onClick={incremment}
          type="button"
          class="text-white bg-gradient-to-br from-fuchsia-700 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Increment
        </button>
        <button
          onClick={decremment}
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Decremment
        </button>
        <button
          onClick={resetcounter}
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default Page1;
