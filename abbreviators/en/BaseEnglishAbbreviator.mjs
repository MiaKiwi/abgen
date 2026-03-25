import BaseAbbreviator from "../BaseAbbreviator.mjs";
import EnglishGrammar from "../../grammar/EnglishGrammar.mjs"



export default class BaseEnglishAbbreviator extends BaseAbbreviator {
    static get defaultSettings() {
        return {
            ignoreArticles: true,
            ignoreConjunctivePrepositions: true,
            ignoreCoordinatingConjunctions: true,
            ignorePunctuationMarks: true
        }
    }



    /**
     * Checks if the given token/word is to be ignored
     * @param {string} word Token
     * @returns {boolean} True if to be ignore, false otherwise
     */
    isIgnoredToken(word) {
        return (
            (this.settings.ignoreArticles && EnglishGrammar.articles.includes(word)) ||
            (this.settings.ignoreConjunctivePrepositions && EnglishGrammar.conjunctivePrepositions.includes(word)) ||
            (this.settings.ignoreCoordinatingConjunctions && EnglishGrammar.coordinatingConjunctions.includes(word)) ||
            (word.replace(/\p{P}/gu, "").trim().length < 1)
        )
    }



    /**
     * Performs common sanitization actions on English tokens
     * @param {string} word Token
     * @returns {string|null} Null if no valid result, string otherwise
     */
    sanitize(word) {
        word = word.toLowerCase().trim();

        if (this.isIgnoredToken(word)) return null;

        if (this.settings.ignorePunctuationMarks) word = word.replace(/\p{P}/gu, "");

        word = word.trim();

        return (word?.length ?? 0) > 0 ? word : null;
    }
}