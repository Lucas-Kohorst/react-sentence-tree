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
      textField: _this.props.textField ? true : false,
      language: _this.props.language ? _this.props.language : "English"
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
        (0, _Tree.getConstituencyTree)(this.state.sentence, this.state.language).then(function (value) {
          _this2.setState({
            treeData: value
          });
        });
      }

      if (this.state.type == "dependency") {
        (0, _Tree.getDependencyTree)(this.state.sentence, this.state.language).then(function (value) {
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
        orientation: "vertical" // Props that can be applied to the tree
        // @see https://github.com/Lucas-Kohorst/react-sentence-tree#tree-props
        ,
        nodeSvgShape: this.props.nodeSvgShape,
        nodeLabelComponent: this.props.nodeLabelComponent,
        onClick: this.props.onClick,
        onMouseOver: this.props.onMouseOver,
        onMouseOut: this.props.onMouseOut,
        onLinkClick: this.props.onLinkClick,
        onLinkMouseOver: this.props.onLinkMouseOver,
        onLinkMouseOut: this.props.onLinkMouseOut,
        onUpdate: this.props.onUpdate,
        pathFunc: this.props.pathFunc,
        collapsible: this.props.collapsible,
        useCollapseData: this.props.useCollapseData,
        shouldCollapseNeighborNodes: this.props.shouldCollapseNeighborNodes,
        initialDepth: this.props.initialDepth,
        depthFactor: this.props.depthFactor,
        zoomable: this.props.zoomable,
        zoom: this.props.zoom,
        scaleExtent: this.props.scaleExtent,
        nodeSize: this.props.nodeSize,
        separation: this.props.separation,
        transitionDuration: this.props.transitionDuration,
        textLayout: this.props.textLayout,
        allowForeignObjects: this.props.allowForeignObjects
      }));
    }
  }]);

  return SentenceTree;
}(_react.Component);

exports.SentenceTree = SentenceTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL1NlbnRlbmNlVHJlZS5qcyJdLCJuYW1lcyI6WyJjb250YWluZXJTdHlsZXMiLCJ3aWR0aCIsImhlaWdodCIsIlNlbnRlbmNlVHJlZSIsInByb3BzIiwic3RhdGUiLCJ0cmVlRGF0YSIsImZhbGxiYWNrQ29uc3RpdHVlbmN5IiwidHJhbnNsYXRlIiwic2VudGVuY2UiLCJ0eXBlIiwiaGVhZGVyIiwidGV4dEZpZWxkIiwibGFuZ3VhZ2UiLCJ1cGRhdGVUcmVlIiwiZGltZW5zaW9ucyIsInRyZWVDb250YWluZXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzZXRTdGF0ZSIsIngiLCJ5IiwidGhlbiIsInZhbHVlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwibWFyZ2luIiwiX2hhbmRsZUNoYW5nZSIsImJpbmQiLCJzaHJpbmsiLCJ0YyIsIl9oZWFkZXIiLCJfdGV4dEZpZWxkIiwibm9kZVN2Z1NoYXBlIiwibm9kZUxhYmVsQ29tcG9uZW50Iiwib25DbGljayIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm9uTGlua0NsaWNrIiwib25MaW5rTW91c2VPdmVyIiwib25MaW5rTW91c2VPdXQiLCJvblVwZGF0ZSIsInBhdGhGdW5jIiwiY29sbGFwc2libGUiLCJ1c2VDb2xsYXBzZURhdGEiLCJzaG91bGRDb2xsYXBzZU5laWdoYm9yTm9kZXMiLCJpbml0aWFsRGVwdGgiLCJkZXB0aEZhY3RvciIsInpvb21hYmxlIiwiem9vbSIsInNjYWxlRXh0ZW50Iiwibm9kZVNpemUiLCJzZXBhcmF0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidGV4dExheW91dCIsImFsbG93Rm9yZWlnbk9iamVjdHMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxlQUFl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S0FBS3BDLEtBQUwsQ0FBV3FDLGVBWjlCO0FBYUUsUUFBQSxjQUFjLEVBQUUsS0FBS3JDLEtBQUwsQ0FBV3NDLGNBYjdCO0FBY0UsUUFBQSxRQUFRLEVBQUUsS0FBS3RDLEtBQUwsQ0FBV3VDLFFBZHZCO0FBZUUsUUFBQSxRQUFRLEVBQUUsS0FBS3ZDLEtBQUwsQ0FBV3dDLFFBZnZCO0FBZ0JFLFFBQUEsV0FBVyxFQUFFLEtBQUt4QyxLQUFMLENBQVd5QyxXQWhCMUI7QUFpQkUsUUFBQSxlQUFlLEVBQUUsS0FBS3pDLEtBQUwsQ0FBVzBDLGVBakI5QjtBQWtCRSxRQUFBLDJCQUEyQixFQUFFLEtBQUsxQyxLQUFMLENBQVcyQywyQkFsQjFDO0FBbUJFLFFBQUEsWUFBWSxFQUFFLEtBQUszQyxLQUFMLENBQVc0QyxZQW5CM0I7QUFvQkUsUUFBQSxXQUFXLEVBQUUsS0FBSzVDLEtBQUwsQ0FBVzZDLFdBcEIxQjtBQXFCRSxRQUFBLFFBQVEsRUFBRSxLQUFLN0MsS0FBTCxDQUFXOEMsUUFyQnZCO0FBc0JFLFFBQUEsSUFBSSxFQUFFLEtBQUs5QyxLQUFMLENBQVcrQyxJQXRCbkI7QUF1QkUsUUFBQSxXQUFXLEVBQUUsS0FBSy9DLEtBQUwsQ0FBV2dELFdBdkIxQjtBQXdCRSxRQUFBLFFBQVEsRUFBRSxLQUFLaEQsS0FBTCxDQUFXaUQsUUF4QnZCO0FBeUJFLFFBQUEsVUFBVSxFQUFFLEtBQUtqRCxLQUFMLENBQVdrRCxVQXpCekI7QUEwQkUsUUFBQSxrQkFBa0IsRUFBRSxLQUFLbEQsS0FBTCxDQUFXbUQsa0JBMUJqQztBQTJCRSxRQUFBLFVBQVUsRUFBRSxLQUFLbkQsS0FBTCxDQUFXb0QsVUEzQnpCO0FBNEJFLFFBQUEsbUJBQW1CLEVBQUUsS0FBS3BELEtBQUwsQ0FBV3FEO0FBNUJsQyxRQUhGLENBREY7QUFvQ0Q7Ozs7RUF2SHdCQyxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFRyZWUgZnJvbSBcInJlYWN0LWQzLXRyZWVcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IHsgZ2V0RGVwZW5kZW5jeVRyZWUsIGdldENvbnN0aXR1ZW5jeVRyZWUgfSBmcm9tIFwiLi4vdXRpbHMvVHJlZVwiO1xuXG5pbXBvcnQge1xuICBmYWxsYmFja0NvbnN0aXR1ZW5jeVxufSBmcm9tIFwiLi4vdXRpbHMvZmFsbGJhY2tEYXRhXCI7XG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlcyA9IHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiMTAwdmhcIlxufTtcblxuY2xhc3MgU2VudGVuY2VUcmVlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyZWVEYXRhOiBmYWxsYmFja0NvbnN0aXR1ZW5jeSxcbiAgICAgIHRyYW5zbGF0ZToge30sXG4gICAgICBzZW50ZW5jZTogdGhpcy5wcm9wcy5zZW50ZW5jZSA/IHRoaXMucHJvcHMuc2VudGVuY2UgOiBcIlwiLFxuICAgICAgdHlwZTogdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogXCJjb25zdGl0dWVuY3lcIixcbiAgICAgIGhlYWRlcjogdGhpcy5wcm9wcy5oZWFkZXIgPyB0cnVlIDogZmFsc2UsXG4gICAgICB0ZXh0RmllbGQ6IHRoaXMucHJvcHMudGV4dEZpZWxkID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgbGFuZ3VhZ2U6IHRoaXMucHJvcHMubGFuZ3VhZ2UgPyB0aGlzLnByb3BzLmxhbmd1YWdlIDogXCJFbmdsaXNoXCJcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlVHJlZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMudHJlZUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICB4OiBkaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgLyAxMFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVHJlZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50eXBlID09IFwiY29uc3RpdHVlbmN5XCIpIHtcbiAgICAgIGdldENvbnN0aXR1ZW5jeVRyZWUodGhpcy5zdGF0ZS5zZW50ZW5jZSwgdGhpcy5zdGF0ZS5sYW5ndWFnZSkudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRyZWVEYXRhOiB2YWx1ZVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSBcbiAgICBcbiAgICBpZiAodGhpcy5zdGF0ZS50eXBlID09IFwiZGVwZW5kZW5jeVwiKSB7XG4gICAgICBnZXREZXBlbmRlbmN5VHJlZSh0aGlzLnN0YXRlLnNlbnRlbmNlLCB0aGlzLnN0YXRlLmxhbmd1YWdlKS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdHJlZURhdGE6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VudGVuY2U6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlVHJlZSgpO1xuICB9XG5cbiAgX2hlYWRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5oZWFkZXIgPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGgxPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnN0YXRlLnR5cGUuc2xpY2UoMSl9XG4gICAgICAgIDwvaDE+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIF90ZXh0RmllbGQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudGV4dEZpZWxkID09IHRydWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBpZD1cInN0YW5kYXJkLWZ1bGwtd2lkdGhcIlxuICAgICAgICAgIGxhYmVsPVwiU2VudGVuY2VcIlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCB9fVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbnRlbmNlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZXN9IHJlZj17dGMgPT4gKHRoaXMudHJlZUNvbnRhaW5lciA9IHRjKX0+XG4gICAgICAgIHt0aGlzLl9oZWFkZXIoKX1cbiAgICAgICAge3RoaXMuX3RleHRGaWVsZCgpfVxuICAgICAgICA8VHJlZVxuICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUudHJlZURhdGF9XG4gICAgICAgICAgdHJhbnNsYXRlPXt0aGlzLnN0YXRlLnRyYW5zbGF0ZX1cbiAgICAgICAgICBvcmllbnRhdGlvbj17XCJ2ZXJ0aWNhbFwifVxuICAgICAgICAgIC8vIFByb3BzIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gdGhlIHRyZWVcbiAgICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9MdWNhcy1Lb2hvcnN0L3JlYWN0LXNlbnRlbmNlLXRyZWUjdHJlZS1wcm9wc1xuICAgICAgICAgIG5vZGVTdmdTaGFwZT17dGhpcy5wcm9wcy5ub2RlU3ZnU2hhcGV9XG4gICAgICAgICAgbm9kZUxhYmVsQ29tcG9uZW50PXt0aGlzLnByb3BzLm5vZGVMYWJlbENvbXBvbmVudH1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMucHJvcHMub25Nb3VzZU92ZXJ9XG4gICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5wcm9wcy5vbk1vdXNlT3V0fVxuICAgICAgICAgIG9uTGlua0NsaWNrPXt0aGlzLnByb3BzLm9uTGlua0NsaWNrfVxuICAgICAgICAgIG9uTGlua01vdXNlT3Zlcj17dGhpcy5wcm9wcy5vbkxpbmtNb3VzZU92ZXJ9XG4gICAgICAgICAgb25MaW5rTW91c2VPdXQ9e3RoaXMucHJvcHMub25MaW5rTW91c2VPdXR9XG4gICAgICAgICAgb25VcGRhdGU9e3RoaXMucHJvcHMub25VcGRhdGV9XG4gICAgICAgICAgcGF0aEZ1bmM9e3RoaXMucHJvcHMucGF0aEZ1bmN9XG4gICAgICAgICAgY29sbGFwc2libGU9e3RoaXMucHJvcHMuY29sbGFwc2libGV9XG4gICAgICAgICAgdXNlQ29sbGFwc2VEYXRhPXt0aGlzLnByb3BzLnVzZUNvbGxhcHNlRGF0YX1cbiAgICAgICAgICBzaG91bGRDb2xsYXBzZU5laWdoYm9yTm9kZXM9e3RoaXMucHJvcHMuc2hvdWxkQ29sbGFwc2VOZWlnaGJvck5vZGVzfVxuICAgICAgICAgIGluaXRpYWxEZXB0aD17dGhpcy5wcm9wcy5pbml0aWFsRGVwdGh9XG4gICAgICAgICAgZGVwdGhGYWN0b3I9e3RoaXMucHJvcHMuZGVwdGhGYWN0b3J9XG4gICAgICAgICAgem9vbWFibGU9e3RoaXMucHJvcHMuem9vbWFibGV9XG4gICAgICAgICAgem9vbT17dGhpcy5wcm9wcy56b29tfVxuICAgICAgICAgIHNjYWxlRXh0ZW50PXt0aGlzLnByb3BzLnNjYWxlRXh0ZW50fVxuICAgICAgICAgIG5vZGVTaXplPXt0aGlzLnByb3BzLm5vZGVTaXplfVxuICAgICAgICAgIHNlcGFyYXRpb249e3RoaXMucHJvcHMuc2VwYXJhdGlvbn1cbiAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb249e3RoaXMucHJvcHMudHJhbnNpdGlvbkR1cmF0aW9ufVxuICAgICAgICAgIHRleHRMYXlvdXQ9e3RoaXMucHJvcHMudGV4dExheW91dH1cbiAgICAgICAgICBhbGxvd0ZvcmVpZ25PYmplY3RzPXt0aGlzLnByb3BzLmFsbG93Rm9yZWlnbk9iamVjdHN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IFNlbnRlbmNlVHJlZSB9OyJdfQ==