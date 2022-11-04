import MyComponent from '../../../../slices/LargePromoBlockSlice'

export default {
  title: 'slices/LargePromoBlockSlice',
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      version: 'sktwi1xtmkfgx8626',
      items: [
        {
          title: [
            {
              type: 'paragraph',
              text: 'Culpa et laborum culpa labore aliqua non officia adipisicing proident minim do ut cupidatat. Ipsum nostrud in veniam et ea dolor ex. Proident pariatur et velit consequat dolor irure cupidatat esse commodo irure magna id id proident.',
              spans: [],
            },
          ],
          sub_title: [
            {
              type: 'paragraph',
              text: 'Reprehenderit ad mollit excepteur aliquip duis adipisicing. Occaecat fugiat reprehenderit officia excepteur sunt laborum ea esse in fugiat qui officia. Nostrud nisi magna excepteur nisi qui anim cupidatat est laborum ad laboris ea et proident.',
              spans: [],
            },
          ],
          image: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1586952518485-11b180e92764',
          },
          link_title_1: 'shade',
          link_url_1: 'built',
          link_title_2: 'below',
          link_url_2: 'book',
          link_title_3: 'phrase',
          link_url_3: 'thus',
        },
      ],
      primary: {},
      slice_type: 'large_promo_block_slice',
      id: '_Default',
    }}
  />
)
_Default.storyName = ''
