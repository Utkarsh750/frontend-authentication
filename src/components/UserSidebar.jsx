"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useLogoutUserMutation } from '@/lib/services/auth';

const UserSidebar = () => {
  const [logoutUser] = useLogoutUserMutation()
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await logoutUser()
      if (response.data && response.data.status === "success") {
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-purple-800 text-white h-screen p-4">
      <div className="mb-6">
        <Link href="/"><h2 className="text-lg font-bold text-center">Home</h2></Link>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/user/profile" className="hover:text-indigo-400 transition duration-300 ease-in-out">Profile</Link>
          </li>
          <li className="mb-4">
            <Link href="/user/change-password" className="hover:text-indigo-400 transition duration-300 ease-in-out">Change Password</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="hover:text-indigo-400 transition duration-300 ease-in-out">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserSidebar;