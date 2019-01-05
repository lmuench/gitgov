import { Poll } from '../entity/Poll';
const window = require('svgdom');
const SVG = require('svg.js')(window);
const document = window.document;

export class ChartService {

  static generateSvgChart(poll: Poll) { 
    const draw = SVG(document.documentElement);    
    draw.rect(100, 100).fill('yellow').move(50, 50);
    return draw.svg();
  }

}
