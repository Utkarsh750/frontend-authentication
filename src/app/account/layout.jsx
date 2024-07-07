import Navbar from '@/components/Navbar'
const AccountLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default AccountLayout