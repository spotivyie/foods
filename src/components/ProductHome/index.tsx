import * as S from './styles'

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
    <S.Card>
      <img src={image} alt={title} />
      <S.Infos>
        <S.Tag>{infos}</S.Tag>
      </S.Infos>
      <S.Espaco>
        <S.HeaderBar>
          <div>
            <S.Titulo>{title}</S.Titulo>
          </div>
          <S.EstrelaNota>
            <div>{nota}</div>
            <img src={estrela} alt={estrela} />
          </S.EstrelaNota>
        </S.HeaderBar>
        <S.Descricao>{getDescricao(description)}</S.Descricao>
        <S.SaibaMais>
          <S.Tag>
            <S.Links to={`/perfil/${id}`}>{system}Saiba mais</S.Links>
          </S.Tag>
        </S.SaibaMais>
      </S.Espaco>
    </S.Card>
  )
}

export default Product
