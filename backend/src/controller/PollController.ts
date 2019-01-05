import { NextFunction, Request, Response } from 'express';
import { Poll } from '../entity/Poll';

export class PollController {

  async all(request: Request, response: Response, next: NextFunction) {
    return Poll.find({ relations: ['options', 'options.votes'] });
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return Poll.findOne(request.params.id, { relations: ['options', 'options.votes'] });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    return Poll.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const pollToRemove = await Poll.findOne(request.params.id)
    return await Poll.remove(pollToRemove);
  }

}
