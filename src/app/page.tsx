
// 'app/page.tsx' is the UI for the '/' route.
import Link from 'next/link'

async function getData() {
    const res = await fetch('https://random-data-api.com/api/v2/appliances')
    // The return value is *NOT* serialized
    // You can return Date, Map, Set, etc.
    return res.json()
}

export default async function Page() {
    const name = await getData()
    console.table(name)

    return <Link href='/dashboard'>Dashboard</Link>

    // return <Link href='/dashboard'>Dashboard</Link>
}