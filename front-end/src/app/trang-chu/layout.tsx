import Header from '../../components/header'
export default function IndexLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>

      {children}
    </section>
  )
}