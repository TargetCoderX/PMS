
export default function GuestLayout({ children }) {
    return (
        <div className="page page-center">
        <div className="container container-tight py-4">
          <div className="text-center mb-4">
            <a href="." className="navbar-brand navbar-brand-autodark"><img src="./static/logo.svg" height="36" alt=""/></a>
          </div>
          { children }
        </div>
      </div>
    );
}
