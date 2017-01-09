webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _App = __webpack_require__(172);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

	var _Register = __webpack_require__(230);

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
					// console.log(!data.displayName);
					if (!data.displayName) {
						userRef.set({
							email: authData.user.email,
							displayName: authData.user.displayName,
							firstName: 0,
							lastName: 0,
							phoneNumber: 0
						});
					}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return _react2.default.createElement(
					_reactRouter.BrowserRouter,
					null,
					_react2.default.createElement(_Navigation2.default, { uid: this.state.uid }),
					_react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/', component: _Home2.default }),
					_react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/about', component: _About2.default }),
					_react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/register', render: function render() {
							return _react2.default.createElement(_Register2.default, { authenticate: _this3.authenticate });
						} }),
					_react2.default.createElement(_reactRouter.Match, { pattern: '/dashboard/:location?', render: function render(props) {
							return _react2.default.createElement(_Dashboard2.default, _extends({
								uid: _this3.state.uid,
								authenticate: _this3.authenticate,
								logout: _this3.logout
							}, props));
						} }),
					_react2.default.createElement(_Footer2.default, null)
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	exports.default = App;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "App.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	var _NavStateBtn = __webpack_require__(209);

	var _NavStateBtn2 = _interopRequireDefault(_NavStateBtn);

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
							_react2.default.createElement(
								'span',
								{ className: 'hidden-xs' },
								_react2.default.createElement(_NavStateBtn2.default, { uid: this.state.uid })
							)
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
								),
								_react2.default.createElement(
									'li',
									{ className: 'visible-xs' },
									_react2.default.createElement(_NavStateBtn2.default, { uid: this.state.uid })
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

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Navigation.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

	var NavStateBtnr = function (_React$Component) {
		_inherits(NavStateBtnr, _React$Component);

		function NavStateBtnr(props) {
			_classCallCheck(this, NavStateBtnr);

			var _this = _possibleConstructorReturn(this, (NavStateBtnr.__proto__ || Object.getPrototypeOf(NavStateBtnr)).call(this, props));

			_this.renderRegisterButton = _this.renderRegisterButton.bind(_this);
			_this.state = {
				uid: null
			};
			return _this;
		}

		_createClass(NavStateBtnr, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				this.setState({ uid: nextProps.uid });
			}
		}, {
			key: 'renderRegisterButton',
			value: function renderRegisterButton() {
				return _react2.default.createElement(
					_reactRouter.Link,
					{ className: 'nav-st-btn', to: '/register' },
					_react2.default.createElement(
						'button',
						{ className: 'btn btn-default navbar-btn navbar-left', type: 'button' },
						'Login'
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
						{ className: 'nav-st-btn', to: '/dashboard' },
						_react2.default.createElement(
							'button',
							{ className: 'btn btn-success navbar-btn navbar-left', type: 'button' },
							'Dashboard'
						)
					)
				);
			}
		}]);

		return NavStateBtnr;
	}(_react2.default.Component);

	exports.default = NavStateBtnr;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "NavStateBtn.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Carousel = function Carousel(props) {
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
	};

	exports.default = Carousel;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Carousel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Footer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Carousel = __webpack_require__(210);

	var _Carousel2 = _interopRequireDefault(_Carousel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = function Home(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_Carousel2.default, null),
	    _react2.default.createElement(
	      'div',
	      { className: 'container main-content' },
	      _react2.default.createElement(
	        'div',
	        { className: 'row gradient-bg' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-6' },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'What our clients have to say:'
	          ),
	          _react2.default.createElement(
	            'blockquote',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              '"Tony showed up on time and totally fixed my boat this weekend" -@Boaterfan'
	            )
	          ),
	          _react2.default.createElement(
	            'blockquote',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              '"I was about to head out to Catalina when I found my steering stopped working. Tony sent a tech out to at an instant and the weekend was saved." -@Boaterfan2'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-6' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Serving Marina Del Rey'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Authentic seitan swag taxidermy. Ugh pork belly craft beer, letterpress salvia messenger bag drinking vinegar 8-bit. Cray sustainable venmo, actually single-origin coffee tumeric snackwave readymade squid lomo chia skateboard humblebrag waistcoat cronut. Food truck gastropub cardigan cronut pitchfork. Literally wayfarers sriracha, art party schlitz artisan prism truffaut banh mi yr microdosing venmo. Venmo yuccie four dollar toast viral banjo, heirloom tote bag aesthetic woke +1. Activated charcoal pour-over tattooed synth aesthetic, hammock live-edge four loko banh mi.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'row no-border' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-12 text-center' },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Factory trained in all leading systems.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'row text-center specialties-row no-border' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-4' },
	          _react2.default.createElement(
	            'div',
	            { className: 'thumbnail' },
	            _react2.default.createElement('img', { src: 'img/garmin-logo.gif' }),
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Garmin Authorized Technition'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-4' },
	          _react2.default.createElement(
	            'div',
	            { className: 'thumbnail' },
	            _react2.default.createElement('img', { src: 'img/furino-logo.gif' }),
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Furino Authorized Technition'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-4' },
	          _react2.default.createElement(
	            'div',
	            { className: 'thumbnail' },
	            _react2.default.createElement('img', { src: 'img/raymarine-logo.jpg' }),
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Raymarine Authorized Technition'
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'row no-border text-center specialties-row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-4' },
	          _react2.default.createElement(
	            'div',
	            { className: 'thumbnail' },
	            _react2.default.createElement('img', { src: 'img/yanmar-logo.jpeg' }),
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Yanmar Authorized Mechanic'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-4' },
	          _react2.default.createElement(
	            'div',
	            { className: 'thumbnail' },
	            _react2.default.createElement('img', { src: 'img/cummins-logo.png' }),
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Cummins Authorized Mechanic'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-4' },
	          _react2.default.createElement(
	            'div',
	            { className: 'thumbnail' },
	            _react2.default.createElement('img', { src: 'img/volvo-logo.gif' }),
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Volvo Authorized Mechanic'
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: ' jumbotron col-md-12' },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'October Special:'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Request a service this month and recieve 5% off.'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'btn-lg btn-primary', type: 'button' },
	            'Request Service'
	          )
	        )
	      )
	    )
	  );
	};

	exports.default = Home;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Home.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Carousel = __webpack_require__(210);

	var _Carousel2 = _interopRequireDefault(_Carousel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var About = function About(props) {
			return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_Carousel2.default, null),
					_react2.default.createElement(
							'div',
							{ className: 'container main-content' },
							_react2.default.createElement(
									'div',
									{ className: 'main-row' },
									_react2.default.createElement(
											'div',
											{ className: 'col-md-8' },
											_react2.default.createElement(
													'h1',
													null,
													'Serving Marina Del Rey'
											),
											_react2.default.createElement(
													'p',
													null,
													'Authentic seitan swag taxidermy. Ugh pork belly craft beer, letterpress salvia messenger bag drinking vinegar 8-bit. Cray sustainable venmo, actually single-origin coffee tumeric snackwave readymade squid lomo chia skateboard humblebrag waistcoat cronut. Food truck gastropub cardigan cronut pitchfork. Literally wayfarers sriracha, art party schlitz artisan prism truffaut banh mi yr microdosing venmo. Venmo yuccie four dollar toast viral banjo, heirloom tote bag aesthetic woke +1. Activated charcoal pour-over tattooed synth aesthetic, hammock live-edge four loko banh mi.'
											),
											_react2.default.createElement(
													'h1',
													null,
													'Never Take Second'
											),
											_react2.default.createElement(
													'p',
													null,
													'Authentic seitan swag taxidermy. Ugh pork belly craft beer, letterpress salvia messenger bag drinking vinegar 8-bit. Cray sustainable venmo, actually single-origin coffee tumeric snackwave readymade squid lomo chia skateboard humblebrag waistcoat cronut. Food truck gastropub cardigan cronut pitchfork. Literally wayfarers sriracha, art party schlitz artisan prism truffaut banh mi yr microdosing venmo. Venmo yuccie four dollar toast viral banjo, heirloom tote bag aesthetic woke +1. Activated charcoal pour-over tattooed synth aesthetic, hammock live-edge four loko banh mi.'
											),
											_react2.default.createElement(
													'p',
													null,
													'Authentic seitan swag taxidermy. Ugh pork belly craft beer, letterpress salvia messenger bag drinking vinegar 8-bit. Cray sustainable venmo, actually single-origin coffee tumeric snackwave readymade squid lomo chia skateboard humblebrag waistcoat cronut. Food truck gastropub cardigan cronut pitchfork. Literally wayfarers sriracha, art party schlitz artisan prism truffaut banh mi yr microdosing venmo. Venmo yuccie four dollar toast viral banjo, heirloom tote bag aesthetic woke +1. Activated charcoal pour-over tattooed synth aesthetic, hammock live-edge four loko banh mi.'
											)
									),
									_react2.default.createElement(
											'div',
											{ className: 'col-md-4' },
											_react2.default.createElement(
													'h2',
													null,
													'Tetestimonials'
											),
											_react2.default.createElement(
													'blockquote',
													null,
													_react2.default.createElement(
															'p',
															null,
															'"Tony showed up on time and totally fixed my boat this weekend" -@Boaterfan'
													)
											),
											_react2.default.createElement(
													'blockquote',
													null,
													_react2.default.createElement(
															'p',
															null,
															'"I was about to head out to Catalina when I found my steering stopped working. Tony sent a tech out to at an instant and the weekend was saved." -@Boaterfan2'
													)
											)
									)
							)
					)
			);
	};

	exports.default = About;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "About.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "base.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	var _Account = __webpack_require__(224);

	var _Account2 = _interopRequireDefault(_Account);

	var _RequestForm = __webpack_require__(225);

	var _RequestForm2 = _interopRequireDefault(_RequestForm);

	var _RequestStatus = __webpack_require__(227);

	var _RequestStatus2 = _interopRequireDefault(_RequestStatus);

	var _RequestsActive = __webpack_require__(228);

	var _RequestsActive2 = _interopRequireDefault(_RequestsActive);

	var _Register = __webpack_require__(230);

	var _Register2 = _interopRequireDefault(_Register);

	var _Vessels = __webpack_require__(231);

	var _Vessels2 = _interopRequireDefault(_Vessels);

	var _ClientNavigation = __webpack_require__(232);

	var _ClientNavigation2 = _interopRequireDefault(_ClientNavigation);

	var _DashHeading = __webpack_require__(233);

	var _DashHeading2 = _interopRequireDefault(_DashHeading);

	var _base = __webpack_require__(214);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	/* Client Components */


	var Dashboard = function (_React$Component) {
		_inherits(Dashboard, _React$Component);

		function Dashboard(props) {
			_classCallCheck(this, Dashboard);

			var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

			_this.postRequest = _this.postRequest.bind(_this);
			_this.fetchRequest = _this.fetchRequest.bind(_this);
			_this.state = {
				displayName: null,
				vessels: {},
				requests: {}
			};
			return _this;
		}

		// Update State & Sync


		_createClass(Dashboard, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var _this2 = this;

				// Set the state. 
				var path = 'users/' + this.props.uid;
				var ref = _base2.default.database().ref(path);
				ref.once('value', function (snapshot) {
					var data = snapshot.val() || {};
					_this2.setState({
						displayName: data.displayName
					});
				});
				this.ref = _base2.default.syncState('users/' + this.props.uid + '/requests', {
					context: this,
					state: 'requests'
				});
				this.ref2 = _base2.default.syncState('vessels', {
					context: this,
					state: 'vessels',
					queries: {
						orderByChild: 'owner',
						equalTo: this.props.uid
					}
				});
			}

			// Stop Syncing

		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				_base2.default.removeBinding(this.ref);
				_base2.default.removeBinding(this.ref2);
			}

			// Fetches request from state

		}, {
			key: 'fetchRequest',
			value: function fetchRequest(key) {
				return this.state.requests['request-' + key];
			}

			// Add request to state/firebase

		}, {
			key: 'postRequest',
			value: function postRequest(ntsReq) {
				var uid = this.props.uid;
				var requests = this.state.requests;
				var key = 'request-' + ntsReq.id;
				var path = 'users/' + uid + '/requests/' + key;
				if (uid == null) return;
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
				this.setState({
					requests: requests
				});
			}

			// Add vessel to state/firebase

		}, {
			key: 'postVessel',
			value: function postVessel(ntsVessel) {
				// if vessel exists?
				var vessels = this.state.vessels;
				var key = 'vessel-' + ntsVessel.id;
				var path = 'vessels/' + key;
				// push the request key and its data. 
				var ref = _base2.default.post(path, {
					data: ntsVessel,
					then: function then(err) {
						if (!err) {
							console.log(err);
						}
					}
				});
				// set state
				vessels[key] = ntsVessel;
				this.setState({
					vessels: vessels
				});
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
				var pathname = '/dashboard';
				var location = this.props.params.location;
				location = location == undefined ? '' : location = location;

				return _react2.default.createElement(
					'div',
					{ className: 'container main-content' },
					_react2.default.createElement(
						'div',
						{ className: 'row gradient-bg' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-9 col-sm-12' },
							_react2.default.createElement(
								'div',
								{ className: 'visible-sm visible-xs col-sm-12 btn-group' },
								_react2.default.createElement(_ClientNavigation2.default, { path: pathname, logout: this.props.logout, btnStyles: 'sm' })
							),
							_react2.default.createElement(_DashHeading2.default, { path: pathname, loc: location, displayName: this.state.displayName }),
							_react2.default.createElement(_reactRouter.Match, { pattern: pathname + '/request/:key?', render: function render(props) {
									return _react2.default.createElement(_RequestForm2.default, {
										uid: _this3.state.uid,
										postRequest: _this3.postRequest
									});
								} }),
							_react2.default.createElement(_reactRouter.Match, { pattern: pathname + '/active/:key?', render: function render(props) {
									return _react2.default.createElement(_RequestsActive2.default, {
										requests: _this3.state.requests
									});
								} }),
							_react2.default.createElement(_reactRouter.Match, { pattern: pathname + '/invoices/:key?', render: function render(props) {
									return _react2.default.createElement(Invoices, null);
								} }),
							_react2.default.createElement(_reactRouter.Match, { pattern: pathname + '/account/:key?', render: function render(props) {
									return _react2.default.createElement(_Account2.default, {
										uid: _this3.props.uid
									});
								} }),
							_react2.default.createElement(_reactRouter.Match, { pattern: pathname + '/vessels/:key?', render: function render(props) {
									return _react2.default.createElement(_Vessels2.default, null);
								} }),
							_react2.default.createElement(_reactRouter.Match, { pattern: pathname + '/status/:key?', render: function render(props) {
									return _react2.default.createElement(_RequestStatus2.default, _extends({
										fetchRequest: _this3.fetchRequest
									}, props));
								} })
						),
						_react2.default.createElement(
							'div',
							{ className: 'hidden-sm hidden-xs col-md-3 btn-group client-nav-container' },
							_react2.default.createElement(_ClientNavigation2.default, { path: pathname, logout: this.props.logout, btnStyles: 'md' })
						)
					)
				);
			}
		}]);

		return Dashboard;
	}(_react2.default.Component);

	exports.default = Dashboard;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Dashboard.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

	var Account = function (_React$Component) {
		_inherits(Account, _React$Component);

		function Account(props) {
			_classCallCheck(this, Account);

			var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props));

			_this.state = {
				user: {
					displayName: null,
					firstName: null,
					lastName: null,
					phone: null,
					email: null
				}
			};
			return _this;
		}

		// Update State & Sync


		_createClass(Account, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				this.ref = _base2.default.syncState('users/' + this.props.uid, {
					context: this,
					state: 'user'
				});
			}

			// Stop Syncing

		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				_base2.default.removeBinding(this.ref);
			}
		}, {
			key: 'render',
			value: function render() {
				var user = this.state.user;
				return _react2.default.createElement(
					'div',
					{ className: 'main-row row no-border' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-12' },
						_react2.default.createElement(
							'h2',
							null,
							_react2.default.createElement(
								'small',
								null,
								'Account Settings'
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
								'ul',
								null,
								_react2.default.createElement(
									'li',
									null,
									'Display Name: ',
									user.displayName
								),
								_react2.default.createElement(
									'li',
									null,
									'First Name: ',
									user.firstName
								),
								_react2.default.createElement(
									'li',
									null,
									'Last Name: ',
									user.lastName
								),
								_react2.default.createElement(
									'li',
									null,
									'Contact Email: ',
									user.email
								),
								_react2.default.createElement(
									'li',
									null,
									'Contact Phone: ',
									user.phone
								)
							)
						)
					)
				);
			}
		}]);

		return Account;
	}(_react2.default.Component);

	exports.default = Account;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Account.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _helperData = __webpack_require__(226);

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
	        vesselId: ntsVessel.id,
	        boatLoc: this.boatLoc.value,
	        jobDesc: this.jobDesc.value,
	        techy: 0,
	        date: Date.now()
	      };

	      ntsReq['id'] = ntsReq.date;
	      this.props.postRequest(ntsReq);
	      this.context.router.transitionTo('/dashboard/status/' + ntsReq.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'main-row' },
	        _react2.default.createElement(
	          'h1',
	          { className: 'hidden-xs' },
	          _react2.default.createElement(
	            'small',
	            null,
	            'Request a service and recieve a response within 24 Hours'
	          )
	        ),
	        _react2.default.createElement(
	          'form',
	          { className: 'form-horizontal row no-border col-md-12', onSubmit: function onSubmit(e) {
	              return _this2.submitRequest(e);
	            } },
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
	              { className: 'form-group' },
	              _react2.default.createElement(
	                'label',
	                { htmlFor: 'boatName', className: 'sr-only' },
	                'Boat Name'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-md-8 col-sm-8' },
	                _react2.default.createElement('input', { ref: function ref(input) {
	                    return _this2.boatName = input;
	                  }, type: 'text', className: 'form-control', defaultValue: (0, _helperData.getName)(), placeholder: 'Boat Name' })
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
	                { className: 'col-md-8 col-sm-8' },
	                _react2.default.createElement('input', { ref: function ref(input) {
	                    return _this2.boatType = input;
	                  }, type: 'text', className: 'form-control', defaultValue: (0, _helperData.getType)(), placeholder: 'Boat Model and Length' })
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
	                { className: 'col-md-8 col-sm-8' },
	                _react2.default.createElement('input', { ref: function ref(input) {
	                    return _this2.boatLoc = input;
	                  }, type: 'text', className: 'form-control', defaultValue: (0, _helperData.getLoc)(), placeholder: 'Boat Location' })
	              )
	            ),
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
	                { className: 'col-md-8 col-sm-8' },
	                _react2.default.createElement('textarea', { ref: function ref(input) {
	                    return _this2.jobDesc = input;
	                  }, className: 'form-control', rows: '6', defaultValue: (0, _helperData.getDesc)(), placeholder: 'Job Description' })
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
	        ),
	        _react2.default.createElement('div', null)
	      );
	    }
	  }]);

	  return RequestForm;
	}(_react2.default.Component);

	RequestForm.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	exports.default = RequestForm;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "RequestForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.rando = rando;
	exports.getFunName = getFunName;
	exports.getLength = getLength;
	exports.getType = getType;
	exports.getLoc = getLoc;
	exports.getDesc = getDesc;
	exports.getName = getName;
	function rando(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	function getFunName() {
		var adjectives = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'bewildered', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried'];

		var nouns = ['women', 'men', 'children', 'teeth', 'feet', 'people', 'leaves', 'mice', 'geese', 'halves', 'knives', 'wives', 'lives', 'elves', 'loaves', 'potatoes', 'tomatoes', 'cacti', 'foci', 'fungi', 'nuclei', 'syllabuses', 'analyses', 'diagnoses', 'oases', 'theses', 'crises', 'phenomena', 'criteria', 'data'];

		return rando(adjectives) + '-' + rando(adjectives) + '-' + rando(nouns);
	}

	function getLength() {
		return Math.floor(Math.random() * 100);
	}

	function getType() {

		var type = ['Hunter', 'Piece-o-crap', 'Bucket', 'Sled', 'Log', 'Potato', 'Slick', 'Courage', 'Tub'];

		return rando(type) + '-' + getLength();
	}

	function getLoc() {

		var location = ['MDR'];
		var slip = ['A', 'B', 'C', 'D', 'E', 'F'];
		var number = Math.floor(Math.random() * 2000);

		return rando(location) + '-' + rando(slip) + '-' + number;
	}

	function getDesc() {

		var description = ['clogged my toilet', 'broke my boom', 'put a sock in my muffler', 'threw up in my fuel tank', 'thinks need a fuel change', 'thought i could use a turbo-charger'];

		return getFunName() + ' ' + rando(description);
	}

	function getName() {
		var prefixes = ["Buzz ", "Rock ", "Amazing ", "Bombastic ", "Chivalrous ", "Daring ", "Extraordinary ", "Fantastic ", "Gritty ", "Helpful ", "Incredible ", "Jaunty ", "Killer ", "Lowly ", "Quixotic ", "Savage ", "Unlikely ", "Vicious ", "Wild ", "Terrifying ", "Unlikely ", "Marvelous ", "Nefarious ", "Odious ", "Poisonous ", "Radioactive ", "Smarty ", "Mask ", "Powerhouse ", "Buzz ", "Smarty ", "Mask ", "Tough ", "Incredible ", "Firey ", "Toxic ", "Wind ", "Walker ", "Captain ", "Capetape ", "Major ", "Math ", "Super ", "Glitter ", "Crimson ", "Moon ", "Chaser ", "The Electric ", "Speeding ", "Magenta ", "Comet ", "Obsidian ", "Pink ", "Green ", "Sparkle ", "Jade ", "Jester ", "Thunder ", "Rapid ", "Duke ", "Whistle ", "Shadow ", "Wing ", "Arrow ", "Sapphire ", "Astro ", "Captain ", "The Glittering ", "The Outer Space ", "The Extraterrestrial ", "The Swift ", "Magic "];

		var affixes = ["Flash ", "Imp", "Jaguar", "Lizard", "Nymph", "Ogre", "Python", "Queen", "Robot", "Spirit", "Thief", "Underdog", "Vampire", "Wizard", "Witch", "Alien ", "Beast", "Dragon", "Eagle", "Fairy", "Giant", "Hawk", "Wonder", "Atom", "Powerhouse ", "Protector ", "Pants", "Destroyer", "Crusher", "Defender", "Kid", "Wizard", "Falcon", "Phoenix", "Hurricane", "Hunter ", "Sleuth ", "Kitten", "Fluffball", "Dragon", "Pony", "Gazius ", "Magmamingo ", "Chimitar ", "Oysterminate ", "Discorpion ", "Unicorn", "Feather", "Lightning", "Thunder"];

		return rando(prefixes) + ' ' + rando(affixes);
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "helperData.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RequestStatus = function RequestStatus(props) {

	  var ntsReq = props.fetchRequest(props.params.key);

	  return _react2.default.createElement(
	    'div',
	    { className: 'main-row row no-border' },
	    _react2.default.createElement(
	      'div',
	      { className: 'row no-border' },
	      _react2.default.createElement(
	        'div',
	        { className: 'col-md-12' },
	        _react2.default.createElement(
	          'h2',
	          null,
	          _react2.default.createElement(
	            'small',
	            null,
	            'Request ID: ',
	            ntsReq.date
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
	};

	exports.default = RequestStatus;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "RequestStatus.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Request = __webpack_require__(229);

	var _Request2 = _interopRequireDefault(_Request);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RequestsActive = function RequestsActive(props) {
		return _react2.default.createElement(
			'table',
			{ className: 'table table-striped' },
			_react2.default.createElement(
				'caption',
				null,
				'All Requests'
			),
			_react2.default.createElement(
				'tbody',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'ID'
					),
					_react2.default.createElement(
						'th',
						null,
						'Date'
					),
					_react2.default.createElement(
						'th',
						null,
						'Tech'
					),
					_react2.default.createElement(
						'th',
						null,
						'Status'
					)
				),
				Object.keys(props.requests).map(function (key) {
					return _react2.default.createElement(_Request2.default, { key: key, index: key, details: props.requests[key] });
				})
			)
		);
	};

	exports.default = RequestsActive;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "RequestsActive.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Request = function Request(props) {
		var details = props.details;

		return _react2.default.createElement(
			'tr',
			null,
			_react2.default.createElement(
				'td',
				null,
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: '/dashboard/status/' + details.id },
					details.id
				)
			),
			_react2.default.createElement(
				'td',
				null,
				details.date
			),
			_react2.default.createElement(
				'td',
				null,
				details.techy
			),
			_react2.default.createElement(
				'td',
				null,
				details.techy
			)
		);
	};

	exports.default = Request;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Request.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Carousel = __webpack_require__(210);

	var _Carousel2 = _interopRequireDefault(_Carousel);

	var _base = __webpack_require__(214);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Register = function Register(props) {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_Carousel2.default, null),
			_react2.default.createElement(
				'div',
				{ className: 'container main-content' },
				_react2.default.createElement(
					'div',
					{ className: 'main-row row' },
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
										return props.authenticate('google');
									} },
								'Log In with Google'
							),
							_react2.default.createElement(
								'button',
								{ className: 'facebook', onClick: function onClick() {
										return props.authenticate('facebook');
									} },
								'Log In with Facebook'
							),
							_react2.default.createElement(
								'button',
								{ className: 'twitter', onClick: function onClick() {
										return props.authenticate('twitter');
									} },
								'Log In with Email'
							)
						)
					)
				)
			)
		);
	};

	exports.default = Register;

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

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Register.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _VesselForm = __webpack_require__(234);

	var _VesselForm2 = _interopRequireDefault(_VesselForm);

	var _base = __webpack_require__(214);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Vessels = function (_React$Component) {
		_inherits(Vessels, _React$Component);

		function Vessels(props) {
			_classCallCheck(this, Vessels);

			return _possibleConstructorReturn(this, (Vessels.__proto__ || Object.getPrototypeOf(Vessels)).call(this, props));
		}

		// Update State & Sync


		_createClass(Vessels, [{
			key: 'componentWillMount',
			value: function componentWillMount() {}
			// this.ref = base.syncState('vessels', {
			// 	context: this,
			// 	state: 'vessels',
			// 	queries: {
			// 		orderByChild: 'owner',
			// 		equalTo: this.props.uid
			// 	}
			// })


			// Stop Syncing

		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				_base2.default.removeBinding(this.ref);
			}

			// OnClick show vessel form


		}, {
			key: 'render',
			value: function render() {
				var btnStyles = 'btn btn-sm';
				return _react2.default.createElement(
					'div',
					{ className: 'main-row row no-border' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-12' },
						_react2.default.createElement(
							'h2',
							null,
							_react2.default.createElement(
								'small',
								null,
								'All Vessels'
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
								'table',
								{ className: 'table table-striped' },
								_react2.default.createElement(
									'caption',
									null,
									_react2.default.createElement(
										'span',
										null,
										_react2.default.createElement(
											'button',
											{ className: btnStyles + ' btn-success' },
											'Add a vessel'
										)
									)
								),
								_react2.default.createElement(
									'tbody',
									null,
									_react2.default.createElement(
										'tr',
										null,
										_react2.default.createElement(
											'th',
											null,
											'Hull ID'
										),
										_react2.default.createElement(
											'th',
											null,
											'CF'
										),
										_react2.default.createElement(
											'th',
											null,
											'Name'
										),
										_react2.default.createElement(
											'th',
											null,
											'Type'
										),
										_react2.default.createElement(
											'th',
											null,
											'Verified'
										)
									)
								)
							)
						)
					)
				);
			}
		}]);

		return Vessels;
	}(_react2.default.Component);

	exports.default = Vessels;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Vessels.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ClientNavigation = function ClientNavigation(props) {

	  var pathname = props.path;
	  var btnStylesMd = 'btn btn-lg btn-primary btn-block client-nav-btn';
	  var btnStylesSm = 'btn btn-md btn-primary client-nav-btn-sm';
	  var btnStyles = btnStyles = props.btnStyles == 'md' ? btnStylesMd : btnStylesSm;

	  var request = _react2.default.createElement(
	    _reactRouter.Link,
	    { to: pathname + '/request' },
	    _react2.default.createElement(
	      'button',
	      { className: btnStyles },
	      'New Request'
	    )
	  );

	  var activeRequests = _react2.default.createElement(
	    _reactRouter.Link,
	    { to: pathname + '/active' },
	    _react2.default.createElement(
	      'button',
	      { className: btnStyles },
	      'Active Requests'
	    )
	  );

	  var invoices = _react2.default.createElement(
	    _reactRouter.Link,
	    { to: pathname + '/invoices' },
	    _react2.default.createElement(
	      'button',
	      { className: btnStyles },
	      'Invoices'
	    )
	  );

	  var accountInformation = _react2.default.createElement(
	    _reactRouter.Link,
	    { to: pathname + '/account' },
	    _react2.default.createElement(
	      'button',
	      { className: btnStyles },
	      'Account Information'
	    )
	  );

	  var vesselInformation = _react2.default.createElement(
	    _reactRouter.Link,
	    { to: pathname + '/vessels' },
	    _react2.default.createElement(
	      'button',
	      { className: btnStyles },
	      'Vessel Information'
	    )
	  );

	  var logout = _react2.default.createElement(
	    'button',
	    { className: btnStyles + ' btn-danger', onClick: props.logout },
	    'Log Out'
	  );

	  return _react2.default.createElement(
	    'span',
	    null,
	    request,
	    activeRequests,
	    invoices,
	    accountInformation,
	    vesselInformation,
	    logout
	  );
	};

	exports.default = ClientNavigation;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ClientNavigation.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DashHeading = function DashHeading(props) {

		var pathname = props.path;
		var displayName = props.displayName;
		var location = props.loc;

		return _react2.default.createElement(
			'span',
			null,
			_react2.default.createElement(
				'h1',
				{ className: 'dash-location' },
				pathname.slice(1) + ' > ' + (location = location == 'active' ? 'active requests' : location)
			),
			_react2.default.createElement(
				'h3',
				null,
				'Hello ',
				displayName
			)
		);
	};

	exports.default = DashHeading;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DashHeading.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _helperData = __webpack_require__(226);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VesselForm = function VesselForm(props) {

		function submitRequest(event) {
			var ntsVessel = {
				id: 'vessel-' + Date.now(),
				hullId: 0,
				stateId: 0,
				uscgId: 0,
				boatName: this.boatName.value,
				boatType: this.boatType.value,
				boatLoc: this.boatLoc.value,
				verified: 0,
				owner: this.props.uid
			};
		}

		return _react2.default.createElement(
			'form',
			{ className: 'form-inline', onSubmit: function onSubmit(e) {
					return undefined.submitRequest(e);
				} },
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					{ className: 'sr-only', htmlFor: 'boatName' },
					'Vessel Name'
				),
				_react2.default.createElement('input', { ref: function ref(input) {
						return undefined.boatName = input;
					}, type: 'text', className: 'form-control', defaultValue: (0, _helperData.getName)(), placeholder: 'Vessel Name' })
			),
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					{ className: 'sr-only', htmlFor: 'boatType' },
					'Vessel Type'
				),
				_react2.default.createElement('input', { ref: function ref(input) {
						return undefined.boatType = input;
					}, type: 'text', className: 'form-control', defaultValue: (0, _helperData.getType)(), placeholder: 'Vessel Model' })
			),
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					{ className: 'sr-only', htmlFor: 'boatLoc' },
					'Vessel Location'
				),
				_react2.default.createElement('input', { ref: function ref(input) {
						return undefined.boatLoc = input;
					}, type: 'text', className: 'form-control', defaultValue: (0, _helperData.getLoc)(), placeholder: 'Vessel Location' })
			),
			_react2.default.createElement(
				'button',
				{ type: 'submit', className: 'btn btn-success' },
				'Submit'
			)
		);
	};

	exports.default = VesselForm;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\EASY_G\\OneDrive\\webDocuments\\nts-nerf\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "VesselForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});