import React, { useCallback } from 'react'

import { ArrowBackIos } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import lodash from 'lodash'
import { useTranslation } from 'next-i18next'

import { SubscriptionItem } from '@/components/my-account'
import type {} from '@/components/my-account/Subscription/SubscriptionItem/SubscriptionItem'
import { useSubscriptionsQueries } from '@/hooks'
import { subscriptionGetters } from '@/lib/getters'
import type { FulfillmentInfo } from '@/lib/types'

import type { Subscription } from '@/lib/gql/types'
interface SubscriptionListProps {
  onAccountTitleClick: () => void
}

const style = {
  wrapIcon: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    cursor: 'pointer',
  },
}

const SubscriptionList = (props: SubscriptionListProps) => {
  const { onAccountTitleClick } = props
  const { t } = useTranslation('common')

  const { data: subscriptionDetails } = useSubscriptionsQueries()

  const handleAccountTitleClick = useCallback(() => onAccountTitleClick(), [onAccountTitleClick])

  // To display all the unique subscription addresses
  const duplicateFulfillments = subscriptionDetails?.items?.map((subscription) =>
    subscriptionGetters.getFormattedAddress(subscription as Subscription)
  )
  const fulfillmentInfoList = lodash.uniqBy(duplicateFulfillments, 'formattedAddress')

  return (
    <>
      <Stack mt={2}>
        <Stack sx={style.wrapIcon} direction="row" gap={2} onClick={handleAccountTitleClick}>
          <ArrowBackIos fontSize="inherit" sx={style.wrapIcon} />
          <Typography variant="body2">{t('my-account')}</Typography>
        </Stack>
        <Stack py={'1.2rem'}>
          <Typography variant="h1">{t('my-subscription')}</Typography>
        </Stack>
      </Stack>

      {subscriptionDetails?.totalCount > 0 &&
        subscriptionDetails?.items?.map((subscriptionItemData) => (
          <SubscriptionItem
            key={subscriptionItemData?.id as string}
            subscriptionDetailsData={subscriptionItemData as Subscription}
            fulfillmentInfoList={fulfillmentInfoList as FulfillmentInfo[]}
          />
        ))}
      {subscriptionDetails?.totalCount === 0 && (
        <Typography>{t('no-subscription-message')}</Typography>
      )}
    </>
  )
}

export default SubscriptionList
