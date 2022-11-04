import MyComponent from '../../../../slices/SmallPromoBlockSlice'

export default {
  title: 'slices/SmallPromoBlockSlice',
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
              text: 'Proident esse irure consequat exercitation eu magna amet irure proident irure reprehenderit labore est mollit.',
              spans: [],
            },
          ],
          sub_title: [
            {
              type: 'paragraph',
              text: 'Tempor aliqua quis sunt eu consectetur sint est id id do ad quis commodo cupidatat laboris.',
              spans: [],
            },
          ],
          image: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a',
          },
          link_title_1: 'principle',
          link_url_1: 'leather',
          link_title_2: 'new',
          link_url_2: 'good',
          link_title_3: 'prize',
          link_url_3: 'usually',
        },
      ],
      primary: {},
      slice_type: 'small_promo_block_slice',
      id: '_Default',
    }}
  />
)
_Default.storyName = ''
