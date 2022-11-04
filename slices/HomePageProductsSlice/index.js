import React from 'react'

import { Container, Box, Grid } from '@mui/material'
import { PrismicRichText } from '@prismicio/react'
import { useTranslation } from 'next-i18next'

import { ProductCard } from '@/components/product'
import { useProductsQueries } from '@/hooks'
import { productGetters } from '@/lib/getters'
import { uiHelpers } from '@/lib/helpers'

const styles = {
  gridContainer: {
    display: { md: 'flex', xs: 'block' },
    marginTop: { xs: '1rem', md: '3rem' },
    marginBottom: { xs: '3rem', md: '3rem' },
  },
}

const ProductRecommendations = (props) => {
  const { title, productCodes } = props
  const { t } = useTranslation('common')
  const { getProductLink } = uiHelpers()
  const { data: productSearchResult } = useProductsQueries(productCodes)
  const products = productSearchResult?.items

  return (
    <>
      {productCodes?.length > 0 && (
        <Grid item xs={12} sx={{ backgroundColor: 'grey.100', p: { xs: 1, md: 5 }, marginY: 2 }}>
          <PrismicRichText field={title} />
          <Box
            display="flex"
            sx={{ gap: { xs: 0, md: 4 }, maxWidth: { xs: '100vw', md: '100%' }, overflowX: 'auto' }}
          >
            {products?.map((product) => {
              return (
                <Box key={product?.productCode} width="100%">
                  <ProductCard
                    imageUrl={
                      productGetters.getCoverImage(product) &&
                      productGetters.handleProtocolRelativeUrl(
                        productGetters.getCoverImage(product)
                      )
                    }
                    link={getProductLink(product?.productCode)}
                    price={t('currency', {
                      val: productGetters.getPrice(product).regular,
                    })}
                    {...(productGetters.getPrice(product).special && {
                      salePrice: t('currency', {
                        val: productGetters.getPrice(product).special,
                      }),
                    })}
                    title={productGetters.getName(product)}
                    rating={productGetters.getRating(product)}
                  />
                </Box>
              )
            })}
          </Box>
        </Grid>
      )}
    </>
  )
}

const HomePageProductsSlice = ({ slice }) => {
  const recentlyViewed = {
    title: slice.primary.recently_viewed_title,
    productCodes: slice.primary.recently_viewed_product_codes.split(','),
  }

  const topSellings = {
    title: slice.primary.top_sellings_title,
    productCodes: slice.primary.top_sellings_product_codes.split(','),
  }

  return (
    <div>
      <Container maxWidth={'xl'}>
        <Grid sx={{ ...styles.gridContainer }} container columnSpacing={{ md: 5 }}>
          <Grid item sm={12} md={6}>
            {recentlyViewed?.productCodes?.length > 0 && (
              <ProductRecommendations {...recentlyViewed} />
            )}
          </Grid>
          <Grid item sm={12} md={6}>
            {topSellings?.productCodes?.length > 0 && <ProductRecommendations {...topSellings} />}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default HomePageProductsSlice
