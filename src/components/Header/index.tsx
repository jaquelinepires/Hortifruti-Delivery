import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  Container,
  HeaderLogo,
  HeaderButton,
  HeaderButtonsContainer,
} from './styles'
import laranja from '../../assets/laranja.png'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <Container>
      <div className="wrapper">
        <NavLink to="/">
          <HeaderLogo>
            <img src={laranja} alt="" />
            <h3>
              Hortifruti <span>Delivery</span>
            </h3>
          </HeaderLogo>
        </NavLink>

        <HeaderButtonsContainer>
          {/* <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Salvador-BA
          </HeaderButton> */}
          <NavLink to="/checkout">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </Container>
  )
}
