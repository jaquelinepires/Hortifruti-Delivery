import { BenefitsContainer, IntroContainer, IntroContent } from './styles'

import { ShoppingCart, Package, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import banner from '../../../../assets/banner.png'

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="wrapper">
        <section>
          <img src={banner} alt="" />
        </section>

        <BenefitsContainer>
          <InfoWithIcon
            iconBg={colors['brand-yellow-dark']}
            icon={<ShoppingCart weight="fill" />}
            text="Compra simples e segura"
          />
          <InfoWithIcon
            iconBg={colors['base-text']}
            icon={<Package weight="fill" />}
            text="Embalagem mantém sua compra intacto"
          />
          <InfoWithIcon
            iconBg={colors['brand-yellow']}
            icon={<Timer weight="fill" />}
            text="Entrega rápida e rastreada"
          />
        </BenefitsContainer>
      </IntroContent>
    </IntroContainer>
  )
}
