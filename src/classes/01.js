class Button {

  static setID(id) {
    console.log(id, "is set");
  }

  constructor() {
    this.name = "Save";
  }

  submit() {
    console.log("Button submitted");
  }
}

Button.setID('submit_button');

const loginButton = new Button();

loginButton.submit();

// constructor
function Input() {
  this.placeholder = "Type here";
}

// method
Input.prototype.blur = function() {
  console.log('Input is blurred');
}
