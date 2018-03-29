
function listGenerator (taskNum) {
  if (taskNum > 2 && taskNum < 5) {
    return 'List is small';
  } else if (taskNum > 5 && taskNum < 10) {
    return 'List is medium'
  } else  {
    return 'Unknown range';
  }
}

console.log(listGenerator(0));

for (var i = 0; i < 15; i++ ) { // 5
  console.log(
    listGenerator(i)
  ); // 5 times
}

var myName = 'Monica'
  , age = 15
  , isValid = true
  , getName = function () {
      return myName;
  };

function establishConnection (isNetworkAvailable, isDataAvailable) {
  if (!isNetworkAvailable) {
    return {
      errorMessage: 'Network is not available'
    };
  }

  if (isDataAvailable) {
    return {
      errorMessage: null,
      token: 123
    };
  }
}

console.log(
  establishConnection(false, false),
  establishConnection(true, true)
);
