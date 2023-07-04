const {
  availableLangs,
  languagesWithAuditedBetaReleases
} = require('../config/i18n/all-langs');

const superBlockToOrder = {
  'nutrition': 0,
  'business': 1,
  'lifestyle': 2,
  'math': 3,
  'english-as-an-additional-language': 4,
  'english': 5,
  'lgbt': 6,
  'feminism': 7,
  'open-steam': 8,
  'anti-racism': 9,
  'personal-finance': 10,
};
function getSuperBlockFromDir(dir) {
    const superBlock = directoryToSuperblock[dir];
    if (!superBlock) throw Error(`${dir} does not map to a superblock`);
    return directoryToSuperblock[dir];
  }

function getSuperOrder(
    superblock,
    { showNewCurriculum } = { showNewCurriculum: false }
  ) {
    let orderMap = superBlockToOrder;
    if (showNewCurriculum) {
      orderMap = superBlockToNewOrder;
    }
    if (
      !languagesWithAuditedBetaReleases.includes('english')// TODO: rocess.env.CURRICULUM_LOCALE)
    ) {
      orderMap = superBlockNonAuditedOrder;
    }
    if (typeof superblock !== 'string')
      throw Error('superblock must be a string');
    const order = orderMap[superblock];
    if (typeof order === 'undefined')
      throw Error(`${superblock} is not a valid superblock`);
    return order;
  }


  const directoryToSuperblock = {
    'nutrition': 'nutrition',
    'business': 'business',
    'math': 'math',
    'lifestyle': 'lifestyle',
    'open-steam': 'open-steam',
    'lgbt': 'lgbt',
    'feminism': 'feminism',
    'anti-racism': 'anti-racism',
    'english': 'english',
    'english-as-an-additional-language': 'english-as-an-additional-language',
    'personal-finance': 'personal-finance',
    '00-certifications': 'certifications', // treating certifications as a superblock for simplicity
    '01-responsive-web-design': 'responsive-web-design',
    '02-javascript-algorithms-and-data-structures':
      'javascript-algorithms-and-data-structures',
    '03-front-end-development-libraries': 'front-end-development-libraries',
    '04-data-visualization': 'data-visualization',
    '05-back-end-development-and-apis': 'back-end-development-and-apis',
    '06-quality-assurance': 'quality-assurance',
    '07-scientific-computing-with-python': 'scientific-computing-with-python',
    '08-data-analysis-with-python': 'data-analysis-with-python',
    '09-information-security': 'information-security',
    '10-coding-interview-prep': 'coding-interview-prep',
    '11-machine-learning-with-python': 'machine-learning-with-python',
    '13-relational-databases': 'relational-database',
    '14-responsive-web-design-22': '2022/responsive-web-design',
    '15-javascript-algorithms-and-data-structures-22':
      '2022/javascript-algorithms-and-data-structures'
};


exports.getSuperBlockFromDir = getSuperBlockFromDir;
exports.getSuperOrder = getSuperOrder;