"use client";
import React from "react";
import { Map, Marker } from "pigeon-maps";
import Navbar from "../components/navbar";

export default function map() {
  return (
    <div className=" flex justify-center items-center w-[100vw] h-[100vh]">
      <Map
        defaultCenter={[42.00035563632383, 21.413831072316295]}
        defaultZoom={13}
      >
        <Marker
          color="orange"
          width={50}
          anchor={[41.99119507300656, 21.408630064256467]}
        />
        <Marker
          color="orange"
          width={50}
          anchor={[42.00660461722238, 21.377730094266113]}
        />
        <Marker
          color="orange"
          width={50}
          anchor={[41.9912278702178, 21.467140167886452]}
        />
        <Marker
          color="orange"
          width={50}
          anchor={[42.00101754350629, 21.436587273682257]}
        />
      </Map>
    </div>
  );
}
