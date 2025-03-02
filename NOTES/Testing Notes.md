npm install ajv
npm install --save-dev enzyme jest-enzyme enzyme-adapter-react-16
npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event react-test-renderer

1. How are Test files identified?
(a)Ya to __tests__ folder k andar JS files bnao . *(tests not test)
(b) *.spec.js file bnao ya *.test.js

1. Khaili, it() block likhne se bhi test pass ho jata h

1. Webpack created
i can directly run
jest
jest --watch

1. Global Tear down and setup
BeforeAll
BeforeEach:
AfterEach
AfterAll

1. You can run the test file individualy 
npm run testFileName

1. How to Skip Test in Jest?
it.only("testdescrip",()=>{});

1. Why Testing?
(a) Verify output has not regreseed.
(b) Ensure that rarely occuring corner case.
(c) if Component generates side effects, verify they occur but do not execute them.
(d) Verify user interactions are hanlded as expected.



