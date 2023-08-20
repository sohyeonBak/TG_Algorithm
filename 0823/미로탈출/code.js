function solution(maps) {
    let queue = [];
    let places = [];
    let visit = Array.from({length:101}, () => Array.from({length:101}, () => false));
    let visit2 = Array.from({length:101}, () => Array.from({length:101}, () => 0));
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    const row_leng = maps.length;
    const col_leng = maps[0].length;
    let end_x = 0;    
    let end_y = 0;
    
    for(var i = 0;i<row_leng;i++){
        for(var j = 0;j<col_leng;j++){
            if(maps[i][j] != 'O' && maps[i][j] !='X'){
                places.push([i,j,maps[i][j]]);
            }
        }
    }
    
    for(var idx = 0;idx<3;idx++){
        if(places[idx][2]=='S'){
            var x = places[idx][0];
            var y = places[idx][1];
            queue.push([x,y]);
            visit[x][y] = true;
            visit2[x][y] = 0;
            break;
        }
    }
    
    while(queue.length){
        var [x, y] = queue.shift();
        
        for (var idx = 0;idx<4;idx++){
            var nx = x + dx[idx];
            var ny = y + dy[idx];
            if(ny<0 || nx<0 || nx>=row_leng || ny>= col_leng) {
                continue;
            }
            if(visit[nx][ny]==false && maps[nx][ny]!='X'){
                visit[nx][ny] = true;
                visit2[nx][ny] = visit2[x][y] + 1;
                queue.push([nx,ny]);
            }
        }
    }
    
    for(let idx = 0; idx<3; idx++){
        if(places[idx][2]=='L'){
            var dist = visit2[places[idx][0]][places[idx][1]];
            var lever_row = places[idx][0];
            var lever_col = places[idx][1];
            
            if(!visit[lever_row][lever_col]){
                return -1;
            }

            for(var i = 0;i<101;i++){
                for(var j = 0;j<101;j++){
                    visit[i][j] = false;
                    visit2[i][j] = 0;
                }
            }

            visit[lever_row][lever_col] = true;
            visit2[lever_row][lever_col] = dist;

            queue.push([lever_row, lever_col]);
            
            while(queue.length){
                let [x, y] = queue.shift();
                
                for(var i = 0;i<4;i++){
                    let nx = x + dx[i];
                    let ny = y + dy[i];

                    if(ny < 0 || nx < 0 || nx >= row_leng || ny >= col_leng) {
                        continue;
                    }
                    
                    if(visit[nx][ny]==false && maps[nx][ny]!='X'){
                        visit[nx][ny] = true;
                        visit2[nx][ny] = visit2[x][y] + 1;
                        queue.push([nx,ny])
                    }
                }
            }
            break;
        }
    }
    

    for(let idx = 0; idx<3;idx++){
        if(places[idx][2]=='E'){
            end_x = places[idx][0];
            end_y = places[idx][1];
            break;
        }
    }
    
    return visit[end_x][end_y] ? visit2[end_x][end_y] : -1
   
}