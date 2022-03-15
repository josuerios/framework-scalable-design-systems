import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target'
import { angularOutputTarget } from '@stencil/angular-output-target'

export const config: Config = {
  namespace: 'my-ds',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'my-ds',
      proxiesFile: '../my-ds-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: 'my-ds',
      directivesProxyFile: '../my-ds-angular-workspace/projects/my-ds-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../my-ds-angular-workspace/projects/my-ds-angular/src/lib/stencil-generated/index.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
