import { FooterContainer, FooterMenu } from '../../styles/components/footer'
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from 'phosphor-react'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterMenu>
        <div>
          <h3>Menu</h3>
          <ul>
            <li>Mais Vendidos</li>
            <li>Decorações</li>
            <li>Livros Novos</li>
            <li>Livros Usados</li>
            <li>Livros Educativos</li>
            <li>CD</li>
            <li>DVD</li>
            <li>Revistas</li>
          </ul>
        </div>

        <div>
          <h3>Categorias</h3>
          <ul>
            <li>Lançamentos</li>
            <li>Literatura Estrangeira</li>
            <li>Literatura Brasileira</li>
            <li>Infato-Juvenil</li>
            <li>Infantis</li>
            <li>Auto-Ajuda</li>
            <li>Religiosos</li>
          </ul>
        </div>

        <div>
          <h3>Informações</h3>
          <ul>
            <li>FAQ</li>
            <li>Sobre Nós</li>
            <li>Atendimento ao Cliente</li>
            <li>Onde Estamos</li>
            <li>Entregas e Devoluções</li>
            <li>Livros Técnicos</li>
            <li>Termos e Condições</li>
            <li>Metódos de Pagamento</li>
            <li>Política de Coockies</li>
          </ul>
        </div>

        <div>
          <h3>Contato</h3>
          <ul>
            <li style={{ fontWeight: 'bold', fontSize: '20px' }}>
              Fone: (47) 3370-9999
            </li>
            <li>Av. Marechal Deodoro da Fonseca</li>
            <li>Centro, Jaraguá do Sul</li>
            <li>CNPJ: 08.999.999/0001-50</li>
            <li>Feito por @matsanderle - 2022.</li>
            <li>
              <FacebookLogo /> <InstagramLogo /> <TwitterLogo /> <YoutubeLogo />
            </li>
          </ul>
        </div>
      </FooterMenu>
    </FooterContainer>
  )
}
