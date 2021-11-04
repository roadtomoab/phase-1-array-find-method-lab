
// function superbowlWin(array) {
//     for (let item of array) {
//         if (item.result === "W") {
//             return item.year
//         }
//     }
// }

function superbowlWin(array) {
    if (array.result === "W") {
        return array.year;
    }
}

let findWin = record.find(superbowlWin);
findWin;