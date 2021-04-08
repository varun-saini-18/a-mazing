// Performs Dijkstra's algorithm; returns *all* nodes in the order
// in which they were visited. Also makes nodes point back to their
// previous node, effectively allowing us to compute the shortest path
// by backtracking from the finish node.

class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
  
    // Functions to be implemented 
    // push(item) 
    push(element) 
    { 
        // push element into the items 
        this.items.push(element); 
    }
    // pop() 
    pop() 
    { 
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    } 
    // peek() 
    peek() 
    { 
        // return the top most element from the stack 
        // but does'nt delete it. 
        return this.items[this.items.length - 1]; 
    }
    // isEmpty() 
    isEmpty() 
    { 
        // return true if stack is empty 
        return this.items.length == 0; 
    } 
    // printStack() 
} 

var row_arr = [0,0,2,-2];
var col_arr = [2,-2,0,0];

function is_row_valid(row)
{
    if(row<14&&row>=0) return true;
    else return false;
}

function is_col_valid(col)
{
    if(col<40&&col>=0) return true;
    else return false;
}

export function getMaze(grid) {
    var visited = new Array(15); 
    for (var i = 0; i < visited.length; i++) { 
        visited[i] = new Array(40); 
    }
    for (i = 0; i < 15; i++) { 
        for (var j = 0; j < 40; j++) { 
            visited[i][j] = false; 
        } 
    }
    var stack = new Stack;
    stack.push(grid[0][0]);
    visited[0][0] = true;
    while(!stack.isEmpty()){
        var x = stack.peek();
        var arr = [];
        for(i=0;i<4;i++)
        {            
            if(is_row_valid(x.row+row_arr[i])&&is_col_valid(x.col+col_arr[i]))
            {
                var r = x.row+row_arr[i];
                var c = x.col+col_arr[i];
                if(!visited[r][c])
                {                   
                    arr.push(grid[r][c]);
                }
            }
        }
        if(arr.length===0)
        {
            stack.pop();
            continue;
        }
        var selected_index = Math.random() * arr.length;    
        selected_index = Math.floor(selected_index);
        var box = arr[selected_index];
        visited[box.row][box.col] = true;
        stack.push(grid[box.row][box.col]);
        if(x.row===box.row)
        {
            if(x.col<box.col)
            {
                visited[x.row][box.col-1] = true;
            }
            else
            {
                visited[x.row][box.col+1] = true;
            }
        }
        else
        {
            if(x.row<box.row)
            {
                visited[x.row+1][box.col] = true;
            }
            else
            {
                visited[x.row-1][box.col] = true;
            }
        }
    }
    var not_visited = [];
    var count = 0;
    for (i = 0; i < 15; i++) { 
        for (var j = 0; j < 40; j++) { 
            if(!visited[i][j])
            {
                count++;
                not_visited.push(grid[i][j]); 
            }
        } 
    }
    console.log(count);
    return not_visited;
}
