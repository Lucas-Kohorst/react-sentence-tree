"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SentenceTree = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactD3Tree = _interopRequireDefault(require("react-d3-tree"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Tree = require("./../utils/Tree");

var _fallbackData = require("./../utils/fallbackData");

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
      treeData: _fallbackData.fallbackData,
      translate: {},
      sentence: _this.props.sentence ? _this.props.sentence : ""
    };
    return _this;
  }

  _createClass(SentenceTree, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this._updateTree();
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
    key: "_updateTree",
    value: function _updateTree() {
      var _this2 = this;

      (0, _Tree.getTreeData)(this.state.sentence).then(function (value) {
        _this2.setState({
          treeData: value
        });
      });
    }
  }, {
    key: "_handleChange",
    value: function _handleChange(event) {
      this.setState({
        sentence: event.target.value
      });

      this._updateTree();
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
      }, _react["default"].createElement(_TextField["default"], {
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
      }), _react["default"].createElement(_reactD3Tree["default"], {
        data: this.state.treeData,
        translate: this.state.translate,
        orientation: "vertical"
      }));
    }
  }]);

  return SentenceTree;
}(_react.Component);

exports.SentenceTree = SentenceTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL1NlbnRlbmNlVHJlZS5qcyJdLCJuYW1lcyI6WyJjb250YWluZXJTdHlsZXMiLCJ3aWR0aCIsImhlaWdodCIsIlNlbnRlbmNlVHJlZSIsInByb3BzIiwic3RhdGUiLCJ0cmVlRGF0YSIsImZhbGxiYWNrRGF0YSIsInRyYW5zbGF0ZSIsInNlbnRlbmNlIiwiX3VwZGF0ZVRyZWUiLCJkaW1lbnNpb25zIiwidHJlZUNvbnRhaW5lciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNldFN0YXRlIiwieCIsInkiLCJ0aGVuIiwidmFsdWUiLCJldmVudCIsInRhcmdldCIsInRjIiwibWFyZ2luIiwiX2hhbmRsZUNoYW5nZSIsImJpbmQiLCJzaHJpbmsiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLEtBQUssRUFBRSxNQURlO0FBRXRCQyxFQUFBQSxNQUFNLEVBQUU7QUFGYyxDQUF4Qjs7SUFLTUMsWTs7Ozs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixzRkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxRQUFRLEVBQUVDLDBCQURDO0FBRVhDLE1BQUFBLFNBQVMsRUFBRSxFQUZBO0FBR1hDLE1BQUFBLFFBQVEsRUFBRSxNQUFLTCxLQUFMLENBQVdLLFFBQVgsR0FBc0IsTUFBS0wsS0FBTCxDQUFXSyxRQUFqQyxHQUE0QztBQUgzQyxLQUFiO0FBRmlCO0FBT2xCOzs7O3lDQUVvQjtBQUNuQixXQUFLQyxXQUFMO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsQ0FBbUJDLHFCQUFuQixFQUFuQjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUNaTixRQUFBQSxTQUFTLEVBQUU7QUFDVE8sVUFBQUEsQ0FBQyxFQUFFSixVQUFVLENBQUNWLEtBQVgsR0FBbUIsQ0FEYjtBQUVUZSxVQUFBQSxDQUFDLEVBQUVMLFVBQVUsQ0FBQ1QsTUFBWCxHQUFvQjtBQUZkO0FBREMsT0FBZDtBQU1EOzs7a0NBRWE7QUFBQTs7QUFDWiw2QkFBWSxLQUFLRyxLQUFMLENBQVdJLFFBQXZCLEVBQWlDUSxJQUFqQyxDQUFzQyxVQUFBQyxLQUFLLEVBQUk7QUFDN0MsUUFBQSxNQUFJLENBQUNKLFFBQUwsQ0FBYztBQUNaUixVQUFBQSxRQUFRLEVBQUVZO0FBREUsU0FBZDtBQUdELE9BSkQ7QUFLRDs7O2tDQUVhQyxLLEVBQU87QUFDbkIsV0FBS0wsUUFBTCxDQUFjO0FBQ1pMLFFBQUFBLFFBQVEsRUFBRVUsS0FBSyxDQUFDQyxNQUFOLENBQWFGO0FBRFgsT0FBZDs7QUFHQSxXQUFLUixXQUFMO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBSyxRQUFBLEtBQUssRUFBRVYsZUFBWjtBQUE2QixRQUFBLEdBQUcsRUFBRSxhQUFBcUIsRUFBRTtBQUFBLGlCQUFLLE1BQUksQ0FBQ1QsYUFBTCxHQUFxQlMsRUFBMUI7QUFBQTtBQUFwQyxTQUNFLGdDQUFDLHFCQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUMscUJBREw7QUFFRSxRQUFBLEtBQUssRUFBQyxVQUZSO0FBR0UsUUFBQSxLQUFLLEVBQUU7QUFBRUMsVUFBQUEsTUFBTSxFQUFFO0FBQVYsU0FIVDtBQUlFLFFBQUEsS0FBSyxFQUFFLEtBQUtqQixLQUFMLENBQVdJLFFBSnBCO0FBS0UsUUFBQSxRQUFRLEVBQUUsS0FBS2MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FMWjtBQU1FLFFBQUEsU0FBUyxNQU5YO0FBT0UsUUFBQSxNQUFNLEVBQUMsUUFQVDtBQVFFLFFBQUEsZUFBZSxFQUFFO0FBQ2ZDLFVBQUFBLE1BQU0sRUFBRTtBQURPO0FBUm5CLFFBREYsRUFhRSxnQ0FBQyx1QkFBRDtBQUNFLFFBQUEsSUFBSSxFQUFFLEtBQUtwQixLQUFMLENBQVdDLFFBRG5CO0FBRUUsUUFBQSxTQUFTLEVBQUUsS0FBS0QsS0FBTCxDQUFXRyxTQUZ4QjtBQUdFLFFBQUEsV0FBVyxFQUFFO0FBSGYsUUFiRixDQURGO0FBcUJEOzs7O0VBN0R3QmtCLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgVHJlZSBmcm9tIFwicmVhY3QtZDMtdHJlZVwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5cbmltcG9ydCB7IGdldFRyZWVEYXRhIH0gZnJvbSBcIi4vLi4vdXRpbHMvVHJlZVwiO1xuaW1wb3J0IHsgZmFsbGJhY2tEYXRhIH0gZnJvbSBcIi4vLi4vdXRpbHMvZmFsbGJhY2tEYXRhXCI7XG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlcyA9IHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiMTAwdmhcIlxufTtcblxuY2xhc3MgU2VudGVuY2VUcmVlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyZWVEYXRhOiBmYWxsYmFja0RhdGEsXG4gICAgICB0cmFuc2xhdGU6IHt9LFxuICAgICAgc2VudGVuY2U6IHRoaXMucHJvcHMuc2VudGVuY2UgPyB0aGlzLnByb3BzLnNlbnRlbmNlIDogXCJcIlxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5fdXBkYXRlVHJlZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMudHJlZUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICB4OiBkaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgLyAxMFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3VwZGF0ZVRyZWUoKSB7XG4gICAgZ2V0VHJlZURhdGEodGhpcy5zdGF0ZS5zZW50ZW5jZSkudGhlbih2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHJlZURhdGE6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbnRlbmNlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgICB0aGlzLl91cGRhdGVUcmVlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlc30gcmVmPXt0YyA9PiAodGhpcy50cmVlQ29udGFpbmVyID0gdGMpfT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGlkPVwic3RhbmRhcmQtZnVsbC13aWR0aFwiXG4gICAgICAgICAgbGFiZWw9XCJTZW50ZW5jZVwiXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4IH19XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VudGVuY2V9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICBzaHJpbms6IHRydWVcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8VHJlZVxuICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUudHJlZURhdGF9XG4gICAgICAgICAgdHJhbnNsYXRlPXt0aGlzLnN0YXRlLnRyYW5zbGF0ZX1cbiAgICAgICAgICBvcmllbnRhdGlvbj17XCJ2ZXJ0aWNhbFwifVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgeyBTZW50ZW5jZVRyZWUgfTtcbiJdfQ==