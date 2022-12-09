import { useMutation, useQueryClient } from 'react-query'

import { makeGraphQLClient } from '@/lib/gql/client'
import { setBillingInfo } from '@/lib/gql/mutations'
import { checkoutKeys } from '@/lib/react-query/queryKeys'

import type { CrBillingInfoInput } from '@/lib/gql/types'

export interface UpdateBillingInfoInput {
  orderId: string
  billingInfoInput: CrBillingInfoInput
}

const updateBillingInfo = async (params: UpdateBillingInfoInput) => {
  const client = makeGraphQLClient()

  const response = await client.request({
    document: setBillingInfo,
    variables: params,
  })

  return response?.updateOrderBillingInfo
}

export const useUpdateCheckoutBillingInfoMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(updateBillingInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries(checkoutKeys.all)
    },
  })
}
