"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
console.clear();
var options = process.argv;
var command = options[2];
var filepath = options[3] === undefined
    ? process.cwd()
    : path.resolve(process.cwd(), options[3]);
var destination = options[4] === undefined ? null : path.resolve(process.cwd(), options[4]);
switch (command) {
    case "-ls":
        listDirContents(filepath);
        break;
    case "-cp":
        if (destination === null) {
            console.error("Please provide a destination path");
            break;
        }
        copyFileToDestination(filepath, destination);
        break;
    case "-mv":
        if (destination === null) {
            console.error("Please provide a destination path");
            break;
        }
        moveFileToDestination(filepath, destination);
        console.log("move");
        break;
    case "-mkdir":
        createDir(filepath);
        break;
    case "-rm":
        removeFile(filepath);
        break;
    case "-pwd":
        console.log(process.cwd());
        break;
    case "-h":
        console.log("Usage: node index.js [command] [filepath] [destination]\n\nCommands:\n\t-ls\t\tList directory contents\n\t-cp\t\tCopy file to destination\n\t-mv\t\tMove file to destination\n\t-mkdir\t\tCreate directory\n\t-rm\t\tRemove file\n\t-pwd\t\tPrint working directory\n\t-h\t\tPrint help");
        break;
}
function listDirContents(filepath) {
    return __awaiter(this, void 0, void 0, function () {
        var files, detailedFilesPromises, detailedFiles, error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fs.promises.readdir(filepath)];
                case 1:
                    files = _a.sent();
                    detailedFilesPromises = files.map(function (file) { return __awaiter(_this, void 0, void 0, function () {
                        var fileDetails, size, birthtime;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, fs.promises.lstat(path.resolve(filepath, file))];
                                case 1:
                                    fileDetails = _a.sent();
                                    size = fileDetails.size, birthtime = fileDetails.birthtime;
                                    return [2 /*return*/, { filename: file, "size(KB)": size, created_at: birthtime }];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(detailedFilesPromises)];
                case 2:
                    detailedFiles = _a.sent();
                    console.table(detailedFiles);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error occurred while reading the directory!", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function copyFileToDestination(filepath, destination) {
    return __awaiter(this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs.promises.copyFile(filepath, destination + "/" + path.basename(filepath))];
                case 1:
                    _a.sent();
                    console.log("The file has been copied successfully");
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error occurred while copying the file!", error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function moveFileToDestination(filepath, destination) {
    return __awaiter(this, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs.promises.rename(filepath, destination + "/" + path.basename(filepath))];
                case 1:
                    _a.sent();
                    console.log("The file has been moved successfully");
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error("Error occurred while moving the file!", error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function removeFile(filepath) {
    return __awaiter(this, void 0, void 0, function () {
        var error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs.promises.unlink(filepath)];
                case 1:
                    _a.sent();
                    console.log("The file has been removed successfully");
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error("Error occurred while removing the file!", error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function createDir(filepath) {
    if (!fs.existsSync(filepath)) {
        fs.mkdirSync(filepath);
        console.log("The directory has been created successfully");
    }
    else {
        console.log("The directory already exists");
    }
}
