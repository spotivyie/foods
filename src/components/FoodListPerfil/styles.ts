import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  padding: 80px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 26px;
  row-gap: 26px;
  padding-bottom: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: ${breakpoints.android}) {
    grid-template-columns: 1fr;
  }
`
