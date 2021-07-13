"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginTimestampsImmutable = void 0;
var pluginTimestampsImmutable = function (options) { return function (schema) {
    // @ts-ignore
    if (schema.options.timestamps) {
        if (options.createdAt) {
            // @ts-ignore
            schema.path(schema.$timestamps.createdAt).immutable(true);
        }
        if (options.updatedAt) {
            // @ts-ignore
            schema.path(schema.$timestamps.updatedAt).immutable(true);
        }
    }
}; };
exports.pluginTimestampsImmutable = pluginTimestampsImmutable;
