import * as _moment from 'moment';
import {DngLogLevel} from "./DngLogLevel";

const moment = _moment;
/**
 * This is equivalent to:
 * type LogLevels = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'OFF';
 */
export type DngLogLevels = keyof typeof DngLogLevel;


export class DngLogger {
  private _level: number = DngLogLevel.INFO;

  public skipPrefix = false;


  public get infoEnabled(): boolean {
    return (this._level <= DngLogLevel.INFO);
  }
  public get info(): Function {
    if (!this.infoEnabled) {
      return () => {};
    }

    const method: Function = this.getMethod(DngLogLevel.INFO);
    if (this.skipPrefix) {
      return method.bind(window.console);
    }

    return method.bind(window.console, `[${this.time}]`);
  }

  public get debugEnabled(): boolean {
    return (this._level <= DngLogLevel.DEBUG);
  }
  public get debug(): Function {
    if (!this.debugEnabled) {
      return () => {};
    }

    const method: Function = this.getMethod(DngLogLevel.DEBUG);
    if (this.skipPrefix) {
      return method.bind(window.console);
    }

    return method.bind(window.console, `%c[${this.time}]`, 'color: #28a745');
  }

  public get warnEnabled(): boolean {
    return (this._level <= DngLogLevel.WARN);
  }
  public get warn(): Function {
    if (!this.warnEnabled) {
      return () => {};
    }

    const method: Function = this.getMethod(DngLogLevel.WARN);
    if (this.skipPrefix) {
      return method.bind(window.console);
    }

    return method.bind(window.console, `[${this.time}]`);
  }

  public get errorEnabled(): boolean {
    return (this._level <= DngLogLevel.ERROR);
  }
  public get error(): Function {
    if (!this.errorEnabled) {
      return () => {};
    }

    const method: Function = this.getMethod(DngLogLevel.ERROR);
    if (this.skipPrefix) {
      return method.bind(window.console);
    }

    return method.bind(window.console, `[${this.time}]`);
  }

  public get traceEnabled(): boolean {
    return (this._level <= DngLogLevel.TRACE);
  }
  public get trace(): Function {
    if (!this.traceEnabled) {
      return () => {};
    }

    const method: Function = this.getMethod(DngLogLevel.TRACE);
    if (this.skipPrefix) {
      return method.bind(window.console);
    }

    return method.bind(window.console, `%c[${this.time}]`, 'color: #ea8d2b');
  }

  public setLevel(level: number | DngLogLevels | DngLogLevel): void {
    if (level == null) { return; }

    this._level = this.getLevelNumber(level);
    this.info('Logger level set to ' + DngLogLevel[this._level]);
  }

  public log(level: DngLogLevel, text: string, ...args: Array<string | any[]>): Function {
    if (this._level > level) {
      return () => {};
    }

    const method: Function = this.getMethod(level);
    let color: string = this.getColor(level);

    const values = [ text ];
    const colors = [ '#000000' ];

    if (!this.skipPrefix) {
      values.unshift(`[${this.time}]`);
      colors.unshift(color);
    }

    Array.from(args).forEach(
      (arg: string | any[]) => {
        if (Array.isArray(arg)) {
          values.push(arg[1]);

          color = this.getColor(arg[0]);
          colors.push(color);
        }
        else {
          values.push(arg);
          colors.push('#28a745');
        }
      }
    );

    const message = values.map( (v: any) => `%c${v}`).join(' ');
    const argArray = colors.map( (c: string) => `color: ${c}`);

    return method.bind(window.console, message, ...argArray);
  }

  private getColor(level: DngLogLevel): string {
    if (level === DngLogLevel.TRACE) {
      return '#EA8D2B';
    }
    else if (level === DngLogLevel.DEBUG) {
      return '#28A745';
    }
    else if (level === DngLogLevel.ERROR) {
      return '#d71b1b';
    }

    return '#000000';
  }

  private getMethod(level: DngLogLevel): Function {
    if (level === DngLogLevel.WARN) {
      return console.warn;
    }
    else if (level === DngLogLevel.ERROR) {
      return console.error;
    }

    return console.log;
  }

  private getLevelNumber(level: number | DngLogLevels | DngLogLevel): number {
    if (typeof level === 'number') { return level; }
    if (typeof level === 'string') { return DngLogLevel[level]; }

    return level;
  }

  private get time(): string {
    return moment(Date.now()).format('HH:mm.s SSS');
  }
}

export const logger: DngLogger = new DngLogger();
