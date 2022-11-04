import React from 'react'

import {
  useMediaQuery,
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  Link as MuiLink,
} from '@mui/material'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'

/**
 * @typedef {import("@prismicio/client").Content.SmallBannerSliceSlice} SmallBannerSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SmallBannerSliceSlice>} SmallBannerSliceProps
 * @param { SmallBannerSliceProps }
 */

const styles = {
  boxStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    color: 'common.white',
  },
  topStyle: {
    height: '60px',
    padding: '20px !important',
    color: 'common.white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '&  *': {
      margin: '0px',
    },
  },
  titleStyle: {
    fontSize: (theme) => theme.typography.h2,
  },
}

const SmallBannerSlice = ({ slice }) => {
  const kiboTheme = useTheme()
  const mobileView = useMediaQuery(kiboTheme.breakpoints.down('sm'))
  const backgroundColor = slice.primary?.background_color || '#A12E87'

  return (
    <Card sx={{ backgroundColor, borderRadius: '0px' }}>
      <CardContent
        sx={styles.topStyle}
        style={{ display: 'flex', flexDirection: mobileView ? 'column' : 'row' }}
      >
        <PrismicRichText field={slice.primary.title} />
        {mobileView ? null : <span>&nbsp;</span>}

        <Box sx={styles.boxStyle}>
          <PrismicRichText field={slice.primary.subtitle} /> &nbsp;
          <Typography variant="h5" data-testid="callToAction">
            <Link href={slice.primary.call_to_action_link} passHref>
              <MuiLink
                underline="none"
                sx={{
                  color: 'common.white',
                }}
              >
                <PrismicRichText field={slice.primary.call_to_action_text} />
              </MuiLink>
            </Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default SmallBannerSlice
