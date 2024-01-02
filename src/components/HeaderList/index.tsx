import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

import * as S from '../HeaderList/styles'

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
      <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <S.HeaderBar>
          <div>
            <S.Links>Restaurantes</S.Links>
            <Link to="/">
              <img src={logo} alt="efood" />
            </Link>
            <S.CartButton onClick={openCart}>
              {items.length} produto(s) no carrinho
            </S.CartButton>
          </div>
        </S.HeaderBar>
      </S.Imagem>
      <S.Images style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
          <h3>{infos}</h3>
          <h2>{title}</h2>
        </div>
      </S.Images>
    </>
  )
}

export default HeaderList
