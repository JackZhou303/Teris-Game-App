import React, { useState, useEffect }  from 'react';

function Board(props) {

    let [board, setBoard]=useState([
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
        ]);

    function onKeyPressed(e) {
            e.preventDefault();
            console.log(e.key);
    }

    return (
        <div className="game-board" onKeyDown={(e) => onKeyPressed(e)} tabIndex={-1}>
            { board.map((v, i)=>{
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