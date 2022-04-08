import React from 'react'

import { PageElementsProvider as PbPageElementsProvider } from '~/contexts/PageElements'
import { createBackground } from '~/modifiers/styles/background'
import { createBorder } from '~/modifiers/styles/border'
import { createHeight } from '~/modifiers/styles/height'
import { createHorizontalAlign } from '~/modifiers/styles/horizontalAlign'
import { createMargin } from '~/modifiers/styles/margin'
import { createPadding } from '~/modifiers/styles/padding'
import { createShadow } from '~/modifiers/styles/shadow'
import { createText } from '~/modifiers/styles/text'
import { createVerticalAlign } from '~/modifiers/styles/verticalAlign'
import { createWidth } from '~/modifiers/styles/width'
import { createBlock } from '~/renderers/block'
import { createButton } from '~/renderers/button'
import { createCell } from '~/renderers/cell'
import { createDocument } from '~/renderers/document'
import { createGrid } from '~/renderers/grid'
import { createHeading } from '~/renderers/heading'
import { createImage } from '~/renderers/image'
import { createList } from '~/renderers/list'
import { createParagraph } from '~/renderers/paragraph'

const colors = {
  text: '#231010',
  primary: '#fa5723',
  secondary: 'purple',
  tertiary: 'cyan',
}

const fonts = {
  default: "'Trebuchet MS', sans-serif;",
}

const heading = {
  fontFamily: fonts.default,
  color: colors.text,
  fontWeight: 'bold',
  margin: 0,
  padding: 0,
}

// Theme
export const theme: any = {
  breakpoints: {
    desktop: { mediaQuery: '@media (max-width: 4000px)' },
    tablet: { mediaQuery: '@media (max-width: 991px)' },
    'mobile-landscape': { mediaQuery: '@media (max-width: 767px)' },
    'mobile-portrait': { mediaQuery: '@media (max-width: 478px)' },
  },
  styles: {
    colors,
    typography: {
      paragraph: {
        fontFamily: fonts.default,
        fontSize: 14,
        color: colors.text,
      },
      heading1: {
        ...heading,
        fontSize: 32,
      },
      heading2: {
        ...heading,
        fontSize: 24,
      },
      heading3: {
        ...heading,
        fontSize: 16,
      },
    },
  },
}
export const PageElementsProvider: React.FC = ({ children }) => (
  <PbPageElementsProvider
    theme={theme}
    renderers={{
      block: createBlock(),
      button: createButton(),
      cell: createCell(),
      document: createDocument(),
      grid: createGrid(),
      heading: createHeading(),
      list: createList(),
      image: createImage(),
      paragraph: createParagraph(),
    }}
    modifiers={{
      styles: {
        background: createBackground(),
        border: createBorder(),
        height: createHeight(),
        horizontalAlign: createHorizontalAlign(),
        margin: createMargin(),
        padding: createPadding(),
        shadow: createShadow(),
        text: createText(),
        verticalAlign: createVerticalAlign(),
        width: createWidth(),
      },
    }}
  >
    {children}
  </PbPageElementsProvider>
)
