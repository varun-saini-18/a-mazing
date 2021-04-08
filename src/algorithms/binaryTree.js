var row_arr = [0, 2];
var col_arr = [2, 0];

function is_row_valid(row) {
    if (row < 21 && row >= 0) return true;
    else return false;
}

function is_col_valid(col) {
    if (col < 57 && col >= 0) return true;
    else return false;
}

var ans = [];

export function binaryTree() {
    for (var i = 0; i < 21; i = i + 2) {
        for (var j = 0; j < 57; j = j + 2) {
            var arr = [];
            for (var k = 0; k < 2; k++) {
                if (is_row_valid(i + row_arr[k]) && is_col_valid(j + col_arr[k])) {
                    arr.push([i + row_arr[k], j + col_arr[k]]);
                }
            }
            if (arr.length > 0) {
                var chosen_way = arr[Math.floor(Math.random() * arr.length)];
                console.log(chosen_way);
                if (chosen_way[0] > i) {
                    ans.push([chosen_way[0] - 1, j]);
                }
                else {
                    ans.push([i, chosen_way[1] - 1]);
                }
            }
        }
    }
    console.log(ans);
    return ans;
}
