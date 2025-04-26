import { Logger } from 'jsr:@deno-library/logger';

interface ILoggerAdapter {

    file: string;

    log: (message: string) => void;
    error: (message: string) => void;
    warn: (message: string) => void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {

    public file: string;
    private logger = new Logger();

    constructor(filename: string) {
        this.file = filename;
    }

    log(message: string) {
        this.logger.info(`[${this.file} Log] ${message}`);
    }
    error(message: string) {
        this.logger.error(`[${this.file} Log] ${message}`);
    }
    warn(message: string) {
        this.logger.warn(`[${this.file} Log] ${message}`);
    }
}