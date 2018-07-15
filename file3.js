const FOO_BAR_SECRET_LOOKS_LIKE_KEY_ID = 'zJd-55qmsY6LD53CRTqnCr_g-';

module.exports = {
  getSecret: () => 'yolo',
  secrets: {
    KEY_IDENTIFIER: 'yolo',
    'yolo': 'yolo',
    foobar: FOO_BAR_SECRET_LOOKS_LIKE_KEY_ID,
    test: 'hello-world'
  }
};
