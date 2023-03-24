import React from 'react'

export default function AdminLoginPage() {
  return (
    <div>
      Teacher
      <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <textinput
      id="email1"
      type="email"
      placeholder="name@flowbite.com"
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <textinput
      id="password1"
      type="password"
      required={true}
    />
  </div>
  <div className="flex items-center gap-2">
    <checkbox id="remember" />
    <label htmlFor="remember">
      Remember me
    </label>
  </div>
  <Button type="submit">
    Submit
  </Button>
</form>
    </div>
  )
}
