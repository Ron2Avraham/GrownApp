import React from 'react';
import IGuide from 'models/IGuide';


export default function guide(guide: IGuide) {
    return (
        <div>
            <text>
                {guide.name}
            </text>
        </div>
    )
}
