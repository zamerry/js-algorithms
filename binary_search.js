// https://neetcode.io/problems/binary-search/question?list=neetcode150

const array = [1, 2, 3, 4, 5, 6]

const binary_search = (n, t) => {

    const left = 0
    const right = n.length - 1

    let mid = Math.floor((left + right) / 2)

    while (left <= right) {
        if (n[mid] === t) {
            return n[mid]
        } else if (mid > t) {
            mid = mid - 1
        } else {
            mid = mid + 1
        }
    }
    return -1
}

console.log(binary_search(array, 5))