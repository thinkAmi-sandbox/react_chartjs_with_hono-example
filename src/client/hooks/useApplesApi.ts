import {hc} from 'hono/client'
import {ApplesType} from "../../index";
import {useQuery} from "@tanstack/react-query";

const client = hc<ApplesType>('http://localhost:5173')

const queryFn = async () => {
  const response = await client.api.apples.$get()
  if (response.ok) {
    return await response.json()
  }
}

export const useApplesApi = () => {
  return useQuery({
    queryKey: ['ApiApples'],
    queryFn: queryFn
  })
}
