import Image from 'next/image'
import { ProductWrapper } from '../../styles/components/productCard'

export default function ProductCard({ data }) {
  return (
    <ProductWrapper>
      <Image
        src={data.image}
        width={150}
        height={200}
        alt=""
        style={{ marginTop: 30 }}
      />

      <h4>{data.livro}</h4>
      <p>{data.autor}</p>
      <h5>{data.preco}</h5>
    </ProductWrapper>
  )
}
