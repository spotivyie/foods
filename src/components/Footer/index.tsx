import { Container, FooterSection } from './styles'

import logo from '../../assets/images/logo.png'
import redesSociais from '../../assets/images/redessociais.png'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <img src={logo} alt="logo" />
      </FooterSection>
      <img src={redesSociais} alt="redes sociais" />
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br />
        dos produtos é toda do estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
