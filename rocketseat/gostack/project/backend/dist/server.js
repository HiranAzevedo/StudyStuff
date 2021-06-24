"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
require("express-async-errors");
require("reflect-metadata");
require("./database");
var upload_1 = __importDefault(require("./config/upload"));
var AppError_1 = __importDefault(require("./errors/AppError"));
var app = express_1.default();
app.use(express_1.default.json());
app.use('/files', express_1.default.static(upload_1.default.directory));
app.use(routes_1.default);
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.default) {
        response
            .status(err.statusCode)
            .json({ status: 'error', message: err.message });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});
app.listen(3333, function () {
    console.log('🚀 Server running on 3333');
});
