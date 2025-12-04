import React from "react";

interface WideImageTextBlockProps {
  title: string;
  imgSrc: string;
  alt?: string;
  children: React.ReactNode;
}

const WideImageTextBlock: React.FC<WideImageTextBlockProps> = ({
  title,
  imgSrc,
  alt = "",
  children,
}) => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 my-8">
      <div className="w-full bg-black/59 rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-start justify-start gap-6 p-6 md:p-12">
          <div className="w-48 md:w-64 flex-shrink-0">
            <img
              src={imgSrc}
              alt={alt}
              className="w-full h-full object-cover rounded-xl border-4 border-red-base shadow-lg aspect-[3/4]"
            />
          </div>
          <div className="text-white ml-4">
            <h3 className="text-3xl font-bold mb-4">{title}</h3>
            <p className="text-lg leading-relaxed text-left">{children}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WideImageTextBlock;
