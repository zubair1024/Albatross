module.exports = function (grunt) {
    grunt.initConfig({});

    /**
     * JS Minification
     */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.config('uglify', {
        sources: {
            src: [
                //lib files
                'public/javascripts/lib/jquery-1.11.2.min.js',
                'public/javascripts/lib/materialize.min.js',
                'public/javascripts/lib/materialize.min.js',
                'public/javascripts/lib/prism.js',
                'public/javascripts/lib/perfect-scrollbar.min.js',
                //component files
                'public/javascripts/components/dashboard.js',
                'public/javascripts/components/cmd.js',
                //app files
                'public/javascripts/init.js',
                'public/javascripts/router.js',
                'public/javascripts/run.js'
            ],
            dest: 'public/build/app.js'
        }
    });
    /**
     * CSS Minification
     */
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.config('cssmin', {
        sources: {
            src: [
                'public/stylesheets/materialize.min.css',
                'public/stylesheets/perfect-scrollbar.css',
                'public/stylesheets/theme.css',
                'public/stylesheets/prism.css',
                'public/stylesheets/style.css'
            ],
            dest: 'public/build/app.css'
        }
    });

    grunt.registerTask('default', ['uglify','cssmin']);
};