const video = 0
const ereserve = 1
const externalLink = 2
const justText = 3
const roadSign = 4


// const html = 0;
// const js = 1;
// const backend = 2;
// const zipline = 3;
// const frontEndProject = 3;
// const backEndProject = 4;
// const jsProject = 5;
// const modern = 6;
// const step = 7;
// const quiz = 8;
// const invalid = 9;
// const pythonProject = 10;
// const video = 11;
// const codeAllyPractice = 12;
// const codeAllyCert = 13;
// const multifileCertProject = 14;

// individual exports
// exports.backend = backend;
// exports.frontEndProject = frontEndProject;
// exports.backEndProject = backEndProject;
// exports.pythonProject = pythonProject;
// exports.codeAllyCert = codeAllyCert;

exports.challengeTypes = {
    video,
    ereserve,
    externalLink,
    justText,
    roadSign,
//   html,
//   js,
//   backend,
//   zipline,
//   frontEndProject,
//   backEndProject,
//   pythonProject,
//   jsProject,
//   modern,
//   step,
//   quiz,
//   invalid,
//   video,
//   codeAllyPractice,
//   codeAllyCert,
//   multifileCertProject
};

exports.isFinalProject = challengeType => {
  if (typeof challengeType !== 'number')
    throw Error('challengeType must be a number');
  return (
    challengeType === frontEndProject ||
    challengeType === backEndProject ||
    challengeType === jsProject ||
    challengeType === pythonProject ||
    challengeType === codeAllyCert ||
    challengeType === multifileCertProject
  );
};

exports.isCodeAllyPractice = challengeType => {
  if (typeof challengeType !== 'number')
    throw Error('challengeType must be a number');
  return challengeType === codeAllyPractice;
};

// turn challengeType to file ext
// exports.pathsMap = {
//   [html]: 'html',
//   [js]: 'js',
//   [jsProject]: 'js'
// };
// determine the component view for each challenge
exports.viewTypes = {
//   [html]: 'classic',
//   [js]: 'classic',
//   [jsProject]: 'classic',
//   [frontEndProject]: 'frontend',
//   [backEndProject]: 'backend',
//   [pythonProject]: 'frontend',
//   [modern]: 'modern',
//   [step]: 'step',
//   [quiz]: 'quiz',
//   [backend]: 'backend',
//   [codeAllyPractice]: 'codeAlly',
//   [codeAllyCert]: 'codeAlly',
//   [multifileCertProject]: 'classic',
  [video]: 'video',
  [ereserve]: 'modern',
  [externalLink]: 'modern',
  [justText]: 'modern',
  [roadSign]: 'modern',
};

// determine the type of submit function to use for the challenge on completion
exports.submitTypes = {
//   [html]: 'tests',
//   [js]: 'tests',
//   [jsProject]: 'tests',
//   // requires just a single url
//   // like codepen.com/my-project
//   [frontEndProject]: 'project.frontEnd',
//   // requires two urls
//   // a hosted URL where the app is running live
//   // project code url like GitHub
//   [backEndProject]: 'project.backEnd',
//   [pythonProject]: 'project.backEnd',
//   [step]: 'step',
//   [quiz]: 'quiz',
//   [backend]: 'backend',
//   [modern]: 'tests',
//   [codeAllyCert]: 'project.frontEnd',
//   [multifileCertProject]: 'tests',
  [video]: 'tests',
  [ereserve]: 'tests',
  [externalLink]: 'tests',
  [justText]: 'tests',
  [roadSign]: 'tests',
};

// determine which help forum questions should be posted to
exports.helpCategoryMap = require('./help-category-map.json');