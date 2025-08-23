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

interface Product {
  about: string;
  about_heb: string;
  care: string;
  care_heb: string;
  category: number;
  color: string;
  currency: number;
  desc: string;
  desc_heb: string;
  fabric: string;
  fabric_heb: string;
  gId: number;
  gIdName: string;
  heb_name: string;
  id: number;
  name: string;
  picture_folder: string;
  price: string;
  sizes: string;
  sizes_israel: string;
}


function getFilename(data: Product[], id: string): string {
  console.log(data);
  const item1 = data.filter((pro: Product) => pro.gIdName === id);
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
  const productsWithImages = data.map((info: Product) => ({
    ...info,
    imageUrl: getFilename(data, info.gIdName)
  }));

  return (
    <main>
      <ProductGrid products={productsWithImages} />
    </main>
  );
}


