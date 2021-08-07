module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-standard',
    'stylelint-config-recess-order', // プロパティ記述順序ルール
  ],
  rules: {
    'at-rule-no-unknown': null, // @から始まる記述への警告
    "scss/at-rule-no-unknown": [ // @から始まる記述への警告（SCSS）
      true, {
        ignoreAtRules: ['use', 'forward'] // @use, @forward構文の使用を許可
      }
    ],
    'no-duplicate-selectors': null,   // 重複したセレクタの検出
    'declaration-colon-space-after': 'always',
  }
}
// https://trs.mn/blog/2020/04/23/vscode-eslint-stylelint/