
export default function GamesLayout({ children, }: { children: React.ReactNode }) {
    return (
        <section>
            {/* Include shared UI here, a header or sidebar maybe */}
            <nav></nav>

            {children}

        </section>
    )
}
