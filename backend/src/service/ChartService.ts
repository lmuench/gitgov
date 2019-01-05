import { Poll } from '../entity/Poll';
const window = require('svgdom');
const SVG = require('svg.js')(window);
const document = window.document;

export class ChartService {

  static generateSvgChart(poll: Poll) { 
    const draw = SVG(document.documentElement);
    const lengthFactor = ChartService.calculateLengthFactor(poll, 200);
    
    poll.options.forEach((option, i) => {
      draw.rect(option.votes.length * lengthFactor, 15).radius(3).fill('#7fffd4').move(50, 50 + 30 * i);
    })
    
    return draw.svg();
  }

  private static calculateLengthFactor(poll: Poll, maxLength: number): number {
    const highestVoteCount = ChartService.getHighestVoteCount(poll);
    if (highestVoteCount === 0) return 0;
    return maxLength / highestVoteCount;
  }

  private static getHighestVoteCount(poll: Poll) {
    const voteCountPerOption = poll.options.map(option => option.votes.length);
    return voteCountPerOption.sort((a, b) => b - a)[0];
  }

}
