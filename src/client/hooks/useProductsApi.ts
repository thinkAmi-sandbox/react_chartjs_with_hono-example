import { useQuery } from '@tanstack/react-query'
import { hc } from 'hono/client'
import type { ProductsType } from '../../index'

const client = hc<ProductsType>('http://localhost:5173')

const queryFn = async () => {
  const response = await client.api.products.$get()
  if (response.ok) {
    return await response.json()
  }
}

export const useProductsApi = () => {
  return useQuery({
    queryKey: ['ApiProducts'],
    queryFn: queryFn,
  })
}
