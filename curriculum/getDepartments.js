// import readdirp from 'readdirp';
const readdirp = require('readdirp');
const fs = require('fs');
const path = require('path');
const util = require('util');
const assert = require('assert');
const { findIndex, isEmpty } = require('lodash');
// const readdirp = require('readdirp');
// const yaml = require('js-yaml');
const { parseMD } = require('../tools/challenge-parser/parser');
const { helpCategoryMap } = require('../client/utils/challenge-types');

const { getSuperBlockFromDir, getSuperOrder } = require('./utils');
const DEPARTMENTS_DIR = path.resolve(__dirname, 'departments');
exports.DEPARTMENTS_DIR = DEPARTMENTS_DIR;
const META_DIR = path.resolve(DEPARTMENTS_DIR, '_meta');
exports.META_DIR = META_DIR;

const { curriculum: curriculumLangs } =
  require('../config/i18n/all-langs').availableLangs;

const { dasherize } = require('../utils/slugs');



// This recursively walks the directories starting at root, and calls cb for
// each file/directory and only resolves once all the callbacks do.
const walk = (root, target, options, cb) => {
    return new Promise(resolve => {
      let running = 1;
      function done() {
        // TODO: PREFIX
        if (--running === 0) {
          resolve(target);
        }
      }
      readdirp(root, options)
        .on('data', file => {
          running++;
          cb(file, target).then(done);
        })
        .on('end', done);
    });
  };

exports.getDepartmentsForLang = async function getDepartmentsForLang(lang) {
    // english determines the shape of the curriculum, all other languages mirror
    // it.
    const root = getDepartmentsDirForLang('english');
    // scaffold the curriculum, first set up the superblocks, then recurse into
    // the blocks
    const curriculum = await walk(
      root,
      {},
      { type: 'directories', depth: 0 },
      buildSuperBlocks
    );

    Object.entries(curriculum).forEach(([name, superBlock]) => {
      // TODO: FIGURE THIS OUT
      // assert(!isEmpty(superBlock.blocks), `superblock ${name} has no blocks`);
    });
    const cb = (file, curriculum) => buildChallenges(file, curriculum, lang);
    // fill the scaffold with the challenges
    return walk(
      root,
      curriculum,
      { type: 'files', fileFilter: ['*.md', '*.yml'] },
      cb
    );
  };

  async function hasEnglishSource(basePath, translationPath) {
    const englishRoot = path.resolve(__dirname, basePath, 'english');
    return await access(
      path.join(englishRoot, translationPath),
      fs.constants.F_OK
    )
      .then(() => true)
      .catch(() => false);
  }
  
function getBaseDir(filePath) {
    const [baseDir] = filePath.split(path.sep);
    return baseDir;
}

async function buildSuperBlocks({ path, fullPath }, curriculum) {
    const superBlock = getSuperBlockFromDir(getBaseDir(path));
    curriculum[superBlock] = { blocks: {} };
}

function getDepartmentsDirForLang(lang) {
    return path.resolve(DEPARTMENTS_DIR, `${lang}`);
  }

function generateDepartmentCreator(basePath, lang) {
    function getFullPath(pathLang, filePath) {
      return path.resolve(__dirname, basePath, pathLang, filePath);
    }
  
    async function validate(filePath, superBlock) {
      const invalidLang = !curriculumLangs.includes(lang);
      if (invalidLang)
        throw Error(`${lang} is not a accepted language.
  Trying to parse ${filePath}`);
  
      const missingEnglish =
        lang !== 'english' && !(await hasEnglishSource(basePath, filePath));
      if (missingEnglish)
        throw Error(`Missing English challenge for
  ${filePath}
  It should be in
  ${getFullPath('english', filePath)}
  `);
  
    //   const missingAuditedChallenge =
    //     isAuditedCert(lang, superBlock) &&
    //     !fs.existsSync(getFullPath(lang, filePath));
    //   if (missingAuditedChallenge)
    //     throw Error(`Missing ${lang} audited challenge for
//   ${filePath}
  
//   Explanation:
  
//   Challenges that have been already audited cannot fall back to their English versions. If you are seeing this, please update, and approve these Challenges on Crowdin first, followed by downloading them to the main branch using the GitHub workflows.
//       `);
    }
  
    function addMetaToChallenge(challenge, meta) {
      const challengeOrder = findIndex(
        meta.challengeOrder,
        ([id]) => id === challenge.id
      );
  
      challenge.block = meta.dashedName ? meta.dashedName : (meta.name ? dasherize(meta.name) : null);
      challenge.hasEditableBoundaries = !!meta.hasEditableBoundaries;
      challenge.order = meta.order;
      // const superOrder = getSuperOrder(meta.superBlock);
      // NOTE: Use this version when a super block is in beta.
      const superOrder = getSuperOrder(meta.superBlock, {
        // switch this back to SHOW_NEW_CURRICULUM when we're ready to beta the JS superblock
        showNewCurriculum: process.env.SHOW_UPCOMING_CHANGES === 'true'
      });
      if (superOrder !== null) challenge.superOrder = superOrder;
      /* Since there can be more than one way to complete a certification (using the
     legacy curriculum or the new one, for instance), we need a certification
     field to track which certification this belongs to. */
      const dupeCertifications = [
        {
          certification: 'responsive-web-design',
          dupe: '2022/responsive-web-design'
        },
        {
          certification: 'javascript-algorithms-and-data-structures',
          dupe: '2022/javascript-algorithms-and-data-structures'
        }
      ];
      const hasDupe = dupeCertifications.find(
        cert => cert.dupe === meta.superBlock
      );
      challenge.certification = hasDupe ? hasDupe.certification : meta.superBlock;
      challenge.superBlock = meta.superBlock;
      challenge.challengeOrder = challengeOrder;
      challenge.isPrivate = challenge.isPrivate || meta.isPrivate;
      challenge.required = (meta.required || []).concat(challenge.required || []);
      challenge.template = meta.template;
      challenge.time = meta.time;
      challenge.department = meta.department;
      challenge.name = meta.name;
      challenge.helpCategory =
        challenge.helpCategory || helpCategoryMap[challenge.block];
      challenge.translationPending =
        lang !== 'english' && !isAuditedCert(lang, meta.superBlock);
      challenge.usesMultifileEditor = !!meta.usesMultifileEditor;
      if (challenge.challengeFiles) {
        // The client expects the challengeFiles to be an array of polyvinyls
        challenge.challengeFiles = challengeFilesToPolys(
          challenge.challengeFiles
        );
      }
      if (challenge.solutions?.length) {
        // The test runner needs the solutions to be arrays of polyvinyls so it
        // can sort them correctly.
        challenge.solutions = challenge.solutions.map(challengeFilesToPolys);
      }
    }
  
    async function createChallenge(filePath, maybeMeta) {
      const meta = maybeMeta
        ? maybeMeta
        : require(path.resolve(
            META_DIR,
            `${getBlockNameFromPath(filePath)}/meta.json`
          ));
  
      await validate(filePath, meta.superBlock);
  
      const useEnglish =
        lang === 'english' ||
        !isAuditedCert(lang, meta.superBlock) ||
        !fs.existsSync(getFullPath(lang, filePath));
  
      const challenge = await (useEnglish
        ? parseMD(getFullPath('english', filePath))
        : parseTranslation(
            getFullPath(lang, filePath),
            COMMENT_TRANSLATIONS,
            lang
          ));
  
      addMetaToChallenge(challenge, meta);
  
      return challenge;
    }
    return createChallenge;
  }


  async function buildChallenges({ path: filePath }, curriculum, lang) {
    // path is relative to getChallengesDirForLang(lang)
    const block = getBlockNameFromPath(filePath);
    const superBlockDir = getBaseDir(filePath);
    const superBlock = getSuperBlockFromDir(superBlockDir);
    let challengeBlock;



    try {
      _block = curriculum[superBlock].blocks[block];
      if (!_block) {
        curriculum[superBlock].blocks[block] = { challenges: []}
      }
      challengeBlock = curriculum[superBlock].blocks[block];
      if (!challengeBlock) {
        // this should only happen when a isUpcomingChange block is skipped
        // TODO: hacked this together
        return;
      }
    } catch (e) {
      console.log(`failed to create superBlock from ${superBlockDir}`);
      // eslint-disable-next-line no-process-exit
      process.exit(1);
    }
    const { meta } = challengeBlock;
    const isCert = path.extname(filePath) === '.yml';
    // TODO: there's probably a better way, but this makes sure we don't build any
    // of the new curriculum when we don't want it.
    // if (
    //   !showUpcomingChanges &&
    //   meta?.superBlock === '2022/javascript-algorithms-and-data-structures'
    // ) {
    //   return;
    // }
    const createChallenge = generateDepartmentCreator(DEPARTMENTS_DIR, lang);
    const challenge = isCert
      ? await createCertification(CHALLENGES_DIR, filePath, lang)
      : await createChallenge(filePath, meta);
  
    challengeBlock.challenges = [...challengeBlock.challenges, challenge];
  }

function getBlockNameFromPath(filePath) {
    const [, block] = filePath.split(path.sep);
    return block;
  }

exports.getDepartmentsDirForLang = getDepartmentsDirForLang;
exports.generateDepartmentCreator = generateDepartmentCreator;
exports.hasEnglishSource = hasEnglishSource;