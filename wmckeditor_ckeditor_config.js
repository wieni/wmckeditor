/**
 * @file wmckedtior_ckeditor_config.js
 *
 * Custom configuration for CKEditor.
 */

/**
 * Set up custom configurations for the CKEditor editor.
 */
CKEDITOR.editorConfig = function(config) {
    // Remove tags bag
    config.removePlugins = 'elementspath';
};
