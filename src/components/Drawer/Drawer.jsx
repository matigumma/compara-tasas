
export default function Drawer(props) {

return (
  <div className="drawer">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content relative">
      <div className="flex flex-row justify-between -mt-4 mb-4">
        <div className="avatar m-1">
          <div className="w-10 rounded-full">
            <img src="https://cdn.discordapp.com/icons/1205894470504026112/5d2060a63d13bb34a51999e2368635ec.webp?size=300" />
          </div>
        </div>
        <label
          slot='title'
          htmlFor='my-drawer'
          className='drawer-button absolute right-0'
        >
          <div tabIndex={0} role="button" className="btn dark:text-white btn-link btn-square hover:text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
        </label>
      </div>
      {props.children}
    </div> 

    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 pt-8 w-80 min-h-full bg-base-200 text-base-content text-lg">
        <div className="flex items-center justify-between w-full mb-8">
          <div className="flex gap-2 items-center">
            <div className="avatar m-1">
              <div className="w-10 rounded-full">
                <img src="https://cdn.discordapp.com/icons/1205894470504026112/5d2060a63d13bb34a51999e2368635ec.webp?size=300" />
              </div>
            </div>

            <span className="text-2xl font-semibold">Compará</span>
          </div>

          <label
            htmlFor='my-drawer'
            className='drawer-button'
          >
            <div tabIndex={0} role="button" className="btn dark:text-white btn-link btn-square hover:text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
          </label>
        </div>
        {/* Sidebar content here */}
        <li className="upercase mb-4"><a href="/">inicio</a></li>
        
        <span className="text-indigo-500 uppercase">rendimientos</span>
        <li className="upercase"><a href="/pesos">pesos</a></li>
        <li className="upercase"><a href="/dolares">dolares</a></li>
        <li className="upercase"><a href="/crypto">crypto</a></li>
        
        <span className="text-indigo-500 uppercase mt-1">comisiones</span>
        <li className=""><a href="/pospoint">POS / point</a></li>
        <li className="upercase"><a href="/dolares">Cuentas en el exterior</a></li>


        <li className="upercase mt-auto"><a href="/legal">Aviso Legal</a></li>
      </ul>
    </div>
  </div>
  )
}
