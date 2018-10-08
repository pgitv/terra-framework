'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _package = require('../../../../package.json');

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _SlidePanel = require('!raw-loader!../../../../src/SlidePanel');

var _SlidePanel2 = _interopRequireDefault(_SlidePanel);

var _DefaultSlidePanel = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultSlidePanel.jsx');

var _DefaultSlidePanel2 = _interopRequireDefault(_DefaultSlidePanel);

var _SlidePanelOverlayTest = require('!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelOverlay.test.jsx');

var _SlidePanelOverlayTest2 = _interopRequireDefault(_SlidePanelOverlayTest);

var _SlidePanelSquishTest = require('!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelSquish.test.jsx');

var _SlidePanelSquishTest2 = _interopRequireDefault(_SlidePanelSquishTest);

var _SlidePanelStartTest = require('!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelStart.test.jsx');

var _SlidePanelStartTest2 = _interopRequireDefault(_SlidePanelStartTest);

var _SlidePanelEndTest = require('!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelEnd.test.jsx');

var _SlidePanelEndTest2 = _interopRequireDefault(_SlidePanelEndTest);

var _SlidePanelSmallTest = require('!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelSmall.test.jsx');

var _SlidePanelSmallTest2 = _interopRequireDefault(_SlidePanelSmallTest);

var _SlidePanelLargeTest = require('!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelLarge.test.jsx');

var _SlidePanelLargeTest2 = _interopRequireDefault(_SlidePanelLargeTest);

var _SlidePanelFullscreenTest = require('!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelFullscreen.test.jsx');

var _SlidePanelFullscreenTest2 = _interopRequireDefault(_SlidePanelFullscreenTest);

var _SlidePanelFillTest = require('!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelFill.test.jsx');

var _SlidePanelFillTest2 = _interopRequireDefault(_SlidePanelFillTest);

var _SlidePanelNoFillTest = require('!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelNoFill.test.jsx');

var _SlidePanelNoFillTest2 = _interopRequireDefault(_SlidePanelNoFillTest);

var _DefaultSlidePanel3 = require('../example/DefaultSlidePanel');

var _DefaultSlidePanel4 = _interopRequireDefault(_DefaultSlidePanel3);

var _SlidePanelOverlay = require('../../test/slide-panel/SlidePanelOverlay.test');

var _SlidePanelOverlay2 = _interopRequireDefault(_SlidePanelOverlay);

var _SlidePanelSquish = require('../../test/slide-panel/SlidePanelSquish.test');

var _SlidePanelSquish2 = _interopRequireDefault(_SlidePanelSquish);

var _SlidePanelStart = require('../../test/slide-panel/SlidePanelStart.test');

var _SlidePanelStart2 = _interopRequireDefault(_SlidePanelStart);

var _SlidePanelEnd = require('../../test/slide-panel/SlidePanelEnd.test');

var _SlidePanelEnd2 = _interopRequireDefault(_SlidePanelEnd);

var _SlidePanelSmall = require('../../test/slide-panel/SlidePanelSmall.test');

var _SlidePanelSmall2 = _interopRequireDefault(_SlidePanelSmall);

var _SlidePanelLarge = require('../../test/slide-panel/SlidePanelLarge.test');

var _SlidePanelLarge2 = _interopRequireDefault(_SlidePanelLarge);

var _SlidePanelFullscreen = require('../../test/slide-panel/SlidePanelFullscreen.test');

var _SlidePanelFullscreen2 = _interopRequireDefault(_SlidePanelFullscreen);

var _SlidePanelFill = require('../../test/slide-panel/SlidePanelFill.test');

var _SlidePanelFill2 = _interopRequireDefault(_SlidePanelFill);

var _SlidePanelNoFill = require('../../test/slide-panel/SlidePanelNoFill.test');

var _SlidePanelNoFill2 = _interopRequireDefault(_SlidePanelNoFill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-framework/tree/master/packages/' + _package.name,
    examples: [{
      title: 'SlidePanel - Controlled Demo',
      example: _react2.default.createElement(_DefaultSlidePanel4.default, null),
      source: _DefaultSlidePanel2.default
    }, {
      title: 'SlidePanel - Behavior - Overlay',
      example: _react2.default.createElement(_SlidePanelOverlay2.default, null),
      source: _SlidePanelOverlayTest2.default
    }, {
      title: 'SlidePanel - Behavior - Squish',
      example: _react2.default.createElement(_SlidePanelSquish2.default, null),
      source: _SlidePanelSquishTest2.default
    }, {
      title: 'SlidePanel - Position - Start',
      example: _react2.default.createElement(_SlidePanelStart2.default, null),
      source: _SlidePanelStartTest2.default
    }, {
      title: 'SlidePanel - Position - End',
      example: _react2.default.createElement(_SlidePanelEnd2.default, null),
      source: _SlidePanelEndTest2.default
    }, {
      title: 'SlidePanel - Size - Small',
      example: _react2.default.createElement(_SlidePanelSmall2.default, null),
      source: _SlidePanelSmallTest2.default
    }, {
      title: 'SlidePanel - Size - Large',
      example: _react2.default.createElement(_SlidePanelLarge2.default, null),
      source: _SlidePanelLargeTest2.default
    }, {
      title: 'SlidePanel - Fullscreen',
      example: _react2.default.createElement(_SlidePanelFullscreen2.default, null),
      source: _SlidePanelFullscreenTest2.default
    }, {
      title: 'SlidePanel - Fill',
      example: _react2.default.createElement(_SlidePanelFill2.default, null),
      source: _SlidePanelFillTest2.default
    }, {
      title: 'SlidePanel - Fill Off',
      example: _react2.default.createElement(_SlidePanelNoFill2.default, null),
      source: _SlidePanelNoFillTest2.default
    }],
    propsTables: [{
      componentSrc: _SlidePanel2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;