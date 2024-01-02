import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import { formataPreco } from '../../utils'
import { openDelivery } from '../../store/reducers/delivery'

import * as S from './styles'

export const Cart = () => {
  //cart
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  //fechar o carrinho
  const closeCart = () => {
    dispatch(close())
  }
  //remover o item
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  //
  const abrirDelivery = () => {
    dispatch(openDelivery())
  }
  //preços
  const getTotalPrices = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <div>R$ {item.preco}</div>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>
              Valor total <span>{formataPreco(getTotalPrices())}</span>
            </S.Prices>
            <S.Button onClick={abrirDelivery}>Continuar com a entrega</S.Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}
