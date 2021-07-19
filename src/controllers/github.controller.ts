import express from 'express'

import { handleError, handleSuccess } from '../utils/response-handler'

import { getRepoPulls } from '../services/github/get-repo-pulls'
import { getPullRequest, IParams } from '../services/github/get-pull-request'

const successStatus = 200

const routes = {
  index(req: express.Request, res: express.Response) {
    return res.render('index')
  },

  async getPulls(req: express.Request, res: express.Response) {
    try {
      const response = await getRepoPulls(req.body.url)
      return handleSuccess(res, 'pull-requests', successStatus, response)
    } catch (ex) {
      return handleError(res, 'pull-requests', ex)
    }
  },

  async getPullRequest(req: express.Request, res: express.Response) {
    const params: IParams = {
      username: req.params.username,
      project: req.params.project,
      number: req.params.number,
    }
    
    try {
      const response = await getPullRequest(params)
      return handleSuccess(res, 'pull-request', successStatus, response)
    } catch (ex) {
      return handleError(res, 'pull-request', ex)
    }
  }
}

export default routes
