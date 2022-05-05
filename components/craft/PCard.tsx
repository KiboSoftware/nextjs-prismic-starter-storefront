/* tslint:disable */
import React, { useState, useEffect } from 'react'
import { Text } from './Text'
import { Button } from './Button'
import { Container } from './Container'
import { useNode, Element } from '@craftjs/core'
import ProductCard from '@/components/product/ProductCard/ProductCard'
import { FormControl, TextField } from '@mui/material'
// Notice how CardTop and CardBottom do not specify the drag connector. This is because we won't be using these components as draggables; adding the drag handler would be pointless.

// export const PCardTop = ({ children }: any) => {
//   const {
//     connectors: { connect },
//   } = useNode() as any
//   return (
//     <div ref={connect} className="text-only">
//       {children}
//     </div>
//   )
// }

// PCardTop.craft = {
//   rules: {
//     // Only accept Text
//     canMoveIn: (incomingNodes: any) =>
//       incomingNodes.every((incomingNode: any) => incomingNode.data.type === Text),
//   },
// }

// export const PCardBottom = ({ children }: any) => {
//   const {
//     connectors: { connect },
//   } = useNode() as any
//   return <div ref={connect}>{children}</div>
// }

// PCardBottom.craft = {
//   rules: {
//     // Only accept Buttons
//     canMoveIn: (incomingNodes: any) =>
//       incomingNodes.every((incomingNode: any) => incomingNode.data.type === Button),
//   },
// }

export const PCard = (props: any) => {
  const {
    connectors: { connect, drag },
    selected,
    dragged,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }))
  const [editable, setEditable] = useState(false)

  useEffect(() => {
    !selected && setEditable(false)
  }, [selected])
  return (
    <div ref={(ref: any) => connect(drag(ref))} onClick={(e) => setEditable(true)}>
      <ProductCard {...props} />
    </div>
  )
}

const PCardSettings = () => {
  const {
    actions: { setProp },
    title,
  } = useNode((node) => ({
    title: node.data.props.title,
  }))

  return (
    <>
      <FormControl size="small" component="fieldset">
        <TextField
          value={title}
          onChange={(e) => {
            setProp((props: any) => (props.title = e.target.value))
          }}
        />
      </FormControl>
    </>
  )
}

PCard.craft = {
  props: {
    title: 'Shorts',
    imageUrl: `https://cdn-sb.mozu.com/26507-41315/cms/41315/files/03b5eb38-6cc2-4b9f-90b2-a8dbd2b90c29?_mzcb=_1637255664236`,
    link: '/product/Hammock_015',
    price: '$19.98',
  },
  related: {
    settings: PCardSettings,
  },
}
