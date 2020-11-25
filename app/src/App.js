import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyMapComponent } from "./components/map/MyMapComponent";

async function getAllTasks() {
  const response = await fetch("/api/GetLocations?name=Duncan");
  return await response.text();
}

function App() {
  // const [message, setMessage] = useState("");
  // getAllTasks().then((x) => setMessage(x));

  return (
    <div className="App">
      <MyMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxEr3-8MbFi6ckVecXQRcf9S3fVKIYazM&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
