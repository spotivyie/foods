import { CardapioItem } from '../../types'
import Product from '../ProductPerfil'

import { List, Container } from './styles'

export type Props = {
  cardapio: CardapioItem[]
}

export const ProductListPerfil = ({ cardapio }: Props) => (
  <Container>
    <div className="container">
      <List>
        {cardapio.map((food) => (
          <Product key={food.id} menu={food} />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListPerfil
