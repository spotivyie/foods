import { useState } from 'react'
import {
  Card,
  Cards,
  Descricao,
  Titulo,
  Tag,
  SaibaMais,
  ModalContent,
  Modal,
  Cart,
  Imagem,
  Image
} from './styles'

import close from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { CardapioItem } from '../../page/Perfil'

export type Props = {
  menu: CardapioItem
}

const ProductPerfil = ({ menu }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
  }

  const [modalAberto, setModalEstaAberto] = useState(false)
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <Imagem src={menu.foto} alt={menu.nome} />
        <div>
          <Titulo>{menu.nome}</Titulo>
        </div>
        <Descricao>{getDescricao(menu.descricao)}</Descricao>
        <SaibaMais>
          <Tag onClick={() => setModalEstaAberto(true)}>Mais detalhes</Tag>
        </SaibaMais>
      </Card>
      <Modal className={modalAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <Cards>
            <header>
              <img
                src={close}
                onClick={() => setModalEstaAberto(false)}
                alt="fechar"
              />
            </header>
            <Image>
              <img src={menu.foto} alt={menu.nome} />
            </Image>
            <div>
              <h4>{menu.nome}</h4>
              <p>{menu.descricao}</p>
              <p>{menu.porcao}</p>
              <Cart onClick={addToCart}>
                Adicionar ao carrinho - R$ {menu.preco}
              </Cart>
            </div>
          </Cards>
        </ModalContent>
        <div
          onClick={() => setModalEstaAberto(false)}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default ProductPerfil
