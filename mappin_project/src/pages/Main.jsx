import { Box, Stack } from "@mui/system";
import React from "react";
import { Navigate } from "react-router-dom";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import PinList from "../components/PinList";
import UserContext from "../context/AuthContext";

function Main() {
  const { auth } = React.useContext(UserContext);
  const [selectedChild, setSelectedChild] = React.useState(null);
  const [selectingLocation, setSelectingLocation] = React.useState(false);
  const [selectionCoords, setSelectionCoords] = React.useState(false);
  const [addPinWindow, setAddPinWindow] = React.useState(false);

  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      {auth == false ? (
        <Navigate replace to="/" />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
            height: "100%",
          }}
        >
          <PinList
            selectedChild={selectedChild}
            selectingLocation={selectingLocation}
            setSelectingLocation={setSelectingLocation}
            selectionCoords={selectionCoords}
            setSelectionCoords={setSelectionCoords}
            addPin={addPinWindow}
            setAddPin={setAddPinWindow}
          />
          <Map
            selectChild={setSelectedChild}
            selectingLocation={selectingLocation}
            setSelectingLocation={setSelectingLocation}
            setSelectionCoords={setSelectionCoords}
            selectionCoords={selectionCoords}
            setAddPin={setAddPinWindow}
          />
        </div>
      )}
    </div>
  );
}

export default Main;
