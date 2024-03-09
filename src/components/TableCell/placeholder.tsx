import React from "react";
import Image from "next/image";
import NodataImage from "../../../public/empty.png";
export default function Placeholder() {
  return (
    <div>
      <Image alt="No Data" src={NodataImage} />
    </div>
  );
}
