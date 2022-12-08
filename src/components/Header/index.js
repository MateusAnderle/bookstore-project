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
          <li>Mais Vendidos</li>
          <li>Lançamentos</li>
          <li>Livros</li>
          <li>Decorações</li>
          <li>Educativo</li>
        </NavHeader>
      </NavContainer>
    </HeaderContainer>
  )
}
