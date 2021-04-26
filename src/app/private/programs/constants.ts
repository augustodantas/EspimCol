import { Day } from '../models/date.model';

export const LETRAS_FILTRO: string[] = [
  '*',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'Y',
  'Z',
];

export const SENSORS: any[] = [
  {
    alias: 'activity',
    name: 'Atividades',
  },
  {
    alias: 'location',
    name: 'Localização',
  },
  {
    alias: 'measure_use',
    name: 'Utilização do dispositivo',
  },
];

export const COLLECTORS: any[] = [
  {
    alias: 'smartphone',
    name: 'Smartphone',
  },
  {
    alias: 'smartwatch',
    name: 'Smartwatch',
  },
];

export const NOTIFICATIONS_TYPES: any[] = [
  {
    alias: 'NC',
    name: 'Notificação curta',
  },
  {
    alias: 'NL',
    name: 'Notificação longa',
  },
  {
    alias: 'AL',
    name: 'Alarme',
  },
];

export const WEEKLY_DAYS: Day[] = [
  {
    alias: 'sunday',
    cronName: 'SUN',
    name: 'Domingo',
    hours: [],
  },
  {
    alias: 'monday',
    cronName: 'MON',
    name: 'Segunda',
    hours: [],
  },
  {
    alias: 'tuesday',
    cronName: 'TUE',
    name: 'Terça-feira',
    hours: [],
  },
  {
    alias: 'wednesday',
    cronName: 'WED',
    name: 'Quarta-feira',
    hours: [],
  },
  {
    alias: 'thursday',
    cronName: 'THU',
    name: 'Quinta-feira',
    hours: [],
  },
  {
    alias: 'friday',
    cronName: 'FRI',
    name: 'Sexta-feira',
    hours: [],
  },
  {
    alias: 'saturday',
    cronName: 'SAT',
    name: 'Sábado',
    hours: [],
  },
];
