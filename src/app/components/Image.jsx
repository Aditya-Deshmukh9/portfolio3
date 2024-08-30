"use client";

import { IKImage } from "imagekitio-next";

function Image(props) {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return <IKImage urlEndpoint={urlEndpoint} {...props} />;
}

export default Image;
