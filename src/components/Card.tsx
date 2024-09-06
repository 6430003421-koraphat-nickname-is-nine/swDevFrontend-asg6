"use client";

import styles from "./card.module.css";
import InteractiveCard from "./InteractiveCard";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function Card({
  hospitalName,
  imgSrc,
  onCompare,
}: {
  hospitalName: string;
  imgSrc: string;
  onCompare: Function;
}) {
  const [rateValue, setValue] = useState<number | null>(0);
  let rateName = hospitalName + " Rating";
  return (
    <InteractiveCard>
      <div className="w-full h-[70%] relative rounded-lg overflow-hidden block">
        <Image
          src={imgSrc}
          alt={hospitalName}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="text-2xl font-medium text-center h-[20%] relative block">
        <h1 className="pt-2">{hospitalName}</h1>
      </div>
      {/* <div>{rateName}</div> */}
      <div className="h-[10%] block">
        <Rating
          className="px-[16px] "
          name={rateName}
          value={rateValue}
          id={rateName}
          data-testid={rateName}
          onChange={(e, rateValue) => {
            setValue(rateValue);
            e.stopPropagation();
            onCompare(hospitalName, rateValue);
          }}
        />
      </div>
    </InteractiveCard>
  );
}
