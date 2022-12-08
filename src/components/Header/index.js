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

export default function Header() {
  const categories = {
    maisVendidos: 'Mais vendidos',
    lancamentos: 'Lançamentos',
    livros: 'Livros',
    decoracoes: 'Decorações',
    educativo: 'Educativo',
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
          <input />
          <button>Buscar</button>
          <MapPinLine />
          <User />
          <ShoppingCart />
        </InputAndIcons>
      </MainHeader>

      <NavContainer>
        <NavHeader>
          <Link href={`/categoryList/${categories.maisVendidos}`}>
            <li>Mais Vendidos</li>
          </Link>
          <Link href={`/categoryList/${categories.lancamentos}`}>
            <li>Lançamentos</li>
          </Link>
          <Link href={`/categoryList/${categories.livros}`}>
            <li>Livros</li>
          </Link>
          <Link href={`/categoryList/${categories.decoracoes}`}>
            <li>Decorações</li>
          </Link>
          <Link href={`/categoryList/${categories.educativo}`}>
            <li>Educativo</li>
          </Link>
        </NavHeader>
      </NavContainer>
    </HeaderContainer>
  )
}
