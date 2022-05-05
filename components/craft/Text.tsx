import React, { useState, useEffect } from 'react'
import ContentEditable from 'react-contenteditable'
import { useNode } from '@craftjs/core'
import { FormControl, Slider, FormLabel } from '@mui/material'

export const Text = ({ text, fontSize }: any) => {
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
      <ContentEditable
        html={text}
        disabled={!editable}
        onChange={(e) =>
          setProp((props: any) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')))
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px` }}
      />
    </div>
  )
}

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }))

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props: any) => (props.fontSize = value))
          }}
        />
      </FormControl>
    </>
  )
}

Text.craft = {
  props: {
    text: 'Hi',
    fontSize: 20,
  },
  rules: {
    canDrag: (node: any) => node.data.props.text != 'Drag',
  },
  related: {
    settings: TextSettings,
  },
}
