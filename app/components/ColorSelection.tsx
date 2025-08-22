// "use client";
// import { useState } from "react";
// import "./components.css";

// interface Product {
//   name: string;
//   hex: string;
// }

// interface ColorSelectionProps {
//   colors?: string | Product[];
//   // The 'onSelect' prop has been removed completely
// }

// export default function ColorSelection({ colors }: ColorSelectionProps) {
//   const [selected, setSelected] = useState<number | null>(null);

//   let parsedColors: Product[] = [];

//   try {
//     if (typeof colors === "string") {
//       parsedColors = JSON.parse(colors);
//     } else if (Array.isArray(colors)) {
//       parsedColors = colors;
//     }
//   } catch {
//     parsedColors = [];
//   }

//   if (!parsedColors || parsedColors.length === 0) {
//     return <div>No colors to display</div>;
//   }

//   const handleClick = (index: number) => {
//     setSelected(index);
//     // Client-side logic for the selected color goes here.
//     // For example, an alert. The call to 'onSelect' is removed.
//     alert(`Selected color: ${parsedColors[index].name}`);
//   };

//   return (
    // <table className="color-table">
    //   <tbody>
    //     <tr>
    //       {parsedColors.map((col, i) => (
    //         <td key={i} className="color-cell">
    //           <div
    //             className={`color-box ${selected === i ? "selected" : ""}`}
    //             style={{ backgroundColor: col.hex }}
    //             onClick={() => handleClick(i)}
    //           ></div>
    //         </td>
    //       ))}
    //     </tr>
    //   </tbody>
    // </table>
//   );
// }