import Image from "next/image";
import HomePageBanner from "@/public/HomePage_Banner.jpg";

type BannerProps = {
  // Add any props you want to pass to the Banner component
  subtitle?: string;
  title?: string;
  imageSrc?: string | StaticImageData;
};

export default function Banner({ subtitle, title, imageSrc }: BannerProps) {
  return (
    <section className="relative h-112.5 w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className=" absolute inset-0 bg-blue-500 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">
            {title || "Welcome to ChapterHub!"}
          </h1>
          <p className="mt-2">
            {subtitle || "Your one-stop shop for all your favorite books."}
          </p>
          <div className="relative mx-auto mt-4 h-64 w-full max-w-5xl md:h-80 lg:h-96">
            <Image
              className="mx-auto rounded-lg shadow-lg"
              src={imageSrc ? imageSrc : HomePageBanner}
              alt="Book banner"
              fill
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
