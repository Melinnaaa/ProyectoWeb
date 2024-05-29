"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const root_controller_1 = require("../controllers/root.controller");
const router = (0, express_1.Router)();
router.get('/', root_controller_1.rootHandler);
exports.default = router;
