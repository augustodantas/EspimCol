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

export const SENSORS_LIST: any[] = [
  {
    alias: 'activity',
    name: 'Atividades',
    value: null,
  },
  {
    alias: 'location',
    name: 'Localização',
    value: null,
  },
  {
    alias: 'measure_use',
    name: 'Utilização do dispositivo',
    value: null,
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
    cronName: '1',
    name: 'Domingo',
    hours: [],
  },
  {
    alias: 'monday',
    cronName: '2',
    name: 'Segunda',
    hours: [],
  },
  {
    alias: 'tuesday',
    cronName: '3',
    name: 'Terça-feira',
    hours: [],
  },
  {
    alias: 'wednesday',
    cronName: '4',
    name: 'Quarta-feira',
    hours: [],
  },
  {
    alias: 'thursday',
    cronName: '5',
    name: 'Quinta-feira',
    hours: [],
  },
  {
    alias: 'friday',
    cronName: '6',
    name: 'Sexta-feira',
    hours: [],
  },
  {
    alias: 'saturday',
    cronName: '7',
    name: 'Sábado',
    hours: [],
  },
];
