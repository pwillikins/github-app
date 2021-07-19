import express, { response } from 'express'

export const handleSuccess = (res: express.Response, view: string, status: number, data: any) => {
  return res.render(view, { data: data, status: status })
}

export const handleError = (res: express.Response, error: any) => {
  console.error('Handle Error:', error)
  return res.json({ error: error })
}