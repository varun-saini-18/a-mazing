var row_arr = [0, 0, 2, -2];
var col_arr = [2, -2, 0, 0];

function is_row_valid(row) {
    if (row < 22 && row >= 0) return true;
    else return false;
}

function is_col_valid(col) {
    if (col < 58 && col >= 0) return true;
    else return false;
}

var visited = new Array(21);

export function func() {
    for (var i = 0; i < visited.length; i++) {
        visited[i] = new Array(57);
    }
    for (i = 0; i < 21; i++) {
        for (var j = 0; j < 57; j++) {
            visited[i][j] = false;
        }
    }
    for (var i = 0; i < 21; i++) {
        for (var j = 0 + !(i % 2); j < 57; j = j + 1 + !(i % 2)) {
            visited[i][j] = true;
        }
    }
}

var ans = [];

function hunt() {
    for (var i = 0; i < 21; i++) {
        for (var j = 0; j < 57; j++) {
            if (!visited[i][j]) {
                for (var x = 0; x < 4; x++) {
                    if (is_row_valid(i + row_arr[x]) && is_col_valid(j + col_arr[x])) {
                        var r = i + row_arr[x];
                        var c = j + col_arr[x];
                        huntAndKill(i, j, true);
                        return;
                    }
                }
            }
        }
    }
}

export function huntAndKill(row, col, flag) {
    if (flag) {
        for (var i = 0; i < 4; i++) {
            if (is_row_valid(row + row_arr[i]) && is_col_valid(col + col_arr[i])) {
                var r = row + row_arr[i];
                var c = col + col_arr[i];
                if (visited[r][c]) {
                    if (r === row) {
                        if (c < col) {
                            ans.push([row, col - 1]);
                        }
                        else {
                            ans.push([row, col + 1]);
                        }
                    }
                    else {
                        if (r < row) {
                            ans.push([row - 1, col])
                        }
                        else {
                            ans.push([row + 1, col])
                        }
                    }
                }
            }
        }
    }
    visited[row][col] = true;
    var arr = [];
    for (var i = 0; i < 4; i++) {
        if (is_row_valid(row + row_arr[i]) && is_col_valid(col + col_arr[i])) {
            var r = row + row_arr[i];
            var c = col + col_arr[i];
            if (!visited[r][c]) {
                arr.push([r, c]);
            }
        }
    }
    if (arr.length === 0) {
        hunt();
    }
    else {
        var selected_index = Math.random() * arr.length;
        selected_index = Math.floor(selected_index);
        var random_row = arr[selected_index][0];
        var random_col = arr[selected_index][1];
        if (random_row == row) {
            if (random_col < col) {
                ans.push([row, col - 1]);
            }
            else {
                ans.push([row, col + 1]);
            }
        }
        else {
            if (random_row < row) {
                ans.push([row - 1, col])
            }
            else {
                ans.push([row + 1, col])
            }
        }
        huntAndKill(random_row, random_col, false);
    }
    return ans;
}
