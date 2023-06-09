function dasherize(name) {
    return ('' + name)
      .toLowerCase()
      .trim()
      .replace(/\s|\./g, '-')
      .replace(/[^a-z\d\-.]/g, '');
  }

exports.dasherize = dasherize