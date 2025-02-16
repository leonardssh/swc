import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import regeneratorRuntime from "regenerator-runtime";
var Foo = /*#__PURE__*/ function() {
    "use strict";
    function Foo() {
        _class_call_check(this, Foo);
    }
    _create_class(Foo, [
        {
            key: "sendSomeMessage",
            value: function sendSomeMessage(_parent, _param, _param1) {
                return _async_to_generator(regeneratorRuntime.mark(function _callee() {
                    var _input, toNumber, messageBody, all, dataSources;
                    return regeneratorRuntime.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _input = _param.input, toNumber = _input.toNumber, messageBody = _input.messageBody, all = _object_without_properties(_param.input, [
                                    "toNumber",
                                    "messageBody"
                                ]), dataSources = _param1.dataSources;
                            case 1:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return Foo;
}();
