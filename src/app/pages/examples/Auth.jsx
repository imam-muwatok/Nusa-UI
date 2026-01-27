import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import FormControl from "../../components/ui/FormControl";

export default function AuthPage({ type }) {
  const titles = {
    login: "Login",
    register: "Register",
    "forgot-password": "Forgot Password",
    "reset-password": "Reset Password"
  };

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">{type ? titles[type] : "Authentication"}</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          {type 
            ? `Contoh halaman ${titles[type].toLowerCase()} pengguna.` 
            : "Halaman autentikasi untuk login dan registrasi pengguna."}
        </p>
      </div>

      <div className="space-y-12">
        {(!type || type === 'login') && (
        <>
        <section>
          <h2 className="text-2xl font-bold mb-6">Login Form</h2>
          <CodeBlock code={`<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-800 dark:border-zinc-700">
  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">
      Sign in to your account
    </h1>
    <form className="space-y-4 md:space-y-6" action="#">
      <FormControl label="Your email">
        <input type="email" name="email" id="email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" placeholder="name@company.com" required />
      </FormControl>
      <FormControl label="Password">
        <input type="password" name="password" id="password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required />
      </FormControl>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-cyan-300 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:ring-cyan-600 dark:ring-offset-zinc-800" required />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-zinc-500 dark:text-zinc-300">Remember me</label>
          </div>
        </div>
        <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">Forgot password?</a>
      </div>
      <Button type="submit" className="w-full">Sign in</Button>
      <p className="text-sm font-light text-zinc-500 dark:text-zinc-400">
        Don’t have an account yet? <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Sign up</a>
      </p>
    </form>
  </div>
</div>`}>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-900 dark:border-zinc-800">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">Sign in to your account</h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e) => e.preventDefault()}>
                  <FormControl label="Your email"><input type="email" name="email" id="email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" placeholder="name@company.com" required /></FormControl>
                  <FormControl label="Password"><input type="password" name="password" id="password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required /></FormControl>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start"><div className="flex items-center h-5"><input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-cyan-300 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:ring-cyan-600 dark:ring-offset-zinc-800" /></div><div className="ml-3 text-sm"><label htmlFor="remember" className="text-zinc-500 dark:text-zinc-300">Remember me</label></div></div>
                    <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">Forgot password?</a>
                  </div>
                  <Button type="submit" className="w-full">Sign in</Button>
                  <p className="text-sm font-light text-zinc-500 dark:text-zinc-400">Don’t have an account yet? <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Sign up</a></p>
                </form>
              </div>
            </div>
          </CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Login with Social</h2>
          <CodeBlock code={`<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-800 dark:border-zinc-700">
  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">
      Sign in to your account
    </h1>
    <div className="grid grid-cols-2 gap-3">
        <Button variant="light" type="outline" className="justify-center">Google</Button>
        <Button variant="light" type="outline" className="justify-center">Apple</Button>
    </div>
    <div className="relative flex items-center justify-center text-sm text-zinc-500 dark:text-zinc-400">
        <span className="bg-white px-2 dark:bg-zinc-800 z-10">Or continue with</span>
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-200 dark:border-zinc-700"></div></div>
    </div>
    <form className="space-y-4 md:space-y-6" action="#">
      <FormControl label="Your email">
        <input type="email" name="email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" placeholder="name@company.com" required />
      </FormControl>
      <FormControl label="Password">
        <input type="password" name="password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required />
      </FormControl>
      <Button type="submit" className="w-full">Sign in</Button>
    </form>
  </div>
</div>`}>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-900 dark:border-zinc-800">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">Sign in to your account</h1>
                <div className="grid grid-cols-2 gap-3">
                    <Button variant="light" type="outline" className="justify-center">Google</Button>
                    <Button variant="light" type="outline" className="justify-center">Apple</Button>
                </div>
                <div className="relative flex items-center justify-center text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="bg-white px-2 dark:bg-zinc-900 z-10">Or continue with</span>
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div></div>
                </div>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e) => e.preventDefault()}>
                  <FormControl label="Your email"><input type="email" name="email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" placeholder="name@company.com" required /></FormControl>
                  <FormControl label="Password"><input type="password" name="password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required /></FormControl>
                  <Button type="submit" className="w-full">Sign in</Button>
                </form>
              </div>
            </div>
          </CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Split Screen Login</h2>
          <CodeBlock code={`<div className="flex w-full bg-white rounded-lg shadow dark:bg-zinc-800 overflow-hidden border border-zinc-200 dark:border-zinc-700">
    <div className="hidden md:block w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80')"}}></div>
    <div className="w-full md:w-1/2 p-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white mb-6">
            Welcome back
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
            <FormControl label="Your email">
                <input type="email" name="email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" placeholder="name@company.com" required />
            </FormControl>
            <FormControl label="Password">
                <input type="password" name="password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required />
            </FormControl>
            <Button type="submit" className="w-full">Sign in</Button>
        </form>
    </div>
</div>`}>
            <div className="flex w-full bg-white rounded-lg shadow dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <div className="hidden md:block w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80')"}}></div>
                <div className="w-full md:w-1/2 p-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white mb-6">
                        Welcome back
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e) => e.preventDefault()}>
                        <FormControl label="Your email">
                            <input type="email" name="email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" placeholder="name@company.com" required />
                        </FormControl>
                        <FormControl label="Password">
                            <input type="password" name="password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required />
                        </FormControl>
                        <Button type="submit" className="w-full">Sign in</Button>
                    </form>
                </div>
            </div>
          </CodeBlock>
        </section>
        </>
        )}

        {(!type || type === 'register') && (
        <>
        <section>
          <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
          <CodeBlock code={`<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-800 dark:border-zinc-700">
  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">
      Create an account
    </h1>
    <form className="space-y-4 md:space-y-6" action="#">
      <FormControl label="Your email">
        <input type="email" name="email" id="email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" placeholder="name@company.com" required />
      </FormControl>
      <FormControl label="Password">
        <input type="password" name="password" id="password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required />
      </FormControl>
      <FormControl label="Confirm password">
        <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required />
      </FormControl>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-cyan-300 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:ring-cyan-600 dark:ring-offset-zinc-800" required />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="font-light text-zinc-500 dark:text-zinc-300">I accept the <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Terms and Conditions</a></label>
        </div>
      </div>
      <Button type="submit" className="w-full">Create an account</Button>
      <p className="text-sm font-light text-zinc-500 dark:text-zinc-400">
        Already have an account? <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Login here</a>
      </p>
    </form>
  </div>
</div>`}>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-900 dark:border-zinc-800">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">Create an account</h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e) => e.preventDefault()}>
                  <FormControl label="Your email"><input type="email" name="email" id="reg-email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" placeholder="name@company.com" required /></FormControl>
                  <FormControl label="Password"><input type="password" name="password" id="reg-password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required /></FormControl>
                  <FormControl label="Confirm password"><input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required /></FormControl>
                  <div className="flex items-start">
                    <div className="flex items-center h-5"><input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-cyan-300 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:ring-cyan-600 dark:ring-offset-zinc-800" required /></div>
                    <div className="ml-3 text-sm"><label htmlFor="terms" className="font-light text-zinc-500 dark:text-zinc-300">I accept the <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Terms and Conditions</a></label></div>
                  </div>
                  <Button type="submit" className="w-full">Create an account</Button>
                  <p className="text-sm font-light text-zinc-500 dark:text-zinc-400">Already have an account? <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Login here</a></p>
                </form>
              </div>
            </div>
          </CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Split Screen Register</h2>
          <CodeBlock code={`<div className="flex w-full bg-white rounded-lg shadow dark:bg-zinc-800 overflow-hidden border border-zinc-200 dark:border-zinc-700">
    <div className="w-full md:w-1/2 p-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white mb-6">
            Create an account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
            <FormControl label="Your email">
                <input type="email" name="email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" placeholder="name@company.com" required />
            </FormControl>
            <FormControl label="Password">
                <input type="password" name="password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required />
            </FormControl>
            <Button type="submit" className="w-full">Create account</Button>
        </form>
    </div>
    <div className="hidden md:block w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80')"}}></div>
</div>`}>
            <div className="flex w-full bg-white rounded-lg shadow dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <div className="w-full md:w-1/2 p-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white mb-6">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e) => e.preventDefault()}>
                        <FormControl label="Your email">
                            <input type="email" name="email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" placeholder="name@company.com" required />
                        </FormControl>
                        <FormControl label="Password">
                            <input type="password" name="password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required />
                        </FormControl>
                        <Button type="submit" className="w-full">Create account</Button>
                    </form>
                </div>
                <div className="hidden md:block w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80')"}}></div>
            </div>
          </CodeBlock>
        </section>
        </>
        )}

        {(!type || type === 'forgot-password') && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Forgot Password Form</h2>
          <CodeBlock code={`<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-800 dark:border-zinc-700">
  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">
      Forgot Password
    </h1>
    <form className="space-y-4 md:space-y-6" action="#">
      <FormControl label="Your email">
        <input type="email" name="email" id="email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" placeholder="name@company.com" required />
      </FormControl>
      <Button type="submit" className="w-full">Reset password</Button>
    </form>
  </div>
</div>`}>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-900 dark:border-zinc-800">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">
                  Forgot Password
                </h1>
                <form className="space-y-4 md:space-y-6" action="#"  onSubmit={(e) => e.preventDefault()}>
                  <FormControl label="Your email">
                    <input type="email" name="email" id="reset-email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" placeholder="name@company.com" required />
                  </FormControl>
                  <Button type="submit" className="w-full">Reset password</Button>
                </form>
              </div>
            </div>
          </CodeBlock>
        </section>
        )}

        {(!type || type === 'reset-password') && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Reset Password Form</h2>
          <CodeBlock code={`<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-800 dark:border-zinc-700">
  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">
      Change Password
    </h1>
    <form className="space-y-4 md:space-y-6" action="#">
      <FormControl label="New Password">
        <input type="password" name="password" id="password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required />
      </FormControl>
      <FormControl label="Confirm Password">
        <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required />
      </FormControl>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-cyan-300 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:ring-cyan-600 dark:ring-offset-zinc-800" required />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="newsletter" className="font-light text-zinc-500 dark:text-zinc-300">I accept the <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Terms and Conditions</a></label>
        </div>
      </div>
      <Button type="submit" className="w-full">Reset password</Button>
    </form>
  </div>
</div>`}>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-900 dark:border-zinc-800">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">
                  Change Password
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e) => e.preventDefault()}>
                  <FormControl label="New Password">
                    <input type="password" name="password" id="reset-password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required />
                  </FormControl>
                  <FormControl label="Confirm Password">
                    <input type="password" name="confirm-password" id="reset-confirm-password" placeholder="••••••••" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" required />
                  </FormControl>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-cyan-300 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:ring-cyan-600 dark:ring-offset-zinc-800" required />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="newsletter" className="font-light text-zinc-500 dark:text-zinc-300">I accept the <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Terms and Conditions</a></label>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">Reset password</Button>
                </form>
              </div>
            </div>
          </CodeBlock>
        </section>
        )}
      </div>
    </main>
  );
}