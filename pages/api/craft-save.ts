import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs/promises'
async function craftSave(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id, content } = JSON.parse(req.body)
    const b = await fs.writeFile(`./${id}.json`, content, { encoding: 'utf8' })
    res.json({ id })
    return
  } catch (error) {
    console.error(error)
    res.json({ error })
  }
}
export default craftSave
