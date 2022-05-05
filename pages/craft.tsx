import React, { useState, useEffect } from 'react'
import { Typography, Paper, Grid } from '@material-ui/core'

import { Toolbox } from '@/components/craft/editor/Toolbox'
import { SettingsPanel } from '@/components/craft/editor/SettingsPanel'
import { Topbar } from '@/components/craft/editor/Topbar'

import { Container } from '@/components/craft/Container'
import { Button } from '@/components/craft/Button'
import { Card, CardBottom, CardTop } from '@/components/craft/Card'
import { Text } from '@/components/craft/Text'

import { Editor, Frame, Element } from '@craftjs/core'
import { PCard } from '@/components/craft/PCard'
export default function Craft() {
  return (
    <div style={{ margin: '0 auto', width: '800px' }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, Button, Text, CardTop, CardBottom, Container, PCard }}>
        <Topbar />
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button size="small" variant="outlined">
                  Click
                </Button>
                <Text size="small" text="Hi world!" />
                <Element is={Container} padding={6} background="#999">
                  <Text size="small" text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  )
}
