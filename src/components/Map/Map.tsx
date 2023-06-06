import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import "leaflet/dist/leaflet.css";
import { LayerGroup, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
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

  const [center, setCenter] = useState<[number, number]>([0, 0]);
  const [points, setPoints] = useState<Point[]>([]);
  const [mapKey, setMapKey] = useState<string>("");

  const customIcon = new Icon({
    iconUrl: "/marker-icon.png",
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          setCenter([latitude, longitude]);
        },
        function (error) {
          console.log("Erro ao obter a localização:", error.message);
        }
      );
    } else {
      console.log("Geolocalização não é suportada pelo seu navegador");
    }

    setPoints([
      {
        lat: -23.55956,
        lng: -46.59724,
        title: "Mooca Solidária",
        collectPointId: 1,
      },
      {
        lat: -23.600344,
        lng: -46.455792,
        title: "IGREJA PENTECOSTAL ADONAI NISSI",
        collectPointId: 2,
      },
      {
        lat: -23.474761,
        lng: -46.640422,
        title: "Ong Victórias Pela Vida",
        collectPointId: 3,
      },
      {
        lat: -23.596459,
        lng: -46.652373,
        title: "Associação de Apoio à Criança Com Câncer",
        collectPointId: 4,
      },
    ]);
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
          {/* <LayerGroup>
            <RoutingMachine destination={points[0]} />
          </LayerGroup> */}
        </MapContainer>
      )}
    </Container>
  );
};

export default Map;
