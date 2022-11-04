import MyComponent from '../../../../slices/HeroCarouselSlice'

export default {
  title: 'slices/HeroCarouselSlice',
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
              text: 'Ipsum cupidatat tempor ut dolor velit aliquip culpa sit laboris. Occaecat esse do non et eiusmod quis aliquip.',
              spans: [],
            },
          ],
          subtitle: [
            {
              type: 'paragraph',
              text: 'Commodo qui exercitation esse nisi consectetur. Cupidatat deserunt mollit irure ipsum commodo qui non aliquip eiusmod adipisicing cillum Lorem.',
              spans: [],
            },
          ],
          description: [
            {
              type: 'paragraph',
              text: 'Reprehenderit duis sint eu qui do anim quis deserunt nulla mollit consequat. Velit fugiat fugiat velit qui esse enim proident aute.',
              spans: [],
            },
          ],
          button_link_title: 'spider',
          button_link_url: 'lack',
          desktop_image: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1586952518485-11b180e92764',
          },
          mobile_image: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b',
          },
          image_alt_text: 'wheel',
        },
      ],
      primary: {},
      slice_type: 'hero_carousel_slice',
      id: '_Default',
    }}
  />
)
_Default.storyName = ''
