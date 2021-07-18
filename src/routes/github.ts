import express from 'express'

const router = express.Router()

// Require controller modules.
import GithubController from '../controllers/github.controller'

/// GITHUB ROUTES ///

// GET Github home page.
router.get("/", GithubController.index)

// GET Github repo pull requests.
router.get("/pull-requests", GithubController.getPulls)

export default router