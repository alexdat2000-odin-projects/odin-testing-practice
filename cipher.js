export function caesarCipher(str, shift) {
    let ans = "";
    for (let c of str) {
        if (c.match(/[a-z]/)) {
            let ord = c.charCodeAt(0) - 'a'.charCodeAt(0);
            ord = (ord + shift) % 26;
            ans += String.fromCharCode(ord + 'a'.charCodeAt(0));
        } else if (c.match(/[A-Z]/)) {
            let ord = c.charCodeAt(0) - 'A'.charCodeAt(0);
            ord = (ord + shift) % 26;
            ans += String.fromCharCode(ord + 'A'.charCodeAt(0));
        } else {
            ans += c;
        }
    }
    return ans;
}
