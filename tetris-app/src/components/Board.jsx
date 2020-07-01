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