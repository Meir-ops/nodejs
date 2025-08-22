// ==========================================
// ProductGrid.tsx (Client Component)
"use client"

import { useRouter } from "next/navigation";

interface Product {
  gIdName: string;
  price: string;
  currency: number;
  name: string;
  desc: string;
  imageUrl: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    const router = useRouter();
  const productClick = (product: Product) => {
    // alert(`Clicked on: ${product.name}`);
    // console.log(product);
    // alert('/details/'+product.gIdName)
    router.push('/details/'+product.gIdName);
    // You can add navigation logic here, e.g.:
    // router.push(`/product/${product.gIdName}`);
  };

  const DisplayData = products.map((info: Product, index: number) => {
    return (
      <div 
        onClick={() => productClick(info)} 
        key={info.gIdName || index} 
        className="bg-pink-50 border border-pink-300 p-4 flex flex-col cursor-pointer hover:bg-pink-100 transition-colors"
      >
        <div className="flex justify-center mb-4">
          <img 
            className="full" 
            src={info.imageUrl} 
            alt={info.name}
            onError={(e) => {
              // Fallback for broken images
              (e.target as HTMLImageElement).src = '/placeholder-image.jpg';
            }}
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="font-bold text-lg text-pink-800">
            {info.price} {info.currency === 1 ? '$' : '₪'}
          </div>
          <div className="font-bold text-gray-800">{info.name}</div>
          <div className="font-normal text-gray-600 text-sm">{info.desc}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-4 grid-flow-row gap-0 divide-y-7 divide-x-7 divide-pink-800">
      {DisplayData}
    </div>
  );
}