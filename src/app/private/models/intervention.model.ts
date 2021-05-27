import { isNullOrUndefined, toChar } from 'src/app/util/functions';

export class ComplexCondition {
  text?: string;
  action: string;
  condition: string;
  value?: boolean = false;
}
export class Intervention {
  public id: number;
  public type: string;
  public statement: string = '';
  public order_position: number;
  public first: boolean;
  public next: number;
  public obrigatory: boolean = false;
  public x: number;
  public y: number;

  public medias;
  public complexConditions: ComplexCondition[];

  constructor(intervention: any = {}) {
    this.id = intervention.id;
    this.statement = intervention.statement ? intervention.statement : '';
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
  public media_type: string = '';

  constructor(intervention: any = {}) {
    super(intervention);

    this.media_type = intervention.media_type ? intervention.media_type : '';
    this.type = 'media';
  }

  getTypeDescription() {
    return 'Solicitar Mídia';
  }
}

export class QuestionIntervention extends Intervention {
  public question_type: number;
  public conditions: {};
  public options: string[];
  public scales: string[];

  constructor(intervention: any = {}) {
    super(intervention);

    this.question_type = intervention.question_type;
    this.conditions = intervention.conditions || {};
    this.options = intervention.options || [];
    this.scales = intervention?.scales || [];
    this.type = 'question';
  }

  getTypeDescription() {
    if (this.question_type === 0) return 'Questão aberta';
    if (this.question_type === 1) return 'Escolha única';
    if (this.question_type === 2) return 'Múltipla escolha';
    if (this.question_type === 3) return 'Likert';
    if (this.question_type === 4) return 'Diferencial semântico';
    if (this.question_type === 31) return 'Likert personalizado';
    return 'Mensagem';
  }
}

export class TaskIntervention extends Intervention {
  app_package: string = '';
  parameters: object = {};
  start_from_notification: boolean;

  constructor(intervention: any = {}) {
    super(intervention);

    this.app_package = intervention.app_package ? intervention.app_package : '';
    this.parameters = intervention.parameters ? intervention.parameters : {};
    this.start_from_notification = intervention.start_from_notification;
    this.type = 'task';
  }
}
