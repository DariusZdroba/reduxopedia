import React from "react";
import { useDispatch } from "react-redux";
import { resetReduxopedia } from "../../redux/action/actions";
const ResestApp = () => {
  const dispatch = useDispatch();
  const resetCounterAndDestination = () => {
    dispatch(resetReduxopedia());
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
