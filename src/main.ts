import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AppConfig, SwaggerConfig } from './config';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import * as session from 'express-session';
import { isProduction } from './utils/env';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
    logger: isProduction()
      ? ['error', 'log']
      : ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  const _app = app.get(AppConfig);
  //   const _logger = app.get(Logger);

  //   app.useLogger(_logger);

  app.use(
    helmet({
      hidePoweredBy: true,
      xssFilter: true,
    }),
  );

  app.use(
    session({
      secret: 'res',
      resave: false,
      saveUninitialized: false,
    }),
  );

  //   const httpAdapterhost = app.get(HttpAdapterHost);
  //   app.useGlobalFilters(
  //     new AllExceptionFilter(httpAdapterhost),
  //     new QueryExceptionFilter(httpAdapterhost),
  //   );
  app.useGlobalPipes(new ValidationPipe());
  const port = _app.getPort();
  app.use(cookieParser());
  SwaggerConfig(app);

  await app.listen(port, () => {
    console.log(`Application listen in port ${port}`, 'Application');
  });
}
bootstrap();
