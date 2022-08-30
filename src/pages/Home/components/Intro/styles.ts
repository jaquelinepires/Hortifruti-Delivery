import styled from 'styled-components'
import introBackgroundImg from '../../../../assets/intro-background.png'

import { rgba } from 'polished'
import { TitleText } from '../../../../components/Typography'

export const IntroContainer = styled.section`
  width: 100%;
  padding-top: 2rem;

  /* height: 40rem; */
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 80%;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 2rem;

  justify-items: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
    justify-items: initial;
    align-items: initial;
    padding-inline: 1rem;
  }
`
