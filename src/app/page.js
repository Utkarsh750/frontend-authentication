import Navbar from "@/components/Navbar"

const Home = () => {
  return (
    <>
      <Navbar />
      <h2 className="text-3xl font-bold text-center p-5">Welcome to Passport JS + JWT Authentication</h2>
      <h3 className="text-2xl font-bold text-center p-5">Handle Access Token and Refresh Token on server</h3>
    </>
  )
}

export default Home