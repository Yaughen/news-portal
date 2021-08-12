export default makeRounding
function makeRounding(num: number) {
    if (num >= 1000000) {
        return helpRounding(num / 1000000) + ' млн'
    }
    if (num >= 1000) {
        return helpRounding(num / 1000) + ' тыс'
    }
    return helpRounding(num)
}

function helpRounding(num: number) {
    return new Intl.NumberFormat().format(Math.round(num * 10) / 10)
}