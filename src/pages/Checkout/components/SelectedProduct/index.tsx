import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { ShoppingCartCard } from '../CartCard'
import { ConfirmationSection } from './ConfirmationSection'
import { Container, DetailsContainer } from './styles'

export function SelectedProduct() {
  const { cartItems } = useCart()

  return (
    <Container>
      <TitleText size="xs" color="subtitle">
        Produtos selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <ShoppingCartCard key={item.id} item={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </Container>
  )
}
