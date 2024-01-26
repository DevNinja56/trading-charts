
export const getfirstNElements = (array, n) => {
    let firstNElements = array;
    if (array?.length > n) {
        firstNElements = array.slice(0, n);
    }
    return firstNElements;
}

export const getlastNElements = (array, n) => {
    let lastNElems = array;
    if (array?.length > n) {
        lastNElems = array.slice(array.length - n, array.length);
    }
    return lastNElems;
}