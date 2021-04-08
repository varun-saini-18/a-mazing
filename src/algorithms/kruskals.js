function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

var subsets = [];

function find(i) {
    if (subsets[i][0] !== i)
        subsets[i][0] = find(subsets[i][0]);

    return subsets[i][0];
}


function func(row, col, columns) {
    var x;
    x = Math.floor(row / 2) * (columns + 1) / 2 + (col / 2 + 1) - 1;
    return x;
}

function union(r1, c1, r2, c2, columns) {
    var xroot = find(func(r1, c1, columns));
    var yroot = find(func(r2, c2, columns));
    if (subsets[xroot][1] < subsets[yroot][1])
        subsets[xroot][0] = yroot;
    else if (subsets[xroot][1] > subsets[yroot][1])
        subsets[yroot][0] = xroot;
    else {
        subsets[yroot][0] = xroot;
        subsets[xroot][1]++;
    }
}

export function kruskals(rows, columns) {
    var walls_list = [];
    var ans = [];
    var count = 0;
    for (var i = 0; i < rows; i++) {
        for (var j = 0 + !(i % 2); j < columns; j = j + 1 + !(i % 2)) {
            count++;
            walls_list.push([i, j]);
        }
    }
    var random_list = shuffle(walls_list);

    // var random_list = walls_list;
    var left = rows * columns - count;

    for (var i = 0; i < left; i++) {
        subsets.push([i, 0]);
    }
    for (var i = 0; i < random_list.length; i++) {
        if (!(random_list[i][0] % 2 && random_list[i][1] % 2)) {
            if (random_list[i][1] % 2 === 0) {
                var r = random_list[i][0];
                var c = random_list[i][1];
                if (find(func(r - 1, c, columns)) !== find(func(r + 1, c, columns))) {
                    union(r - 1, c, r + 1, c, columns);
                    ans.push(random_list[i]);
                }
            }
            else {
                var r = random_list[i][0];
                var c = random_list[i][1];
                if (find(func(r, c - 1, columns)) !== find(func(r, c + 1, columns))) {
                    union(r, c - 1, r, c + 1, columns);
                    ans.push(random_list[i]);
                }
            }
        }
    }
    console.log(ans, random_list)
    return [ans, random_list];
}
