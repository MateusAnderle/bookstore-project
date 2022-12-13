import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import {
  CentralizeCheckoutContainer,
  CheckoutContainer,
  CheckoutReview,
  DeliveryCheckout,
  PaymentChechout,
  DeliveryAndPayment,
  ConfirmDeliveryPayment,
  ButtonToggle,
} from '../../styles/pages/checkout'
import { zipCodeApi } from '../../utils/api'

export default function Checkout() {
  const router = useRouter()
  const types = ['Cartão de Crédito', 'Boleto Bancário', 'PIX (QR Code)']
  const [finalDelivery, setFinalDelivery] = useState()
  const [fetchZipCode, setFetchZipCode] = useState()
  const [number, setNumber] = useState('')
  const [referencePoint, setReferencePoint] = useState('')
  const [active, setActive] = useState(types[0])
  const {
    totalCartCheckout,
    products,
    setCheckoutDataToApi,
    setProducts,
    setTotalCartCheckout,
  } = useContext(CartContext)
  const cartToNumber = parseFloat(totalCartCheckout.totalPriceCart)
  const frete = 15
  const totalCheckout = cartToNumber + frete

  async function fetchApiZipCode(e) {
    const zipCodeFiltered = e.target.value
    if (zipCodeFiltered.length < 8 || zipCodeFiltered.length > 8) {
      return
    }
    const response = await zipCodeApi.get(`/${zipCodeFiltered}/json/`)
    setFetchZipCode(response.data)
  }

  function zipCodePrepare() {
    const { logradouro, bairro, localidade, uf } = fetchZipCode

    setFinalDelivery({
      logradouro,
      bairro,
      localidade,
      uf,
      referencePoint: referencePoint.target.value,
      number: number.target.value,
      valorFrete: 15,
      prazo: 10,
      payment: active,
    })
  }

  function sendToApi() {
    setCheckoutDataToApi([products, totalCartCheckout, finalDelivery]) // Criar rota para mandar para API
    setProducts([])
    setTotalCartCheckout([])
    router.push(`/checkoutFinalization`)
  }

  return (
    <CentralizeCheckoutContainer>
      <CheckoutContainer>
        <DeliveryAndPayment>
          <h3>Olá, Visitante!</h3>
          <DeliveryCheckout>
            <h4>Complete seus dados para entrega</h4>
            <input
              placeholder="Digite seu CEP"
              maxLength={8}
              onBlur={fetchApiZipCode}
            />
            <input
              type="number"
              placeholder="Digite o nº"
              onChange={setNumber}
            />
            <input
              type="text"
              placeholder="Cite algum ponto de referência"
              onChange={setReferencePoint}
            />
          </DeliveryCheckout>

          <PaymentChechout>
            <h4>Pagamento</h4>
            <div>
              {types.map((type) => (
                <ButtonToggle
                  key={type}
                  active={active === type}
                  onClick={() => setActive(type)}
                >
                  {type}
                </ButtonToggle>
              ))}
            </div>
          </PaymentChechout>

          <ConfirmDeliveryPayment>
            <button onClick={zipCodePrepare}>Confirmar dados</button>
          </ConfirmDeliveryPayment>
        </DeliveryAndPayment>

        <CheckoutReview>
          <h3>Resumo do pedido</h3>

          <h4>Produtos</h4>
          <p>Quantidade de itens: {totalCartCheckout.numberOfItems}</p>
          <p>Valor total do produtos: R$ {totalCartCheckout.totalPriceCart}</p>

          {finalDelivery && (
            <>
              <h4>Entrega</h4>
              <p>
                Logradouro: {finalDelivery.logradouro}, {finalDelivery.number}
              </p>
              <p>
                Bairro: {finalDelivery.bairro} - {finalDelivery.localidade},{' '}
                {finalDelivery.uf}
              </p>

              <p>Referência: {finalDelivery.referencePoint}</p>

              <p>
                Prazo de entrega estimado: <b>{finalDelivery.prazo} dias</b>
              </p>
              <p>
                Valor do frete: <b>R$ {finalDelivery.valorFrete.toFixed(2)}</b>
              </p>

              <h4>Pagamento</h4>
              <p>
                Método de pagamento: <b>{finalDelivery.payment}</b>
              </p>
            </>
          )}

          {finalDelivery && (
            <h2>Total do pedido: R$ {totalCheckout.toFixed(2)}</h2>
          )}

          <button onClick={sendToApi}>Finalizar Compra</button>
        </CheckoutReview>
      </CheckoutContainer>
    </CentralizeCheckoutContainer>
  )
}
