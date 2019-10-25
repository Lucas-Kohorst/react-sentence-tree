"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SentenceTree = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactD3Tree = _interopRequireDefault(require("react-d3-tree"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Tree = require("../utils/Tree");

var _fallbackData = require("../utils/fallbackData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var containerStyles = {
  width: "100%",
  height: "100vh"
};

var SentenceTree =
/*#__PURE__*/
function (_Component) {
  _inherits(SentenceTree, _Component);

  function SentenceTree(props) {
    var _this;

    _classCallCheck(this, SentenceTree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SentenceTree).call(this, props));
    _this.state = {
      treeData: _fallbackData.fallbackConstituency,
      translate: {},
      sentence: _this.props.sentence ? _this.props.sentence : "",
      type: _this.props.type ? _this.props.type : "constituency",
      header: _this.props.header ? true : false,
      textField: _this.props.textField ? true : false
    };
    return _this;
  }

  _createClass(SentenceTree, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.updateTree();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var dimensions = this.treeContainer.getBoundingClientRect();
      this.setState({
        translate: {
          x: dimensions.width / 2,
          y: dimensions.height / 10
        }
      });
    }
  }, {
    key: "updateTree",
    value: function updateTree() {
      var _this2 = this;

      if (this.state.type == "constituency") {
        (0, _Tree.getConstituencyTree)(this.state.sentence).then(function (value) {
          _this2.setState({
            treeData: value
          });
        });
      }

      if (this.state.type == "dependency") {
        (0, _Tree.getDependencyTree)(this.state.sentence).then(function (value) {
          _this2.setState({
            treeData: value
          });
        });
      }
    }
  }, {
    key: "_handleChange",
    value: function _handleChange(event) {
      this.setState({
        sentence: event.target.value
      });
      this.updateTree();
    }
  }, {
    key: "_header",
    value: function _header() {
      if (this.state.header == true) {
        return _react["default"].createElement("h1", null, this.state.type.charAt(0).toUpperCase() + this.state.type.slice(1));
      }
    }
  }, {
    key: "_textField",
    value: function _textField() {
      if (this.state.textField == true) {
        return _react["default"].createElement(_TextField["default"], {
          id: "standard-full-width",
          label: "Sentence",
          style: {
            margin: 8
          },
          value: this.state.sentence,
          onChange: this._handleChange.bind(this),
          fullWidth: true,
          margin: "normal",
          InputLabelProps: {
            shrink: true
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react["default"].createElement("div", {
        style: containerStyles,
        ref: function ref(tc) {
          return _this3.treeContainer = tc;
        }
      }, this._header(), this._textField(), _react["default"].createElement(_reactD3Tree["default"], {
        data: this.state.treeData,
        translate: this.state.translate,
        orientation: "vertical"
      }));
    }
  }]);

  return SentenceTree;
}(_react.Component);

exports.SentenceTree = SentenceTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL1NlbnRlbmNlVHJlZS5qcyJdLCJuYW1lcyI6WyJjb250YWluZXJTdHlsZXMiLCJ3aWR0aCIsImhlaWdodCIsIlNlbnRlbmNlVHJlZSIsInByb3BzIiwic3RhdGUiLCJ0cmVlRGF0YSIsImZhbGxiYWNrQ29uc3RpdHVlbmN5IiwidHJhbnNsYXRlIiwic2VudGVuY2UiLCJ0eXBlIiwiaGVhZGVyIiwidGV4dEZpZWxkIiwidXBkYXRlVHJlZSIsImRpbWVuc2lvbnMiLCJ0cmVlQ29udGFpbmVyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2V0U3RhdGUiLCJ4IiwieSIsInRoZW4iLCJ2YWx1ZSIsImV2ZW50IiwidGFyZ2V0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm1hcmdpbiIsIl9oYW5kbGVDaGFuZ2UiLCJiaW5kIiwic2hyaW5rIiwidGMiLCJfaGVhZGVyIiwiX3RleHRGaWVsZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsS0FBSyxFQUFFLE1BRGU7QUFFdEJDLEVBQUFBLE1BQU0sRUFBRTtBQUZjLENBQXhCOztJQUtNQyxZOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHNGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFFBQVEsRUFBRUMsa0NBREM7QUFFWEMsTUFBQUEsU0FBUyxFQUFFLEVBRkE7QUFHWEMsTUFBQUEsUUFBUSxFQUFFLE1BQUtMLEtBQUwsQ0FBV0ssUUFBWCxHQUFzQixNQUFLTCxLQUFMLENBQVdLLFFBQWpDLEdBQTRDLEVBSDNDO0FBSVhDLE1BQUFBLElBQUksRUFBRSxNQUFLTixLQUFMLENBQVdNLElBQVgsR0FBa0IsTUFBS04sS0FBTCxD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SzVCLEtBQUwsQ0FBV0MsUUFEbkI7QUFFRSxRQUFBLFNBQVMsRUFBRSxLQUFLRCxLQUFMLENBQVdHLFNBRnhCO0FBR0UsUUFBQSxXQUFXLEVBQUU7QUFIZixRQUhGLENBREY7QUFXRDs7OztFQTdGd0IwQixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFRyZWUgZnJvbSBcInJlYWN0LWQzLXRyZWVcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IHsgZ2V0RGVwZW5kZW5jeVRyZWUsIGdldENvbnN0aXR1ZW5jeVRyZWUgfSBmcm9tIFwiLi4vdXRpbHMvVHJlZVwiO1xuXG5pbXBvcnQge1xuICBmYWxsYmFja0NvbnN0aXR1ZW5jeVxufSBmcm9tIFwiLi4vdXRpbHMvZmFsbGJhY2tEYXRhXCI7XG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlcyA9IHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiMTAwdmhcIlxufTtcblxuY2xhc3MgU2VudGVuY2VUcmVlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyZWVEYXRhOiBmYWxsYmFja0NvbnN0aXR1ZW5jeSxcbiAgICAgIHRyYW5zbGF0ZToge30sXG4gICAgICBzZW50ZW5jZTogdGhpcy5wcm9wcy5zZW50ZW5jZSA/IHRoaXMucHJvcHMuc2VudGVuY2UgOiBcIlwiLFxuICAgICAgdHlwZTogdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogXCJjb25zdGl0dWVuY3lcIixcbiAgICAgIGhlYWRlcjogdGhpcy5wcm9wcy5oZWFkZXIgPyB0cnVlIDogZmFsc2UsXG4gICAgICB0ZXh0RmllbGQ6IHRoaXMucHJvcHMudGV4dEZpZWxkID8gdHJ1ZSA6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVRyZWUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLnRyZWVDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgeDogZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0IC8gMTBcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVRyZWUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudHlwZSA9PSBcImNvbnN0aXR1ZW5jeVwiKSB7XG4gICAgICBnZXRDb25zdGl0dWVuY3lUcmVlKHRoaXMuc3RhdGUuc2VudGVuY2UpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0cmVlRGF0YTogdmFsdWVcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0gXG4gICAgXG4gICAgaWYgKHRoaXMuc3RhdGUudHlwZSA9PSBcImRlcGVuZGVuY3lcIikge1xuICAgICAgZ2V0RGVwZW5kZW5jeVRyZWUodGhpcy5zdGF0ZS5zZW50ZW5jZSkudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRyZWVEYXRhOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbnRlbmNlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVRyZWUoKTtcbiAgfVxuXG4gIF9oZWFkZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGVhZGVyID09IHRydWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxoMT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS50eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zdGF0ZS50eXBlLnNsaWNlKDEpfVxuICAgICAgICA8L2gxPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBfdGV4dEZpZWxkKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnRleHRGaWVsZCA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgaWQ9XCJzdGFuZGFyZC1mdWxsLXdpZHRoXCJcbiAgICAgICAgICBsYWJlbD1cIlNlbnRlbmNlXCJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZW50ZW5jZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGVzfSByZWY9e3RjID0+ICh0aGlzLnRyZWVDb250YWluZXIgPSB0Yyl9PlxuICAgICAgICB7dGhpcy5faGVhZGVyKCl9XG4gICAgICAgIHt0aGlzLl90ZXh0RmllbGQoKX1cbiAgICAgICAgPFRyZWVcbiAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLnRyZWVEYXRhfVxuICAgICAgICAgIHRyYW5zbGF0ZT17dGhpcy5zdGF0ZS50cmFuc2xhdGV9XG4gICAgICAgICAgb3JpZW50YXRpb249e1widmVydGljYWxcIn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2VudGVuY2VUcmVlIH07XG4iXX0=