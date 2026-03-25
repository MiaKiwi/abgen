export default class BaseAbbreviator {
    /**
     * Creates a new abbreviator
     * @param {object} settings Settings for the abbreviator
     */
    constructor(settings) {
        this.settings = { ...this.constructor.defaultSettings, ...(settings || {}) };
    }



    static get displayName() { return this.name; }



    static get defaultSettings() { return {}; }



    /**
     * Abbreviates a single word/token
     * @param {string} word Word to be abbreviated
     */
    abbreviate(word) {
        throw new Error('Method "abbreviate()" must be implemented.');
    }
}