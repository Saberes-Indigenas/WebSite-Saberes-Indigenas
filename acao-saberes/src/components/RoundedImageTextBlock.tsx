import React from "react";

interface RoundedImageTextBlockProps {
  title: string;
  imgSrc: string;
  alt?: string;
  children: React.ReactNode;
  reverse?: boolean;
}

const RoundedImageTextBlock: React.FC<RoundedImageTextBlockProps> = ({
  title,
  imgSrc,
  alt = "",
  children,
  reverse = false,
}) => {
  return (
    <section className="bg-black rounded-3xl shadow-lg overflow-hidden">
      <div
        className={`flex flex-col md:flex-row items-center gap-6 p-6 md:p-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Imagem circular */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={imgSrc}
            alt={alt}
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-red-base shadow-md"
          />
        </div>

        {/* Conteúdo textual */}
        <div className="w-full md:w-1/2 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
          <div className="text-base md:text-lg leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundedImageTextBlock;
