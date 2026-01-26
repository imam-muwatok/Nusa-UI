import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import FormControl from "../../components/ui/FormControl";

export default function AuthPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Authentication</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Halaman autentikasi untuk login dan registrasi pengguna.
        </p>
      </div>

      <div className="space-y-12">
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
      </div>
    </main>
  );
}