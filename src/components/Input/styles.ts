import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: transparent;
  padding: 0;
  color: ${cores.rosaClaro};
  margin-bottom: 8px;

  > p {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    text-align: left;
    margin-bottom: 8px;
  }
`
