import React from 'react';

export const TestChildren = ({data}) => {
    return (
        <div>
            {data.map((x) => {
                return (
                    <div className="item">
                        <p>{x.name}</p>вввв
                    </div>
                )
            })}
        </div>
    )
}

