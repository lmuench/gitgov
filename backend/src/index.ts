import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Routes } from './routes';
import { Poll } from './entity/Poll';
import { Option } from './entity/Option';
import { Vote } from './entity/Vote';

createConnection().then(async connection => {

  // create express app
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  // register express routes from defined application routes
  Routes.forEach(route => {
    (app as any)[route.method](route.route, async (req: Request, res: Response, next: Function) => {
      const result = await (new (route.controller as any))[route.action](req, res, next);
      if (null === result || undefined === result) {
        res.sendStatus(404);
      }
      res.send(result);
    });
  });

  // setup express app here

  // start express server
  app.listen(3000);

  // clear database by using cascaded delete (clear() doesn't work with postgres)
  // await Poll.delete({});

  // insert new polls for test
  const poll = new Poll();
  poll.issue = ('https://github.com/user/repo/issues/42');
  poll.options = [
    new Option('Option A'),
    new Option('Option B'),
    new Option('Option C')
  ]
  poll.options[0].votes = [
    new Vote(),
    new Vote()
  ];
  poll.options[2].votes = [
    new Vote()
  ];
  await poll.save();

  console.log('Express server has started on port 3000.');

}).catch(error => console.log(error));
