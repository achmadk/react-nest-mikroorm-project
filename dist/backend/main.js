"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _swagger = require("@nestjs/swagger");
const _appmodule = require("./app.module");
(async ()=>{
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    const swaggerConfig = new _swagger.DocumentBuilder().setTitle('API Docs').setDescription('Documentation of this API').setVersion('1.0.0').addTag('Resources').build();
    const document = _swagger.SwaggerModule.createDocument(app, swaggerConfig);
    _swagger.SwaggerModule.setup('api', app, document);
    await app.listen(8070);
})();
