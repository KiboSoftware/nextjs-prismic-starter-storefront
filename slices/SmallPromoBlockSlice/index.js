import React from 'react'

import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Link as MuiLink,
  styled,
  Container,
} from '@mui/material'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'

const styles = {
  mainStyle: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  boxStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    marginTop: '20px',
    '& *': {
      margin: '0px',
    },
  },
  linkBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  linkStyle: {
    color: 'text.primary',
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    margin: '1rem',
  },
  titleStyle: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
}

const SmallImageWrapper = styled('div')(
  ({ theme }) => `
  position: relative;
  width: 100%;
  min-height: 260px;
  ${theme.breakpoints.down('md')} {
    min-height: 175px;
  }
`
)

const SmallPromoBlockSlice = ({ slice }) => {
  const kiboTheme = useTheme()
  const mobileView = useMediaQuery(kiboTheme.breakpoints.down('md'))

  return (
    <section>
      <Container maxWidth={'xl'} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: mobileView ? 'repeat(2, 48%)' : 'repeat(4, 24%)',
            gap: '30px',
          }}
        >
          {slice.items.map((item, index) => (
            <Box sx={styles.mainStyle} key={index}>
              <Box sx={styles.boxStyle}>
                <SmallImageWrapper>
                  <PrismicNextImage field={item.image} layout="fill" objectFit="cover" />
                </SmallImageWrapper>
              </Box>
              <Box sx={styles.boxStyle}>
                <Box sx={styles.titleStyle}>
                  <PrismicRichText field={item.title} />
                </Box>
                <Box sx={styles.titleStyle}>
                  <PrismicRichText field={item.sub_title} />
                </Box>
                <Box sx={styles.linkBoxStyle}>
                  {item.link_url_1 && (
                    <Link href={item.link_url_1} passHref>
                      <MuiLink underline="none" sx={styles.linkStyle}>
                        {item.link_title_1}
                      </MuiLink>
                    </Link>
                  )}
                  {item.link_url_2 && (
                    <Link href={item.link_url_2} passHref>
                      <MuiLink underline="none" sx={styles.linkStyle}>
                        {item.link_title_2}
                      </MuiLink>
                    </Link>
                  )}
                  {item.link_url_3 && (
                    <Link href={item.link_url_3} passHref>
                      <MuiLink underline="none" sx={styles.linkStyle}>
                        {item.link_title_3}
                      </MuiLink>
                    </Link>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </section>
  )
}

export default SmallPromoBlockSlice
