import Image from "next/image";
import Map from "@/app/components/Map";

export default function Home() {
  return (

    <main >
      <h1 className="text-center text-2xl font-bold mx-auto">Google Maps Integration</h1>
      <Map />
    </main>

  );
}
