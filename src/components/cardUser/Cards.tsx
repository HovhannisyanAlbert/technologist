import React, { FC } from "react";
import { cardsPropsType } from "./type";
import "leaflet/dist/leaflet.css";
import styles from "./cardUserStyle.module.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



import "leaflet/dist/leaflet.css";

const Cards = (props:cardsPropsType) => {
  const { firstName, lastName, creditCard, address, avatar, password } = props;


  return (
    <div className={styles.cards}>
      <span> {firstName}</span>
      <span> {lastName}</span>
      <span> {creditCard.cc_number}</span>
      <img src={avatar} alt="image" width={50} height={50}  />
      <span> {password}</span>
        {/* @ts-ignore */}
      <MapContainer center={address.coordinates} zoom={0} style={{ width: '100%', height: '300px' }}>       
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       
      />
      <Marker position={[address.coordinates.lng,address.coordinates.lat]}>
        <Popup>
          Latitude: {address.coordinates.lng}<br />
          Longitude: {address.coordinates.lat}
        </Popup>
      </Marker>
    </MapContainer>
   
    </div>
  );
};

export default Cards;


