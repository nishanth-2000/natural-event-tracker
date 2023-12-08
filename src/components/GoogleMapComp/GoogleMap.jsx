import { useState } from "react";
import GoogleMapReact from "google-map-react";
import CustomIcon from "../CustomIcon";
import InfoPopup from "./InfoPopup";

const GoogleMap = ({ eventInfo, center, zoom }) => {
  const [OnclickInfo, setOnClickInfo] = useState();

  const markers =
    eventInfo.events != undefined
      ? eventInfo.events.map((vol) => {
          return (
            <CustomIcon
              key={vol.id + Math.random() * 1000}
              lat={vol.geometries[0].coordinates.length == 2 ? vol.geometries[0].coordinates[1] : vol.geometries[0].coordinates[0][1]}
              lng={vol.geometries[0].coordinates.length == 2 ? vol.geometries[0].coordinates[0] : vol.geometries[0].coordinates[0][0]}
              title={vol.categories[0].title}
              onClick={() => setOnClickInfo({ id: vol.id, header: vol.categories[0].title, title: vol.title })}
            />
          );
        })
      : null;

  return (
    <div className="map">
      <GoogleMapReact bootstrapURLKeys={{ key: "your_api_key" }} defaultCenter={center} defaultZoom={zoom}>
        {markers}
      </GoogleMapReact>
      {OnclickInfo && <InfoPopup info={OnclickInfo} closeModal={() => setOnClickInfo()} />}
    </div>
  );
};

GoogleMap.defaultProps = {
  center: {
    lat: 31.593,
    lng: 130.657,
  },
  zoom: 6,
};

export default GoogleMap;
