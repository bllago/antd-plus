(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1248:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(58),__webpack_require__(45),__webpack_require__(35),__webpack_require__(47),__webpack_require__(1249),__webpack_require__(1250),__webpack_require__(8),__webpack_require__(46);var _clientApi=__webpack_require__(62),_clientLogger=__webpack_require__(39),_configFilename=__webpack_require__(1251);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1251:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));__webpack_require__(1252);var parameters={layout:"centered",controls:{expanded:!0},actions:{argTypesRegex:"^on[A-Z].*"}}},1256:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(429).configure)([__webpack_require__(1257),__webpack_require__(1258)],module,!1)}).call(this,__webpack_require__(116)(module))},1257:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1257},1258:function(module,exports,__webpack_require__){var map={"./components/Actions/Back/Back.stories.js":1278};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1258},1278:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(297),__webpack_require__(4);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),es_tooltip=__webpack_require__(1290),es_button=__webpack_require__(1289),divider=__webpack_require__(1288),styled_components_browser_esm=__webpack_require__(242),index_esm=__webpack_require__(36),StyledAntDivider=Object(styled_components_browser_esm.a)(divider.a)(Object(index_esm.d)(index_esm.i,index_esm.c,index_esm.k,index_esm.f,index_esm.e,index_esm.a,index_esm.b,index_esm.g,index_esm.h,Object(index_esm.j)({transform:!0}))),Divider_Divider=function Divider(props){return react_default.a.createElement(StyledAntDivider,props)};Divider_Divider.displayName="Divider",Divider_Divider.__docgenInfo={description:"",methods:[],displayName:"Divider"};var components_Divider_Divider=Divider_Divider;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.js"]={name:"Divider",docgenInfo:Divider_Divider.__docgenInfo,path:"src/components/Divider/Divider.js"});var components_Divider=components_Divider_Divider,StyledDiv=Object(styled_components_browser_esm.a)("div")(Object(index_esm.d)(index_esm.i,index_esm.c,index_esm.k,index_esm.f,index_esm.e,index_esm.a,index_esm.b,index_esm.g,index_esm.h,Object(index_esm.j)({whiteSpace:!0,cursor:!0,wordBreak:!0,zoom:!0,transform:!0}))),Box_Box=function Box(props){return react_default.a.createElement(StyledDiv,props)};Box_Box.displayName="Box",Box_Box.__docgenInfo={description:"",methods:[],displayName:"Box"};var components_Box_Box=Box_Box;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Box/Box.js"]={name:"Box",docgenInfo:Box_Box.__docgenInfo,path:"src/components/Box/Box.js"});var components_Box=components_Box_Box,ArrowLeftOutlined=__webpack_require__(1291);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var DEFAULT_PROPS_placement="topLeft",Back_Back=function Back(props){var text=props.text,icon=props.icon,iconLeft=props.iconLeft,iconRight=props.iconRight,onClick=props.onClick,tooltip=props.tooltip,tooltipPlacement=props.tooltipPlacement,divided=props.divided,iconNode="boolean"==typeof icon||void 0===icon?react_default.a.createElement(ArrowLeftOutlined.a,null):icon,iconNodeLeft="boolean"==typeof iconLeft||void 0===icon?react_default.a.createElement(ArrowLeftOutlined.a,null):iconLeft,iconNodeRight="boolean"==typeof iconRight?react_default.a.createElement(ArrowLeftOutlined.a,null):iconRight;return react_default.a.createElement(react.Fragment,null,text?react_default.a.createElement(components_Box,{display:"flex",alignItems:"center"},react_default.a.createElement(es_button.a,_extends({onClick:onClick,type:"text",icon:iconNode||iconNodeLeft},props,{danger:!1}),text,iconNodeRight),divided?react_default.a.createElement(components_Divider,{type:"vertical",mr:3,height:24,top:"unset"}):null):react_default.a.createElement(components_Box,{display:"flex",alignItems:"center"},react_default.a.createElement(es_tooltip.a,{title:tooltip,placement:tooltipPlacement&&tooltipPlacement||DEFAULT_PROPS_placement},react_default.a.createElement(es_button.a,_extends({onClick:onClick,type:"text",icon:iconNode||iconNodeLeft||iconNodeRight},props,{danger:!1}))),divided?react_default.a.createElement(components_Divider,{type:"vertical",mr:3,height:24,top:"unset"}):null))};Back_Back.displayName="Back",Back_Back.propTypes={text:prop_types_default.a.string,icon:prop_types_default.a.node,iconLeft:prop_types_default.a.node,iconRight:prop_types_default.a.node,onClick:prop_types_default.a.func,tooltip:prop_types_default.a.string,tooltipPlacement:prop_types_default.a.oneOf(["top","right","bottom","left","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]),divided:prop_types_default.a.bool},Back_Back.defaultProps={tooltipPlacement:"topLeft"},Back_Back.__docgenInfo={description:"",methods:[],displayName:"Back",props:{tooltipPlacement:{defaultValue:{value:"'topLeft'",computed:!1},type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1},{value:"'topLeft'",computed:!1},{value:"'topRight'",computed:!1},{value:"'bottomLeft'",computed:!1},{value:"'bottomRight'",computed:!1},{value:"'leftTop'",computed:!1},{value:"'leftBottom'",computed:!1},{value:"'rightTop'",computed:!1},{value:"'rightBottom'",computed:!1}]},required:!1,description:"Use to specify tooltip position"},text:{type:{name:"string"},required:!1,description:"Use to add text label for button button"},icon:{type:{name:"node"},required:!1,description:'Use to add icon at the left side inside button (shortcut, worked the same as property "iconLeft")'},iconLeft:{type:{name:"node"},required:!1,description:'Use to add icon at the left side inside button (worked the same as property "icon")'},iconRight:{type:{name:"node"},required:!1,description:'Use to add icon at the right side inside button (worked the same as property "icon")'},onClick:{type:{name:"func"},required:!1,description:"Set the handler to handle click event"},tooltip:{type:{name:"string"},required:!1,description:"Use to enable tooltip and specify text for it"},divided:{type:{name:"bool"},required:!1,description:"Use to enable divider at the right side from the button"}}};var Actions_Back_Back=Back_Back;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Actions/Back/Back.js"]={name:"Back",docgenInfo:Back_Back.__docgenInfo,path:"src/components/Actions/Back/Back.js"});__webpack_exports__.default={title:"Components/Actions/back",component:Actions_Back_Back};var Back_stories_Template=function Template(args){return react_default.a.createElement(Actions_Back_Back,args)};Back_stories_Template.displayName="Template";var Default=Back_stories_Template.bind({});Default.args={},Default.parameters=Object.assign({storySource:{source:"(args) => <Back {...args} />"}},Default.parameters)},562:function(module,exports,__webpack_require__){__webpack_require__(563),__webpack_require__(763),__webpack_require__(764),__webpack_require__(970),__webpack_require__(1187),__webpack_require__(1219),__webpack_require__(1227),__webpack_require__(1239),__webpack_require__(1241),__webpack_require__(1246),__webpack_require__(1248),module.exports=__webpack_require__(1256)},651:function(module,exports){},764:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(429)}},[[562,1,2]]]);
//# sourceMappingURL=main.afd916200b1b73b916a3.bundle.js.map