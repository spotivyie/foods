import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <img src={logo} alt="efood" />
        <Titulo>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Titulo>
      </div>
    </div>
  </Imagem>
)

export default Header
