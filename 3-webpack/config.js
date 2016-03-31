System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "stage": 0,
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build/bundle.js": [
      "app/main.js",
      "npm:react@0.14.7.js",
      "npm:react-dom@0.14.7.js",
      "app/components/Root.js",
      "npm:react@0.14.7/react.js",
      "npm:react-dom@0.14.7/index.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.38/helpers/inherits.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/helpers/get.js",
      "app/components/example/WordList.js",
      "npm:react@0.14.7/lib/React.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:react@0.14.7/lib/ReactDOM.js",
      "app/components/example/ListHeader.js",
      "app/components/example/List.js",
      "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:react@0.14.7/lib/ReactDOMServer.js",
      "npm:react@0.14.7/lib/ReactIsomorphic.js",
      "npm:react@0.14.7/lib/ReactCurrentOwner.js",
      "npm:react@0.14.7/lib/ReactVersion.js",
      "npm:core-js@1.2.6/library/fn/object/create.js",
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of.js",
      "npm:core-js@1.2.6/library/fn/object/define-property.js",
      "npm:react@0.14.7/lib/ReactReconciler.js",
      "npm:react@0.14.7/lib/renderSubtreeIntoContainer.js",
      "npm:react@0.14.7/lib/ReactDOMTextComponent.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "npm:react@0.14.7/lib/deprecated.js",
      "npm:react@0.14.7/lib/ReactDefaultInjection.js",
      "npm:react@0.14.7/lib/ReactInstanceHandles.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/ReactUpdates.js",
      "npm:react@0.14.7/lib/findDOMNode.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js",
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/ReactServerRendering.js",
      "npm:react@0.14.7/lib/ReactChildren.js",
      "npm:react@0.14.7/lib/ReactComponent.js",
      "npm:react@0.14.7/lib/ReactClass.js",
      "npm:react@0.14.7/lib/ReactDOMFactories.js",
      "npm:react@0.14.7/lib/ReactElementValidator.js",
      "npm:react@0.14.7/lib/ReactPropTypes.js",
      "npm:react@0.14.7/lib/onlyChild.js",
      "npm:core-js@1.2.6/library/modules/$.js",
      "npm:core-js@1.2.6/library/modules/$.core.js",
      "npm:react@0.14.7/lib/escapeTextContentForBrowser.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "npm:react@0.14.7/lib/ClientReactRootIndex.js",
      "npm:react@0.14.7/lib/ServerReactRootIndex.js",
      "npm:react@0.14.7/lib/ReactRootIndex.js",
      "npm:react@0.14.7/lib/ReactDOMFeatureFlags.js",
      "npm:react@0.14.7/lib/ReactEmptyComponentRegistry.js",
      "npm:react@0.14.7/lib/ReactInstanceMap.js",
      "npm:react@0.14.7/lib/shouldUpdateReactComponent.js",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js",
      "npm:react@0.14.7/lib/ReactInjection.js",
      "npm:react@0.14.7/lib/ReactReconcileTransaction.js",
      "npm:react@0.14.7/lib/SVGDOMPropertyConfig.js",
      "npm:react@0.14.7/lib/ReactMarkupChecksum.js",
      "npm:fbjs@0.6.1/lib/containsNode.js",
      "npm:react@0.14.7/lib/ReactRef.js",
      "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter.js",
      "npm:fbjs@0.6.1/lib/emptyObject.js",
      "npm:react@0.14.7/lib/DOMChildrenOperations.js",
      "npm:react@0.14.7/lib/DOMPropertyOperations.js",
      "npm:react@0.14.7/lib/setTextContent.js",
      "npm:react@0.14.7/lib/validateDOMNesting.js",
      "npm:react@0.14.7/lib/BeforeInputEventPlugin.js",
      "npm:react@0.14.7/lib/ChangeEventPlugin.js",
      "npm:react@0.14.7/lib/DefaultEventPluginOrder.js",
      "npm:react@0.14.7/lib/EnterLeaveEventPlugin.js",
      "npm:react@0.14.7/lib/HTMLDOMPropertyConfig.js",
      "npm:react@0.14.7/lib/ReactBrowserComponentMixin.js",
      "npm:react@0.14.7/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@0.14.7/lib/ReactDOMComponent.js",
      "npm:react@0.14.7/lib/ReactEventListener.js",
      "npm:react@0.14.7/lib/SelectEventPlugin.js",
      "npm:react@0.14.7/lib/SimpleEventPlugin.js",
      "npm:react@0.14.7/lib/ReactDefaultPerf.js",
      "npm:react@0.14.7/lib/DOMProperty.js",
      "npm:react@0.14.7/lib/ReactUpdateQueue.js",
      "npm:react@0.14.7/lib/instantiateReactComponent.js",
      "npm:react@0.14.7/lib/setInnerHTML.js",
      "npm:react@0.14.7/lib/CallbackQueue.js",
      "npm:react@0.14.7/lib/Transaction.js",
      "npm:react@0.14.7/lib/PooledClass.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js",
      "npm:react@0.14.7/lib/ReactServerBatchingStrategy.js",
      "npm:fbjs@0.6.1/lib/keyOf.js",
      "npm:fbjs@0.6.1/lib/mapObject.js",
      "npm:react@0.14.7/lib/getIteratorFn.js",
      "npm:react@0.14.7/lib/canDefineProperty.js",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames.js",
      "npm:fbjs@0.6.1/lib/keyMirror.js",
      "npm:react@0.14.7/lib/ReactServerRenderingTransaction.js",
      "npm:react@0.14.7/lib/traverseAllChildren.js",
      "npm:react@0.14.7/lib/ReactNoopUpdateQueue.js",
      "npm:react@0.14.7/lib/ReactPropTypeLocations.js",
      "npm:react@0.14.7/lib/adler32.js",
      "npm:react@0.14.7/lib/ViewportMetrics.js",
      "npm:react@0.14.7/lib/getEventTarget.js",
      "npm:react@0.14.7/lib/isTextInputElement.js",
      "npm:react@0.14.7/lib/ReactDOMButton.js",
      "npm:fbjs@0.6.1/lib/shallowEqual.js",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition.js",
      "npm:fbjs@0.6.1/lib/getActiveElement.js",
      "npm:react@0.14.7/lib/getEventCharCode.js",
      "npm:core-js@1.2.6/library/modules/$.export.js",
      "npm:core-js@1.2.6/library/modules/$.set-proto.js",
      "npm:react@0.14.7/lib/ReactEmptyComponent.js",
      "npm:fbjs@0.6.1/lib/isTextNode.js",
      "npm:react@0.14.7/lib/ReactEventEmitterMixin.js",
      "npm:react@0.14.7/lib/quoteAttributeValueForBrowser.js",
      "npm:react@0.14.7/lib/FallbackCompositionState.js",
      "npm:react@0.14.7/lib/SyntheticCompositionEvent.js",
      "npm:react@0.14.7/lib/SyntheticInputEvent.js",
      "npm:react@0.14.7/lib/SyntheticMouseEvent.js",
      "npm:react@0.14.7/lib/SyntheticClipboardEvent.js",
      "npm:react@0.14.7/lib/SyntheticFocusEvent.js",
      "npm:react@0.14.7/lib/SyntheticKeyboardEvent.js",
      "npm:react@0.14.7/lib/SyntheticDragEvent.js",
      "npm:react@0.14.7/lib/SyntheticTouchEvent.js",
      "npm:react@0.14.7/lib/SyntheticUIEvent.js",
      "npm:react@0.14.7/lib/SyntheticWheelEvent.js",
      "npm:react@0.14.7/lib/ReactDefaultPerfAnalysis.js",
      "npm:fbjs@0.6.1/lib/performanceNow.js",
      "npm:react@0.14.7/lib/ReactMultiChild.js",
      "npm:fbjs@0.6.1/lib/EventListener.js",
      "npm:react@0.14.7/lib/EventPluginHub.js",
      "npm:react@0.14.7/lib/ReactComponentEnvironment.js",
      "npm:react@0.14.7/lib/ReactNativeComponent.js",
      "npm:react@0.14.7/lib/ReactInputSelection.js",
      "npm:react@0.14.7/lib/ReactOwner.js",
      "npm:react@0.14.7/lib/ReactDOMIDOperations.js",
      "npm:react@0.14.7/lib/EventConstants.js",
      "npm:react@0.14.7/lib/EventPluginRegistry.js",
      "npm:react@0.14.7/lib/isEventSupported.js",
      "npm:react@0.14.7/lib/Danger.js",
      "npm:react@0.14.7/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@0.14.7/lib/EventPropagators.js",
      "npm:react@0.14.7/lib/SyntheticEvent.js",
      "npm:react@0.14.7/lib/AutoFocusUtils.js",
      "npm:react@0.14.7/lib/CSSPropertyOperations.js",
      "npm:react@0.14.7/lib/ReactDOMInput.js",
      "npm:react@0.14.7/lib/ReactDOMOption.js",
      "npm:react@0.14.7/lib/ReactDOMSelect.js",
      "npm:react@0.14.7/lib/ReactDOMTextarea.js",
      "npm:react@0.14.7/lib/ReactCompositeComponent.js",
      "npm:process@0.11.2.js",
      "npm:core-js@1.2.6/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/library/modules/$.object-sap.js",
      "npm:core-js@1.2.6/library/modules/$.global.js",
      "npm:core-js@1.2.6/library/modules/$.is-object.js",
      "npm:fbjs@0.6.1/lib/isNode.js",
      "npm:react@0.14.7/lib/getEventModifierState.js",
      "npm:react@0.14.7/lib/forEachAccumulated.js",
      "npm:fbjs@0.6.1/lib/focusNode.js",
      "npm:react@0.14.7/lib/CSSProperty.js",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly.js",
      "npm:core-js@1.2.6/library/modules/$.an-object.js",
      "npm:core-js@1.2.6/library/modules/$.ctx.js",
      "npm:react@0.14.7/lib/getEventKey.js",
      "npm:fbjs@0.6.1/lib/performance.js",
      "npm:fbjs@0.6.1/lib/camelizeStyleName.js",
      "npm:react@0.14.7/lib/dangerousStyleValue.js",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName.js",
      "npm:react@0.14.7/lib/ReactErrorUtils.js",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.6.1/lib/getMarkupWrap.js",
      "npm:react@0.14.7/lib/getTextContentAccessor.js",
      "npm:react@0.14.7/lib/ReactChildReconciler.js",
      "npm:react@0.14.7/lib/flattenChildren.js",
      "npm:react@0.14.7/lib/EventPluginUtils.js",
      "npm:react@0.14.7/lib/accumulateInto.js",
      "npm:react@0.14.7/lib/ReactDOMSelection.js",
      "npm:react@0.14.7/lib/LinkedValueUtils.js",
      "npm:process@0.11.2/browser.js",
      "npm:core-js@1.2.6/library/modules/$.defined.js",
      "npm:core-js@1.2.6/library/modules/$.iobject.js",
      "npm:core-js@1.2.6/library/modules/$.fails.js",
      "npm:core-js@1.2.6/library/modules/$.a-function.js",
      "npm:fbjs@0.6.1/lib/camelize.js",
      "npm:fbjs@0.6.1/lib/hyphenate.js",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed.js",
      "npm:react@0.14.7/lib/getNodeForCharacterOffset.js",
      "npm:core-js@1.2.6/library/modules/$.cof.js",
      "npm:fbjs@0.6.1/lib/toArray.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.6",
    "react": "npm:react@0.14.7",
    "react-dom": "npm:react-dom@0.14.7",
    "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.6",
    "github:capaj/systemjs-hot-reloader@0.5.6": {
      "debug": "npm:debug@2.2.0",
      "socket.io-client": "github:socketio/socket.io-client@1.4.5",
      "weakee": "npm:weakee@1.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:asn1.js@4.5.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.11.1",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.1",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.5.2",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@0.14.7": {
      "react": "npm:react@0.14.7"
    },
    "npm:react@0.14.7": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
