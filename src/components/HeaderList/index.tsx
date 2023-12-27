import {
  Imagem,
  Images,
  CartButton,
  HeaderBar,
  Links
} from '../HeaderList/styles'

import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  image: string
  infos: string
  title: string
}

const HeaderList = ({ image, infos, title }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <HeaderBar>
          <div>
            <Links>Restaurantes</Links>
            <Link to="/">
              <img src={logo} alt="efood" />
            </Link>
            <CartButton onClick={openCart}>
              {items.length} produto(s) no carrinho
            </CartButton>
          </div>
        </HeaderBar>
      </Imagem>
      <Images style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
          <h3>{infos}</h3>
          <h2>{title}</h2>
        </div>
      </Images>
    </>
  )
}

export default HeaderList
