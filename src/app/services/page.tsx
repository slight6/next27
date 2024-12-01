
// 'app/services/page.tsx' is the UI for the '/services' route.

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Services page',
} 

export default function Page() {
    return (
        <div className="container">
            <h1 className="text-3xl font-bold text-center">Services</h1>
            <p className="text-center">This is the services page.</p>
        </div>
    ); 
}
