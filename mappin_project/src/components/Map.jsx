import React from "react";
import GoogleMapReact from "google-map-react";
import restaurants from "../data/mock_api.js/places_api";
import Pin from "./Pin";
import TempPin from "./TempPin";

const center = {
  lat: 41.015137,
  lng: 28.97953,
};
const data = restaurants;

function Map({
  selectChild,
  selectingLocation,
  setSelectingLocation,
  setSelectionCoords,
  selectionCoords,
  setAddPin,
}) {
  const [opacity, setOpacity] = React.useState(true);

  const selectingOptions = { draggableCursor: "crosshair" };
  const defaultOptions = { draggableCursor: "default" };
  const [tempPin, setTempPin] = React.useState(false);

  function handleSelect(event) {
    setSelectionCoords([event.lat, event.lng]);
    setSelectingLocation(false);
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCm6UXZ8bLAzmdvNYl_1eJKYRPK0n5EviQ" }}
      defaultCenter={center}
      center={center}
      defaultZoom={11}
      options={selectingLocation ? selectingOptions : defaultOptions}
      onDrag={() => setOpacity(false)}
      onDragEnd={() => setOpacity(true)}
      onClick={selectingLocation ? (e) => handleSelect(e) : null}
    >
      {data.data.map((pin, index) => {
        return (
          <Pin
            lat={pin.latitude ? Number(pin.latitude) : center.lat}
            lng={pin.longitude ? Number(pin.longitude) : center.lng}
            key={index}
            index={index}
            name={pin.name}
            photo={
              pin.photo
                ? pin.photo.images.thumbnail.url
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
            opacity={opacity}
            selectChild={selectChild}
          />
        );
      })}
      {!selectionCoords ? (
        ""
      ) : (
        <TempPin
          lat={selectionCoords[0]}
          lng={selectionCoords[1]}
          opacity={opacity}
          setAddPin={setAddPin}
          setSelectingLocation={setSelectingLocation}
          setSelectionCoords={setSelectionCoords}
        />
      )}
    </GoogleMapReact>
  );
}

export default Map;
