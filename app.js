'use strict';

var source = document.getElementById('skill').innerHTML;
var template = Handlebars.compile(source);
var 


function Skill(easyPointsNeeded, mediumPointsNeeded, hardPointsNeeded, name, details) {
  this.easyPointsNeeded = easyPointsNeeded;
  this.mediumPointsNeeded = mediumPointsNeeded;
  this.hardPointsNeeded = hardPointsNeeded;
  this.details = details;
  this.name = name;

  this.easyPointsSpent = 0;
  this.mediumPointsSpent = 0;
  this.hardPointsSpent = 0;
}

var Vet = new Skill(6, 0, 0, 'Veteran', 'Start each game with any one Basic Skill.');
console.log(template(Vet));

