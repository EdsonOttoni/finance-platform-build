import Header from '@/components/header'

type Props = {
  children: React.ReactNode
}

export default function DashboardLayout({children}: Props) {
  return (
    <>
      <div>
        <Header />
        {children}
      </div>
    </>
  )
}
