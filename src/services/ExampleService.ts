import {
    Injectable,
    ProjectService,
    PluginConfigService
} from "@wocker/core";


@Injectable()
export class ExampleService {
    public constructor(
        protected readonly pluginConfigService: PluginConfigService,
        protected readonly projectService: ProjectService
    ) {}

    public async init(name?: string): Promise<string> {
        if(name) {
            await this.projectService.cdProject(name);
        }

        const project = await this.projectService.get();

        const pluginDir = this.pluginConfigService.dataPath("/");

        return `Current project: ${project.name} (${project.containerName})\n Plugin dir: ${pluginDir}`;
    }
}
