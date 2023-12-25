import { CardapioItem } from '../../page/Perfil'
import Product from '../ProductPerfil'

import { List, Container } from './styles'

export type Props = {
  title: string
  cardapio: CardapioItem[]
}

export const ProductListPerfil = ({ cardapio }: Props) => (
  <Container>
    <div className="container">
      <List>
        {cardapio.map((food) => (
          <Product
            key={food.id}
            description={food.descricao}
            image={food.foto}
            system={food.porcao}
            title={food.nome}
            preco={food.preco}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListPerfil
