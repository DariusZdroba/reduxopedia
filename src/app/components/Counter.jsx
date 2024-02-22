import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiplyCount,
  decrementMultiply,
} from "../../redux/slice/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counterStore.count);
  const [multiply, setMultiply] = useState(10);
  const dispatch = useDispatch();
  return (
    <div className="mt-2 pt-2 pl-2 text-center col-4 offset-4">
      <div
        className={`${
          count > 0
            ? "pb-2 h4 text-success"
            : count === 0
            ? "pb-2 h4 text-warning"
            : "pb-2 h4 text-danger"
        }`}
      >
        Counter: {count}
      </div>
      <h4 className="text-success pb-2"> Basic Counter</h4>
      <div className="col-6 offset-3">
        <button
          onClick={() => dispatch(increment())}
          className="btn btn form-control btn-success"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-danger form-control mt-2"
        >
          -
        </button>
      </div>
      <div className="col-6 offset-3 mt-5">
        <h4 className="text-success pb-2"> Multiplier Counter</h4>
        <input
          type="text"
          className="form-control p-1 mb-2"
          onChange={(e) => setMultiply(e.target.value)}
        />
        <button
          onClick={() => dispatch(multiplyCount(multiply))}
          className="btn btn form-control btn-success"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrementMultiply(multiply))}
          className="btn btn-danger form-control mt-2"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
