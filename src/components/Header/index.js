import {
  HeaderContainer,
  InputAndIcons,
  LogoWrapper,
  MainHeader,
  NavContainer,
  NavHeader,
} from '../../styles/components/header'
import { Books, MapPinLine, User, ShoppingCart } from 'phosphor-react'

export default function Header() {
  return (
    <HeaderContainer>
      <MainHeader>
        <LogoWrapper>
          <Books />
          <div>
            <h1>Sebus</h1>
            <span>Livraria de Novos e Usados</span>
          </div>
        </LogoWrapper>

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
