import winston from 'winston';
import { createRootLogger } from '@backstage/backend-common';
import 'winston-daily-rotate-file';

const logFileTransport = new winston.transports.File({
  filename: 'backstage.log',
  dirname: 'logs', // writes to packages/backend/logs/backstage.log
  level: 'info', // capture info and higher levels
});

const logger = createRootLogger();
logger.add(logFileTransport);

const logRotateTransport = new winston.transports.DailyRotateFile({
  dirname: 'logs',
  filename: 'backstage-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxFiles: '14d', // keep logs for 2 weeks
});
logger.add(logRotateTransport);

