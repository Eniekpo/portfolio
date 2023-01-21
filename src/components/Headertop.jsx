const Headertop = ({ title, image, children }) => {
  return (
    <header className="header">
      <div className="headertop-container">
        <div className="header-container-bg">
          <img src={image} alt="HeaderBackground" />
        </div>
        <div className="header-content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  )
}

export default Headertop
