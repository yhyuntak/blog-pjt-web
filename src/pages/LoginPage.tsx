const LoginPage = () => {
  return (
    <div className="pt-16">
      <h1 className={'text-2xl'}>Login</h1>
      <form className={'mt-4'}>
        <label className={'block mb-2'}>
          Username:
          <input type={'text'} className={'border p-2 w-full'} />
        </label>
        <label className="block mb-2">
          Password:
          <input type="password" className="border p-2 w-full" />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
