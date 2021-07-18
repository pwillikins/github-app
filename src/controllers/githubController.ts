import express from 'express'

const routes = {
  index(req: express.Request, res: express.Response) {
    res.send('My Simple Github App')
  }
}

export default routes
