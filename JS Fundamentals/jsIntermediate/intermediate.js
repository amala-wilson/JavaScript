/* JavaScript Intermediate */

/* Part 1 */
function star_string(num){
    starStr = "";

    for(var i=0;i<num;i++){
        starStr += "*";
    }

    return starStr;
}

let stars = star_string(8);
console.log(stars);

/* Part 2+3 */
function draw_stars(someArr){
    starStr = "";

    for(var i=0;i<someArr.length;i++){
        if (typeof(someArr[i]) == "string"){
            wordLen = someArr[i].length;
            while (wordLen != 0){
                starStr += (someArr[i][0]).toLowerCase();
                wordLen--;
            }
            console.log(starStr);
            starStr = "";
        }
        else{
            starTimes = someArr[i];
            while(starTimes != 0){
                starStr += "*";
                starTimes--;
            }
            console.log(starStr);
            starStr = "";
        }
    }

    return;
}

let x = draw_stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);