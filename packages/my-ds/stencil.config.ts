import { Config } from '@stencil/core';
import {reactOutputTarget} from '@stencil/react-output-target'
export const config: Config = {
  namespace: 'my-ds',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'my-ds',
      proxiesFile: '../my-ds-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
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
