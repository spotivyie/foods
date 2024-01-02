import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { CardapioItem } from '../../types'
import close from '../../assets/images/close.png'

import * as S from './styles'

export type Props = {
  menu: CardapioItem
}

const ProductPerfil = ({ menu }: Props) => {
  const dispatch = useDispatch()
  const [modalAberto, setModalEstaAberto] = useState(false)

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
    setModalEstaAberto(false)
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.Card>
        <S.Imagem src={menu.foto} alt={menu.nome} />
        <div>
          <S.Titulo>{menu.nome}</S.Titulo>
        </div>
        <S.Descricao>{getDescricao(menu.descricao)}</S.Descricao>
        <S.SaibaMais>
          <S.Tag onClick={() => setModalEstaAberto(true)}>Mais detalhes</S.Tag>
        </S.SaibaMais>
      </S.Card>
      <S.Modal className={modalAberto ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <S.Cards>
            <header>
              <img
                src={close}
                onClick={() => setModalEstaAberto(false)}
                alt="fechar"
              />
            </header>
            <S.Image>
              <img src={menu.foto} alt={menu.nome} />
            </S.Image>
            <div>
              <h4>{menu.nome}</h4>
              <p>{menu.descricao}</p>
              <p>{menu.porcao}</p>
              <S.Cart onClick={addToCart}>
                Adicionar ao carrinho - R$ {menu.preco}
              </S.Cart>
            </div>
          </S.Cards>
        </S.ModalContent>
        <div
          onClick={() => setModalEstaAberto(false)}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  )
}

export default ProductPerfil
