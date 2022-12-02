import { SliceZone } from '@prismicio/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import nextI18NextConfig from '../../next-i18next.config'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import { FullWidthLayout } from '@/components/layout'
import getCategoryTree from '@/lib/api/operations/get-category-tree'
import type { CategoryTreeResponse, NextPageWithLayout } from '@/lib/types'

import type { GetServerSidePropsContext } from 'next'
interface HomePageProps {
  page: any
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { locale, previewData } = context
  const categoriesTree: CategoryTreeResponse = await getCategoryTree()

  const client = createClient({ previewData })
  const page = await client.getSingle('homepage')

  return {
    props: {
      page,
      categoriesTree,
      ...(await serverSideTranslations(locale as string, ['common'], nextI18NextConfig)),
    },
  }
}

const Home: NextPageWithLayout<HomePageProps> = (props) => {
  const { page } = props
  return <SliceZone slices={page.data.slices} components={components} />
}

Home.getLayout = FullWidthLayout

export default Home
