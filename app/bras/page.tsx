// app/bras/page.tsx (Server Component)
import Image from "next/image";
import Link from "next/link";
import ProductGrid from "../ProductGrid";

// Data fetching function
async function getBras() {
  const res = await fetch("https://intibergs.com/getproducts.php?catid=1", {
    cache: "no-store",
  });
  return res.json();
}



// Utility function to generate image filename
function getFilename(data: any[], id: string): string {
  const item1 = data.filter((pro: any) => pro.gIdName === id);
  const item = item1[0];
  
  if (!item) return '';
  
  let firstColorName = '';
  let colors = item.color;
  
  if (typeof colors === 'string') {
    try {
      colors = JSON.parse(colors);
    } catch (err) {
      console.error('Invalid color JSON:', err);
      return '';
    }
  }
  
  if (Array.isArray(colors) && colors.length > 0) {
    firstColorName = colors[0].name;
  }
  
  const imageUrl = `https://intibergs.com/images/products/${item.picture_folder}/${item.gIdName}-${firstColorName}/${item.picture_folder}1.jpg`;
  console.log(imageUrl);
  return imageUrl;
}

export default async function Bras() {
  const data = await getBras();
  console.log(data);

  // Transform data for the client component
  const productsWithImages = data.map((info: any) => ({
    ...info,
    imageUrl: getFilename(data, info.gIdName)
  }));

  return (
    <main>
      <ProductGrid products={productsWithImages} />
    </main>
  );
}