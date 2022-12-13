import Link from 'next/link'
import {
  CentralizeCheckoutFinalization,
  CheckoutFinalizationContainer,
  CheckoutFinalizationContent,
} from '../../styles/pages/checkoutFinalization'

export default function CheckoutFinalization() {
  return (
    <CentralizeCheckoutFinalization>
      <CheckoutFinalizationContainer>
        <CheckoutFinalizationContent>
          <h2>Parabéns!</h2>
          <p>
            Sua compra foi concluída com sucesso! Esperamos que volte mais
            vezes!
          </p>
          <Link href="/">Voltar para a página inicial</Link>
        </CheckoutFinalizationContent>
      </CheckoutFinalizationContainer>
    </CentralizeCheckoutFinalization>
  )
}
