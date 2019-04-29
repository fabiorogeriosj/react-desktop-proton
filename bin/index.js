'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _protonNative = require('proton-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_Component) {
  _inherits(Example, _Component);

  function Example() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      count: 10
    }, _this.addCount = function () {
      _this.setState({
        count: _this.state.count + 10
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _protonNative.App,
        null,
        _react2.default.createElement(
          _protonNative.Menu,
          { label: 'Arquivos' },
          _react2.default.createElement(
            _protonNative.Menu.Item,
            null,
            'Menu 1 aqui top'
          )
        ),
        _react2.default.createElement(
          _protonNative.Window,
          { title: 'App Demo F\xE1bio', margined: true },
          _react2.default.createElement(
            _protonNative.Grid,
            null,
            _react2.default.createElement(
              _protonNative.Box,
              { row: 0, column: 0 },
              _react2.default.createElement(
                _protonNative.Text,
                null,
                'Contador est\xE1 em: ',
                this.state.count
              ),
              _react2.default.createElement(
                _protonNative.Button,
                { onClick: this.addCount },
                'Add contador!'
              ),
              _react2.default.createElement(
                _protonNative.Checkbox,
                null,
                'This is a checkbox'
              ),
              _react2.default.createElement(_protonNative.ColorButton, null),
              _react2.default.createElement(_protonNative.Separator, null),
              _react2.default.createElement(_protonNative.ProgressBar, { value: this.state.count }),
              _react2.default.createElement(_protonNative.Slider, { value: 0 }),
              _react2.default.createElement(_protonNative.Spinbox, { value: 10 }),
              _react2.default.createElement(
                _protonNative.Tab,
                null,
                _react2.default.createElement(_protonNative.TextInput, { label: 'Tab1' }),
                _react2.default.createElement(_protonNative.TextInput, { label: 'Tab2' })
              )
            ),
            _react2.default.createElement(
              _protonNative.Box,
              { row: 0, column: 1 },
              _react2.default.createElement(
                _protonNative.Group,
                { title: 'Login' },
                _react2.default.createElement(
                  _protonNative.Form,
                  { padded: true },
                  _react2.default.createElement(_protonNative.TextInput, { label: 'Username' }),
                  _react2.default.createElement(_protonNative.TextInput, { label: 'Password', secure: true }),
                  _react2.default.createElement(
                    _protonNative.Picker,
                    null,
                    _react2.default.createElement(
                      _protonNative.Picker.Item,
                      null,
                      'Option 1'
                    ),
                    _react2.default.createElement(
                      _protonNative.Picker.Item,
                      null,
                      'Option 2'
                    ),
                    _react2.default.createElement(
                      _protonNative.Picker.Item,
                      null,
                      'Option 3'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _protonNative.StyledText,
                { style: { fontSize: 16 } },
                'This is some text drawn onto an ',
                _react2.default.createElement(
                  _protonNative.StyledText,
                  { style: { color: 'red' } },
                  'Area!'
                )
              ),
              _react2.default.createElement(
                _protonNative.Area,
                null,
                _react2.default.createElement(
                  _protonNative.Area.Text,
                  { style: { fontSize: 16 } },
                  'This is some text drawn onto an',
                  ' ',
                  _react2.default.createElement(
                    _protonNative.Area.Text,
                    { style: { color: 'red' } },
                    'Area!'
                  )
                )
              ),
              _react2.default.createElement(_protonNative.TextInput, { multiline: true, padded: true })
            )
          )
        )
      );
    }
  }]);

  return Example;
}(_react.Component);

(0, _protonNative.render)(_react2.default.createElement(Example, null));