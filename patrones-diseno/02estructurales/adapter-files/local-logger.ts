import { COLORS } from '../../helpers/colors.ts';

export class LocalLogger {
  constructor(private filename: string) { }

  log(message: string) {
    console.log(`%cLocalLogger: ${message}`, COLORS.green);
  }
  error(message: string) {
    console.error(`%cLocalLogger: ${message}`, COLORS.red);
  }
  warn(message: string) {
    console.warn(`%cLocalLogger: ${message}`, COLORS.yellow);
  }
}