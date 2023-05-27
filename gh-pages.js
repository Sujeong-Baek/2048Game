var ghpages = require('gh-pages');

ghpages.publish('out', {
  branch: 'gh-pages',
  repo: 'https://github.com/Sujeong-Baek/sujeong-baek.github.io.git',
  remote: 'game2048'
}, function(err) {
  if (err) {
    console.error('Failed to publish:', err);
  } else {
    console.log('Successfully published!');
  }
});