import EnglishGrammar from "../../grammar/EnglishGrammar.mjs";
import BaseEnglishAbbreviator from "./BaseEnglishAbbreviator.mjs";



export default class VowelRemovalAbbreviator extends BaseEnglishAbbreviator {
    static get displayName() { return "Without Vowels"; }



    abbreviate(word) {
        word = this.sanitize(word);

        return word ? word.replace(EnglishGrammar.vowelsRegex, "") : null;
    }
}