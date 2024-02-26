import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
import Counter from "./app/components/Counter";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import DestinationList from "./app/components/DestinationList";
import DestinationFact from "./app/components/DestinationFact";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <div className="mt-4 p-4 text-center border d-flex">
        <Counter />
      </div>
      <div className="mt-4 p-4 text-center border">
        <h4 className="text-warning">Destinations </h4>
        <DestinationList />
        <DestinationFact />
      </div>
    </Provider>
  </React.StrictMode>
);
