import NewToDoForm from '@/components/NewToDoForm'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>Dashboard</h1>
      <NewToDoForm />
      <div>{children}</div>
    </>
  )
}
