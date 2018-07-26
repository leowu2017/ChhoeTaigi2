import { parseEmbreeTaigiSuTian } from '../lib/pg/parseDictionary.js';

Meteor.methods({
    parseDictionary: function() {
      parseEmbreeTaigiSuTian();
    },
  });