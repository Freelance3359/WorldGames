export default function chunk(array, chunkSize) {
    // [1, 2, 3, 4, 5, 6, 7] -> (2)[[1, 2], [3, 4], [5, 6], [7]]
    const temp = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunkEl = array.slice(i, i + chunkSize);
        temp.push(chunkEl);
    }

    return temp;
}