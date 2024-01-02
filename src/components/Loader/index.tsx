import { Container } from './styles'
import { BarLoader } from 'react-spinners'
import { cores } from '../../styles'

const Loader = () => (
  <Container>
    <BarLoader color={cores.rosa} />
  </Container>
)

export default Loader
