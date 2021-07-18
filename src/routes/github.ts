import express from 'express'

const router = express.Router()

// Require controller modules.
import GithubController from '../controllers/githubController'

/// GITHUB ROUTES ///

// GET Github home page.
router.get("/", GithubController.index)

export default router