import {
    Controller,
    Command,
    Option
} from "@wocker/core";

import {ExampleService} from "../services/ExampleService";


@Controller()
export class ExampleController {
    public constructor(
        protected readonly exampleService: ExampleService
    ) {}

    @Command("example")
    public async init(
        @Option("name", {
            type: "string",
            alias: "n"
        })
        name?: string
    ): Promise<string> {
        return this.exampleService.init(name);
    }
}
