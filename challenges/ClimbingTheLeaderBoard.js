// function takes an array of top scores and an array of new scores
// function returns an array with all the rankings for the new scores

function climbingLeaderboard(topScoresArray, newScoresArray) {
    let newScoreRankings = [];

    for (let score of newScoresArray) {
        topScoresArray.push(score);
        topScoresArray = [...new Set(topScoresArray.sort((a, b) => b - a))]
        newScoreRankings.push(topScoresArray.indexOf(score) + 1);
    }

    return newScoreRankings
};

const topScores = [100, 100, 120, 80, 75, 70, 50]
const newScores = [40, 10, 90, 130]

console.log(climbingLeaderboard(topScores, newScores));

// function climbingLeaderboard(topScoresArray, newScoresArray) {
//     let newScoreRankings = [];

//     for (let score of newScoresArray) {
//         topScoresArray.push(score);
//         topScoresArray = topScoresArray.filter((score, index, array) => array.indexOf(score) === index).sort((a, b) => b - a);
//     }

//     return newScoreRankings
// };