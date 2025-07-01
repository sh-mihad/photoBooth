import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Filed from '../../components/Filed'
import useAuth from '../../hooks/useAuth'
import useAxiosAuth from '../../hooks/useAxiosAuth'
import { loginSchema } from '../../schema'

export default function LoginForm() {
      const [isShowPassword, setIsShowPassword] = useState(false)
        const { setAuthInfo } = useAuth()
        const { loading, error, createPost } = useAxiosAuth()
        const navigate = useNavigate()
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm({
            resolver: yupResolver(loginSchema)
        })
    
        const onSubmit = async (formData) => {
            await createPost("/auth/login", formData, (data) => {
                setAuthInfo(data)
                navigate("/")
            })
        }
    return (
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
                            <button disabled={loading} type="submit" className="login-button">
                               {loading ? "Loading.." : "Login"} 
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
                    {
                        error?.message && <p className="text-sm text-center my-2 text-red-500 font-semibold">
                            {error?.message}
                        </p>
                    }
                    <div className="bg-white p-6 border border-gray-300 text-center ">
                    <p className="text-sm">
                        Don't have an account? <Link to="/register" className="text-blue-500 font-semibold">Sign up</Link>
                    </p>
                </div>
                </div>
    )
}
