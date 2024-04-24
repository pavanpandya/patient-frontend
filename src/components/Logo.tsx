function Logo() {
    return(
      <a href="/" className="ml-2">
          <img
              src="MedilinkLogo.png"
              // Align logo vertically and horizontally
              className="mx-auto"
              style={{ width: 'auto', height: 'auto', maxWidth: '75%', maxHeight: '75%', objectFit: 'cover', display: 'block', margin: 'auto', padding: '0', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}
              alt="Logo"
          />
      </a>
    );
  }
  
  export default Logo;