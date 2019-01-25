function Plans () {
  this.plans = [];
}

Plans.prototype.getPlans = function() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('success!', xhr);
    } else {
      console.log('The request failed!');
    }
    console.log('This always runs...');
  };
  xhr.open('GET', '/v1/plans');
  xhr.send();
};