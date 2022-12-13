import Image from 'next/image'
import Link from 'next/link'
import { ProductWrapper } from '../../styles/components/productCard'

export default function ProductCard({ data }) {
  return (
    <Link
      href={`/productDetails/${data.id}`}
      style={{ textDecoration: 'none' }}
      prefetch={false}
    >
      <ProductWrapper>
        <Image
          src={data.image}
          width={150}
          height={200}
          alt=""
          style={{ marginTop: 30, objectFit: 'cover' }}
        />

        <h4>{data.livro}</h4>
        <p>{data.autor}</p>
        <h5>R$ {data.preco.toFixed(2)}</h5>
      </ProductWrapper>
    </Link>
  )
}
