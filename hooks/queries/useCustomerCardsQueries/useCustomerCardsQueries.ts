import { useQuery } from 'react-query'

import { makeGraphQLClient } from '@/lib/gql/client'
import { getCustomerAccountCards } from '@/lib/gql/queries'
import { customerAccountCardsKeys } from '@/lib/react-query/queryKeys'

import type { CardCollection } from '@/lib/gql/types'

export interface UseCustomerCardsResponse {
  data: CardCollection
  isLoading: boolean
  isSuccess: boolean
}

const loadCustomerAccountCards = async (accountId: number) => {
  const client = makeGraphQLClient()

  const response = await client.request({
    document: getCustomerAccountCards,
    variables: { accountId },
  })

  return response?.customerAccountCards
}

/**
 * [Query hook] useCustomerCardsQueries uses the graphQL query
 *
 * <b>customerAccountCards(accountId: Int!): CardCollection'</b>
 *
 * Description : Fetches saved payment cards for a particular user
 *
 * @param accountId stores the user id of the user whose saved card details needed to be fetched
 * @returns 'response?.customerAccountCards' which contains all the saved cards for payment options for the requested user based on accountId
 */
export const useCustomerCardsQueries = (accountId: number): UseCustomerCardsResponse => {
  const {
    data = [],
    isLoading,
    isSuccess,
  } = useQuery(
    customerAccountCardsKeys?.cardById(accountId),
    () => loadCustomerAccountCards(accountId),
    {
      enabled: !!accountId,
    }
  )

  return { data, isLoading, isSuccess }
}
