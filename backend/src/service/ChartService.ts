import { Poll } from '../entity/Poll';

export class ChartService {

  static async one(pollId: number, type: string | undefined) {
    if (!type) type = 'bar';
    const poll = Poll.findOne(pollId, { relations: ['options', 'options.votes'] });
    
  }

}
