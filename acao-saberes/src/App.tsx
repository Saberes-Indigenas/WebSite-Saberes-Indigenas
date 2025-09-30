import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import Pluricast from "./pages/Pluricast";

import BackgroundImage1 from "./assets/images/teste.png";
import BackgroundImage2 from "./assets/images/image.jpg";

const projectDescription = `
  Este projeto tem como objetivo valorizar os saberes indígenas por meio de ações educacionais,
  culturais e comunicativas. Acreditamos na diversidade como um valor essencial para o
  fortalecimento da sociedade.
`;

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <main className="min-h-[80vh]">

        <Routes>
          <Route path="/Pluricast" element={<Pluricast />} />
        </Routes>

        {/* Seção de boas-vindas */}
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

        {/* Seção "Quem Somos" */}
        <section className="bg-white py-12">
          <h2 className="text-3xl font-semibold text-center text-black mb-8">
            Quem Somos?
          </h2>
          <div className="w-full h-screen flex items-center justify-center bg-red-base">
            <div className="bg-black/90 backdrop-blur-md rounded-full p-8 max-w-xl shadow-lg">
              <p className="text-base text-white text-justify font-pompano">
                {projectDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Seção com imagem de fundo alternativa */}
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
