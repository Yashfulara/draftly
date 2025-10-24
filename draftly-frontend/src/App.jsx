import { Route,Routes } from "react-router"
import HomePage from "./pages/homePage"
import ProfilePage from "./pages/profilePage"
import SingleBlogPage from "./pages/singleBlogPage"
import BlogsPage from "./pages/blogsPage"
import Navbar from "./components/navbar"
import CreateBlog from "./pages/createblog"
import { SignIn, SignUp } from "@clerk/clerk-react"


const App = () => 
{
  return(
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<SignInPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/blogs" element={<BlogsPage />}/>
        <Route path="/blogs/:blogId" element={<SingleBlogPage />}/>
        <Route path="/blogs/create" element={<CreateBlog />}/>
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
    </>
  )
}

export default App

const SignInPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center ">
      <SignIn />
    </main>
  )
}

const SignUpPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center ">
      <SignUp />
    </main>
  )
}