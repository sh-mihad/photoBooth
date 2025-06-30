import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import Filed from "../../components/Filed"
import { loginSchema } from "../../schema"
export default function LoginPage() {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="login-container rounded-md">
                <div className="flex justify-center mb-8">
                    <img src={logo} alt="PhotoBooth" className="h-[51px]" />
                </div>

                <div className="bg-white p-6 border border-gray-300 mb-3 rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">
                            <div className="relative">
                                <Filed error={errors.email}>
                                    <input
                                        {...register("email", { required: "password is required" })}
                                        type="text" id="email" name="email" className={`form-input`} style={{ borderColor: errors.email && "red" }} placeholder="Phone number, username, or email" aria-label="Phone number, username, or email" />
                                </Filed>

                            </div>
                        </div>


                        <div className="mb-3">
                            <div className="relative">
                                <Filed error={errors.password}>
                                    <input
                                        {...register("password", { required: "email filed is required" })}
                                        style={{ borderColor: errors.password && "red" }}
                                        type={isShowPassword ? "text" : "password"} name="password" id="password" className="form-input" placeholder="Password" aria-label="Password" />
                                </Filed>
                                {
                                    isShowPassword ? (
                                        <button
                                            onClick={() => setIsShowPassword(false)}
                                            type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs">
                                            Hide
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => setIsShowPassword(true)}
                                            type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs">
                                            Show
                                        </button>
                                    )
                                }


                            </div>
                        </div>


                        <div className="mb-4">
                            <button type="submit" className="login-button">
                                Log in
                            </button>
                        </div>


                        <div className="or-separator">
                            OR
                        </div>

                        <div className="mb-4">
                            <button type="submit" className="login-button">
                                Log in with Google
                            </button>
                        </div>



                    </form>
                </div>

                <div className="bg-white p-6 border border-gray-300 text-center ">
                    <p className="text-sm">
                        Don't have an account? <Link to="/register" className="text-blue-500 font-semibold">Sign up</Link>
                    </p>
                </div>


            </div>

        </div>
    )
}
