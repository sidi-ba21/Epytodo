const correctDate = module.exports.correctDate = function (date) {
    var newDate = date.replace(/T/g, ' ')
    newDate = newDate.replace(/"/g, '')
    return (newDate.replace('.000Z', ''))
}