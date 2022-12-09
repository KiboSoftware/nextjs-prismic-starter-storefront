import { useQuery } from 'react-query'

import { makeGraphQLClient } from '@/lib/gql/client'
import { getWishlistQuery } from '@/lib/gql/queries'
import { wishlistKeys } from '@/lib/react-query/queryKeys'

import type { CrWishlist } from '@/lib/gql/types'

export interface UseWishlistResponse {
  data?: CrWishlist
  isLoading: boolean
  isSuccess: boolean
  isFetching: boolean
}

const getWishlists = async (): Promise<CrWishlist> => {
  const client = makeGraphQLClient()
  const response = await client.request({
    document: getWishlistQuery,
    variables: {},
  })

  return response?.wishlists?.items[0]
}

export const useWishlistQueries = (): UseWishlistResponse => {
  const { data, isLoading, isSuccess, isFetching } = useQuery(wishlistKeys.all, getWishlists, {
    refetchOnWindowFocus: false,
  })

  return { data, isLoading, isSuccess, isFetching }
}
