import {
  Imagem,
  Images,
  LinkCart,
  HeaderBar,
  Links
} from '../HeaderList/styles'

import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  infos: string
  title: string
}

const HeaderList = ({ image, infos, title }: Props) => {
  return (
    <>
      <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <HeaderBar>
          <div>
            <Links>Restaurantes</Links>
            <Link to="/">
              <img src={logo} alt="efood" />
            </Link>
            <LinkCart>0 produto(s) no carrinho</LinkCart>
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
