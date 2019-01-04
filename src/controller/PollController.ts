import { NextFunction, Request, Response } from "express";
import { Poll } from "../entity/Poll";

export class PollController {

    async all(request: Request, response: Response, next: NextFunction) {
        return Poll.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return Poll.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return Poll.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await Poll.findOne(request.params.id);
        await Poll.remove(userToRemove);
    }

}
