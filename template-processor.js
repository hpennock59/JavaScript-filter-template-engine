'use strict';

/**
 * Creates a TemplateProcessor object that stores a template string.
 *
 * @constructor
 * @param {string} template - The template string containing placeholders
 *                            in the form {{property}}.
 */
function TemplateProcessor(template) {
  this.template = template;
}

/**
 * Fills in the template with values from a dictionary object.
 *
 * Each occurrence of {{property}} in the template will be replaced
 * with the corresponding value from the dictionary. If the property
 * does not exist in the dictionary, it is replaced with an empty string.
 *
 * @param {Object} dictionary - An object containing key-value pairs
 *                              used to replace placeholders in the template.
 * @returns {string} A new string with all placeholders replaced.
 */
TemplateProcessor.prototype.fillIn = function(dictionary) {
  return this.template.replace(/{{(.*?)}}/g, function (_, key) {
    const trimmedKey = key.trim();
    return Object.hasOwn(dictionary, trimmedKey) ? dictionary[trimmedKey] : "";
  });
};