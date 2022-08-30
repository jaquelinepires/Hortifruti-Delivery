import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { priceFormatter } from '../../../../utils/formatMoney'
import { Container, ActionsContainer, RemoveButton } from './styles'

interface Products extends CartItem {
  id: number
  tags: string
  name: string
  description: string
  price: number
  photo: string
}
interface ShoppingCartCardProps {
  item: Products
}

export function ShoppingCartCard({ item }: ShoppingCartCardProps) {
  const { changeCartItemQuantity, removeCardItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(item.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(item.id, 'decrease')
  }
  function handleRemove() {
    removeCardItem(item.id)
  }
  const itemTotal = item.price * item.quantity
  const formattedPrice = priceFormatter.format(itemTotal)

  return (
    <Container>
      <div>
        <img src={item.photo} alt="" />
        <div>
          <RegularText color="subtitle">{item.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={item.quantity}
            />

            <RemoveButton type="button" onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p> {formattedPrice}</p>
    </Container>
  )
}
