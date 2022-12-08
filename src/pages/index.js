import Head from 'next/head'
import Image from 'next/image'
import { Banner, CentralizeContainer, Container } from '../styles/pages/home'
import CallToAction from '../assets/semana.png'
import StorePicture from '../assets/frente-loja.png'
import BooksList from '../components/BooksList'
import { BookData } from '../utils/jsonServer'

export default function Home() {
  return (
    <CentralizeContainer>
      <Container>
        <Head>
          <title>Sebus</title>
        </Head>

        <Banner>
          <Image
            src={CallToAction}
            width={850}
            height={300}
            alt="Imagem da capa de um livro"
            style={{ borderRadius: '20px' }}
          />
          <Image
            src={StorePicture}
            width={300}
            height={300}
            alt="Imagem do interior de uma loja de livros"
            style={{ borderRadius: '20px' }}
          />
        </Banner>

        <BooksList title="Os mais vendidos" bookData={BookData} />
      </Container>
    </CentralizeContainer>
  )
}
