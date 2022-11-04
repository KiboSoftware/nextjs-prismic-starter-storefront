import MyComponent from '../../../../slices/HomePageProductsSlice'

export default {
  title: 'slices/HomePageProductsSlice',
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      version: 'sktwi1xtmkfgx8626',
      items: [{ recently_viewed_products: 'explanation', top_sellings_products: 'accurate' }],
      primary: {
        recently_viewed_title: [
          {
            type: 'paragraph',
            text: 'Tempor est culpa aliquip eiusmod reprehenderit esse. Amet consequat qui laboris Lorem consequat incididunt qui aute deserunt excepteur ipsum excepteur eiusmod culpa.',
            spans: [],
          },
        ],
        recently_viewed_product_codes: 'cake',
        top_sellings_title: [
          { type: 'paragraph', text: 'Labore et dolor velit sit ea ea.', spans: [] },
        ],
        top_sellings_product_codes: 'fun',
      },
      slice_type: 'home_page_products_slice',
      id: '_Default',
    }}
  />
)
_Default.storyName = ''
