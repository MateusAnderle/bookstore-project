import {
  ProductButton,
  ProductDatasheet,
  ProductDescriptionText,
  ProductDescriptionTop,
  ProductDetailContainer,
  ProductDetailContent,
  ProductImageAndDescription,
  ProductPriceAndCart,
  ProductSynopsis,
  ProductTable,
  ProductTopContent,
  Td,
} from '../../styles/pages/productDetail'
import livroCapa from '../../assets/livro1.jpg'
import Image from 'next/image'
import Separator from '../../components/separator'

export default function ProductDetails({ bookData }) {
  const data = [
    { id: 1, chave: 'Livro', valor: 'As peças infernais' },
    { id: 2, chave: 'Autor', valor: 'Cassandra Clare' },
    { id: 3, chave: 'Data de publicação', valor: '03/07/2020' },
    { id: 4, chave: 'Idioma', valor: 'Português' },
    { id: 5, chave: 'Código de Barras', valor: '9788501119612' },
    { id: 6, chave: 'Traduzido por', valor: 'Rita Sussekind' },
    {
      id: 7,
      chave: 'Dimensões do produto',
      valor: 'A 22,5 cm / L 15,5 cm / P 8,1 cm / 1850 gr',
    },
  ]

  return (
    <ProductDetailContainer>
      <ProductDetailContent>
        <ProductTopContent>
          <ProductImageAndDescription>
            <Image src={livroCapa} width={300} height={400} alt="" />

            <ProductDescriptionTop>
              <ProductDescriptionText variant="title">
                Box As Peças Infernais
              </ProductDescriptionText>
              <ProductDescriptionText variant="description">
                Cassandra Claire
              </ProductDescriptionText>
              <ProductDescriptionText variant="synopsis">
                No Box As Peças Infernais, você encontra os três livros da série
                best-seller do New York Times, agora em um box de colecionador,
                com novas capas, novo conteúdo e lombadas que formam...
              </ProductDescriptionText>
              <a href="#">Mais informações</a>
            </ProductDescriptionTop>
          </ProductImageAndDescription>

          <ProductPriceAndCart>
            <ProductDescriptionText variant="description">
              Preço sugerido na editora: R$ 119,90
            </ProductDescriptionText>
            <ProductDescriptionText variant="title">
              R$ 62,90
            </ProductDescriptionText>
            <ProductDescriptionText variant="description">
              Em 1x no cartão de crédito e receba R$ 5,00 de cashback
            </ProductDescriptionText>
            <Separator top={30} bottom={30} />
            <ProductDescriptionText variant="description">
              Calcular frete:
            </ProductDescriptionText>
            <span>
              <input placeholder="Digite aqui seu cep" />
              <ProductButton variant="blue">OK</ProductButton>
            </span>
            <Separator top={30} bottom={30} />
            <ProductButton variant="green">COMPRAR</ProductButton>
            <ProductDescriptionText variant="description">
              Este produto é vendido e entregue por Sebus
            </ProductDescriptionText>
          </ProductPriceAndCart>
        </ProductTopContent>

        <ProductSynopsis>
          <h3>Sinopse</h3>
          <p>
            No Box As Peças Infernais, você encontra os três livros da série
            best-seller do New York Times, agora em um box de colecionador, com
            novas capas, novo conteúdo e lombadas que formam, juntas, uma bela
            imagem com os personagens da trama. Neste box de luxo, explore seu
            mundo secreto, acompanhe sua trajetória. Com acabamento
            diferenciado, metalizado e com lombadas que se mpletam, o box tem
            tudo para o universo dos Caçdores de Sombras ficar ainda mais
            interessante. É a oportunidade perfeita para quem ainda não conhece
            os livros e para os que gostam de uma edição diferenciada.A série
            acompanha Tessa Gray, uma adolescente órfã que descobre ter o poder
            de se metamorfosear,
          </p>
        </ProductSynopsis>

        <ProductDatasheet>
          <h3>Ficha técnica</h3>
          <ProductTable>
            {data.map((book) => {
              return (
                <tr key={book.id}>
                  <Td variant="key">{book.chave}</Td>
                  <Td variant="value">{book.valor}</Td>
                </tr>
              )
            })}
          </ProductTable>
        </ProductDatasheet>
      </ProductDetailContent>
    </ProductDetailContainer>
  )
}
