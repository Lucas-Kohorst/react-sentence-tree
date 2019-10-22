"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SentenceTreeApplication = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _SentenceTree = require("../Components/SentenceTree");

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

var SentenceTreeApplication =
/*#__PURE__*/
function (_Component) {
  _inherits(SentenceTreeApplication, _Component);

  function SentenceTreeApplication(props) {
    var _this;

    _classCallCheck(this, SentenceTreeApplication);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SentenceTreeApplication).call(this, props));
    _this.state = {
      sentence: "The little dog runs so fast."
    };
    return _this;
  }

  _createClass(SentenceTreeApplication, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        sentence: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement(_TextField["default"], {
        id: "standard-full-width",
        label: "Sentence",
        style: {
          margin: 8
        },
        value: this.state.sentence,
        onChange: this.handleChange.bind(this),
        fullWidth: true,
        margin: "normal",
        InputLabelProps: {
          shrink: true
        }
      }), _react["default"].createElement(_SentenceTree.SentenceTree, {
        sentence: this.state.sentence
      }));
    }
  }]);

  return SentenceTreeApplication;
}(_react.Component);

exports.SentenceTreeApplication = SentenceTreeApplication;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FeGFtcGxlcy9TZW50ZW5jZVRyZWVBcHBsaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJTZW50ZW5jZVRyZWVBcHBsaWNhdGlvbiIsInByb3BzIiwic3RhdGUiLCJzZW50ZW5jZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpbiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJzaHJpbmsiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsdUI7Ozs7O0FBQ0gsbUNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDaEIsaUdBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVkMsTUFBQUEsUUFBUSxFQUFFO0FBREEsS0FBYjtBQUZnQjtBQUtsQjs7OztpQ0FHV0MsSyxFQUFPO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixRQUFBQSxRQUFRLEVBQUVDLEtBQUssQ0FBQ0UsTUFBTixDQUFhQztBQURYLE9BQWQ7QUFHSDs7OzZCQUVVO0FBQ1AsYUFDRSw2Q0FDRSxnQ0FBQyxxQkFBRDtBQUNFLFFBQUEsRUFBRSxFQUFDLHFCQURMO0FBRUUsUUFBQSxLQUFLLEVBQUMsVUFGUjtBQUdFLFFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLE1BQU0sRUFBRTtBQUFWLFNBSFQ7QUFJRSxRQUFBLEtBQUssRUFBRSxLQUFLTixLQUFMLENBQVdDLFFBSnBCO0FBS0UsUUFBQSxRQUFRLEVBQUUsS0FBS00sWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FMWjtBQU1FLFFBQUEsU0FBUyxNQU5YO0FBT0UsUUFBQSxNQUFNLEVBQUMsUUFQVDtBQVFFLFFBQUEsZUFBZSxFQUFFO0FBQ2ZDLFVBQUFBLE1BQU0sRUFBRTtBQURPO0FBUm5CLFFBREYsRUFhRSxnQ0FBQywwQkFBRDtBQUFjLFFBQUEsUUFBUSxFQUFFLEtBQUtULEtBQUwsQ0FBV0M7QUFBbkMsUUFiRixDQURGO0FBaUJEOzs7O0VBakNtQ1MsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcblxuaW1wb3J0IHsgU2VudGVuY2VUcmVlIH0gZnJvbSAnLi4vQ29tcG9uZW50cy9TZW50ZW5jZVRyZWUnO1xuXG5jbGFzcyBTZW50ZW5jZVRyZWVBcHBsaWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpIFxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgIHNlbnRlbmNlOiBcIlRoZSBsaXR0bGUgZG9nIHJ1bnMgc28gZmFzdC5cIlxuICAgICAgfVxuICAgfVxuXG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZW50ZW5jZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG59XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgaWQ9XCJzdGFuZGFyZC1mdWxsLXdpZHRoXCJcbiAgICAgICAgICBsYWJlbD1cIlNlbnRlbmNlXCJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZW50ZW5jZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFNlbnRlbmNlVHJlZSBzZW50ZW5jZT17dGhpcy5zdGF0ZS5zZW50ZW5jZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2VudGVuY2VUcmVlQXBwbGljYXRpb24gfSJdfQ==