import {
    Controller,
    Command,
    Option,
    DockerService,
    ProjectService,
    PluginConfigService
} from "@wocker/core";


@Controller()
export class ExampleController {
    public constructor(
        protected readonly dockerService: DockerService,
        protected readonly projectService: ProjectService,
        protected readonly pluginConfigService: PluginConfigService
    ) {}

    @Command("example")
    public async init(
        @Option("name", {
            type: "string",
            alias: "n"
        })
        name?: string
    ): Promise<string> {
        if(name) {
            await this.projectService.cdProject(name);
        }

        const project = await this.projectService.get();

        return `Current project: ${project.name} (${project.containerName})\n`;
    }
};
