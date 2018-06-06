module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dev: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },
    concat: {
      options: {
        stripBanners: true,
        options: {
          block: true,
          line: true
        }
      },
      js: {
        src: ['build/js/slick.min.js', 'build/js/appeared.js', 'build/js/isotope.pkgd.min.js', 'build/js/app/main.js'],
        dest: 'js/main.js'
      }
    },
    postcss: {
        options: {
            map: true,
            processors: [
                require('autoprefixer')({ browsers: ['last 8 versions', 'ie 9'] })
            ]
        },
        dist: {
            src: 'css/style.css'
        }
    },
    uglify: {
      options: {
        preserveComments: false
      },
      build: {
        src: 'js/main.js',
        dest: 'js/main.min.js'
      }
    },
    connect: {
      server: {
        options: {
          hostname: '192.168.1.2',
          port: 8000,
          base: '.',
          livereload: true
        }
      }
    },
    watch: {
      dev: {
        files: ['sass/*.scss','sass/css/*.css'],
        tasks: ['compass', 'postcss'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['*.shtml'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['build/**/*.js'],
        tasks: ['concat','uglify'],
        options: {
          livereload: true,
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['compass','concat','postcss','uglify','connect','watch']);
};