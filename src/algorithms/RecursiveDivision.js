var ans = [];
var array = [];
var arr_index = 0;

function shuffle() {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}


export function generate_arr() {
    for (var i = 0; i < 600; i++)
        array.push(0);
    for (var i = 0; i < 600; i++)
        array.push(1);
    shuffle();
}

var x = 0;
export function recursiveDivision(row_begin, row_end, col_begin, col_end) {
    if (row_end <= row_begin || col_end <= col_begin) return;
    x = x ^ 1;
    // x = array[arr_index];
    arr_index++;
    if (x === 0) {
        var num = (row_end - row_begin) / 2;
        var row_index = row_begin + Math.floor(Math.random() * num) * 2 + 1;
        var num2 = (col_end - col_begin) / 2 + 1;
        var col_index = col_begin + Math.floor(Math.random() * num2) * 2;
        for (var i = col_begin; i <= col_end; i++) {
            if (i !== col_index)
                ans.push([row_index, i]);
        }
        console.log(row_index, col_index);
        recursiveDivision(row_begin, row_index - 1, col_begin, col_end);
        recursiveDivision(row_index + 1, row_end, col_begin, col_end);
    }
    else {
        var num = (col_end - col_begin) / 2;
        var col_index = col_begin + Math.floor(Math.random() * num) * 2 + 1;
        var num2 = (row_end - row_begin) / 2 + 1;
        var row_index = row_begin + Math.floor(Math.random() * num2) * 2;
        console.log(col_index, row_index)
        for (var i = row_begin; i <= row_end; i++) {
            if (i !== row_index)
                ans.push([i, col_index]);
        }
        recursiveDivision(row_begin, row_end, col_begin, col_index - 1);
        recursiveDivision(row_begin, row_end, col_index + 1, col_end);
    }
    return ans;
}
