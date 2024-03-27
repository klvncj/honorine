import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
function Signup() {
  return (
    <>
    <NavBar/>
      <main className='h-[65dvh] flex justify-center items-center'>
      <Card color="transparent" shadow={false} className='bg-white p-6 drop-shadow-md'>
      <Typography variant="h4" color="blue-gray">
        Admin Login
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
             Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6" fullWidth>
          sign up
        </Button>
      </form>
    </Card>
      </main>
      <Footer/>
    </>
  )
}

export default Signup
