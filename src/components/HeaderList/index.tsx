import {
  Imagem,
  Images,
  LinkCart,
  HeaderBar,
  Links
} from '../HeaderList/styles'

import bannerImg from '../../assets/images/Vector.png'
import macarrao from '../../assets/images/imagemdefundo.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeaderList = () => (
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
    <Images style={{ backgroundImage: `url(${macarrao})` }}>
      <div className="container">
        <h3>Italiana</h3>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </Images>
  </>
)

export default HeaderList
