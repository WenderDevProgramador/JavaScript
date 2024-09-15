function chunks(n) {
    if (n === 0) {
        return ''
    }

    if (n === 1) {
        return 'chunks'
    } else {
        return 'chunks-' + chunks(n - 1)
    }
}

console.log(chunks(8))