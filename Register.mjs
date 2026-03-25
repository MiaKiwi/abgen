import BaseAbbreviator from "./abbreviators/BaseAbbreviator.mjs";



export default class Register {
    /**
     * Creates a new abbreviator register
     */
    constructor() {
        this._abbreviators = [];
    }



    /**
     * Returns registered abbreviators
     * @returns {BaseAbbreviator[]}
     */
    get abbreviators() { return this._abbreviators; }



    /**
     * Register an abbreviator
     * @param {BaseAbbreviator} abbreviator Abbreviator to be registered
     */
    register(abbreviator) { this._abbreviators.push(abbreviator); }

    /**
     * Unregisters an abbreviator
     * @param {BaseAbbreviator} abbreviator Abbreviator to be unregistered
     */
    unregister(abbreviator) {
        this._abbreviators = this._abbreviators.map(abbr => abbr !== abbreviator);
    }
}