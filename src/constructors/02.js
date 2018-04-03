// Object literal practice

const dog = {
  name: 'olko',
  bark: function () {
    return 'bark bark bark ...';
  },
  sleep: function () {
    return `${this.name} is sleeping, zzz ...`;
  },
  dailyActivity: function () {
    return [
      `${this.name} was barking ${this.bark()}`,
      `${this.name} was sleeping ${this.sleep()}`
    ];
  }
};

dog.dailyActivity().forEach((activity, number) => {
  console.log('Activity:', number + 1, activity);
});

// Constructor practice

function Cat () {
  this.name = 'Phoebe';
  this.meow = function () {
    return `${this.name} is meowing, meow ...`;
  }
}

Cat.prototype.dailyActivity = function () {
  return [`${this.meow()}`];
};

const phoebe = new Cat();

console.log(phoebe.meow());
console.log(phoebe.dailyActivity());

