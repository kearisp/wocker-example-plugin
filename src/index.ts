import {Module} from "@wocker/core";

import {ExampleController} from "./controllers/ExampleController";


@Module({
    name: "example",
    controllers: [ExampleController]
})
export default class ExamplePlugin {}
