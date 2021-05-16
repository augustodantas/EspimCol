import { isNullOrUndefined, toChar } from 'src/app/util/functions';

export class Intervention {
  public id: number;
  public type: string;
  public statement: string;
  public order_position: number;
  public first: boolean;
  public next: number;
  public obrigatory: boolean = false;
  public x: number;
  public y: number;

  protected medias;
  protected complexConditions;

  constructor(intervention: any = {}) {
    this.id = intervention.id;
    this.statement = intervention.statement;
    this.order_position = intervention.order_position;
    this.first = !isNullOrUndefined(intervention.first) ? intervention.first : false;
    this.next = intervention.next;
    this.obrigatory = !isNullOrUndefined(intervention.obrigatory) ? intervention.obrigatory : false;

    this.medias = intervention.medias;
    this.complexConditions = intervention.complexConditions;

    this.x = intervention.x;
    this.y = intervention.y;

    this.type = 'empty';
  }

  getTypeDescription() {
    return 'Mensagem';
  }

  getOrderDescription() {
    return this.order_position < 0 ? toChar(this.order_position * -1) : this.order_position;
  }

  getDescription() {
    if (this.statement) {
      return this.statement;
    } else {
      return 'Sem descrição';
    }
  }
}

export class MediaIntervention extends Intervention {
  private mediaType: string;

  constructor(intervention: any = {}) {
    super(intervention);

    this.mediaType = intervention.mediaType;
    this.type = 'media';
  }
}

export class QuestionIntervention extends Intervention {
  public questionType: number;
  public conditions: {};
  public options: string[];
  public scales: string[];

  constructor(intervention: any = {}) {
    super(intervention);

    this.questionType = intervention.questionType;
    this.conditions = intervention.conditions || {};
    this.options = intervention.options || [];
    this.scales = intervention?.scales || [];
    this.type = 'question';
  }

  getTypeDescription() {
    if (this.questionType === 0) return 'Questão aberta';
    if (this.questionType === 1) return 'Escolha única';
    if (this.questionType === 2) return 'Múltipla escolha';
    if (this.questionType === 3) return 'Likert';
    if (this.questionType === 4) return 'Diferencial semântico';
    if (this.questionType === 31) return 'Likert personalizado';
    return 'Mensagem';
  }
}

export class TaskIntervention extends Intervention {
  private appPackage: string;
  private parameters: object;
  private startFromNotification: boolean;

  constructor(intervention: any = {}) {
    super(intervention);

    this.appPackage = intervention.appPackage;
    this.parameters = intervention.parameters;
    this.startFromNotification = intervention.startFromNotification;
    this.type = 'task';
  }
}
