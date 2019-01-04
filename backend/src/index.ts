import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import { Poll } from "./entity/Poll";
import { Option } from "./entity/Option";
import { Vote } from "./entity/Vote";

createConnection().then(async connection => {

  // create express app
  const app = express();
  app.use(bodyParser.json());

  // register express routes from defined application routes
  Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
      const result = (new (route.controller as any))[route.action](req, res, next);
      if (result instanceof Promise) {
        result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
      } else if (result !== null && result !== undefined) {
        res.json(result);
      }
    });
  });

  // setup express app here
  // ...

  // start express server
  app.listen(3000);

  // insert new users for test
  const poll = new Poll();
  poll.options = [
    new Option('Option A'),
    new Option('Option B'),
    new Option('Option C')
  ]
  await poll.save();

  poll.options[0].votes = [
    new Vote(),
    new Vote()
  ];
  poll.options[0].votes.push(
    new Vote()
  );
  await poll.save();
  
  console.log("Express server has started on port 3000.");

}).catch(error => console.log(error));
