"use client";
import React from "react";

const GoogleMap = ({ zoom = 13, width = "100%", height = "400" }) => {
  const baseUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.9995422711969!2d110.27830242959223!3d-7.895832846368245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13";

  // inject zoom level ke URL
  const mapUrl = `${baseUrl}!4f${zoom}!3m3!1m2!1s0x2e7aff0050f23bd3%3A0x2cffadb97bafd907!2sGaluh.M%20therapy!5e0!3m2!1sid!2sid!4v1790998286585!5m2!1sid!2sid`;

  return <iframe src={mapUrl} width={width} height={height} />;
};

export default GoogleMap;
