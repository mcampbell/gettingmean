
module.exports.index = function(req, res, next) {
  // maps to view name, and a bucket 'o data to use in template
  res.render('index', { title: 'Express'} );
};
