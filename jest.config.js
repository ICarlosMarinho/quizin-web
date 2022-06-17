module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['node_modules/(?!(@(mui|babel)))'],
  testEnvironment: 'jsdom',
  transform: {
    "^.+\.tsx?$": "ts-jest",
    "^.+\.js$": "babel-jest",
    ".+\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "jest-transform-stub"
  },
}