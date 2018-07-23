import moment from 'moment'

var daysInWeek = []

for (var i = 0; i < 7; i++) {
    var next = moment().add(i, 'days')
    daysInWeek.push(next);
}


const whatDayIsIt = (day) => {
    switch (day) {
        case 1:
        return 'pon'
        case 2:
        return 'uto'
        case 3:
        return 'sre'
        case 4:
        return 'čet'
        case 5:
        return 'pet'
        case 6:
        return 'sub'
        case 0:
        return 'ned'
        default:
        return undefined
    }
} 

export {daysInWeek, whatDayIsIt}