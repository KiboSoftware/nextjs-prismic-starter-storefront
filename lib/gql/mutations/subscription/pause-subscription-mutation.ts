const performSubscriptionActionMutation = /* GraphQL */ `
  mutation performSubscriptionAction(
    $subscriptionId: String!
    $subscriptionActionInput: SubscriptionActionInput
  ) {
    subscription: performSubscriptionAction(
      subscriptionId: $subscriptionId
      subscriptionActionInput: $subscriptionActionInput
    ) {
      actionName
      reasons {
        actionName
      }
    }
  }
`

export default performSubscriptionActionMutation
