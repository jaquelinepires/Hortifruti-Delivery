import { useQuery } from 'react-query'
import { api } from '../lib/api'

export interface Product {
  id: number
  tags: string
  name: string
  description: string
  price: number
  photo: string
}

export async function getUsers(): Promise<Product[]> {
  const { data } = await api.get('products')

  const users = data.map((item: any) => {
    return {
      id: item.id,
      tags: item.tags,
      name: item.name,
      description: item.description,
      price: item.price,
      photo: item.photo,
    }
  })

  console.log(users)
  return users
}
export function useApi() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5, // 5 seconds
  })
}
