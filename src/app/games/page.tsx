
// 'app/games/page.tsx' is the UI for the '/games' route.

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Games',
    description: 'Games page',
} 

export default function Page() {
    return (
        <div>
            <h1>Games</h1>
            <p>This is the games page.</p>
        </div>
    ); 
}
