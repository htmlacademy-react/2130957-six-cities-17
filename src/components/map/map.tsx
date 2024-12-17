import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import { LocationType, Point } from '../../types';
import leaflet, { layerGroup, Marker } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { MapClassName } from '../../const';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  city: LocationType;
  points: Point[];
  activePlaceId: string | null;
  className: MapClassName;
};

export default function Map({ activePlaceId, points, city, className }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([city.latitude, city.longitude], city.zoom);

      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            activePlaceId !== null && point.id === activePlaceId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [activePlaceId, city, map, points]);

  return (
    <section className={className} ref={mapRef}></section>
  );
}
