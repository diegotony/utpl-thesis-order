"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transport_enum_1 = require("@nestjs/common/enums/transport.enum");
exports.OPTIONS = {
    transport: transport_enum_1.Transport.REDIS,
    options: {
        url: 'redis://localhost:6379',
    },
};
//# sourceMappingURL=main.options.js.map