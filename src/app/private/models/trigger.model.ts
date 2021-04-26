import { Cron } from './cron.model';

export class Trigger {
  id: number;
  condition: Cron | string;
  priority: string;
  timeOut: number;

  constructor(trigger: any = {}) {}

  getDescription() {
    const dowNames = ['', 'domingos', 'segundas', 'terças', 'quartas', 'quintas', 'sextas', 'sábados'];
    let ans;

    if (this.condition instanceof Cron) {
      const dow = this.condition.getDow();
      if (dow.length === 0) return 'Nenhum dia selecionado. Antes de modificar selecione ao menos algum dia.';
      else if (dow.length < 7) {
        if (dow[0] === '1' || dow[0] === '7') ans = 'Todas os ';
        else ans = 'Todas as ';

        for (const day of dow) {
          ans += dowNames[day];

          if (dow[dow.length - 1] === day) {
            ans += ' ';
            break;
          }

          if (dow.length >= 3) {
            if (day === dow[dow.length - 2]) ans += ' e ';
            else ans += ', ';
          } else if (dow.length === 2) ans += ' e ';
          else ans += ' ';
        }
      } else ans = 'Todos os dias ';

      if (this.priority === 'NC') ans += 'uma notificação curta ';
      else if (this.priority === 'NL') ans += 'uma notificação longa ';
      else if (this.priority === 'AL') ans += 'um alarme ';

      if (this.getHour() && this.getMinutes()) ans += 'às ' + this.condition.getHours() + ':' + this.condition.getMinute();
    } else ans = 'Manual';

    return ans;
  }
  getId() {
    return this.id;
  }

  getTriggerCondition() {
    return this.condition;
  }
  getPriority() {
    return this.priority;
  }
  setPriority(priority: string) {
    this.priority = priority;
  }
  getTimeOut() {
    return this.timeOut;
  }
  getTimeOutInMinutes() {
    return this.timeOut / 60000;
  }
  setTimeOutInMinutes(timeOut: number | string) {
    if (typeof timeOut === 'string') timeOut = Number.parseInt(timeOut);
    this.timeOut = timeOut * 60000;
  }

  isDayActive(day?: string) {
    if (this.condition instanceof Cron) return this.condition.isDayActive(day);
  }
  actOrDeactivateDay(day?: string) {
    if (this.condition instanceof Cron) this.condition.actOrDeactivateDay(day);
  }

  getMinutes() {
    if (this.condition instanceof Cron) return Number.parseInt(this.condition.getMinute());
  }
  setMinute(minutes: number) {
    if (this.condition instanceof Cron && minutes) this.condition.setMinute(minutes.toString());
  }
  getHour() {
    if (this.condition instanceof Cron) return Number.parseInt(this.condition.getHours());
  }
  setHour(hour: number) {
    if (this.condition instanceof Cron && hour) this.condition.setHour(hour.toString());
  }
}
