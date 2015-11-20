Package.describe({
  name: 'modweb:superlog',
  summary: 'Timestamp logs.',
  version: '0.1.2_1',
  git: 'https://github.com/modweb/meteor-superlog'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.use(['coffeescript', 'momentjs:moment@2.8.4']);
  api.addFiles('superlog.litcoffee', ['client', 'server']);
  api.export('Superlog');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers', 'coffeescript', 'momentjs:moment@2.8.4']);
  api.use('modweb:superlog');
  api.addFiles('tests/superlog-tests.litcoffee');
});
