import { Load } from '../../../../components/Load'
import { TitleText } from '../../../../components/Typography'
import { useApi } from '../../../../hooks/useApi'

import { ProductCard } from '../ProductCard'
import { Container, ProductList } from './styles'

export function OurFair() {
  const { data, isloading, isFetching } = useApi()

  return (
    <Container className="wrapper">
      <TitleText size="l" color="subtitle">
        Ofertas da Semana
      </TitleText>

      <ProductList>
        {!isloading && isFetching && <Load />}
        {data?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </ProductList>
    </Container>
  )
}
