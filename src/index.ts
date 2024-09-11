import {Plugin, PluginConfigService} from "@wocker/core";

import {ExampleController} from "./controllers/ExampleController";
import {ExampleService} from "./services/ExampleService";


@Plugin({
    name: "example",
    controllers: [ExampleController],
    providers: [
        PluginConfigService,
        ExampleService
    ]
})
export default class ExamplePlugin {}
