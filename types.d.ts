declare module "*module.css" {
	const styles: {
		[className: string]: string;
	};
	export default styles;
}

declare module "*.svg" {
	import * as React from "react";

	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	export { ReactComponent };

	export default ReactComponent;
}

declare module "*.md";
