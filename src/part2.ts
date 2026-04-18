import * as R from "ramda";
import {pipe} from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels = (s: string): number =>
  pipe(
    stringToArray,
    (chars: string[]) => chars.filter(c => "aeiouAEIOU".includes(c)),
    (vowels: string[]) => vowels.length
  )(s);

/* Question 2.2 */
export const isPalindrome = (text: string): boolean => {
    const cleaned = pipe(stringToArray,(char: string[]) => char.filter(c => /[a-zA-Z0-9]/.test(c)),(letters: string[]) => letters.map(l => l.toLowerCase()))(text);

    const reversed = cleaned.reduce((acc, cur) => cur + acc, "")

    return cleaned.join("") === reversed;
}
    

  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => {
    if(t.children.length===0) return t.root;
    const childrenSentence = t.children.map(child => treeToSentence(child)).join(" ");
    return t.root + " " + childrenSentence;
}
