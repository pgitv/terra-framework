'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _UserDataModule = require('./UserData.module.scss');

var _UserDataModule2 = _interopRequireDefault(_UserDataModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_UserDataModule2.default);

var propTypes = {
  /**
   * More information about the user.
   * Displayed next to the userPhoto and below the userName.
   */
  userDetail: _propTypes2.default.string,
  /**
   * The name to be displayed next to the userPhoto.
   */
  userName: _propTypes2.default.string,
  /**
   * The photo to be displayed next to the userName and userDetail.
   */
  userPhoto: _propTypes2.default.element
};

var UserData = function UserData(_ref) {
  var userDetail = _ref.userDetail,
      userName = _ref.userName,
      userPhoto = _ref.userPhoto,
      customProps = _objectWithoutProperties(_ref, ['userDetail', 'userName', 'userPhoto']);

  var userClassNames = cx(['user-data', customProps.className]);

  var userInfo = void 0;
  if (userName || userDetail) {
    userInfo = _react2.default.createElement(
      'div',
      { className: cx('user-info') },
      !!userName && _react2.default.createElement(
        'div',
        { className: cx('name') },
        userName
      ),
      !!userDetail && _react2.default.createElement(
        'div',
        { className: cx('detail') },
        userDetail
      )
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: userClassNames }),
    !!userPhoto && _react2.default.cloneElement(userPhoto, { className: cx('photo') }),
    userInfo
  );
};

UserData.propTypes = propTypes;

exports.default = UserData;