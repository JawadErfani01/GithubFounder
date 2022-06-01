function index() {
  const year = new Date().getFullYear()
  return (
    <div className="footer footer-center p-10 text-white  bg-slate-800">
      <h1 className="text-xl sm:text-2xl md:text-3xl ">GitHub Founder</h1>
      <p className="text-sm inline-block pb-5">
        Copyright <span className="text-lg">&copy; </span>
        {year}
      </p>
    </div>
  )
}
export default index
