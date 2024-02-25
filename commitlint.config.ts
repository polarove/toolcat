// This config is referenced from element-plus
// reference: https://github.com/element-plus/element-plus/blob/dev/commitlint.config.ts

import { execSync } from 'child_process'
import fg from 'fast-glob'

const getPackages = (packagePath: string) =>
  fg.sync('*', { cwd: packagePath, onlyDirectories: true })

const scopes = [
  ...getPackages('packages'),
  'project',
  'style',
  'styles',
  'page',
  'pages',
  'component',
  'components',
  'translation',
  'translations',
  'comment',
  'comments',
  'ci',
  'dev',
  'deploy',
  'doc',
  'other'
]

const gitStatus = execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')

const scopeComplete = gitStatus
  .find((r) => ~r.indexOf('M  packages'))
  ?.replace(/\//g, '%%')
  ?.match(/packages%%((\w|-)*)/)?.[1]

const subjectComplete = gitStatus
  .find((r) => ~r.indexOf('M  packages/gt-admin'))
  ?.replace(/\//g, '%%')
  ?.match(/packages%%gt-admin%%((\w|-)*)/)?.[1]

export default {
  rules: {
    /**
     * type[scope]: [function] description
     *      ^^^^^
     */
    'scope-enum': [2, 'always', scopes],
    /**
     * type[scope]: [function] description
     *
     * ^^^^^^^^^^^^^^ empty line.
     * - Something here
     */
    'body-leading-blank': [1, 'always'],
    /**
     * type[scope]: [function] description
     *
     * - something here
     *
     * ^^^^^^^^^^^^^^
     */
    'footer-leading-blank': [1, 'always'],
    /**
     * type[scope]: [function] description [No more than 72 characters]
     *      ^^^^^
     */
    'header-max-length': [2, 'always', 84],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      1,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    /**
     * type[scope]: [function] description
     * ^^^^
     */
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'release',
        'style',
        'test',
        'improvement'
      ]
    ]
  },
  prompt: {
    defaultScope: scopeComplete,
    customScopesAlign: !scopeComplete ? 'top' : 'bottom',
    defaultSubject: subjectComplete && `[${subjectComplete}] `,
    allowCustomIssuePrefixs: false,
    allowEmptyIssuePrefixs: false
  }
}
