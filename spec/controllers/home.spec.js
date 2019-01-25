let controller = require('../../app/controllers/home');

describe('Home Controller', function() {
  let req, res;

  describe('bare page', function () {
    beforeEach(function() {
      req = { };
      res = { render: function() { } };
      
      spyOn(res, 'render');
    });

    it('should render the home show view', function() {
      controller().show(req, res);
      expect(res.render).toHaveBeenCalledWith('home/show');
    });
  });

});
