import { Request, response, Response } from 'express'
import { CreateUserService } from '../services/CreateUser.service'

class CreateUserController {
  async handle(request: Request, reponse: Response) {
    const { name, email, admin } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ name, email, admin })
    return response.json(user)
  }
}

export { CreateUserController }