import React from 'react'

import { Button, useMediaQuery, Card, CardContent, useTheme, CardMedia } from '@mui/material'
import { styled } from '@mui/system'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { useRouter } from 'next/router'
import Carousel from 'react-material-ui-carousel'

/**
 * @typedef {import("@prismicio/client").Content.HeroCarouselSliceSlice} HeroCarouselSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroCarouselSliceSlice>} HeroCarouselSliceProps
 * @param { HeroCarouselSliceProps }
 */

const styles = {
  cardStyle: {
    minHeight: '600px',
    width: '100%',
    margin: '0px',
    padding: '0px',
    outline: 'none',
    borderRadius: '0px',
  },
  cardContentStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'common.white',
    opacity: '0.99',
    color: 'common.black',
    width: { xs: '80%', md: '50%' },
    gap: 2,
    '& > *': {
      margin: '0px',
    },
  },
  nameStyle: {
    width: '100%',
    textAlign: 'center',
    minHeight: '24px',
    maxHeight: 'auto',
  },
  desStyle: {
    width: '100%',
    textAlign: 'center',
    minHeight: '28px',
    maxHeight: 'auto',
  },
  subTitleStyle: {
    width: '100%',
    textAlign: 'center',
    minHeight: '28px',
    maxHeight: 'auto',
  },
}

const MainStyle = styled('div')({
  display: 'flex',
  color: 'grey.700',
})

const HeroCarouselSlice = ({ slice }) => {
  const kiboTheme = useTheme()
  const router = useRouter()
  const mobileView = useMediaQuery(kiboTheme.breakpoints.down('md'))

  return (
    <MainStyle>
      <Carousel navButtonsAlwaysVisible={true} swipe={true} sx={{ width: '100%' }}>
        {slice.items.map((item, i) => (
          <Card sx={styles.cardStyle} key={i}>
            <CardMedia
              sx={{
                width: '100%',
                minHeight: '600px',
                height: '600px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: { xs: 'end', md: 'center' },
                marginBottom: { xs: '40px', md: '0px' },
              }}
            >
              <PrismicNextImage
                layout="fill"
                objectFit="cover"
                key={i}
                field={item.desktop_image}
              />

              <CardContent sx={styles.cardContentStyle}>
                <PrismicRichText field={item.title} key={i} />
                <PrismicRichText field={item.subtitle} key={i} />
                <PrismicRichText field={item.description} key={i} />

                <Button
                  variant="contained"
                  sx={{ fontSize: mobileView ? '0.5rem' : '1rem' }}
                  onClick={() => {
                    router.push(item.button_link_url)
                  }}
                >
                  {item.button_link_title}
                </Button>
              </CardContent>
            </CardMedia>
          </Card>
        ))}
      </Carousel>
    </MainStyle>
  )
}

export default HeroCarouselSlice
