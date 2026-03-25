import BaseEnglishAbbreviator from "./BaseEnglishAbbreviator.mjs";



export default class InitialismAbbreviator extends BaseEnglishAbbreviator{
    static get displayName() { return "Initialism"; }



    abbreviate(word) {
        word = this.sanitize(word);

        return word ? word[0] : null;
    }
}