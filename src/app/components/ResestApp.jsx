import React from "react";
import { useDispatch } from "react-redux";
import { resetCounter } from "../../redux/slice/counterSlice";
import { resetDestination } from "../../redux/slice/destinationSlice";
const ResestApp = () => {
  const dispatch = useDispatch();
  const resetCounterAndDestination = () => {
    dispatch(resetCounter());
    dispatch(resetDestination());
  };
  return (
    <div className="text-center pt-3">
      <button className="btn btn-warning" onClick={resetCounterAndDestination}>
        reset app
      </button>
    </div>
  );
};

export default ResestApp;
