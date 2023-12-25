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
  Imagem
} from './styles'

import close from '../../assets/images/close.png'

type Props = {
  description: string
  title: string
  system: string
  image: string
  preco?: number
}

const ProductPerfil = ({ description, image, system, title, preco }: Props) => {
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
        <Imagem src={image} alt={title} />
        <div>
          <Titulo>{title}</Titulo>
        </div>
        <Descricao>{getDescricao(description)}</Descricao>
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
            <img src={image} alt={title} />
            <div>
              <h4>{title}</h4>
              <p>{description}</p>
              <p>{system}</p>
              <Cart>Adicionar ao carrinho - R$ {preco}</Cart>
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
