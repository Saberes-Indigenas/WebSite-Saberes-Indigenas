 import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import Pluricast from "./pages/Pluricast";
import ImageCarousel from './components/ImageCarousel';

import BackgroundImage1 from "./assets/images/image.jpg";
import BackgroundImage2 from "./assets/images/Fundo02.jpg";

import CarouselImage1 from "./assets/images/Fundo01.jpg";
import CarouselImage2 from "./assets/images/image3.jpg";
import CarouselImage3 from "./assets/images/Carrossel3.jpg";
import CarouselImage4 from "./assets/images/Carrossel4.jpg";
import CarouselImage5 from "./assets/images/Carrossel5.jpg";
import CarouselImage6 from "./assets/images/Carrossel6.jpg";

import Logo from "./assets/images/Logo.jpg";

import RoundedImageTextBlock from "./components/RoundedImageTextBlock";

const projectDescription = `
  Este projeto tem como objetivo valorizar os saberes indígenas por meio de ações educacionais,
  culturais e comunicativas. Acreditamos na diversidade como um valor essencial para o
  fortalecimento da sociedade.
`;

export default function App() {
  const navbarRef = useRef<HTMLElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar ref={navbarRef} />
      <main style={{ paddingTop: navbarHeight }} className="min-h-[80vh]">

        <Routes>
          <Route path="/Pluricast" element={<Pluricast />} />
        </Routes>

        <section
          className="w-full min-h-screen bg-center bg-cover flex items-center justify-center"
          style={{ backgroundImage: `url(${BackgroundImage1})` }}
        >
          <div
            className="
              bg-black/90 backdrop-blur-md rounded-3xl p-8
              max-w-lg md:max-w-2xl lg:max-w-4xl
              min-h-[300px] md:min-h-[400px] lg:min-h-[500px]
              text-justify shadow-lg mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-white font-pompano">
              Bem-vindo ao Projeto
            </h2>
            <p className="text-base md:text-lg text-white font-pompano leading-relaxed">
              {projectDescription}
            </p>
          </div>
        </section>

        <div className="pt-[20px]">
          <ImageCarousel images={[CarouselImage1, CarouselImage2, CarouselImage3, CarouselImage4, CarouselImage5, CarouselImage6]} />
        </div>

        <section className="bg-white py-12">
          <h2 className="text-3xl font-semibold text-center text-black mb-8">
            Projetos
          </h2>
          <div className="w-full h-screen flex items-center justify-center bg-red-base">
            <section className="bg-white py-16 rounded-3xl">
              <div className="max-w-6xl mx-auto px-4 py-16">
                <RoundedImageTextBlock
                  title="Games"
                  imgSrc={Logo}
                  alt="Game"
                >
                  O projeto apresenta um jogo digital interativo 
                  voltado à valorização das culturas indígenas brasileiras. 
                  Pensado como uma ferramenta lúdica e educativa, 
                  o jogo convida o jogador a percorrer territórios 
                  inspirados em diferentes povos originários, explorando seus costumes, línguas, mitos, rituais e modos de vida. 
                  Cada fase do jogo representa um bioma e um povo específico, estimulando a curiosidade, o respeito e o conhecimento 
                  sobre os saberes ancestrais.
                </RoundedImageTextBlock>
              </div>
              <div className="max-w-6xl mx-auto px-4 py-16">
                <RoundedImageTextBlock
                  title="Podcast"
                  imgSrc={Logo}
                  alt="PodCasts"
                >
                  TESTETESTESTESTSESETSETSETSETETSETSETSETSETS.
                  TESTETESTESTESTSESETSETSETSETETSETSETSETSETS.
                  TESTETESTESTESTSESETSETSETSETETSETSETSETSETS.
                  TESTETESTESTESTSESETSETSETSETETSETSETSETSETS.
                  TESTETESTESTESTSESETSETSETSETETSETSETSETSETS.
                </RoundedImageTextBlock>
              </div>
            </section>
          </div>
        </section>
        <section
          className="w-full h-screen bg-center bg-cover flex items-center justify-center"
          style={{ backgroundImage: `url(${BackgroundImage2})` }}
        >
          <div className="bg-black/90 backdrop-blur-md rounded-full p-8 max-w-xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Nosso Compromisso
            </h2>
            <p className="text-base text-white text-justify font-pompano">
              {projectDescription}
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </BrowserRouter>
  );
}
