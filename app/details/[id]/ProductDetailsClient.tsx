// app/components/ProductDetailsClient.tsx
"use client";

import ZoomButton from "@/app/components/ZoomButton";
import { useState, useEffect } from "react";
import "../../components/components.css";

export default function ProductDetailsClient({
  item,
  allData,
}: {
  item: any;
  allData: any[];
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [colorName, setColorName] = useState<string>("");

  // Parse color safely
  let colors = item.color;
  if (typeof colors === "string") {
    try {
      colors = JSON.parse(colors);
    } catch (err) {
      console.error("Invalid color JSON:", err);
      colors = [];
    }
  }
  if (!Array.isArray(colors)) colors = [];

  // Initialize with first color when component mounts
  useEffect(() => {
    if (colors.length > 0) {
      setSelected(0);
      setColorName(colors[0].name);
    }
  }, [item.gIdName]); // run when product changes

  const getFilename = (colorIndex: number | null): string => {
    if (!item) return "";
    if (!colors.length) return "";

    const chosenColor =
      colorIndex !== null && colors[colorIndex]
        ? colors[colorIndex]
        : colors[0];

    return `https://intibergs.com/images/products/${item.picture_folder}/${item.gIdName}-${chosenColor.name}/${item.picture_folder}1.jpg`;
  };

  const handleClick = (index: number) => {
    setSelected(index);
    setColorName(colors[index].name);
  };

  return (
    <div className="grid grid-cols-2 gap-4" style={{ height: "85vh" }}>
      {/* LEFT: IMAGE */}
      <div className="bg-transparent p-4 flex justify-center">
        <div
          className="w-full relative image-wrapper"
          style={{ aspectRatio: "4/3" }}
        >
          <img
            src={getFilename(selected)}
            alt="Product image"
            className="w-full h-full object-contain object-center"
          />
          <ZoomButton mainImage={getFilename(selected)} />
        </div>
      </div>

      {/* RIGHT: DETAILS */}
      <div className="p-4">
        <h1 style={{ fontSize: "2rem" }}>
          Product Name: <strong>{item.name}</strong>
        </h1>
        <br />
        <p>
          Description: <br />
          <strong>{item.desc}</strong>
        </p>
        <br />
        <p>
          Price: <strong>₪{item.price}</strong>
        </p>
        <br />

        <table className="color-table">
          <tbody>
            <tr>
              {colors.map((col: any, i: number) => (
                <td key={i} className="color-cell">
                  <div
                    className={`color-box ${selected === i ? "selected" : ""}`}
                    style={{ backgroundColor: col.hex }}
                    onClick={() => handleClick(i)}
                  ></div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        {colorName && (
          <span>
            Color: <span className="font-bold">{colorName}</span>
          </span>
        )}
      </div>
    </div>
  );
}
