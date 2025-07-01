import logo from "../../assets/logo.svg"
import LoginForm from "./LoginForm"
export default function LoginPage() {


    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="login-container rounded-md">
                <div className="flex justify-center mb-8">
                    <img src={logo} alt="PhotoBooth" className="h-[51px]" />
                </div>

                <LoginForm/>              


            </div>

        </div>
    )
}
