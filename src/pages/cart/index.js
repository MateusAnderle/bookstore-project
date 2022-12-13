import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MinusCircle, PlusCircle, Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import {
  CartButton,
  CartContainer,
  CartContent,
  CartInsideBox,
  CartTotal,
  CentralizeCartContainer,
  EmptyList,
  Table,
  TBody,
  TdCart,
} from '../../styles/pages/cart'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Cart() {
  const router = useRouter()
  const [itemsCart, setItemsCart] = useState()
  const [totalCart, setTotalCart] = useState()

  const {
    products,
    removeProductCart,
    addQuantity,
    subQuantity,
    setTotalCartCheckout,
  } = useContext(CartContext)

  function removeProduct(productId) {
    removeProductCart(productId)
    const notify = () => toast.warn('Produto removido do carrinho!')
    notify()
  }

  function addProduct(productId) {
    addQuantity(productId)
    const notify = () => toast.success('Produto somado!')
    notify()
  }

  function subProduct(productId) {
    subQuantity(productId)
    const notify = () => toast.warn('Produto subtraído!')
    notify()
  }

  function goToCheckout() {
    setTotalCartCheckout({
      numberOfItems: itemsCart,
      totalPriceCart: totalCart,
    })
    router.push(`/checkout`)
  }

  useEffect(() => {
    function itemsQuantity() {
      const initialValue = 0
      const numberOfItems = products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantidade,
        initialValue,
      )
      setItemsCart(numberOfItems)
    }

    itemsQuantity()
  }, [products])

  useEffect(() => {
    function totalPrice() {
      const initialValue = 0
      const priceOfItems = products.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.preco * currentValue.quantidade,
        initialValue,
      )
      setTotalCart(priceOfItems.toFixed(2))
    }
    totalPrice()
  }, [products])

  return (
    <CentralizeCartContainer>
      <CartContainer>
        <h2>Carrinho de compras</h2>
        <ToastContainer
          style={{ marginTop: '60px' }}
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {products.length ? (
          <>
            <Table>
              <thead>
                <tr>
                  <th>Imagem</th>
                  <th>Produto</th>
                  <th>Autor</th>
                  <th>Quantidade</th>
                  <th>Preço</th>
                  <th>Remover</th>
                </tr>
              </thead>

              <TBody>
                {products.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <Image src={item.image} width={90} alt="" />
                      </td>
                      <td>{item.livro}</td>
                      <td>{item.autor}</td>
                      <td>
                        <TdCart>
                          <MinusCircle
                            size={18}
                            onClick={() => subProduct(item.id)}
                          />
                          {item.quantidade}
                          <PlusCircle
                            size={18}
                            onClick={() => addProduct(item.id)}
                          />
                        </TdCart>
                      </td>
                      <td>R$ {item.preco.toFixed(2)}</td>
                      <td>
                        <Trash
                          onClick={() => removeProduct(item.id)}
                          size={18}
                          style={{ cursor: 'pointer' }}
                        />
                      </td>
                    </tr>
                  )
                })}
              </TBody>
            </Table>

            <CartTotal>
              <CartContent>
                <CartInsideBox>
                  <div>Quantidade total:</div>
                  <div>{itemsCart}</div>
                </CartInsideBox>
                <CartInsideBox>
                  <div>Valor da compra:</div>
                  <div>R$ {totalCart}</div>
                </CartInsideBox>

                <span>Sua compra pode ser parcelada em até 10x sem juros</span>

                <CartButton onClick={goToCheckout}>Finalizar compra</CartButton>
              </CartContent>
            </CartTotal>
          </>
        ) : (
          <EmptyList>
            <h3>Carrinho vazio...</h3>
            <Link href="/">
              <span>Continuar navegando</span>
            </Link>
          </EmptyList>
        )}
      </CartContainer>
    </CentralizeCartContainer>
  )
}
