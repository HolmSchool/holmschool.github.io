const {
    getDepartmentsForLang,
    generateDepartmentCreator,
    DEPARTMENTS_DIR,
    META_DIR,
    getDepartmentsDirForLang
  } = require('../../curriculum/getDepartments');
  const _ = require('lodash');
//   TODO: Global config
const departmentLocale = "english";

  exports.replaceDepartmentNode = () => {
    return async function replaceDepartmentNode(filePath) {
      // get the meta so that challengeOrder is accurate
      const blockNameRe = /\d\d-[-\w]+\/([^/]+)\//;
      const posix = path.normalize(filePath).split(path.sep).join(path.posix.sep);
      const blockName = posix.match(blockNameRe)[1];
      const metaPath = path.resolve(META_DIR, `${blockName}/meta.json`);
      delete require.cache[require.resolve(metaPath)];
      const meta = require(metaPath);
      // TODO: reimplement hot-reloading of certifications
      return await createDepartment(filePath, meta);
    };
  };
  
exports.buildDepartments = async function buildDepartments() {
    const curriculum = await getDepartmentsForLang(departmentLocale);
    const superBlocks = Object.keys(curriculum);
    const blocks = superBlocks
      .map(superBlock => curriculum[superBlock].blocks)
      .reduce((blocks, superBlock) => {
        const currentBlocks = Object.keys(superBlock).map(key => superBlock[key]);
        return blocks.concat(_.flatten(currentBlocks));
      }, []);
  
    const builtChallenges = blocks
      .filter(block => !block.isPrivate)
      .map(({ challenges }) => challenges)
      .reduce((accu, current) => accu.concat(current), []);
    return builtChallenges;
  };

  exports.localeDepartmentsRootDir = getDepartmentsDirForLang(departmentLocale);


const createDepartment = generateDepartmentCreator(
    DEPARTMENTS_DIR,
    departmentLocale
  );