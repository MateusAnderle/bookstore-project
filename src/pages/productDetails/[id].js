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
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { zipCodeApi } from '../../utils/api'
import { useState } from 'react'

export default function ProductDetails() {
  const router = useRouter()
  const id = router.query.id
  const bookDataId = BookData[id - 1]
  const [zipCodeObject, setZipCodeObject] = useState({})

  const schema = Yup.object().shape({
    zipCode: Yup.number()
      .typeError('Informe um valor numérico')
      .positive('O valor não pode ser negativo')
      .required('O valor é obrigatório'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    const response = await zipCodeApi.get(`/${data.zipCode}/json/`)
    setZipCodeObject(response.data)
  }

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
              Em 1x no cartão de crédito sem juros
            </ProductDescriptionText>
            <Separator top={30} bottom={30} />
            <ProductDescriptionText variant="description">
              Calcular tempo de entrega:
            </ProductDescriptionText>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="zipCode"
                placeholder="Digite seu CEP"
                minLength="8"
                maxLength="8"
                {...register('zipCode', { required: true })}
              />

              <input type="submit" value="OK" />
              {errors.zipCode && (
                <span style={{ marginTop: '5px' }}>
                  {errors.zipCode.message}
                </span>
              )}
              {zipCodeObject.localidade && (
                <div>
                  <h4 style={{ marginTop: '5px' }}>
                    <b>Envio para: </b>
                  </h4>
                  <p style={{ marginTop: '5px' }}>
                    {' '}
                    {zipCodeObject.logradouro}, {zipCodeObject.localidade}{' '}
                  </p>
                  <p style={{ marginTop: '5px' }}>
                    <b>
                      A entrega para esse endereço costuma demorar de 5 a 10
                      dias úteis
                    </b>
                  </p>
                </div>
              )}
            </form>

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
