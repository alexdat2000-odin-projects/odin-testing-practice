function capitalize(str) {
    if (str.length > 0 && str[0].match(/[a-z]/)) {
        return String.fromCharCode(str.charCodeAt(0) - 32) + str.slice(1, str.length);
    } else {
        return str;
    }
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

export {capitalize, reverseString};
