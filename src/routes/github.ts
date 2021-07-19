import express from 'express'

const router = express.Router()

// Require controller modules.
import GithubController from '../controllers/github.controller'

/// GITHUB ROUTES ///

// GET Github home page.
router.get("/", GithubController.index)

// GET Github repo pull requests.
router.post("/pull-requests", GithubController.getPulls)

router.get("/pull-requests/:username/:project/:number", GithubController.getPullRequest)

export default router