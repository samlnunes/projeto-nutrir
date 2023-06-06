import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import "leaflet-routing-machine";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

interface RoutingMachineProps {
  destination: {
    lat: number;
    lng: number;
  };
}

const RoutingMachine: React.FC<RoutingMachineProps> = ({ destination }) => {
  const map = useMap();
  const routingMachineRef = useRef<L.Routing.Control | null>(null);

  useEffect(() => {
    routingMachineRef.current = L.Routing.control({
      waypoints: [
        L.latLng(map.getCenter().lat, map.getCenter().lng),
        L.latLng(destination.lat, destination.lng),
      ],
    }).addTo(map);

    return () => {
      if (routingMachineRef.current && routingMachineRef.current.getPlan) {
        const plan = routingMachineRef.current.getPlan();
        if (plan) {
          plan.setWaypoints([]);
        }
      }
    };
  }, [map, destination]);

  return null;
};

export default RoutingMachine;
