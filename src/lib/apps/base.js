export class BaseApp {
	constructor(props) {
		({
			name: this.name,
      icon: this.icon,
			colors: this.colors,
      configName: this.configName,
      buildConfig: this.buildConfig,
		} = props);
	}
}
