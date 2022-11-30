import React, { useState } from 'react'

import {
  Stack,
  Divider,
  Box,
  MenuItem,
  Card,
  SxProps,
  Theme,
  Typography,
  Link,
} from '@mui/material'
import { useTranslation } from 'next-i18next'

import { KiboSelect, ProductItem } from '@/components/common'
import { orderGetters, productGetters, checkoutGetters } from '@/lib/getters'

import type { Maybe, CrOrderItem, CrProduct, Contact, Checkout, Destination } from '@/lib/gql/types'

export type ProductItemWithAddressListProps = {
  checkout: Checkout
  multiShipAddresses: any
  createOrSetDestinationAddress: (id: string, destinationIdOrAddressId: string) => any
  onUpdateDestinationAddress: (params?: any) => any
}

const styles = {
  card: {
    maxWidth: '100%',
    boxShadow: 'none',
    borderRadius: 0,
    borderWidth: '1px',
    borderColor: 'grey.500',
    borderStyle: 'solid',
    marginBottom: {
      xs: '1rem',
      sm: '1.25rem',
      md: '1.5rem',
    },
    justifyContent: 'space-around',

    pt: '24px',
    pb: '26px',
    pr: '13px',
    display: 'flex',
    flexDirection: {
      xs: 'column',
      md: 'row',
    },
  },
  subContainer: {
    flex: 1,
    padding: '0 0.5rem',
  },
  addressAction: {
    display: 'flex',
    justifyContent: 'end',
  },
  splitShipment: {
    mt: 'auto',
  },
}
const ProductItemWithAddressList = (props: ProductItemWithAddressListProps) => {
  const {
    checkout,
    multiShipAddresses,
    createOrSetDestinationAddress,
    onUpdateDestinationAddress,
  } = props

  const { t } = useTranslation('common')
  const handleEditDestination = (item) => {
    console.log('handleEditDestination : ', item)
    console.log('multiShipAddresses : ', multiShipAddresses)
    const contact = multiShipAddresses.find(
      (address) => address.destinationId === item.destinationId
    )
    // need to handle
    console.log('edit address')
    onUpdateDestinationAddress({
      destinationInput: { ...contact.address, destinationId: item.destinationId, itemId: item.id },
    })
  }
  const handleAddDestination = (item) => {
    console.log('add address:', item)
    onUpdateDestinationAddress({
      destinationInput: { itemId: item.id },
    })
  }
  const handleSplitAddress = () => {
    console.log('split address')
  }

  return (
    <>
      {checkout?.items?.map((item: Maybe<CrOrderItem>) => {
        const product = item?.product as CrProduct
        return (
          <Card key={item?.id} sx={{ ...styles.card }}>
            <Box sx={{ ...styles.subContainer }}>
              <ProductItem
                id={orderGetters.getCartItemId(item as CrOrderItem)}
                qty={orderGetters.getProductQuantity(item as CrOrderItem)}
                purchaseLocation={orderGetters.getPurchaseLocation(item as CrOrderItem)}
                productCode={productGetters.getProductId(product)}
                image={productGetters.getProductImage(product)}
                name={productGetters.getName(product)}
                options={productGetters.getOptions(product)}
                price={productGetters.getPrice(product).regular?.toString()}
                salePrice={productGetters.getPrice(product).special?.toString()}
                data-testid="product-item-address"
              />
            </Box>

            <Box sx={{ ...styles.subContainer, display: 'flex', flexDirection: 'column' }}>
              <KiboSelect
                name="multiShipAddresses"
                onChange={(_name, value) => createOrSetDestinationAddress(item?.id, value)}
                placeholder={t('select-a-saved-address')}
                value={item?.destinationId as string}
              >
                {multiShipAddresses?.map((multiShipAddress) => {
                  const destinationOrAddressId = multiShipAddress?.destinationId
                    ? multiShipAddress?.destinationId
                    : multiShipAddress?.address?.id
                  return (
                    <MenuItem
                      key={`${multiShipAddress?.address?.id}-${multiShipAddress?.destinationId}`}
                      value={`${destinationOrAddressId}`}
                    >
                      {checkoutGetters.formatDestinationAddress(multiShipAddress?.address)}
                    </MenuItem>
                  )
                })}
              </KiboSelect>
              <Box sx={{ ...styles.addressAction }}>
                <Link
                  component="button"
                  variant="caption"
                  color="text.primary"
                  sx={{ padding: '5px' }}
                  onClick={() => handleEditDestination(item)}
                >
                  {t('edit-address')}
                </Link>
                <Divider
                  variant="middle"
                  orientation="vertical"
                  sx={{ minHeight: '14px', height: '14px' }}
                />
                <Link
                  component="button"
                  variant="caption"
                  color="text.primary"
                  sx={{ padding: '5px' }}
                  onClick={() => handleAddDestination(item)}
                >
                  {t('add-new-address')}
                </Link>
              </Box>
              {orderGetters.getProductQuantity(item as CrOrderItem) > 1 && (
                <Box sx={{ ...styles.splitShipment }}>
                  +
                  <Link
                    component="button"
                    variant="caption"
                    color="text.primary"
                    sx={{ padding: '5px', ml: '12px' }}
                    onClick={handleSplitAddress}
                  >
                    {t('split-into-multiple-shipments')}
                  </Link>
                </Box>
              )}
            </Box>
          </Card>
        )
      })}
    </>
  )
}

export default ProductItemWithAddressList
