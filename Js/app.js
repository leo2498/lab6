'use strict'

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  aveCookiePerCust: 6.3,

  randomCustPerHour: function () {

    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  averagePerHour: function () {

    return Math.round(this.randomCustPerHour() * this.aveCookiePerCust);
  },

  generateList: function () {

    var ulElement = document.getElementById('first-pike');
    var runningTotal = 0;

    for (var i = 0; i < storeHours.length; i++) {

      var liElement = document.createElement('li');

      var randomNum = this.averagePerHour();
      runningTotal += randomNum;

      liElement.textContent = `${storeHours[i]}: ${randomNum} cookies`;

      ulElement.appendChild(liElement);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total for the day: ${runningTotal} cookies`;
    ulElement.appendChild(totalEl);
  },
};

firstAndPike.generateList();

var seatacAirport = {
  minCust: 3,
  maxCust: 24,
  aveCookiePerCust: 1.2,

  randomCustPerHour: function () {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  averagePerHour: function () {
    return Math.round(this.randomCustPerHour() * this.aveCookiePerCust);
  },

  generateList: function () {
    var ulElement = document.getElementById('sea-tac');
    var runningTotal = 0;

    for (var i = 0; i < storeHours.length; i++) {
      var liElement = document.createElement('li');

      var randomNum = this.averagePerHour();
      runningTotal += randomNum;

      liElement.textContent = `${storeHours[i]}: ${randomNum} cookies`;
      ulElement.appendChild(liElement);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total for the day: ${runningTotal} cookies`;
    ulElement.appendChild(totalEl);
  },
};

seatacAirport.generateList();

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  aveCookiePerCust: 3.7,

  randomCustPerHour: function () {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  averagePerHour: function () {
    return Math.round(this.randomCustPerHour() * this.aveCookiePerCust);
  },
  generateList: function () {
    var ulElement = document.getElementById('seattleCenter');
    var runningTotal = 0;

    for (var i = 0; i < storeHours.length; i++) {
      var liElement = document.createElement('li');

      var randomNum = this.averagePerHour();
      runningTotal += randomNum;

      liElement.textContent = `${storeHours[i]}: ${randomNum} cookies`;
      ulElement.appendChild(liElement);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total for the day: ${runningTotal} cookies`;
    ulElement.appendChild(totalEl);
  },
};

seattleCenter.generateList();


var capitolHill = {
  minCust: 20,
  maxCust: 38,
  aveCookiePerCust: 2.3,
  
  randomCustPerHour: function () {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  averagePerHour: function () {
    return Math.round(this.randomCustPerHour() * this.aveCookiePerCust);
  },
  generateList: function (){
    var ulElement = document.getElementById('capitolHill');
    var runningTotal = 0;

    for (var i = 0; i < storeHours.length; i++) {
      var liElement = document.createElement('li');

      var randomNum = this.averagePerHour();
      runningTotal += randomNum;

      liElement.textContent = `${storeHours[i]}: ${randomNum} cookies`;
      ulElement.appendChild(liElement);
    }
    var totalEl = document.createElement('li'); 
    totalEl.textContent = `Total for the day: ${runningTotal} cookies`;
    ulElement.appendChild(totalEl);
  },
};

capitolHill.generateList();

var alki = {
  minCust: 2,
  maxCust: 16,
  aveCookiePerCust: 4.6,
  
  randomCustPerHour: function () {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  averagePerHour: function () {
    return Math.round(this.randomCustPerHour() * this.aveCookiePerCust);
  },
  generateList: function (){
    var ulElement = document.getElementById('alki');
    var runningTotal = 0;

    for (var i = 0; i < storeHours.length; i++) {
      var liElement = document.createElement('li');

      var randomNum = this.averagePerHour();
      runningTotal += randomNum;

      liElement.textContent = `${storeHours[i]}: ${randomNum} cookies`;
      ulElement.appendChild(liElement);
    }
    var totalEl = document.createElement('li'); 
    totalEl.textContent = `Total for the day: ${runningTotal} cookies`;
    ulElement.appendChild(totalEl);
  },
};

alki.generateList();