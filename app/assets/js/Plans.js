function Plans () {
  this.list = [];
}

Plans.prototype.getPlans = function() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('success!', JSON.parse(xhr.response));
    } else {
      console.log('The request failed!');
    }
  };
  xhr.open('GET', '/v1/plans');
  xhr.send();
};