function Navbar(){
  return(
    <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href='/'>CafeCo</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><a>About Us</a></li>
      <li tabindex="0">
        <a>
          Categories
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-base-100">
          <li><a>Lavado</a></li>
          <li><a>Honey</a></li>
          <li><a>Natural</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar;