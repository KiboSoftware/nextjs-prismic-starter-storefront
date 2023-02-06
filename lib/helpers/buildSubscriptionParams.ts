export const buildSubscriptionParams = (subscriptionId: string, subscriptionItemId: string) => {
  return {
    subscriptionId: subscriptionId,
    subscriptionItemId: subscriptionItemId,
    subscriptionReasonInput: {
      actionName: 'cancel',
      reasonCode: 'cancel',
      description: 'cancel',
      moreInfo: 'cancel',
    },
  }
}
