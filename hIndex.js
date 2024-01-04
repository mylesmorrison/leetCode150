/**
 * @param {number[]} citations
 * @return {number}
 */

//first solution for h index but I don't think gets the maximum
var hIndex = function(citations) {
    citations.sort((a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0; 
    });
    citations.reverse();
    console.log(citations);
    for (let i = 0; i < citations.length; i++) {
        console.log("paper" + i + ": " + "-".repeat(citations[i]));
    }
    let h = 0;
    while (h < citations.length && citations[h] >= h+1) {
        h++;
    }
    return h;
};

citations = [1,1,3,6,7,10,7,1,8,5,9,1,4,4,3];
console.log(hIndex(citations));