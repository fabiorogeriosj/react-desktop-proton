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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJzdGF0ZSIsImNvdW50IiwiYWRkQ291bnQiLCJzZXRTdGF0ZSIsImZvbnRTaXplIiwiY29sb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNKQyxLLEdBQVE7QUFDTkMsYUFBTztBQURELEssUUFJUkMsUSxHQUFXLFlBQU07QUFDZixZQUFLQyxRQUFMLENBQWM7QUFDWkYsZUFBTyxNQUFLRCxLQUFMLENBQVdDLEtBQVgsR0FBbUI7QUFEZCxPQUFkO0FBR0QsSzs7Ozs7NkJBRVM7QUFDUixhQUNFO0FBQUMseUJBQUQ7QUFBQTtBQUNFO0FBQUMsNEJBQUQ7QUFBQSxZQUFNLE9BQU0sVUFBWjtBQUNFO0FBQUMsOEJBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FERjtBQUlFO0FBQUMsOEJBQUQ7QUFBQSxZQUFRLE9BQU0sbUJBQWQsRUFBK0IsY0FBL0I7QUFDRTtBQUFDLDhCQUFEO0FBQUE7QUFFRTtBQUFDLCtCQUFEO0FBQUEsZ0JBQUssS0FBSyxDQUFWLEVBQWEsUUFBUSxDQUFyQjtBQUNFO0FBQUMsa0NBQUQ7QUFBQTtBQUFBO0FBQXlCLHFCQUFLRCxLQUFMLENBQVdDO0FBQXBDLGVBREY7QUFFRTtBQUFDLG9DQUFEO0FBQUEsa0JBQVEsU0FBUyxLQUFLQyxRQUF0QjtBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUMsc0NBQUQ7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUlFLDRDQUFDLHlCQUFELE9BSkY7QUFLRSw0Q0FBQyx1QkFBRCxPQUxGO0FBTUUsNENBQUMseUJBQUQsSUFBYSxPQUFPLEtBQUtGLEtBQUwsQ0FBV0MsS0FBL0IsR0FORjtBQU9FLDRDQUFDLG9CQUFELElBQVEsT0FBTyxDQUFmLEdBUEY7QUFRRSw0Q0FBQyxxQkFBRCxJQUFTLE9BQU8sRUFBaEIsR0FSRjtBQVNFO0FBQUMsaUNBQUQ7QUFBQTtBQUNFLDhDQUFDLHVCQUFELElBQVcsT0FBTSxNQUFqQixHQURGO0FBRUUsOENBQUMsdUJBQUQsSUFBVyxPQUFNLE1BQWpCO0FBRkY7QUFURixhQUZGO0FBaUJFO0FBQUMsK0JBQUQ7QUFBQSxnQkFBSyxLQUFLLENBQVYsRUFBYSxRQUFRLENBQXJCO0FBQ0U7QUFBQyxtQ0FBRDtBQUFBLGtCQUFPLE9BQU0sT0FBYjtBQUNFO0FBQUMsb0NBQUQ7QUFBQSxvQkFBTSxZQUFOO0FBQ0UsZ0RBQUMsdUJBQUQsSUFBVyxPQUFNLFVBQWpCLEdBREY7QUFFRSxnREFBQyx1QkFBRCxJQUFXLE9BQU0sVUFBakIsRUFBNEIsWUFBNUIsR0FGRjtBQUdFO0FBQUMsd0NBQUQ7QUFBQTtBQUNFO0FBQUMsMENBQUQsQ0FBUSxJQUFSO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBRUU7QUFBQywwQ0FBRCxDQUFRLElBQVI7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFHRTtBQUFDLDBDQUFELENBQVEsSUFBUjtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBSEY7QUFERixlQURGO0FBWUU7QUFBQyx3Q0FBRDtBQUFBLGtCQUFZLE9BQU8sRUFBRUcsVUFBVSxFQUFaLEVBQW5CO0FBQUE7QUFDa0M7QUFBQywwQ0FBRDtBQUFBLG9CQUFZLE9BQU8sRUFBRUMsT0FBTyxLQUFULEVBQW5CO0FBQUE7QUFBQTtBQURsQyxlQVpGO0FBZUU7QUFBQyxrQ0FBRDtBQUFBO0FBQ0U7QUFBQyxvQ0FBRCxDQUFNLElBQU47QUFBQSxvQkFBVyxPQUFPLEVBQUVELFVBQVUsRUFBWixFQUFsQjtBQUFBO0FBQ2dDLHFCQURoQztBQUVFO0FBQUMsc0NBQUQsQ0FBTSxJQUFOO0FBQUEsc0JBQVcsT0FBTyxFQUFFQyxPQUFPLEtBQVQsRUFBbEI7QUFBQTtBQUFBO0FBRkY7QUFERixlQWZGO0FBcUJFLDRDQUFDLHVCQUFELElBQVcsZUFBWCxFQUFxQixZQUFyQjtBQXJCRjtBQWpCRjtBQURGO0FBSkYsT0FERjtBQW1ERDs7OztFQS9EbUJDLGdCOztBQWtFdEIsMEJBQU8sOEJBQUMsT0FBRCxPQUFQIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRGlhbG9nLCBUYWIsIFNwaW5ib3gsIEFyZWEsIFN0eWxlZFRleHQsIFNsaWRlciwgU2VwYXJhdG9yLCByZW5kZXIsIEdyaWQsIFByb2dyZXNzQmFyLCBXaW5kb3csIEFwcCwgVGV4dCwgQm94LCBCdXR0b24sIENoZWNrYm94LCBDb2xvckJ1dHRvbiwgRm9ybSwgVGV4dElucHV0LCBHcm91cCwgTWVudSwgUGlja2VyIH0gZnJvbSAncHJvdG9uLW5hdGl2ZSdcblxuY2xhc3MgRXhhbXBsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNvdW50OiAxMFxuICB9XG5cbiAgYWRkQ291bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3VudDogdGhpcy5zdGF0ZS5jb3VudCArIDEwXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHA+XG4gICAgICAgIDxNZW51IGxhYmVsPSdBcnF1aXZvcyc+XG4gICAgICAgICAgPE1lbnUuSXRlbT5NZW51IDEgYXF1aSB0b3A8L01lbnUuSXRlbT5cbiAgICAgICAgPC9NZW51PlxuICAgICAgICA8V2luZG93IHRpdGxlPSdBcHAgRGVtbyBGw6FiaW8nIG1hcmdpbmVkID5cbiAgICAgICAgICA8R3JpZD5cblxuICAgICAgICAgICAgPEJveCByb3c9ezB9IGNvbHVtbj17MH0+XG4gICAgICAgICAgICAgIDxUZXh0PkNvbnRhZG9yIGVzdMOhIGVtOiB7dGhpcy5zdGF0ZS5jb3VudH08L1RleHQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRDb3VudH0+QWRkIGNvbnRhZG9yITwvQnV0dG9uPlxuICAgICAgICAgICAgICA8Q2hlY2tib3g+VGhpcyBpcyBhIGNoZWNrYm94PC9DaGVja2JveD5cbiAgICAgICAgICAgICAgPENvbG9yQnV0dG9uIC8+XG4gICAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cbiAgICAgICAgICAgICAgPFByb2dyZXNzQmFyIHZhbHVlPXt0aGlzLnN0YXRlLmNvdW50fSAvPlxuICAgICAgICAgICAgICA8U2xpZGVyIHZhbHVlPXswfSAvPlxuICAgICAgICAgICAgICA8U3BpbmJveCB2YWx1ZT17MTB9IC8+XG4gICAgICAgICAgICAgIDxUYWI+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD0nVGFiMScgLz5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IGxhYmVsPSdUYWIyJyAvPlxuICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICA8Qm94IHJvdz17MH0gY29sdW1uPXsxfT5cbiAgICAgICAgICAgICAgPEdyb3VwIHRpdGxlPSdMb2dpbic+XG4gICAgICAgICAgICAgICAgPEZvcm0gcGFkZGVkPlxuICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD0nVXNlcm5hbWUnIC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dElucHV0IGxhYmVsPSdQYXNzd29yZCcgc2VjdXJlIC8+XG4gICAgICAgICAgICAgICAgICA8UGlja2VyPlxuICAgICAgICAgICAgICAgICAgICA8UGlja2VyLkl0ZW0+T3B0aW9uIDE8L1BpY2tlci5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8UGlja2VyLkl0ZW0+T3B0aW9uIDI8L1BpY2tlci5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8UGlja2VyLkl0ZW0+T3B0aW9uIDM8L1BpY2tlci5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9QaWNrZXI+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgICA8U3R5bGVkVGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYgfX0+XG4gICAgICAgICAgICAgICAgVGhpcyBpcyBzb21lIHRleHQgZHJhd24gb250byBhbiA8U3R5bGVkVGV4dCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+QXJlYSE8L1N0eWxlZFRleHQ+XG4gICAgICAgICAgICAgIDwvU3R5bGVkVGV4dD5cbiAgICAgICAgICAgICAgPEFyZWE+XG4gICAgICAgICAgICAgICAgPEFyZWEuVGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYgfX0+XG4gICAgICAgICAgICAgICAgVGhpcyBpcyBzb21lIHRleHQgZHJhd24gb250byBhbnsnICd9XG4gICAgICAgICAgICAgICAgICA8QXJlYS5UZXh0IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5BcmVhITwvQXJlYS5UZXh0PlxuICAgICAgICAgICAgICAgIDwvQXJlYS5UZXh0PlxuICAgICAgICAgICAgICA8L0FyZWE+XG4gICAgICAgICAgICAgIDxUZXh0SW5wdXQgbXVsdGlsaW5lIHBhZGRlZCAvPlxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvV2luZG93PlxuICAgICAgPC9BcHA+XG4gICAgKVxuICB9XG59XG5cbnJlbmRlcig8RXhhbXBsZSAvPilcbiJdfQ==