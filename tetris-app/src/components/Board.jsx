import React from 'react';

function Board(props) {

    //this will be a state
    let world = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ];

    let board=[]
    function drawWorld() {
        world.map((v, i)=>{
            for(var x=0; x<v.length; x++) {
                if(world[i][x]=== 0){
                    board.push(<div className='empty'></div>)
                }
            }
        });
    }
    
    drawWorld();

    return (
        <div id="world">
            { world.map((v, i)=>{
                return(
                <div className="row">    
                {v.map((b)=>{
                    console.log(b)
                    if(b===0){
                        return (
                            <div className='empty'></div>
                        )
                    }
                    else if(b===1){
                        return (
                            <div className='occupy'></div>
                        )
                    }
                })}
                </div>
                )
            })
            }
        </div>
    );
}

export default Board;