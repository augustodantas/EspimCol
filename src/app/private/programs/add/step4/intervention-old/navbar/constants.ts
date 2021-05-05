export const ITENS_QUESTION: any[] = [
  {
    icon: 'fa fa-comment',
    text: 'Mensagem',
    type: 'empty',
  },
  {
    icon: 'fa fa-align-left',
    text: 'Questão aberta',
    alias: 'empty_question',
    type: 'question',
    subtype: 0,
  },
  {
    icon: 'fas fa-dot-circle',
    text: 'Escolha Única',
    alias: 'singlecheck',
    type: 'question',
    subtype: 1,
  },
  {
    icon: 'fas fa-check-square',
    text: 'Escolha Múltipla',
    alias: 'multiple_check',
    type: 'question',
    subtype: 2,
  },
  {
    icon: 'fa fa-ruler-combined',
    text: 'Likert',
    alias: 'likert',
    type: 'question',
    subtype: 3,
  },
  {
    icon: 'fa fa-pencil-ruler',
    text: 'Likert Personalizada',
    alias: 'custom_likert',
    type: 'question',
    subtype: 31,
  },
  {
    icon: 'fas fa-balance-scale',
    text: 'Diferencial Semântico',
    alias: 'semantic',
    type: 'question',
    subtype: 4,
  },
  {
    icon: 'fas fa-video',
    text: 'Solicitar Mídia',
    alias: 'midia',
    type: 'media',
  },
  {
    icon: 'fas fa-mobile',
    text: 'Aplicação externa',
    alias: 'external_app',
    type: 'task',
  },
];