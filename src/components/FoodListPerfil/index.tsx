import Menu from '../../ModelsPerfil/index'
import Product from '../ProductPerfil'

import { List, Container } from './styles'

export type Props = {
  title: string
  menus: Menu[]
}

const ProductListPerfil = ({ menus }: Props) => (
  <Container>
    <div className="container">
      <List>
        {menus.map((food) => (
          <Product
            key={food.id}
            description={food.description}
            image={food.image}
            system={food.system}
            title={food.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListPerfil
