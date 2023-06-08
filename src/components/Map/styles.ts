import styled from "styled-components";

export const Container = styled.div`
  .leaflet-container {
    height: calc(100vh - 80px);
    margin-top: 80px;
    width: 100%;
  }

  .leaflet-marker-icon {
    margin-left: -12px;
    margin-top: -41px;
    width: 25px;
    height: 41px;
    outline: none;
  }

  .leaflet-popup {
    bottom: 20px !important;
    left: -83px;
  }
`;
