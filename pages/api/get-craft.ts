import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs/promises'
async function getCraft(req: NextApiRequest, res: NextApiResponse) {
  try {
    const page = await fs.readFile('./test.json')
    res.json(page)
  } catch (e) {
    console.error(e)
    res.status(500)
  }
}

export default getCraft
