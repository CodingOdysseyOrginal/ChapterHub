import Banner from "../Components/Banner/Banner";
import AboutBanner from "@/public/BookBanner2.jpg";

export default function About() {
  return (
    <div>
      <Banner
        imageSrc={AboutBanner.src}
        title="About section"
        subtitle="Welcome to the about section that will be reomved soon! "
      />
    </div>
  );
}
