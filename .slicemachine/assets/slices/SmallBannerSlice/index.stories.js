import MyComponent from '../../../../slices/SmallBannerSlice'

export default {
  title: 'slices/SmallBannerSlice',
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      version: 'sktwi1xtmkfgx8626',
      items: [{}],
      primary: {
        title: [{ type: 'heading1', text: 'Silence', spans: [] }],
        subtitle: [
          {
            type: 'paragraph',
            text: 'Tempor ullamco velit excepteur duis ad magna non consectetur consectetur. Consectetur deserunt reprehenderit nisi dolore irure. Nisi eu commodo cupidatat occaecat enim ipsum mollit.',
            spans: [],
          },
        ],
        call_to_action_link: 'pie',
        call_to_action_text: [
          {
            type: 'paragraph',
            text: 'Qui deserunt amet enim reprehenderit minim enim. Nulla fugiat eu anim occaecat et eiusmod in commodo nisi laborum magna commodo esse.',
            spans: [],
          },
        ],
      },
      slice_type: 'small_banner_slice',
      id: '_Default',
    }}
  />
)
_Default.storyName = ''
