import { fetchContent } from '@/lib/api/util/fetch-page'
import { Element } from '~/components/Element'

import type { NextPage } from 'next'

export async function getServerSideProps(context: any) {
  const { id } = context.query
  const { content } = await fetchContent(id)
  return { props: { content } }
}
const Webiny: NextPage = (props: any) => {
  return (
    <>
      <h1>test</h1>
      <div className="webiny-pb-page webiny-pb-media-query--desktop">
        <Element element={props.content} />
      </div>
    </>
  )
}

export default Webiny
