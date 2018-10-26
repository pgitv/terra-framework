import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import UpgradeGuide from '../../../../docs/UPGRADE-GUIDE.md';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={UpgradeGuide}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
  />
);

export default DocPage;
