import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { UNITS } from "./util";

export type Units = "year" | "month" | "day" | "hour" | "minute" | "second";

@customElement("relative-time")
export class RelativeTime extends LitElement {
  // in miliseconds
  units: {
    [key in Units]: number;
  } = UNITS;

  rft!: Intl.RelativeTimeFormat;

  @property({ type: String }) locales = 'en';
  @property({ type: String }) datetime!: string | Date | number;

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.createIntlRelativeFormat(this.locales);
  }

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    if (name == "locales" && this.locales !== value) {
      this.locales = value!;
    }

    if (name === "datetime") {
      if (_old == null || value == null) {
        return;
      }
      if (_old !== value) {
        this.datetime = value!;
      }
    }
  }

  createIntlRelativeFormat(locales: string) {
    this.rft = new Intl.RelativeTimeFormat(locales, { numeric: "auto" });
  }

  //Reference:https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time
  getRelativeTime(
    dateTime: Date | string | number,
    currentDateTime = new Date()
  ): string {
    let elapsed = 0;
    if(typeof Number(dateTime) === "number" && `${Number(dateTime)}` !== 'NaN'){
        elapsed = +dateTime - (+currentDateTime);
    }
    else if (typeof dateTime == "string") {
      elapsed = +new Date(dateTime) - (+currentDateTime);
    } else if (dateTime instanceof Date) {
      elapsed = (+dateTime) - (+currentDateTime);
    }
    for (let u in this.units) {
      const unit = u as Units;
      if (Math.abs(elapsed) > this.units[unit] || unit == "second")
        return this.rft!.format(
          Math.round(elapsed / this.units[unit]),
          unit as Intl.RelativeTimeFormatUnit
        );
    }
    return "";
  }

  //To Disable Shadow DOM
  createRenderRoot() {
    return this;
  }

  render() {
    return html`${this.getRelativeTime(this.datetime)}`;
  }
}
