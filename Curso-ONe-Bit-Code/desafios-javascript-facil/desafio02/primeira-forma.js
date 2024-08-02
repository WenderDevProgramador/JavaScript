
function chunk(num) {
   if (num === 1) {
    return 'chunk'
   }

   if (num === 0) {
    return ''
   } else {
    return 'chunk - ' + chunk(num - 1)
   }

}

console.log(chunk(2))

