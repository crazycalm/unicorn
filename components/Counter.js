'use client';
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Simple Counter</h2>
                <p className="text-4xl font-bold">{count}</p>
                <div className="card-actions justify-end gap-2">
                    <button 
                        onClick={() => setCount(count - 1)}
                        className="btn btn-error"
                    >
                        -
                    </button>
                    <button 
                        onClick={() => setCount(count + 1)}
                        className="btn btn-success"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
