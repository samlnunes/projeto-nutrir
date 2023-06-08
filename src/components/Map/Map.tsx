import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import "leaflet/dist/leaflet.css";
import {
  LayerGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { Icon } from "leaflet";
import { useCollectPoint } from "@/utils/context/CollectPoint";
import RoutingMachine from "../RoutingMachine/RoutingMachine";

interface Point {
  lat: number;
  lng: number;
  title: string;
  collectPointId: number;
}

const Map: React.FC = () => {
  const { setCollectPointId } = useCollectPoint();

  const [center, setCenter] = useState<[number, number]>([
    -23.547841, -46.636444,
  ]);
  const [points, setPoints] = useState<Point[]>([]);
  const [mapKey, setMapKey] = useState<string>("");

  const customIcon = new Icon({
    iconUrl: "/marker-icon.png",
  });

  const customIconLocation = new Icon({
    iconUrl: "/icon-location.png",
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          setCenter([latitude, longitude]);
          handleCenterChange();
        },
        function (error) {
          console.log("Erro ao obter a localização:", error.message);
        }
      );
    } else {
      console.log("Geolocalização não é suportada pelo seu navegador");
    }

    fetch("/api/ongs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newArray = data.map((item: any) => {
          return {
            lat: item.location.lat,
            lng: item.location.lng,
            title: item.name,
            collectPointId: item.id,
          };
        });

        setPoints(newArray);
      });
  }, []);

  const handleMarkerClick = (title: number) => {
    setCollectPointId(title);
  };

  const handleCenterChange = () => {
    setMapKey(Math.random().toString());
  };

  return (
    <Container>
      {center[0] !== 0 && center[1] !== 0 && (
        <MapContainer key={mapKey} center={center} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {points.map(({ lat, lng, title, collectPointId }, index) => (
            <Marker
              key={index}
              position={{ lat, lng }}
              icon={customIcon}
              eventHandlers={{
                click: () => handleMarkerClick(collectPointId),
              }}
            >
              <Popup>
                <span>{title}</span>
              </Popup>
            </Marker>
          ))}
          {center[0] != -23.547841 && center[1] != -46.636444 && (
            <Marker position={center} icon={customIconLocation}>
              <Popup>
                <span>Sua localização</span>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      )}
    </Container>
  );
};

export default Map;
