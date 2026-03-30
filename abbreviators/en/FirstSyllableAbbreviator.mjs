import EnglishGrammar from "../../grammar/EnglishGrammar.mjs";
import BaseEnglishAbbreviator from "./BaseEnglishAbbreviator.mjs";



export default class FirstSyllableAbbreviator extends BaseEnglishAbbreviator {
    static get displayName() { return "First Syllable"; }



    abbreviate(word) {
        word = this.sanitize(word);

        if (!word) return null;

        let syllables = EnglishGrammar.syllabify(word) || [];

        let output = syllables.length > 0 ? syllables[0] : null;

        // If first letter of next syllable is not a vowel and not the same letter as the last letter of the first syllable, keep it
        if (syllables.length > 1 && !EnglishGrammar.vowels.includes(syllables[1][0]) && output[output.length - 1] !== syllables[1][0]) {
            output += syllables[1][0];
        }

        return output;
    }
}