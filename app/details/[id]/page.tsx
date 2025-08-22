// app/details/[id]/page.tsx
import ProductDetailsClient from "./ProductDetailsClient";

async function getProduct(id: string) {
  const res = await fetch(`https://intibergs.com/getproducts.php?catid=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Response not ok:", res.status, res.statusText);
    return null;
  }

  const data = await res.json();
  return data;
}

function normalizeItem(item: any) {
  // Parse "color" if it’s a JSON string
  if (typeof item.color === "string") {
    try {
      item.color = JSON.parse(item.color);
    } catch {
      item.color = [];
    }
  }
  return item;
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getProduct(params.id);

  if (!data) {
    return <div>Error loading product data</div>;
  }

  const item = normalizeItem(data[0] || data);

  return <ProductDetailsClient item={item} allData={data} />;
}
