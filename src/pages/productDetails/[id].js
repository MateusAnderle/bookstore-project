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
  ProductTopContent,
  Td,
} from '../../styles/pages/productDetail'
import Image from 'next/image'
import Separator from '../../components/separator'
import { useRouter } from 'next/router'
import { BookData } from '../../utils/jsonServer'
import Head from 'next/head'

export default function ProductDetails() {
  const router = useRouter()
  const id = router.query.id
  const bookDataId = BookData[id - 1]

  return (
    <ProductDetailContainer>
      <Head>
        <title>Sebus</title>
      </Head>
      <ProductDetailContent>
        <ProductTopContent>
          <ProductImageAndDescription>
            <Image
              src={bookDataId.image}
              width={300}
              height={400}
              alt=""
              style={{ objectFit: 'cover' }}
            />

            <ProductDescriptionTop>
              <ProductDescriptionText variant="title">
                {bookDataId.livro}
              </ProductDescriptionText>
              <ProductDescriptionText variant="description">
                {bookDataId.autor}
              </ProductDescriptionText>
              <ProductDescriptionText variant="synopsis">
                {bookDataId.sinopse}
              </ProductDescriptionText>
              <a href="#">Mais informações</a>
            </ProductDescriptionTop>
          </ProductImageAndDescription>

          <ProductPriceAndCart>
            <ProductDescriptionText variant="description">
              Preço sugerido na editora: {bookDataId.precoSugerido}
            </ProductDescriptionText>
            <ProductDescriptionText variant="title">
              {bookDataId.preco}
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
          <p>{bookDataId.sinopse}</p>
        </ProductSynopsis>

        <ProductDatasheet>
          <h3>Ficha técnica</h3>
          <table>
            <tbody>
              {bookDataId.fichaTecnica?.map((item) => {
                return (
                  <tr key={item.id}>
                    <Td variant="key">{item.chave}</Td>
                    <Td variant="value">{item.valor}</Td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </ProductDatasheet>
      </ProductDetailContent>
    </ProductDetailContainer>
  )
}
