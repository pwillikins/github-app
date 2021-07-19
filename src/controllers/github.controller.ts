import express from 'express'

import { handleError, handleSuccess } from '../utils/response-handler'
import { ResourceNotFoundError, ValidationError } from '../errors/errors'
import { mapErrorToHttp } from '../errors/error-mapper'

import { getRepoPulls } from '../services/github/get-repo-pulls'
import { getPullRequest, IParams } from '../services/github/get-pull-request'

const successStatus = 200

const routes = {
  index(req: express.Request, res: express.Response) {
    return res.render('index')
  },

  async getPulls(req: express.Request, res: express.Response) {
    
    try {
      if (!req.body.url) throw new ValidationError('Invalid URL')

      const response = await getRepoPulls(req.body.url)
      return handleSuccess(res, 'pull-requests', successStatus, response)
    } catch (ex) {
      const { status, message } = mapErrorToHttp(ex)
      return handleError(res, 'pull-requests', message, status)
    }
  },

  async getPullRequest(req: express.Request, res: express.Response) {
    try {
      if (!req.params || !req.params.username || !req.params.project || !req.params.number) throw new ValidationError("Invalid Params")
      
      const params: IParams = {
        username: req.params.username,
        project: req.params.project,
        number: req.params.number,
      }

      const response = await getPullRequest(params)
      return handleSuccess(res, 'pull-request', successStatus, response)
    } catch (ex) {
      const { status, message } = mapErrorToHttp(ex)
      return handleError(res, 'pull-request', message, status)
    }
  }
}

export default routes
