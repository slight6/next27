
export default function DashboardLayout({
    children, // can be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here, a header or sidebar maybe */}
            <nav></nav>

            {children}

        </section>
    )
}
