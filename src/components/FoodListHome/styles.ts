import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  padding: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 80px 40px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  row-gap: 48px;
  padding-bottom: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
