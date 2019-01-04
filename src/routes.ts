import {PollController} from "./controller/PollController";

export const Routes = [{
    method: "get",
    route: "/polls",
    controller: PollController,
    action: "all"
}, {
    method: "get",
    route: "/polls/:id",
    controller: PollController,
    action: "one"
}, {
    method: "post",
    route: "/polls",
    controller: PollController,
    action: "save"
}, {
    method: "delete",
    route: "/polls",
    controller: PollController,
    action: "remove"
}];