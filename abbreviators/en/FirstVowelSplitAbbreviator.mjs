import EnglishGrammar from "../../grammar/EnglishGrammar.mjs";
import BaseEnglishAbbreviator from "./BaseEnglishAbbreviator.mjs";



export default class FirstVowelSplitAbbreviator extends BaseEnglishAbbreviator {
    static get displayName() { return "Split at First Vowel"; }



    static get defaultSettings() {
        return {
            ...super.defaultSettings,
            preserveVowel: true
        };
    }



    abbreviate(word) {
        word = this.sanitize(word);

        if (!word) return null;

        // Get index of first vowel
        let vowelIndex = EnglishGrammar.vowelsRegex.exec(word)?.index

        let output = word;
        if (vowelIndex >= 0 && vowelIndex < word.length) {
            output = word.slice(0, vowelIndex + (this.settings.preserveVowel ? 1 : 0));
        }

        return output === word ? null : output;
    }
}