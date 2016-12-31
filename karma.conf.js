// Karma configuration
// Generated on Sun Dec 11 2016 14:50:52 GMT-0500 (EST)

module.exports = function(config) {
  var appBase    = 'app/';      // transpiled app JS and map files
  var appSrcBase = 'app/';      // app source TS files

  var appAssets  = 'base/app/'; // component assets fetched by Angular's compiler

  // Testing helpers (optional) are conventionally in a folder called `testing`
  var testingBase    = 'testing/'; // transpiled test JS and map files
  var testingSrcBase = 'testing/'; // test source TS files

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

client:{
    builtPaths:[appBase,testingBase],
    clearContext:false
},
      customLaunchers: {
          // From the CLI. Not used here but interesting
          // chrome setup for travis CI using chromium
          Chrome_travis_ci: {
              base: 'Chrome',
              flags: ['--no-sandbox']
          }
      },
    // list of files / patterns to load in the browser
    files: [

'/app/*.js' ,
// System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Paths loaded via module imports:
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

      { pattern: 'systemjs.config.js', included: false, watched: false },
      { pattern: 'systemjs.config.extras.js', included: false, watched: false },
      'karma-test-shim.js', // optionally extend SystemJS mapping e.g., with barrelsem.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',
      'node_modules/reflect-metadata/Reflect.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs
      { pattern: 'node_modules/rxjs/**/*.d.ts', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

      { pattern: 'systemjs.config.js', included: false, watched: false },
      { pattern: 'systemjs.config.extras.js', included: false, watched: false },
      'karma-test-shim.js',

// transpiled application & spec code paths loaded via module imports
         { pattern: appBase + '**/*.js', included: false, watched: true },
        { pattern: testingBase + '**/*.js', included: false, watched: true },


        // Asset (HTML & CSS) paths loaded via Angular's component compiler
        // (these paths need to be rewritten, see proxies section)
         { pattern: appBase + '**/*.html', included: false, watched: true },
         { pattern: appBase + '**/*.css', included: false, watched: true },

        // Paths for debugging with source maps in dev tools
         { pattern: appSrcBase + '**/*.ts', included: false, watched: false },
         { pattern: appBase + '**/*.js.map', included: false, watched: false },
        { pattern: testingSrcBase + '**/*.ts', included: false, watched: false },
        { pattern: testingBase + '**/*.js.map', included: false, watched: false}


      ],

proxies :{
    "/app/":appAssets
},
    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

    },

    plugins : [

        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter')
    ],
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','kjhtml'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    noResolve: false,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
