import Link from "next/link";

import Banner from "./Components/Banner/Banner";
import HomePageBanner from "@/public/HomePage_Banner.jpg";

export default function Home() {
  return (
    <>
      <Banner imageSrc={HomePageBanner.src} />
      
    </>
  );
}
