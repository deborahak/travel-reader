exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://localhost:27017/booksearch-app';
exports.TEST_DATABASE_URL = (process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-booksearch-app');
exports.PORT = process.env.PORT || 3001;