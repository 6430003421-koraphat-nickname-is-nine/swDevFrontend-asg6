"use client";

import { useReducer } from "react";
import Card from "./Card";

export default function CardPanel() {
  const compareReducer = (
    compareList: Map<string, number>,
    action: { type: string; hosName: string; rating?: number }
  ) => {
    switch (action.type) {
      case "add": {
        if (action.rating !== undefined) {
          const newList = new Map(compareList);
          newList.set(action.hosName, action.rating ?? 0);
          return newList;
        }
        return compareList;
      }
      case "remove": {
        const newList = new Map(compareList);
        newList.delete(action.hosName);
        return newList;
      }
      default: {
        return compareList;
      }
    }
  };

  // Initialize the Map with all hospitals and their initial scores (set to 0)
  const initialCompareList = new Map<string, number>([
    ["Chulalongkorn Hospital", 0],
    ["Rajavithi Hospital", 0],
    ["Thammasat University Hospital", 0],
  ]);

  const [compareList, dispatchCompare] = useReducer(
    compareReducer,
    initialCompareList
  );

  return (
    <div>
      <div className="px-[24px] text-3xl m-[24px] bg-lime-600/80 text-white inline-block rounded-[16px]">
        Participating hospitals{" "}
      </div>

      <div className="flex flex-row flex-wrap justify-around content-around m-[24px]">
        <Card
          hospitalName="Chulalongkorn Hospital"
          imgSrc="/img/chula.jpg"
          onCompare={(hos: string, rating: number) =>
            dispatchCompare({ type: "add", hosName: hos, rating: rating })
          }
        />
        <Card
          hospitalName="Rajavithi Hospital"
          imgSrc="/img/rajavithi.jpg"
          onCompare={(hos: string, rating: number) =>
            dispatchCompare({ type: "add", hosName: hos, rating: rating })
          }
        />
        <Card
          hospitalName="Thammasat University Hospital"
          imgSrc="/img/thammasat.jpg"
          onCompare={(hos: string, rating: number) =>
            dispatchCompare({ type: "add", hosName: hos, rating: rating })
          }
        />
      </div>

      <div className="w-full text-xl font-medium mt-[16px]">
        Hospital List with Ratings: {compareList.size}
      </div>

      {/* Map through compareList and display hospital name with its rating */}
      {Array.from(compareList.entries()).map(([hos, rating]) => (
        <div
          key={hos}
          data-testid={hos}
          className="block w-[100%]"
          onClick={() => dispatchCompare({ type: "remove", hosName: hos })}
        >
          {hos}: {rating}
        </div>
      ))}
    </div>
  );
}
