import { Container, CardFooter, Name, Tags, AddCartWrapper } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { priceFormatter } from '../../../../utils/formatMoney'
import { QuantityInput } from '../../../../components/QuantityInput'
import { TitleText } from '../../../../components/Typography'

import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'
import { Product } from '../../../../hooks/useApi'

export function ProductCard({ item }: Product) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }
  const { addItemToCart } = useCart()

  function handleAddToCart() {
    const itemToAdd = {
      ...item,
      quantity,
    }
    addItemToCart(itemToAdd)
  }
  return (
    <Container>
      <img src={item.photo} alt=""></img>
      <Tags>
        <span>{item.tags}</span>
      </Tags>
      <Name>{item.name}</Name>
      <CardFooter>
        <div>
          <TitleText size="s" color="text" as="strong">
            {priceFormatter.format(item.price)}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </Container>
  )
}
