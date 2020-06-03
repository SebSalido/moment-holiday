//! moment-holiday.js locale configuration
//! locale : FR
//! main branch author : kodie : https://github.com/kodie
//! author : Sebastien SALIDO : https://github.com/khgar/moment-holiday
//


(function() {
  var moment = (typeof require !== 'undefined' && require !== null) && !require.amd ? require('moment') : this.moment;

  moment.holidays.france = {
    'Jour de l\'an': {
      date: '1/1',
      keywords_n: ['eve']
    },
    'Fête du Travail': {
      date: '5/1',
      keywords:['labour','day'],
    },
    '8 Mai 1945': {
      date: '5/8'
    },
    'Fête Nationale': {
      date: '7/14',
      keywords:['nationnal'],
    },
    'Assomption': {
      date: '8/15'
    },
    'La Toussaint': {
      date: '11/1'
    },
    'Armistice': {
      date: '11/11'
    },
    'Noël': {
      date: '12/25',
      keywords: ['christ', 'x-?mas'],
      keywords_n: ['eve']
    },
    'Vendredi Saint': {
      date: 'easter-2',
      keywords_y: ['good', 'friday']
    },
    "Jeudi de l'Ascension": {
      date: 'easter+39',
      keywords_y: ['good', 'thursday']
    },
    'Dimanche de Pâques': {
      date: 'easter',
      keywords_y: ['easter'],
      keywords: ['sunday']
    },
    'Lundi de Pâques': {
      date: 'easter+1',
      keywords_y: ['good', 'monday']
    },
    'Lundi de Pentecôte': {
      date: 'easter+50',
      keywords_y: ['good', 'monday']
    }
  };

  if ((typeof module !== 'undefined' && module !== null ? module.exports : void 0) != null) { module.exports = moment; }
}).call(this);
