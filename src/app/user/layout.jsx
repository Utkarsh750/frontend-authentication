import UserSidebar from "@/components/UserSidebar"
const UserLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 h-screen">
        <UserSidebar />
      </div>

      <div className="col-span-10 bg-gray-100 h-screen">
        {children}
      </div>
    </div>
  )
}

export default UserLayout