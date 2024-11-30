
// 'app/about/page.tsx' is the UI for the '/about' route.

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'About page',
} 

export default function Page() {
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page.</p>
        </div>
    ); 
}
