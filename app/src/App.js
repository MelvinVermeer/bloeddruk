import "./App.css";
import { MyMapComponent } from "./components/map/MyMapComponent";

function App() {
  return (
    <div className="App">
      <h1>HOI DUNCAN</h1>
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
