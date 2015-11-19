Package.describe({
  name: 'modweb:superlog',
  summary: 'Timestamp logs.',
  version: '0.1.0',
  git: 'https://github.com/modweb/meteor-superlog'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.use(['coffeescript']);
  api.addFiles('superlog.litcoffee', ['client', 'server']);
  api.export('Superlog');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers', 'coffeescript', 'http']);
  api.use('modweb:superlog');
  api.addFiles('tests/superlog-tests.litcoffee');
});
