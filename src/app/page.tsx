
// 'app/page.tsx' is the UI for the '/' route.
// import Link from 'next/link'
import Footer from './components/Footer'

async function getData() {
    const res = await fetch('https://random-data-api.com/api/v2/appliances')
    // The return value is *NOT* serialized
    // You can return Date, Map, Set, etc.
    return res.json()
}

export default async function Page() {
    const name = await getData()
    console.table(name)

    /*
    return <Link href='/dashboard'>Dashboard</Link>
    */
    
    return <div className="container">
        <h1 className="text-3xl font-bold text-center">Home</h1>
        <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Adipisci dolorum, provident tempora qui nobis sunt repellat eius distinctio, aut, iste officia dolores et ea similique? 
            Id maiores optio nam maxime!
        </p>
        
        <Footer />
    </div>




    // return <Link href='/dashboard'>Dashboard</Link>
}