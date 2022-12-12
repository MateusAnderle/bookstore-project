import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MinusCircle, PlusCircle, Trash } from 'phosphor-react'
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
import { BookData } from '../../utils/jsonServer'

export default function Cart() {
  const router = useRouter()

  return (
    <CentralizeCartContainer>
      <CartContainer>
        <h2>Carrinho de compras</h2>

        {BookData.length ? (
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
                {BookData.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <Image src={item.image} width={90} alt="" />
                      </td>
                      <td>{item.livro}</td>
                      <td>{item.autor}</td>
                      <td>
                        <TdCart>
                          <MinusCircle size={18} />
                          {item.quantidade}
                          <PlusCircle size={18} />
                        </TdCart>
                      </td>
                      <td>{item.preco}</td>
                      <td>
                        <Trash size={18} style={{ cursor: 'pointer' }} />
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
                  <div>1</div>
                </CartInsideBox>
                <CartInsideBox>
                  <div>Valor da compra:</div>
                  <div>R$ 35,00</div>
                </CartInsideBox>

                <span>Sua compra pode ser parcelada em até 10x sem juros</span>

                <CartButton onClick={() => router.push(`/checkout`)}>
                  Finalizar compra
                </CartButton>
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
