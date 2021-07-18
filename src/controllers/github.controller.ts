import express from 'express'

import { handleError, handleSuccess } from '../utils/response-handler'

import { getRepoPulls } from '../services/github/get-github-repo'

const successStatus = 200

const routes = {
  index(req: express.Request, res: express.Response) {
    res.send('My Simple Github App')
  },

  async getPulls(req: express.Request, res: express.Response) {
    try {
      const response = await getRepoPulls('')

      return handleSuccess(res, successStatus, response.data)
    } catch (ex) {
      return handleError(res, ex)
    }
  }
}

export default routes
