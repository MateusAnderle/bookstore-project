import {
  HeaderContainer,
  InputAndIcons,
  LogoWrapper,
  MainHeader,
  NavContainer,
  NavHeader,
} from '../../styles/components/header'
import { Books, MapPinLine, User, ShoppingCart } from 'phosphor-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function Header() {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    alert(`Você pesquisou por: ${data.search}`)
    // http://localhost:3000/categoryList/ResultadoDaBusca
  }

  return (
    <HeaderContainer>
      <MainHeader>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <LogoWrapper>
            <Books />
            <div>
              <h1>Sebus</h1>
              <span>Livraria de Novos e Usados</span>
            </div>
          </LogoWrapper>
        </Link>

        <InputAndIcons>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="search"
              type="text"
              placeholder="Digite o nome do produto que deseja encontrar..."
              {...register('search', { required: true })}
            />

            <input type="submit" value="Buscar" />
          </form>

          <Link href="/location" style={{ textDecoration: 'none' }}>
            <MapPinLine />
          </Link>
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <User />
          </Link>
          <ShoppingCart />
        </InputAndIcons>
      </MainHeader>

      <NavContainer>
        <NavHeader>
          <Link href={`/categoryList/${'Mais Vendidos'}`}>
            <li>Mais Vendidos</li>
          </Link>
          <Link href={`/categoryList/${'Lançamentos'}`}>
            <li>Lançamentos</li>
          </Link>
          <Link href={`/categoryList/${'Livros'}`}>
            <li>Livros</li>
          </Link>
          <Link href={`/categoryList/${'Decorações'}`}>
            <li>Decorações</li>
          </Link>
          <Link href={`/categoryList/${'Educativo'}`}>
            <li>Educativo</li>
          </Link>
        </NavHeader>
      </NavContainer>
    </HeaderContainer>
  )
}
