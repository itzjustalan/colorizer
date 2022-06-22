export class BaseApp {
	constructor(props) {
		({
			name: this.name,
      icon: this.icon,
			colors: this.colors,
      format: this.format,
      configName: this.configName,
      buildConfig: this.buildConfig,
		} = props);
	}
}
