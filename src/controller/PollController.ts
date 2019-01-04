import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Poll} from "../entity/Poll";

export class PollController {

    private pollRepository = getRepository(Poll);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.pollRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.pollRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.pollRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.pollRepository.findOne(request.params.id);
        await this.pollRepository.remove(userToRemove);
    }

}
