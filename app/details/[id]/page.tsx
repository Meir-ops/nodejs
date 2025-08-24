// app/details/[id]/page.tsx
import ProductDetailsClient from "./ProductDetailsClient";

// --- 1. Define Product Data Structure (Types/Interfaces) ---
interface ColorOption {
  color: string;
  code: string;
}

interface Product {
  id: string; // Assuming 'id' is a string from the API
  name: string;
  price: string; // Price is often a string from APIs
  // The 'color' property can be an array of ColorOption or a string (before parsing)
  color: ColorOption[] | string; 
  // Add other properties as needed based on your API response
  // e.g., description: string;
}

// --- 2. Data Fetching Function ---
async function getProduct(id: string): Promise<Product[] | null> {
  const res = await fetch(`https://intibergs.com/getproducts.php?catid=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Response not ok:", res.status, res.statusText);
    return null;
  }

  // The API is expected to return an array of Product (Product[])
  const data: Product[] = await res.json();
  return data;
}

// --- 3. Data Normalization Function (Fixing 'any' type) ---
// Accepts a Product (or partial Product) and returns a normalized Product
function normalizeItem(item: Product | Partial<Product>): Product {
  // Check if 'item' exists and if 'color' is a string before attempting JSON.parse
  if (typeof item?.color === "string") {
    try {
      // Reassign item.color with the parsed array, asserting the type
      (item as Product).color = JSON.parse(item.color) as ColorOption[];
    } catch {
      // Set to an empty array on failure
      (item as Product).color = [];
    }
  }
  // We must return the item as a fully-typed Product, assuming the rest of the data is present
  return item as Product;
}

// --- 4. Page Component (Addressing PageProps constraint) ---
// Define props specifically for this dynamic route component
interface PageProps {
  params: {
    id: string; // Matches the [id] segment
  };
}

export default async function Page({ params }: PageProps) {
  console.log(params.id, typeof params.id);

  // 'data' is typed as Product[] | null
  const data = await getProduct(params.id);

  if (!data || data.length === 0) {
    // Check if data is null or an empty array
    return <div>Error loading product data or product not found.</div>;
  }

  // Ensure 'data[0]' is a Product type before passing it to normalizeItem
  // If data[0] is undefined (which shouldn't happen with the check above), we fall back to the whole array, but data[0] is generally the item you want.
  const item = normalizeItem(data[0]);

  // Ensure ProductDetailsClient props are also correctly typed
  return <ProductDetailsClient item={item} allData={data} />;
}