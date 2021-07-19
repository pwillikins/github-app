import { ResourceNotFoundError, ValidationError} from './errors'

export function mapErrorToHttp(error: Error): { status: number; message: string } {
  if (error instanceof ResourceNotFoundError)
    return { status: 404, message: error.message }
  if (error instanceof ValidationError)
    return { status: 400, message: error.message }
    
  return { status: 500, message: 'An unexpected error has occurred' }
}