import React, { useState, useEffect } from 'react'
import { Typography, Paper, Grid } from '@material-ui/core'

import { Toolbox } from '@/components/craft/editor/Toolbox'
import { SettingsPanel } from '@/components/craft/editor/SettingsPanel'
import { Topbar } from '@/components/craft/editor/Topbar'

import { Container } from '@/components/craft/Container'
import { Button } from '@/components/craft/Button'
import { Card, CardBottom, CardTop } from '@/components/craft/Card'
import { PCard } from '@/components/craft/PCard'
import { Text } from '@/components/craft/Text'

import { Editor, Frame, Element } from '@craftjs/core'
import fs from 'fs/promises'

export async function getServerSideProps() {
  const page = await fs.readFile('./test.json', { encoding: 'utf-8' })
  return {
    props: {
      page,
    },
  }
}

export default function CraftPub(props: any) {
  const json = props.page

  return (
    <div style={{ margin: '0 auto', width: '800px' }}>
      <Editor
        resolver={{ Card, Button, Text, CardTop, CardBottom, Container, PCard }}
        enabled={false}
      >
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame data={json}>
              <Element is={Container} padding={5} background="#eee" canvas></Element>
            </Frame>
          </Grid>
        </Grid>
      </Editor>
    </div>
  )
}
