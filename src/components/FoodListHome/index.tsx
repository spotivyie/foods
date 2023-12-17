import Menu from '../../ModelsHome/index'
import Product from '../ProductHome'

import { List, Container } from './styles'

export type Props = {
  title: string
  menus: Menu[]
}

const ProductList = ({ menus }: Props) => (
  <Container>
    <div className="container">
      <List>
        {menus.map((food) => (
          <Product
            key={food.id}
            description={food.description}
            estrela={food.estrela}
            nota={food.nota}
            image={food.image}
            infos={food.infos}
            system={food.system}
            title={food.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
