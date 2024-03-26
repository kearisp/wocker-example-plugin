import {
    Controller,
    Command,
    Option,
    DockerService,
    ProjectService
} from "@wocker/core";


@Controller()
export class ExampleController {
    public constructor(
        protected dockerService: DockerService,
        protected projectService: ProjectService
    ) {}

    @Command("test:init")
    public async init(
        @Option("name", {
            type: "string",
            alias: "n"
        })
        name?: string
    ) {
        if(name) {
            await this.projectService.cdProject(name);
        }

        const project = await this.projectService.get();

        return `Current project: ${project.name} (${project.containerName})\n`;
    }
};
