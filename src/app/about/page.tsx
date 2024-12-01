
// 'app/about/page.tsx' is the UI for the '/about' route.

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'About page',
} 

export default function Page() {
    return (
        <div className="container">
            <h1 className="text-3xl font-bold text-center">About</h1>
            <p className="text-center">
                sit amet consectetur adipisicing elit. 
                Quasi, distinctio, ratione fugiat nesciunt ipsum suscipit voluptatem harum, nam quo fuga dolorem facere sit pariatur in corrupti aliquam. 
                Pariatur nostrum sint vero voluptatibus repellendus quia incidunt inventore at rem laudantium, amet quas doloremque ad, cum ullam. 
                Molestiae nam quis fuga. 
                Quos dolorum voluptatibus totam optio ut quam iure culpa eligendi officiis.
            </p>
        </div>
        
    ); 
}
