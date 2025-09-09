import require$$0, { useState, useRef, useEffect, useMemo } from 'react';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function getComponentNameFromType(type) {
	      if (null == type) return null;
	      if ("function" === typeof type)
	        return type.$$typeof === REACT_CLIENT_REFERENCE
	          ? null
	          : type.displayName || type.name || null;
	      if ("string" === typeof type) return type;
	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return "Fragment";
	        case REACT_PROFILER_TYPE:
	          return "Profiler";
	        case REACT_STRICT_MODE_TYPE:
	          return "StrictMode";
	        case REACT_SUSPENSE_TYPE:
	          return "Suspense";
	        case REACT_SUSPENSE_LIST_TYPE:
	          return "SuspenseList";
	        case REACT_ACTIVITY_TYPE:
	          return "Activity";
	      }
	      if ("object" === typeof type)
	        switch (
	          ("number" === typeof type.tag &&
	            console.error(
	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	            ),
	          type.$$typeof)
	        ) {
	          case REACT_PORTAL_TYPE:
	            return "Portal";
	          case REACT_CONTEXT_TYPE:
	            return (type.displayName || "Context") + ".Provider";
	          case REACT_CONSUMER_TYPE:
	            return (type._context.displayName || "Context") + ".Consumer";
	          case REACT_FORWARD_REF_TYPE:
	            var innerType = type.render;
	            type = type.displayName;
	            type ||
	              ((type = innerType.displayName || innerType.name || ""),
	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	            return type;
	          case REACT_MEMO_TYPE:
	            return (
	              (innerType = type.displayName || null),
	              null !== innerType
	                ? innerType
	                : getComponentNameFromType(type.type) || "Memo"
	            );
	          case REACT_LAZY_TYPE:
	            innerType = type._payload;
	            type = type._init;
	            try {
	              return getComponentNameFromType(type(innerType));
	            } catch (x) {}
	        }
	      return null;
	    }
	    function testStringCoercion(value) {
	      return "" + value;
	    }
	    function checkKeyStringCoercion(value) {
	      try {
	        testStringCoercion(value);
	        var JSCompiler_inline_result = !1;
	      } catch (e) {
	        JSCompiler_inline_result = true;
	      }
	      if (JSCompiler_inline_result) {
	        JSCompiler_inline_result = console;
	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
	        var JSCompiler_inline_result$jscomp$0 =
	          ("function" === typeof Symbol &&
	            Symbol.toStringTag &&
	            value[Symbol.toStringTag]) ||
	          value.constructor.name ||
	          "Object";
	        JSCompiler_temp_const.call(
	          JSCompiler_inline_result,
	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	          JSCompiler_inline_result$jscomp$0
	        );
	        return testStringCoercion(value);
	      }
	    }
	    function getTaskName(type) {
	      if (type === REACT_FRAGMENT_TYPE) return "<>";
	      if (
	        "object" === typeof type &&
	        null !== type &&
	        type.$$typeof === REACT_LAZY_TYPE
	      )
	        return "<...>";
	      try {
	        var name = getComponentNameFromType(type);
	        return name ? "<" + name + ">" : "<...>";
	      } catch (x) {
	        return "<...>";
	      }
	    }
	    function getOwner() {
	      var dispatcher = ReactSharedInternals.A;
	      return null === dispatcher ? null : dispatcher.getOwner();
	    }
	    function UnknownOwner() {
	      return Error("react-stack-top-frame");
	    }
	    function hasValidKey(config) {
	      if (hasOwnProperty.call(config, "key")) {
	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	        if (getter && getter.isReactWarning) return false;
	      }
	      return void 0 !== config.key;
	    }
	    function defineKeyPropWarningGetter(props, displayName) {
	      function warnAboutAccessingKey() {
	        specialPropKeyWarningShown ||
	          ((specialPropKeyWarningShown = true),
	          console.error(
	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	            displayName
	          ));
	      }
	      warnAboutAccessingKey.isReactWarning = true;
	      Object.defineProperty(props, "key", {
	        get: warnAboutAccessingKey,
	        configurable: true
	      });
	    }
	    function elementRefGetterWithDeprecationWarning() {
	      var componentName = getComponentNameFromType(this.type);
	      didWarnAboutElementRef[componentName] ||
	        ((didWarnAboutElementRef[componentName] = true),
	        console.error(
	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	        ));
	      componentName = this.props.ref;
	      return void 0 !== componentName ? componentName : null;
	    }
	    function ReactElement(
	      type,
	      key,
	      self,
	      source,
	      owner,
	      props,
	      debugStack,
	      debugTask
	    ) {
	      self = props.ref;
	      type = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        props: props,
	        _owner: owner
	      };
	      null !== (void 0 !== self ? self : null)
	        ? Object.defineProperty(type, "ref", {
	            enumerable: false,
	            get: elementRefGetterWithDeprecationWarning
	          })
	        : Object.defineProperty(type, "ref", { enumerable: false, value: null });
	      type._store = {};
	      Object.defineProperty(type._store, "validated", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: 0
	      });
	      Object.defineProperty(type, "_debugInfo", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: null
	      });
	      Object.defineProperty(type, "_debugStack", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugStack
	      });
	      Object.defineProperty(type, "_debugTask", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugTask
	      });
	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	      return type;
	    }
	    function jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      source,
	      self,
	      debugStack,
	      debugTask
	    ) {
	      var children = config.children;
	      if (void 0 !== children)
	        if (isStaticChildren)
	          if (isArrayImpl(children)) {
	            for (
	              isStaticChildren = 0;
	              isStaticChildren < children.length;
	              isStaticChildren++
	            )
	              validateChildKeys(children[isStaticChildren]);
	            Object.freeze && Object.freeze(children);
	          } else
	            console.error(
	              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	            );
	        else validateChildKeys(children);
	      if (hasOwnProperty.call(config, "key")) {
	        children = getComponentNameFromType(type);
	        var keys = Object.keys(config).filter(function (k) {
	          return "key" !== k;
	        });
	        isStaticChildren =
	          0 < keys.length
	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
	            : "{key: someKey}";
	        didWarnAboutKeySpread[children + isStaticChildren] ||
	          ((keys =
	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
	          console.error(
	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	            isStaticChildren,
	            children,
	            keys,
	            children
	          ),
	          (didWarnAboutKeySpread[children + isStaticChildren] = true));
	      }
	      children = null;
	      void 0 !== maybeKey &&
	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
	      hasValidKey(config) &&
	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
	      if ("key" in config) {
	        maybeKey = {};
	        for (var propName in config)
	          "key" !== propName && (maybeKey[propName] = config[propName]);
	      } else maybeKey = config;
	      children &&
	        defineKeyPropWarningGetter(
	          maybeKey,
	          "function" === typeof type
	            ? type.displayName || type.name || "Unknown"
	            : type
	        );
	      return ReactElement(
	        type,
	        children,
	        self,
	        source,
	        getOwner(),
	        maybeKey,
	        debugStack,
	        debugTask
	      );
	    }
	    function validateChildKeys(node) {
	      "object" === typeof node &&
	        null !== node &&
	        node.$$typeof === REACT_ELEMENT_TYPE &&
	        node._store &&
	        (node._store.validated = 1);
	    }
	    var React = require$$0,
	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
	      ReactSharedInternals =
	        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	      hasOwnProperty = Object.prototype.hasOwnProperty,
	      isArrayImpl = Array.isArray,
	      createTask = console.createTask
	        ? console.createTask
	        : function () {
	            return null;
	          };
	    React = {
	      react_stack_bottom_frame: function (callStackForError) {
	        return callStackForError();
	      }
	    };
	    var specialPropKeyWarningShown;
	    var didWarnAboutElementRef = {};
	    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
	      React,
	      UnknownOwner
	    )();
	    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
	    var didWarnAboutKeySpread = {};
	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        false,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        true,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	  })();
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

const Bar = ({ value }) => {
    const { x, y, width, height, color, label, value: barValue, showValue, chartHeight } = value;
    const [animatedHeight, setAnimatedHeight] = useState(0);
    const [animatedY, setAnimatedY] = useState(chartHeight);
    const animationRef = useRef(0);
    useEffect(() => {
        const duration = 800; // animation duration in ms
        const start = performance.now();
        const animate = (time) => {
            const progress = Math.min((time - start) / duration, 1);
            const currentHeight = height * progress;
            setAnimatedHeight(currentHeight);
            setAnimatedY(chartHeight - currentHeight);
            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            }
        };
        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [height, chartHeight]);
    return (jsxRuntimeExports.jsxs("g", { children: [jsxRuntimeExports.jsx("rect", { x: x, y: animatedY, width: width, height: animatedHeight, fill: color, rx: 3 }), showValue && (jsxRuntimeExports.jsx("text", { x: x + width / 2, y: animatedY - 5, textAnchor: "middle", fontSize: "10", fill: "#333", children: barValue })), jsxRuntimeExports.jsx("text", { x: x + width / 2, y: chartHeight + 15, textAnchor: "middle", fontSize: "10", fill: "#666", children: label })] }));
};

const BarChart = ({ data, width = 400, height = 200, barColor = "#2389FF", showValue = true, yTicks = 5, yAxisPosition = "left", }) => {
    const maxValue = Math.max(...data.map((d) => d.value));
    const chartHeight = height - 30; // leave some space at the bottom for labels
    const yAxisWidth = 40; // reserved space for the Y axis
    const barWidth = (width - yAxisWidth) / data.length;
    // Horizontal offset depends on whether the Y axis is on the left or right
    const offsetX = yAxisPosition === "left" ? yAxisWidth : 0;
    return (jsxRuntimeExports.jsxs("svg", { width: width, height: height, children: [Array.from({ length: yTicks + 1 }).map((_, i) => {
                const y = chartHeight - (i / yTicks) * chartHeight;
                const value = Math.round((i / yTicks) * maxValue);
                return (jsxRuntimeExports.jsxs("g", { children: [jsxRuntimeExports.jsx("line", { x1: 0 + offsetX, y1: y, x2: width - (yAxisPosition === "right" ? yAxisWidth : 0), y2: y, stroke: "#e0e0e0", strokeWidth: 1 }), jsxRuntimeExports.jsx("text", { x: yAxisPosition === "left"
                                ? yAxisWidth - 5
                                : width - yAxisWidth + 35, y: y + 4, textAnchor: yAxisPosition === "left" ? "end" : "start", fontSize: "10", fill: "#555", children: value })] }, i));
            }), data.map((d, i) => {
                const barHeight = (d.value / maxValue) * chartHeight;
                const x = offsetX + i * barWidth;
                const y = chartHeight - barHeight;
                const barProps = {
                    x,
                    y,
                    width: barWidth - 8,
                    height: barHeight,
                    color: barColor,
                    label: d.label,
                    value: d.value,
                    showValue,
                    chartHeight,
                    chartWidth: width,
                };
                return jsxRuntimeExports.jsx(Bar, { value: barProps }, i);
            })] }));
};

const PieChart = ({ data, colors = ["#4caf50", "#2196f3", "#ff9800", "#f44336"], size = 200, animationDuration = 1000, }) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        let start = null;
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        const animate = (timestamp) => {
            if (!start)
                start = timestamp;
            const t = Math.min((timestamp - start) / animationDuration, 1);
            setProgress(easeOutCubic(t));
            if (t < 1)
                requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [animationDuration]);
    let cumulative = 0;
    const total = data.reduce((sum, val) => sum + val, 0);
    return (jsxRuntimeExports.jsx("svg", { width: size, height: size, viewBox: "0 0 36 36", children: data.map((value, i) => {
            const animatedValue = value * progress;
            const start = (cumulative / total) * 360;
            const end = ((cumulative + animatedValue) / total) * 360;
            cumulative += animatedValue;
            const largeArc = end - start > 180 ? 1 : 0;
            const x1 = 18 + 16 * Math.cos((Math.PI / 180) * start);
            const y1 = 18 + 16 * Math.sin((Math.PI / 180) * start);
            const x2 = 18 + 16 * Math.cos((Math.PI / 180) * end);
            const y2 = 18 + 16 * Math.sin((Math.PI / 180) * end);
            const pathData = `M18 18 L${x1} ${y1} A16 16 0 ${largeArc} 1 ${x2} ${y2} Z`;
            return jsxRuntimeExports.jsx("path", { d: pathData, fill: colors[i % colors.length] }, i);
        }) }));
};

const LineChart = ({ data, width = 600, height = 300, strokeColor = '#007bff', strokeWidth = 2, showDots = true, dotColor = '#007bff', }) => {
    if (!data || data.length === 0)
        return null;
    const points = useMemo(() => {
        const yValues = data.map(d => d.y);
        const maxY = Math.max(...yValues);
        const minY = Math.min(...yValues);
        return data.map((d, i) => {
            const x = (i / (data.length - 1)) * width;
            const y = height - ((d.y - minY) / (maxY - minY)) * height;
            return { x, y };
        });
    }, [data, width, height]);
    const path = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ');
    return (jsxRuntimeExports.jsxs("svg", { width: width, height: height, children: [jsxRuntimeExports.jsx("path", { d: path, stroke: strokeColor, strokeWidth: strokeWidth, fill: "none" }), showDots &&
                points.map((p, i) => (jsxRuntimeExports.jsx("circle", { cx: p.x, cy: p.y, r: 4, fill: dotColor }, i)))] }));
};

const AreaChart = ({ data, width = 600, height = 300, fillColor = '#007bff', strokeColor = '#0056b3', }) => {
    if (!data || data.length === 0)
        return null;
    const maxY = Math.max(...data.map(d => d.y));
    const minY = Math.min(...data.map(d => d.y));
    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - ((d.y - minY) / (maxY - minY)) * height;
        return { x, y };
    });
    const areaPath = [
        `M ${points[0].x} ${height}`,
        ...points.map(p => `L ${p.x} ${p.y}`),
        `L ${points[points.length - 1].x} ${height} Z`,
    ].join(' ');
    const linePath = [`M ${points[0].x} ${points[0].y}`, ...points.slice(1).map(p => `L ${p.x} ${p.y}`)].join(' ');
    return (jsxRuntimeExports.jsxs("svg", { width: width, height: height, children: [jsxRuntimeExports.jsx("path", { d: areaPath, fill: fillColor, opacity: 0.3 }), jsxRuntimeExports.jsx("path", { d: linePath, stroke: strokeColor, strokeWidth: 2, fill: "none" })] }));
};

const BubbleChart = ({ data, width = 600, height = 400, bubbleColor = '#007bff', }) => {
    if (!data || data.length === 0)
        return null;
    const maxX = Math.max(...data.map(d => d.x));
    const minX = Math.min(...data.map(d => d.x));
    const maxY = Math.max(...data.map(d => d.y));
    const minY = Math.min(...data.map(d => d.y));
    const maxSize = Math.max(...data.map(d => d.size));
    return (jsxRuntimeExports.jsx("svg", { width: width, height: height, children: data.map((d, i) => {
            const cx = ((d.x - minX) / (maxX - minX)) * width;
            const cy = height - ((d.y - minY) / (maxY - minY)) * height;
            const r = (d.size / maxSize) * 30 + 5; // scale bubble radius
            return (jsxRuntimeExports.jsx("circle", { cx: cx, cy: cy, r: r, fill: bubbleColor, fillOpacity: 0.6, stroke: "#0056b3", strokeWidth: 1 }, i));
        }) }));
};

const CandlestickChart = ({ data, width = 600, height = 300, bullishColor = "#00b050", bearishColor = "#ff4d4f", }) => {
    if (!data || data.length === 0)
        return null;
    const maxPrice = Math.max(...data.map((d) => d.high));
    const minPrice = Math.min(...data.map((d) => d.low));
    const candleWidth = (width / data.length) * 0.6; // 60% of each slot
    return (jsxRuntimeExports.jsx("svg", { width: width, height: height, children: data.map((d, i) => {
            const x = (i / data.length) * width + candleWidth / 2;
            const yOpen = height -
                ((d.open - minPrice) / (maxPrice - minPrice)) * height;
            const yClose = height -
                ((d.close - minPrice) / (maxPrice - minPrice)) * height;
            const yHigh = height -
                ((d.high - minPrice) / (maxPrice - minPrice)) * height;
            const yLow = height -
                ((d.low - minPrice) / (maxPrice - minPrice)) * height;
            const color = d.close >= d.open ? bullishColor : bearishColor;
            const top = Math.min(yOpen, yClose);
            const bottom = Math.max(yOpen, yClose);
            return (jsxRuntimeExports.jsxs("g", { children: [jsxRuntimeExports.jsx("line", { x1: x, x2: x, y1: yHigh, y2: yLow, stroke: color, strokeWidth: 1 }), jsxRuntimeExports.jsx("rect", { x: x - candleWidth / 2, y: top, width: candleWidth, height: bottom - top, fill: color })] }, i));
        }) }));
};

const GaugeChart = ({ value, min = 0, max = 100, size = 200, strokeWidth = 20, color = '#007bff', bgColor = '#eee', }) => {
    const radius = (size - strokeWidth) / 2;
    const center = size / 2;
    const angle = ((value - min) / (max - min)) * 180; // half-circle gauge
    // Describe the arc path
    const describeArc = (startAngle, endAngle) => {
        const polarToCartesian = (angle) => {
            const rad = (angle * Math.PI) / 180;
            return {
                x: center + radius * Math.cos(rad),
                y: center - radius * Math.sin(rad),
            };
        };
        const start = polarToCartesian(endAngle);
        const end = polarToCartesian(startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
    };
    return (jsxRuntimeExports.jsxs("svg", { width: size, height: size / 2, children: [jsxRuntimeExports.jsx("path", { d: describeArc(0, 180), stroke: bgColor, strokeWidth: strokeWidth, fill: "none", strokeLinecap: "round" }), jsxRuntimeExports.jsx("path", { d: describeArc(0, angle), stroke: color, strokeWidth: strokeWidth, fill: "none", strokeLinecap: "round" }), jsxRuntimeExports.jsx("text", { x: center, y: center / 1.2, textAnchor: "middle", fontSize: size * 0.15, fill: "#333", children: Math.round(value) })] }));
};

const Heatmap = ({ data, width = 400, height = 400, colors = ["#f0f9e8", "#bae4bc", "#7bccc4", "#43a2ca", "#0868ac"], // light → dark
 }) => {
    const rows = data.length;
    const cols = data[0]?.length || 0;
    if (!rows || !cols)
        return null;
    // Find min and max for scaling
    const flatValues = data.flat();
    const minValue = Math.min(...flatValues);
    const maxValue = Math.max(...flatValues);
    // Map value to color
    const getColor = (value) => {
        const index = Math.floor(((value - minValue) / (maxValue - minValue)) * (colors.length - 1));
        return colors[index];
    };
    const cellWidth = width / cols;
    const cellHeight = height / rows;
    return (jsxRuntimeExports.jsx("svg", { width: width, height: height, children: data.map((row, i) => row.map((value, j) => (jsxRuntimeExports.jsx("rect", { x: j * cellWidth, y: i * cellHeight, width: cellWidth, height: cellHeight, fill: getColor(value), stroke: "#fff", strokeWidth: 1 }, `${i}-${j}`)))) }));
};

const RadarChart = ({ data, maxValue, size = 300, strokeColor = '#007bff', fillColor = '#007bff', fillOpacity = 0.3, strokeWidth = 2, }) => {
    if (!data || data.length < 3)
        return null; // Need at least 3 points
    const n = data.length;
    const center = size / 2;
    const radius = size / 2 * 0.8; // leave margin
    const max = maxValue ?? Math.max(...data.map(d => d.value));
    // Calculate points
    const points = data.map((d, i) => {
        const angle = (i / n) * 2 * Math.PI - Math.PI / 2; // start top
        const r = (d.value / max) * radius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return { x, y };
    });
    const path = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ') + ' Z';
    // Draw axes
    const axes = data.map((d, i) => {
        const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return jsxRuntimeExports.jsx("line", { x1: center, y1: center, x2: x, y2: y, stroke: "#ccc", strokeWidth: 1 }, i);
    });
    return (jsxRuntimeExports.jsxs("svg", { width: size, height: size, children: [axes, jsxRuntimeExports.jsx("path", { d: path, stroke: strokeColor, strokeWidth: strokeWidth, fill: fillColor, fillOpacity: fillOpacity }), points.map((p, i) => (jsxRuntimeExports.jsx("circle", { cx: p.x, cy: p.y, r: 4, fill: strokeColor }, i))), data.map((d, i) => {
                const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
                const x = center + (radius + 20) * Math.cos(angle);
                const y = center + (radius + 20) * Math.sin(angle);
                return (jsxRuntimeExports.jsx("text", { x: x, y: y, textAnchor: "middle", alignmentBaseline: "middle", fontSize: 12, children: d.category }, i));
            })] }));
};

const ScatterChart = ({ data, width = 600, height = 400, defaultPointSize = 8, defaultColor = '#007bff', }) => {
    if (!data || data.length === 0)
        return null;
    const xValues = data.map(d => d.x);
    const yValues = data.map(d => d.y);
    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    const scaleX = (x) => ((x - minX) / (maxX - minX)) * width;
    const scaleY = (y) => height - ((y - minY) / (maxY - minY)) * height;
    return (jsxRuntimeExports.jsx("svg", { width: width, height: height, children: data.map((d, i) => (jsxRuntimeExports.jsx("circle", { cx: scaleX(d.x), cy: scaleY(d.y), r: d.size ?? defaultPointSize, fill: d.color ?? defaultColor, fillOpacity: 0.7, stroke: "#333", strokeWidth: 1 }, i))) }));
};

export { AreaChart, BarChart, BubbleChart, CandlestickChart, GaugeChart, Heatmap, LineChart, PieChart, RadarChart, ScatterChart };
//# sourceMappingURL=index.esm.js.map
