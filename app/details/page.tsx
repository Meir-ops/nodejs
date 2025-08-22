import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="content flex items-center justify-center flex-col gap-4">
        <h1 className="text-pink-500 text-4xl font-bold">Welcome to Bergs</h1>
        <h3 className="text-pink-700 text-2xl font-bold"><strong>intibergs.com</strong></h3>
        <p className="text-black-500 text-2xl">
          Your comfort, our priority.
        </p>
        <h1 className="text-black-500 text-4xl">
          Discover Premium Lingerie Designed for Confidence & Comfort
        </h1>
        <p>
          Shop bras, panties, shapewear, and more — expertly crafted to fit your lifestyle. Join thousands of women who trust Bergs for everyday elegance and support.
        </p>

      </div>
      
      </main>
  );
}
