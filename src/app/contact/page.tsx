
// 'app/about/page.tsx' is the UI for the '/about' route.

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'About page',
} 

export default function Page() {
    return (
       <div className="container">
            <h1 className="text-3xl font-bold text-center">Contact</h1>
            <p className="text-center">This is the contact page.</p>
       </div> 
    ); 
}
