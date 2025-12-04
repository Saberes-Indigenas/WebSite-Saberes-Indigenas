import WideImageTextBlock from "../components/WideImageTextBlock";
import Foto from "../assets/images/image3.jpg";
import Fundo from "../assets/images/QuemSomosBG.jpg";

export default function QuemSomos() {
  return (
    <div className="w-full py-16 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${Fundo})` }}>

      <h2 className="text-4xl font-bold text-center text-white mb-12 pl-8">
        Nossa Equipe
      </h2>

      <WideImageTextBlock title="Gabriel Alves" imgSrc={Foto}>
        Desenvolvedor Front-End responsável pela integração do site.
      </WideImageTextBlock>

      <WideImageTextBlock title="Maria Silva" imgSrc={Foto}>
        Pesquisadora e roteirista do projeto, com foco em valorização dos saberes indígenas.
      </WideImageTextBlock>

      <WideImageTextBlock title="João Santos" imgSrc={Foto}>
        Designer gráfico e produtor audiovisual do projeto Saberes Indígenas.
      </WideImageTextBlock>
    </div>
  );
}
