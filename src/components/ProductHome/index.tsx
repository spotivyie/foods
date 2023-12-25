import {
  Card,
  Descricao,
  Infos,
  Titulo,
  Tag,
  Espaco,
  SaibaMais,
  EstrelaNota,
  HeaderBar,
  Links
} from './styles'

type Props = {
  description: string
  title: string
  nota: string
  system: boolean
  infos: string
  image: string
  id: number
  estrela: string
}

const Product = ({
  description,
  image,
  infos,
  system,
  title,
  nota,
  id,
  estrela
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        <Tag>{infos}</Tag>
      </Infos>
      <Espaco>
        <HeaderBar>
          <div>
            <Titulo>{title}</Titulo>
          </div>
          <EstrelaNota>
            <div>{nota}</div>
            <img src={estrela} alt={estrela} />
          </EstrelaNota>
        </HeaderBar>
        <Descricao>{getDescricao(description)}</Descricao>
        <SaibaMais>
          <Tag>
            <Links to={`/perfil/${id}`}>{system}Saiba mais</Links>
          </Tag>
        </SaibaMais>
      </Espaco>
    </Card>
  )
}

export default Product
