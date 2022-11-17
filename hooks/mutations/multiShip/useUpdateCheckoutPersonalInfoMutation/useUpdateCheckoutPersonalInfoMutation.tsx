import { useMutation, useQueryClient } from 'react-query'

import { makeGraphQLClient } from '@/lib/gql/client'
import { setPersonalInfo } from '@/lib/gql/mutations'
import { checkoutKeys } from '@/lib/react-query/queryKeys'

import type { OrderInput } from '@/lib/gql/types'

export interface MultiShipPersonalInfo {
  orderId: string
  updateMode: string
  version?: string
  orderInput: OrderInput
}

const updatePersonalInfo = async (personalInfo: MultiShipPersonalInfo) => {
  const client = makeGraphQLClient()

  const response = await client.request({
    document: setPersonalInfo,
    variables: personalInfo,
  })

  //   return response?.checkout
  return {
    id: 1,
  }
}

const useUpdateCheckoutPersonalInfoMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(updatePersonalInfo, {
    onSuccess: () => {
      queryClient.removeQueries([checkoutKeys.all])
    },
  })
}

export const useUpdateMultiShipCheckoutPersonalInfoMutation = useUpdateCheckoutPersonalInfoMutation
