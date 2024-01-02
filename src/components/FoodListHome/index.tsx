import { Menu } from '../../types'
import Loader from '../Loader'
import Product from '../ProductHome'

import { List, Container } from './styles'

export type Props = {
  estrela: string
  menus: Menu[]
}

const ProductList = ({ menus, estrela }: Props) => {
  if (!menus) {
    return <Loader />
  }

  return (
    <Container>
      <div className="container">
        <List>
          {menus.map((food) => (
            <li key={food.id}>
              <Product
                id={food.id}
                estrela={estrela}
                title={food.titulo}
                description={food.descricao}
                nota={food.avaliacao}
                image={food.capa}
                infos={food.tipo}
                system={food.destacado}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
