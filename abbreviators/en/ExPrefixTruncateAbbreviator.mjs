import BaseEnglishAbbreviator from "./BaseEnglishAbbreviator.mjs";



export default class ExPrefixTruncateAbbreviator extends BaseEnglishAbbreviator {
    static get displayName() { return "Xtreme SWAG"; }



    abbreviate(word) {
        word = this.sanitize(word);

        let output = word;

        if (word?.startsWith('ex') || word?.startsWith('x')) output = 'x';

        return output === word ? null : output;
    }
}