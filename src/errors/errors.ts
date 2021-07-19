export class ResourceNotFoundError extends Error {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
    this.stack = new Error().stack
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
    this.stack = new Error().stack
  }
}