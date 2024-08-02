import {Plugin, PluginConfigService} from "@wocker/core";

import {ExampleController} from "./controllers/ExampleController";


@Plugin({
    name: "example",
    controllers: [ExampleController],
    providers: [
        PluginConfigService
    ]
})
export default class ExamplePlugin {}
