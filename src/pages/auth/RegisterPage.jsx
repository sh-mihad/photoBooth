import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import Filed from "../../components/Filed"
import { signUpSchema } from "../../schema"

export default function RegisterPage() {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema)
  })
  

  const onSubmit = (formData) => {
    console.log(formData);

  }
  return (
    <div className="min-h-screen flex flex-col justify-center py-8 sm:px-6 lg:px-8">
      <div className="signup-container">

        <div className="flex justify-center mb-4">
          <img src={logo} alt="PhotoBooth" className="h-[51px]" />
        </div>


        <div className="bg-white p-6 border border-gray-300 mb-3">

          <h2 className="text-center font-semibold text-gray-500 text-lg mb-4">
            Sign up to see photos and videos from your friends.
          </h2>



          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-2">
              <div className="relative">
                <Filed error={errors.email}>
                  <input
                    style={{ borderColor: errors.email && "red" }}
                    {...register("email")}
                    id="email"
                    name="email"
                    type="text"
                    className="form-input"
                    placeholder="Email"
                    aria-label="Email"
                  />
                </Filed>
              </div>
            </div>


            <div className="mb-2">
              <div className="relative">
                <Filed error={errors.email}>
                  <input
                    style={{ borderColor: errors.fullName && "red" }}
                    {...register("fullName")}
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="form-input"
                    placeholder="Full Name"
                    aria-label="Full Name"
                  />
                </Filed>
              </div>
            </div>



            <div className="mb-3">
              <div className="relative">
                <Filed error={errors.email}>
                  <input
                    style={{ borderColor: errors.password && "red" }}
                    {...register("password")}
                    id="password"
                    name="password"
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </Filed>
                {
                  isShowPassword ? (
                    <button
                      onClick={() => setIsShowPassword(false)}
                      type="button" classNameName="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs">
                      Hide
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsShowPassword(true)}
                      type="button" classNameName="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs">
                      Show
                    </button>
                  )
                }
              </div>
            </div>


            <div className="mb-3">
              <div className="relative">
                <Filed error={errors.email}>
                  <input
                    {...register("confirmPassword")}
                    style={{ borderColor: errors.confirmPassword && "red" }}
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    className="form-input"
                    placeholder="Confirm Password"
                    aria-label="Confirm Password" />
                </Filed>
                <button type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs">
                  Show
                </button>
              </div>
            </div>



            <div className="mb-2">
              <button type="submit" className="signup-button">
                Sign up
              </button>
            </div>
          </form>
        </div>


        <div className="bg-white p-6 border border-gray-300 text-center mb-4 rounded-md">
          <p className="text-sm">
            Have an account? <Link to="/login" className="text-blue-500 font-semibold">Log in</Link>
          </p>
        </div>


      </div>


    </div>
  )
}
