import {Cli} from "@wocker/core";
import {
    Injectable,
    DockerService,
    ProjectService,
    Plugin
} from "@wocker/ws";


@Injectable()
export default class ExamplePlugin extends Plugin {
    public constructor(
        protected dockerService: DockerService,
        protected projectService: ProjectService
    ) {
        super("example");
    }

    public install(cli: Cli) {
        cli.command("test:init")
            .action(() => this.init());
    }

    public async init() {
        const project = await this.projectService.get();

        return `Current project: ${project.name} (${project.containerName})\n`;
    }
};
