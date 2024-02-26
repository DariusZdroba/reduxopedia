import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { destinationClicked } from "../../redux/slice/destinationSlice";
const DestinationList = () => {
  const destinationList = useSelector(
    (state) => state.destinationStore.destinations
  );
  const dispatch = useDispatch();
  return destinationList.map((dest, index) => {
    return (
      <div
        key={index}
        className="mt-2 pt-2 pl-2 text-center col-4 offset-4"
        style={{ borderbottom: "1px solid #333" }}
      >
        <div className="col-6 offset-3">{dest.name}</div>
        <div className="col-6 offset-3">
          <button
            className="btn btn-primary form-control"
            onClick={() => dispatch(destinationClicked(dest))}
          >
            Details
          </button>
        </div>
      </div>
    );
  });
};

export default DestinationList;
