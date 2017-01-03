webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _App = __webpack_require__(172);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(173);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Navigation = __webpack_require__(208);

	var _Navigation2 = _interopRequireDefault(_Navigation);

	var _Carousel = __webpack_require__(210);

	var _Carousel2 = _interopRequireDefault(_Carousel);

	var _Footer = __webpack_require__(211);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Home = __webpack_require__(212);

	var _Home2 = _interopRequireDefault(_Home);

	var _About = __webpack_require__(213);

	var _About2 = _interopRequireDefault(_About);

	var _base = __webpack_require__(214);

	var _base2 = _interopRequireDefault(_base);

	var _Dashboard = __webpack_require__(223);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	var _Register = __webpack_require__(226);

	var _Register2 = _interopRequireDefault(_Register);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// Client Imports


	// Main Class
	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App() {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

			_this.authenticate = _this.authenticate.bind(_this);
			_this.authHandler = _this.authHandler.bind(_this);
			_this.logout = _this.logout.bind(_this);
			// Initial state
			_this.state = {
				uid: null
			};
			return _this;
		}

		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				_base2.default.onAuth(function (user) {
					if (user) {
						_this2.authHandler(null, { user: user });
					}
				});
			}

			// Logout 

		}, {
			key: 'logout',
			value: function logout() {
				_base2.default.unauth();
				this.setState({ uid: null });
			}

			// Auth via provider

		}, {
			key: 'authenticate',
			value: function authenticate(provider) {
				console.log('Logging in with ' + provider);
				_base2.default.authWithOAuthPopup(provider, this.authHandler);
			}

			// Handle Auth

		}, {
			key: 'authHandler',
			value: function authHandler(err, authData) {
				console.log(authData);
				if (err) {
					console.log(err);
					return;
				}
				// Set user ID State
				this.setState({ uid: authData.user.uid });
				var uid = this.state.uid;
				// Ref nts-easy-mean/users/:uid
				var userRef = _base2.default.database().ref('users/' + uid);
				// Query the DB for the user
				userRef.once('value', function (snapshot) {
					var data = snapshot.val() || {};

					// If its the user's first time logging in.
					if (!data.dispayName) {
						userRef.set({
							email: authData.user.email,
							displayName: authData.user.displayName
						});
					}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactRouter.BrowserRouter,
						null,
						_react2.default.createElement(_Navigation2.default, { uid: this.state.uid }),
						_react2.default.createElement(_Carousel2.default, null),
						_react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/', component: _Home2.default }),
						_react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/about', component: _About2.default }),
						_react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/register', render: function render() {
								return _react2.default.createElement(_Register2.default, { authenticate: _this3.authenticate });
							} }),
						_react2.default.createElement(_reactRouter.Match, { pattern: '/dashboard/:action?/:key?', render: function render(props) {
								return _react2.default.createElement(_Dashboard2.default, _extends({
									uid: _this3.state.uid,
									authenticate: _this3.authenticate,
									logout: _this3.logout
								}, props));
							} }),
						_react2.default.createElement(_Footer2.default, null)
					)
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	exports.default = App;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "App.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	var _NavHeader = __webpack_require__(209);

	var _NavHeader2 = _interopRequireDefault(_NavHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Navigation = function (_React$Component) {
		_inherits(Navigation, _React$Component);

		function Navigation(props) {
			_classCallCheck(this, Navigation);

			var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

			_this.state = {
				uid: null
			};
			return _this;
		}

		_createClass(Navigation, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				this.setState({ uid: nextProps.uid });
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'nav',
					{ className: 'navbar navbar-fixed-top' },
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement(
							'div',
							{ className: 'navbar-header' },
							_react2.default.createElement(
								'button',
								{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar', 'aria-expanded': 'false', 'aria-controls': 'navbar' },
								_react2.default.createElement(
									'span',
									{ className: 'sr-only' },
									'Toggle navigation'
								),
								_react2.default.createElement('span', { className: 'icon-bar' }),
								_react2.default.createElement('span', { className: 'icon-bar' }),
								_react2.default.createElement('span', { className: 'icon-bar' })
							),
							_react2.default.createElement(
								'a',
								{ className: 'navbar-brand hidden-sm hidden-xs', href: '#' },
								'Nautical Tech Services'
							),
							_react2.default.createElement(
								'a',
								{ className: 'navbar-brand visible-sm visible-xs', href: '#' },
								'NTS'
							),
							_react2.default.createElement(
								'p',
								{ className: 'navbar-text' },
								_react2.default.createElement(
									'strong',
									null,
									'Call: (310) 333-3548'
								)
							),
							_react2.default.createElement(_NavHeader2.default, { uid: this.state.uid })
						),
						_react2.default.createElement(
							'div',
							{ id: 'navbar', className: 'collapse navbar-collapse' },
							_react2.default.createElement(
								'ul',
								{ className: 'nav navbar-nav navbar-right' },
								_react2.default.createElement(
									'li',
									{ className: 'active' },
									_react2.default.createElement(
										_reactRouter.Link,
										{ to: '/' },
										'Home'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouter.Link,
										{ to: '/dashboard/request' },
										'Request Service'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouter.Link,
										{ to: '/about' },
										'About'
									)
								)
							)
						)
					)
				);
			}
		}]);

		return Navigation;
	}(_react2.default.Component);

	exports.default = Navigation;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Navigation.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavHeader = function (_React$Component) {
		_inherits(NavHeader, _React$Component);

		function NavHeader(props) {
			_classCallCheck(this, NavHeader);

			var _this = _possibleConstructorReturn(this, (NavHeader.__proto__ || Object.getPrototypeOf(NavHeader)).call(this, props));

			_this.renderRegisterButton = _this.renderRegisterButton.bind(_this);
			_this.state = {
				uid: null
			};
			return _this;
		}

		_createClass(NavHeader, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				this.setState({ uid: nextProps.uid });
			}
		}, {
			key: 'renderRegisterButton',
			value: function renderRegisterButton() {
				return _react2.default.createElement(
					_reactRouter.Link,
					{ to: '/register' },
					_react2.default.createElement(
						'button',
						{ className: 'btn btn-default navbar-btn navbar-left hidden-xs', type: 'button' },
						'Register / Login'
					)
				);
			}
		}, {
			key: 'render',
			value: function render() {
				// Not logged in
				if (!this.state.uid) {
					return _react2.default.createElement(
						'span',
						null,
						this.renderRegisterButton()
					);
				}
				// Logged In
				return _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/dashboard' },
						_react2.default.createElement(
							'button',
							{ className: 'btn btn-success navbar-btn navbar-left hidden-xs', type: 'button' },
							'Dashboard'
						)
					)
				);
			}
		}]);

		return NavHeader;
	}(_react2.default.Component);

	exports.default = NavHeader;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "NavHeader.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Carousel = function (_React$Component) {
	  _inherits(Carousel, _React$Component);

	  function Carousel() {
	    _classCallCheck(this, Carousel);

	    return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
	  }

	  _createClass(Carousel, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { id: "carousel", className: "carousel slide col-md-12 hidden-xs", "data-ride": "carousel" },
	        _react2.default.createElement(
	          "ol",
	          { className: "carousel-indicators" },
	          _react2.default.createElement("li", { "data-target": "#carousel", "data-slide-to": "0", className: "active" }),
	          _react2.default.createElement("li", { "data-target": "#carousel", "data-slide-to": "1" }),
	          _react2.default.createElement("li", { "data-target": "#carousel", "data-slide-to": "2" }),
	          _react2.default.createElement("li", { "data-target": "#carousel", "data-slide-to": "3" }),
	          _react2.default.createElement("li", { "data-target": "#carousel", "data-slide-to": "4" })
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "carousel-inner", role: "listbox" },
	          _react2.default.createElement(
	            "div",
	            { className: "item active" },
	            _react2.default.createElement("img", { src: "img/marina.jpg", alt: "boat-helm" }),
	            _react2.default.createElement(
	              "div",
	              { className: "carousel-caption" },
	              _react2.default.createElement(
	                "h3",
	                null,
	                "Nautical Tech Services will be there whenever you want. We specialize in everything."
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "item" },
	            _react2.default.createElement("img", { src: "img/helm.jpg", alt: "boat-helm" }),
	            _react2.default.createElement(
	              "div",
	              { className: "carousel-caption" },
	              _react2.default.createElement(
	                "h3",
	                null,
	                "Nautical Tech Services will be there whenever you want. We specialize in everything."
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "item" },
	            _react2.default.createElement("img", { src: "img/helm-outside.jpg", alt: "boat-helm" }),
	            _react2.default.createElement(
	              "div",
	              { className: "carousel-caption" },
	              _react2.default.createElement(
	                "h3",
	                null,
	                "Nautical Tech Services works weekends."
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "item" },
	            _react2.default.createElement("img", { src: "img/fuel-delivery.jpg", alt: "boat-helm" }),
	            _react2.default.createElement(
	              "div",
	              { className: "carousel-caption" },
	              _react2.default.createElement(
	                "h3",
	                null,
	                "Fuel system deliver for diesel engins and engine services."
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "item" },
	            _react2.default.createElement("img", { src: "img/wires.jpg", alt: "boat-helm" }),
	            _react2.default.createElement(
	              "div",
	              { className: "carousel-caption" },
	              _react2.default.createElement(
	                "h3",
	                null,
	                "Nautical Tech Services takes pride in its wiring"
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Carousel;
	}(_react2.default.Component);

	exports.default = Carousel;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Carousel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Footer = function Footer(props) {
	  return _react2.default.createElement(
	    "div",
	    { id: "footer", className: "container-fluid" },
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        "div",
	        { className: "col-md-4" },
	        _react2.default.createElement(
	          "ul",
	          { className: "info-list" },
	          _react2.default.createElement(
	            "li",
	            null,
	            "List Item 1"
	          ),
	          _react2.default.createElement(
	            "li",
	            null,
	            "List Item 2"
	          ),
	          _react2.default.createElement(
	            "li",
	            null,
	            "List Item 3"
	          ),
	          _react2.default.createElement(
	            "li",
	            null,
	            "List Item 4"
	          )
	        )
	      )
	    )
	  );
	};

	exports.default = Footer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Footer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);

	    function Home() {
	        _classCallCheck(this, Home);

	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }

	    _createClass(Home, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "container main-content" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "row gradient-bg" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "col-md-6" },
	                        _react2.default.createElement(
	                            "h2",
	                            null,
	                            "What our clients have to say:"
	                        ),
	                        _react2.default.createElement(
	                            "blockquote",
	                            null,
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "\"Tony showed up on time and totally fixed my boat this weekend\" -@Boaterfan"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "blockquote",
	                            null,
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "\"I was about to head out to Catalina when I found my steering stopped working. Tony sent a tech out to at an instant and the weekend was saved.\" -@Boaterfan2"
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "col-md-6" },
	                        _react2.default.createElement(
	                            "h1",
	                            null,
	                            "Serving Marina Del Rey"
	                        ),
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            "Authentic seitan swag taxidermy. Ugh pork belly craft beer, letterpress salvia messenger bag drinking vinegar 8-bit. Cray sustainable venmo, actually single-origin coffee tumeric snackwave readymade squid lomo chia skateboard humblebrag waistcoat cronut. Food truck gastropub cardigan cronut pitchfork. Literally wayfarers sriracha, art party schlitz artisan prism truffaut banh mi yr microdosing venmo. Venmo yuccie four dollar toast viral banjo, heirloom tote bag aesthetic woke +1. Activated charcoal pour-over tattooed synth aesthetic, hammock live-edge four loko banh mi."
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "row no-border" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "col-md-12 text-center" },
	                        _react2.default.createElement(
	                            "h2",
	                            null,
	                            "Factory trained in all leading systems."
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "row text-center specialties-row no-border" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "col-md-4" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "thumbnail" },
	                            _react2.default.createElement("img", { src: "img/garmin-logo.gif" }),
	                            _react2.default.createElement(
	                                "h2",
	                                null,
	                                "Garmin Authorized Technition"
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "col-md-4" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "thumbnail" },
	                            _react2.default.createElement("img", { src: "img/furino-logo.gif" }),
	                            _react2.default.createElement(
	                                "h2",
	                                null,
	                                "Furino Authorized Technition"
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "col-md-4" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "thumbnail" },
	                            _react2.default.createElement("img", { src: "img/raymarine-logo.jpg" }),
	                            _react2.default.createElement(
	                                "h2",
	                                null,
	                                "Raymarine Authorized Technition"
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "row no-border text-center specialties-row" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "col-md-4" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "thumbnail" },
	                            _react2.default.createElement("img", { src: "img/yanmar-logo.jpeg" }),
	                            _react2.default.createElement(
	                                "h2",
	                                null,
	                                "Yanmar Authorized Mechanic"
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "col-md-4" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "thumbnail" },
	                            _react2.default.createElement("img", { src: "img/cummins-logo.png" }),
	                            _react2.default.createElement(
	                                "h2",
	                                null,
	                                "Cummins Authorized Mechanic"
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "col-md-4" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "thumbnail" },
	                            _react2.default.createElement("img", { src: "img/volvo-logo.gif" }),
	                            _react2.default.createElement(
	                                "h2",
	                                null,
	                                "Volvo Authorized Mechanic"
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "row" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: " jumbotron col-md-12" },
	                        _react2.default.createElement(
	                            "h2",
	                            null,
	                            "October Special:"
	                        ),
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            "Request a service this month and recieve 5% off."
	                        ),
	                        _react2.default.createElement(
	                            "button",
	                            { className: "btn-lg btn-primary", type: "button" },
	                            "Request Service"
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Home;
	}(_react2.default.Component);

	exports.default = Home;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Home.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
					value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var About = function About(props) {
					return _react2.default.createElement(
									"div",
									{ className: "container main-content" },
									_react2.default.createElement(
													"div",
													{ className: "row" },
													_react2.default.createElement(
																	"div",
																	{ className: "col-md-8" },
																	_react2.default.createElement(
																					"h1",
																					null,
																					"Serving Marina Del Rey"
																	),
																	_react2.default.createElement(
																					"p",
																					null,
																					"Authentic seitan swag taxidermy. Ugh pork belly craft beer, letterpress salvia messenger bag drinking vinegar 8-bit. Cray sustainable venmo, actually single-origin coffee tumeric snackwave readymade squid lomo chia skateboard humblebrag waistcoat cronut. Food truck gastropub cardigan cronut pitchfork. Literally wayfarers sriracha, art party schlitz artisan prism truffaut banh mi yr microdosing venmo. Venmo yuccie four dollar toast viral banjo, heirloom tote bag aesthetic woke +1. Activated charcoal pour-over tattooed synth aesthetic, hammock live-edge four loko banh mi."
																	),
																	_react2.default.createElement(
																					"h1",
																					null,
																					"Never Take Second"
																	),
																	_react2.default.createElement(
																					"p",
																					null,
																					"Authentic seitan swag taxidermy. Ugh pork belly craft beer, letterpress salvia messenger bag drinking vinegar 8-bit. Cray sustainable venmo, actually single-origin coffee tumeric snackwave readymade squid lomo chia skateboard humblebrag waistcoat cronut. Food truck gastropub cardigan cronut pitchfork. Literally wayfarers sriracha, art party schlitz artisan prism truffaut banh mi yr microdosing venmo. Venmo yuccie four dollar toast viral banjo, heirloom tote bag aesthetic woke +1. Activated charcoal pour-over tattooed synth aesthetic, hammock live-edge four loko banh mi."
																	),
																	_react2.default.createElement(
																					"p",
																					null,
																					"Authentic seitan swag taxidermy. Ugh pork belly craft beer, letterpress salvia messenger bag drinking vinegar 8-bit. Cray sustainable venmo, actually single-origin coffee tumeric snackwave readymade squid lomo chia skateboard humblebrag waistcoat cronut. Food truck gastropub cardigan cronut pitchfork. Literally wayfarers sriracha, art party schlitz artisan prism truffaut banh mi yr microdosing venmo. Venmo yuccie four dollar toast viral banjo, heirloom tote bag aesthetic woke +1. Activated charcoal pour-over tattooed synth aesthetic, hammock live-edge four loko banh mi."
																	)
													),
													_react2.default.createElement(
																	"div",
																	{ className: "col-md-4" },
																	_react2.default.createElement(
																					"h2",
																					null,
																					"Tetestimonials"
																	),
																	_react2.default.createElement(
																					"blockquote",
																					null,
																					_react2.default.createElement(
																									"p",
																									null,
																									"\"Tony showed up on time and totally fixed my boat this weekend\" -@Boaterfan"
																					)
																	),
																	_react2.default.createElement(
																					"blockquote",
																					null,
																					_react2.default.createElement(
																									"p",
																									null,
																									"\"I was about to head out to Catalina when I found my steering stopped working. Tony sent a tech out to at an instant and the weekend was saved.\" -@Boaterfan2"
																					)
																	)
													)
									)
					);
	};

	exports.default = About;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "About.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reBase = __webpack_require__(215);

	var _reBase2 = _interopRequireDefault(_reBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var base = _reBase2.default.createClass({
	    apiKey: "AIzaSyD-ZmgYyQLWfuk028K0xo_lUjaGiB4BnG0",
	    authDomain: "nts-easy-mean.firebaseapp.com",
	    databaseURL: "https://nts-easy-mean.firebaseio.com"
	});

	exports.default = base;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "base.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RequestForm = __webpack_require__(224);

	var _RequestForm2 = _interopRequireDefault(_RequestForm);

	var _RequestStatus = __webpack_require__(225);

	var _RequestStatus2 = _interopRequireDefault(_RequestStatus);

	var _Register = __webpack_require__(226);

	var _Register2 = _interopRequireDefault(_Register);

	var _base = __webpack_require__(214);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dashboard = function (_React$Component) {
		_inherits(Dashboard, _React$Component);

		function Dashboard(props) {
			_classCallCheck(this, Dashboard);

			var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

			_this.postRequest = _this.postRequest.bind(_this);
			_this.goTo = _this.goTo.bind(_this);
			_this.state = {
				uid: null,
				displayName: null,
				requests: {},
				lastRequestKey: {}
			};
			return _this;
		}

		// Refresh component incase already logged in on request.


		_createClass(Dashboard, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				// Set the state. 
				var path = 'users/' + this.props.uid;
				var ref = _base2.default.database().ref(path);
				ref.once('value', function (snapshot) {
					var data = snapshot.val() || {};
					if (!data.displayName) {
						console.log('No display name set');
					}
					_this2.setState({
						uid: _this2.props.uid,
						displayName: data.displayName
					});
				});
			}

			// Change dashboard components

		}, {
			key: 'goTo',
			value: function goTo(p) {
				this.context.router.transitionTo('dashboard/' + p);
			}

			// Add request to state/firebase

		}, {
			key: 'postRequest',
			value: function postRequest(ntsReq) {
				var uid = this.state.uid;
				var requests = this.state.requests;
				var timestamp = Date.now();
				var key = 'request-' + timestamp;
				var path = 'users/' + uid + '/requests/' + key;
				// push the request key and its data. 
				var ref = _base2.default.post(path, {
					data: ntsReq,
					then: function then(err) {
						if (!err) {
							console.log(err);
						}
					}
				});
				// set state
				requests[key] = ntsReq;
				this.setState({ requests: requests });
				this.setState({ lastRequestKey: key });
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				// If not logged in
				if (!this.props.uid) {
					return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_Register2.default, { authenticate: this.props.authenticate })
					);
				}
				// Logged In
				// Render param
				var p = this.props.params.action;
				if (p === 'request') return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_RequestForm2.default, { postRequest: this.postRequest })
				);
				if (p === 'status') return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_RequestStatus2.default, { ntsReq: this.state.requests[this.state.lastRequestKey] })
				);
				if (p === 'active') return _react2.default.createElement('div', null);
				if (p === 'invoices') return _react2.default.createElement('div', null);
				if (p === 'account') return _react2.default.createElement('div', null);
				if (p === 'vessel') return _react2.default.createElement('div', null);

				// Default Logged in
				var activeRequests = _react2.default.createElement(
					'button',
					{ className: 'btn btn-lg btn-primary', onClick: function onClick(p) {
							return _this3.goTo('active');
						} },
					'Active Requests'
				);
				var invoices = _react2.default.createElement(
					'button',
					{ className: 'btn btn-lg btn-primary', onClick: function onClick(p) {
							return _this3.goTo('invoices');
						} },
					'Invoices'
				);
				var request = _react2.default.createElement(
					'button',
					{ className: 'btn btn-lg btn-primary', onClick: function onClick(p) {
							return _this3.goTo('request');
						} },
					'New Request'
				);
				var accountInformation = _react2.default.createElement(
					'button',
					{ className: 'btn btn-lg btn-primary', onClick: function onClick(p) {
							return _this3.goTo('account');
						} },
					'Account Information'
				);
				var vesselInformation = _react2.default.createElement(
					'button',
					{ className: 'btn btn-lg btn-primary', onClick: function onClick(p) {
							return _this3.goTo('vessel');
						} },
					'Vessel Information'
				);
				var logout = _react2.default.createElement(
					'button',
					{ className: 'btn btn-lg btn-primary', onClick: this.props.logout },
					'Log Out!'
				);

				return _react2.default.createElement(
					'div',
					{ className: 'container main-content' },
					_react2.default.createElement(
						'div',
						{ className: 'row gradient-bg' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(
								'h1',
								null,
								'Dashboard'
							),
							_react2.default.createElement(
								'h2',
								null,
								'Welcome ',
								this.state.displayName
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row no-border' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-6 btn-group' },
							activeRequests,
							invoices,
							request
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row no-border' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-6 btn-group' },
							accountInformation,
							vesselInformation
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row no-border' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-6' },
							logout
						)
					)
				);
			}
		}]);

		return Dashboard;
	}(_react2.default.Component);

	Dashboard.contextTypes = {
		router: _react2.default.PropTypes.object
	};

	exports.default = Dashboard;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Dashboard.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RequestForm = function (_React$Component) {
	  _inherits(RequestForm, _React$Component);

	  function RequestForm() {
	    _classCallCheck(this, RequestForm);

	    return _possibleConstructorReturn(this, (RequestForm.__proto__ || Object.getPrototypeOf(RequestForm)).apply(this, arguments));
	  }

	  _createClass(RequestForm, [{
	    key: 'submitRequest',
	    value: function submitRequest(event) {
	      event.preventDefault();

	      var ntsReq = {
	        boatName: this.boatName.value,
	        boatType: this.boatType.value,
	        boatLoc: this.boatLoc.value,
	        jobDesc: this.jobDesc.value,
	        techy: 0,
	        date: Date.now()
	      };

	      this.props.postRequest(ntsReq);

	      console.log('You changed the URL');
	      this.context.router.transitionTo('/dashboard/status');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'container main-content' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-12' },
	            _react2.default.createElement(
	              'h1',
	              null,
	              _react2.default.createElement(
	                'small',
	                null,
	                'Request a service and recieve a response within 24 Hours'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'form',
	          { className: 'form-horizontal row no-border', onSubmit: function onSubmit(e) {
	              return _this2.submitRequest(e);
	            } },
	          _react2.default.createElement(
	            'fieldset',
	            null,
	            _react2.default.createElement(
	              'legend',
	              null,
	              'Account Information'
	            )
	          ),
	          _react2.default.createElement(
	            'fieldset',
	            null,
	            _react2.default.createElement(
	              'legend',
	              null,
	              'Contact Information'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6 col-sm-12' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-group' },
	                _react2.default.createElement(
	                  'label',
	                  { htmlFor: 'firstName', className: 'sr-only' },
	                  'First Name'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-md-10 col-sm-8' },
	                  _react2.default.createElement('input', { ref: function ref(input) {
	                      return _this2.firstName = input;
	                    }, type: 'text', className: 'form-control', placeholder: 'First Name' })
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'form-group' },
	                _react2.default.createElement(
	                  'label',
	                  { htmlFor: 'lastName', className: 'sr-only' },
	                  'Last Name'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-md-10 col-sm-8' },
	                  _react2.default.createElement('input', { ref: function ref(input) {
	                      return _this2.lastName = input;
	                    }, type: 'text', className: 'form-control', placeholder: 'Last Name' })
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6 col-sm-12' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-group' },
	                _react2.default.createElement(
	                  'label',
	                  { htmlFor: 'phoneNumber', className: 'sr-only' },
	                  'Phone Number'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-md-10 col-sm-8' },
	                  _react2.default.createElement('input', { ref: function ref(input) {
	                      return _this2.phoneNumber = input;
	                    }, type: 'text', className: 'form-control', placeholder: 'Phone Number' })
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'fieldset',
	            null,
	            _react2.default.createElement(
	              'legend',
	              null,
	              'Vessel Information'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6 col-sm-12' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-group' },
	                _react2.default.createElement(
	                  'label',
	                  { htmlFor: 'boatName', className: 'sr-only' },
	                  'Boat Name'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-md-10 col-sm-8' },
	                  _react2.default.createElement('input', { ref: function ref(input) {
	                      return _this2.boatName = input;
	                    }, type: 'text', className: 'form-control', placeholder: 'Boat Name' })
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'form-group' },
	                _react2.default.createElement(
	                  'label',
	                  { htmlFor: 'boatType', className: 'sr-only' },
	                  'Boat Type'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-md-10 col-sm-8' },
	                  _react2.default.createElement('input', { ref: function ref(input) {
	                      return _this2.boatType = input;
	                    }, type: 'text', className: 'form-control', placeholder: 'Boat Model and Length' })
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'form-group' },
	                _react2.default.createElement(
	                  'label',
	                  { htmlFor: 'boatLoc', className: 'sr-only' },
	                  'Boat Location'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-md-10 col-sm-8' },
	                  _react2.default.createElement('input', { ref: function ref(input) {
	                      return _this2.boatLoc = input;
	                    }, type: 'text', className: 'form-control', placeholder: 'Boat Location' })
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6 col-sm-12' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-group' },
	                _react2.default.createElement(
	                  'label',
	                  { htmlFor: 'jobDesc', className: 'sr-only' },
	                  'Job Description'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-md-10 col-sm-8' },
	                  _react2.default.createElement('textarea', { ref: function ref(input) {
	                      return _this2.jobDesc = input;
	                    }, className: 'form-control', rows: '6', placeholder: 'Job Description' })
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'fieldset',
	            null,
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6 col-sm-12' },
	              _react2.default.createElement(
	                'label',
	                { htmlFor: 'submit', className: 'sr-only' },
	                'Submit Request'
	              ),
	              _react2.default.createElement(
	                'button',
	                { type: 'submit', className: 'btn btn-default btn-primary' },
	                'Request Service'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return RequestForm;
	}(_react2.default.Component);

	RequestForm.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	exports.default = RequestForm;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "RequestForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RequestStatus = function (_React$Component) {
	  _inherits(RequestStatus, _React$Component);

	  function RequestStatus() {
	    _classCallCheck(this, RequestStatus);

	    return _possibleConstructorReturn(this, (RequestStatus.__proto__ || Object.getPrototypeOf(RequestStatus)).apply(this, arguments));
	  }

	  _createClass(RequestStatus, [{
	    key: 'render',
	    value: function render() {
	      var ntsReq = this.props.ntsReq;
	      return _react2.default.createElement(
	        'div',
	        { className: 'container main-content' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-12' },
	            _react2.default.createElement(
	              'h1',
	              null,
	              'Message about status',
	              _react2.default.createElement(
	                'small',
	                null,
	                ' Kind words'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row no-border' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-12' },
	            _react2.default.createElement(
	              'h1',
	              null,
	              'Request Information'
	            ),
	            _react2.default.createElement(
	              'ul',
	              null,
	              _react2.default.createElement(
	                'li',
	                null,
	                'Date Requested: ',
	                ntsReq.date
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                'User Id: ',
	                ntsReq.uid
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                'Boat Type: ',
	                ntsReq.boatType
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                'Boat Name: ',
	                ntsReq.boatName
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                'Boat Location: ',
	                ntsReq.boatLoc
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                'Job Description: ',
	                ntsReq.jobDesc
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return RequestStatus;
	}(_react2.default.Component);

	exports.default = RequestStatus;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "RequestStatus.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(214);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Register = function (_React$Component) {
		_inherits(Register, _React$Component);

		function Register() {
			_classCallCheck(this, Register);

			return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
		}

		_createClass(Register, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					'div',
					{ className: 'container main-content' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(
								'nav',
								{ className: 'login' },
								_react2.default.createElement(
									'h2',
									null,
									'Register / Log In'
								),
								_react2.default.createElement(
									'p',
									null,
									'Sign in to manage your vessel\'s services'
								),
								_react2.default.createElement(
									'button',
									{ className: 'github', onClick: function onClick() {
											return _this2.props.authenticate('google');
										} },
									'Log In with Google'
								),
								_react2.default.createElement(
									'button',
									{ className: 'facebook', onClick: function onClick() {
											return _this2.props.authenticate('facebook');
										} },
									'Log In with Facebook'
								),
								_react2.default.createElement(
									'button',
									{ className: 'twitter', onClick: function onClick() {
											return _this2.props.authenticate('twitter');
										} },
									'Log In with Email'
								)
							)
						)
					)
				);
			}
		}]);

		return Register;
	}(_react2.default.Component);

	exports.default = Register;


	Register.contextTypes = {
		router: _react2.default.PropTypes.object
	};

	// 		<div className="container main-content">
	// 			  <div className="row">
	// 			    <div className="col-md-12">
	// 			      <h1><small>Register and keep track of your requests.</small></h1>
	// 			    </div>
	// 			  </div>
	// 			  <form className="form-horizontal row no-border">
	// 			    <fieldset>
	// 			      <legend>Register</legend>
	// 			      <div className="col-md-6 col-sm-12">
	// 			        <div className="form-group">
	// 			          <label htmlFor="email" className="sr-only">Email</label>
	// 			          <div className="col-md-10 col-sm-8">
	// 			            <input type="email" className="form-control" placeholder="Email" />
	// 			          </div>
	// 			        </div>
	// 			        <div className="form-group">
	// 			          <label htmlFor="passWord1" className="sr-only">Password</label>
	// 			          <div className="col-md-10 col-sm-8">
	// 			            <input type="password" className="form-control" placeholder="Password" />
	// 			          </div>
	// 			        </div>
	// 			        <div className="form-group">
	// 			          <label htmlFor="passWord2" className="sr-only">Confirm Password</label>
	// 			          <div className="col-md-10 col-sm-8">
	// 			            <input type="password" className="form-control" placeholder="Confirm Password" />
	// 			          </div>
	// 			        </div>
	// 			      </div>
	// 			    </fieldset>
	// 			  </form>
	// 			</div>

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-easy-mean\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Register.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});