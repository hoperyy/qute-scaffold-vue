
/**
 * @file qute scaffold entry file
 */

require('qute-scaffold-helper')(process)(({ userDir, srcDir, distDir, taskName, port }) => {
    require('colors');

    if (/^h5\-/.test(taskName)) {
        if (/dev/.test(taskName)) {
            require('./handler/webpack-config-h5/webpack.dev')({ userDir, srcDir, distDir, taskName, port });
        }

        if (/build/.test(taskName)) {
            require('./handler/webpack-config-h5/webpack.prod')({ userDir, srcDir, distDir, taskName });
        }
    }

    if (/^xcx\-/.test(taskName)) {
        if (/dev/.test(taskName)) {
            require('./handler/webpack-config-xcx/webpack.config')({ userDir, srcDir, distDir, taskName, watch: true });
        }

        if (/build/.test(taskName)) {
            require('./handler/webpack-config-xcx/webpack.config')({ userDir, srcDir, distDir, taskName, watch: false });
        }
    }

    if (/^blog\-/.test(taskName)) {
        if (/dev/.test(taskName)) {
            require('./handler/webpack-config-blog/webpack.dev')({ userDir, srcDir, distDir, taskName, port });
        }

        if (/build/.test(taskName)) {
            require('./handler/webpack-config-blog/webpack.prod')({ userDir, srcDir, distDir, taskName });
        }
    }
});
