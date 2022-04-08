import vercelFetch from '@vercel/fetch'
const fetch = vercelFetch()
const webinyUrl = 'https://d38d86ob69fw1p.cloudfront.net/graphql'

const query = `query PbGetPublishedPage($id: ID, $path: String, $returnNotFoundPage: Boolean, $returnErrorPage: Boolean, $preview: Boolean) {
  pageBuilder {
    getPublishedPage(id: $id, path: $path, returnNotFoundPage: $returnNotFoundPage, returnErrorPage: $returnErrorPage, preview: $preview) {
      data {
        id
        title
        url
        version
        publishedOn
        content
        createdBy {
          displayName
          __typename
        }
        __typename
      }
      error {
        code
        message
        __typename
      }
      __typename
    }
    __typename
  }
}`

export const fetchContent = async (id: string) => {
  const body = {
    query,
    variables: {
      id,
      preview: true,
      returnErrorPage: true,
      returnNotFoundPage: true,
    },
  }
  const response = await fetch(webinyUrl, {
    method: 'POST',
    headers: {
      'x-tenant': 'root',
    },
    body: JSON.stringify(body),
  })
  const pbResponse = await response.json()
  return pbResponse.data.pageBuilder.getPublishedPage.data
  //return page.data.pageBuilder.getPage.data
}

/*
unpublished page query

// const query = `
// query PbGetPage($id: ID!) {
//     pageBuilder {
//       getPage(id: $id) {
//         data {
//           id
//           pid
//           title
//           path
//           version
//           locked
//           status
//           category {
//             url
//             name
//             slug
//             __typename
//           }
//           revisions {
//             id
//             title
//             status
//             locked
//             version
//             savedOn
//             __typename
//           }
//           createdBy {
//             id
//             __typename
//           }
//           content
//           savedOn
//           __typename
//           settings {
//             general {
//               snippet
//               image {
//                 id
//                 src
//               }
//               tags
//               layout
//             }
//           }
//           settings {
//             seo {
//               title
//               description
//               meta {
//                 name
//                 content
//               }
//             }
//           }
//           settings {
//             social {
//               image {
//                 id
//                 src
//               }
//               title
//               description
//               meta {
//                 property
//                 content
//               }
//             }
//           }
//           settings {
//             general {
//               snippet
//               image {
//                 id
//                 src
//               }
//               tags
//               layout
//             }
//           }
//           settings {
//             seo {
//               title
//               description
//               meta {
//                 name
//                 content
//               }
//             }
//           }
//           settings {
//             social {
//               image {
//                 id
//                 src
//               }
//               title
//               description
//               meta {
//                 property
//                 content
//               }
//             }
//           }
//           settings {
//             general {
//               snippet
//               image {
//                 id
//                 src
//               }
//               tags
//               layout
//             }
//           }
//           settings {
//             seo {
//               title
//               description
//               meta {
//                 name
//                 content
//               }
//             }
//           }
//           settings {
//             social {
//               image {
//                 id
//                 src
//               }
//               title
//               description
//               meta {
//                 property
//                 content
//               }
//             }
//           }
//           settings {
//             general {
//               snippet
//               image {
//                 id
//                 src
//               }
//               tags
//               layout
//             }
//           }
//           settings {
//             seo {
//               title
//               description
//               meta {
//                 name
//                 content
//               }
//             }
//           }
//           settings {
//             social {
//               image {
//                 id
//                 src
//               }
//               title
//               description
//               meta {
//                 property
//                 content
//               }
//             }
//           }
//           settings {
//             general {
//               snippet
//               image {
//                 id
//                 src
//               }
//               tags
//               layout
//             }
//           }
//           settings {
//             seo {
//               title
//               description
//               meta {
//                 name
//                 content
//               }
//             }
//           }
//           settings {
//             social {
//               image {
//                 id
//                 src
//               }
//               title
//               description
//               meta {
//                 property
//                 content
//               }
//             }
//           }
//           settings {
//             general {
//               snippet
//               image {
//                 id
//                 src
//               }
//               tags
//               layout
//             }
//           }
//           settings {
//             seo {
//               title
//               description
//               meta {
//                 name
//                 content
//               }
//             }
//           }
//           settings {
//             social {
//               image {
//                 id
//                 src
//               }
//               title
//               description
//               meta {
//                 property
//                 content
//               }
//             }
//           }
//         }
//         error {
//           code
//           data
//           message
//           __typename
//         }
//         __typename
//       }
//       __typename
//     }
//   }
//   `
*/
