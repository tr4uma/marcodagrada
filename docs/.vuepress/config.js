module.exports = {
  title: "Marco Dagrada",
  description: "Vue-powered Static Site Generator",
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'tr4uma/marcodagrada',
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Marco Dagrada',
      description: 'Marco Dagrada\'s online portfolio'
    },
    '/it/': {
      lang: 'it',
      title: 'Marco Dagrada',
      description: 'Il Portfolio online di Marco Dagrada'
    }
  }
}