import React from 'react';
import './CircleCompleteLoader.css'
interface Props {
    active: boolean;
    content?: string;
}

export default function CircleCompleteLoader({ active = true, content = 'Loading...' }: Props) {
    return (
        <div className={`circle-complete ${active ? 'active' : ''}`}>
            <div className='loader-wrap'>
                <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle className="circle-chart__background" stroke="#efefef" strokeWidth="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                    <circle className="circle-chart__circle" stroke="#182662" strokeWidth="2" strokeDasharray="100, 100" strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                    <g className="circle-chart__info">
                        <text className="circle-chart__subline" x="17.5" y="17.5" alignmentBaseline="central" textAnchor="middle" fontSize="3">{content}</text>
                    </g>
                </svg>
            </div>
        </div>
    )
}