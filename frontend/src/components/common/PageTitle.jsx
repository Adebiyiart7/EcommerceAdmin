const PageTitle = ({ title }) => {
  const inlineStyles = {
    title: {
      fontSize: 30,
      color: "var(--primaryText)",
      fontweight: 800,
      margin: 0
    }
  }
  return (
    <h1 style={inlineStyles.title}>{title}</h1>
  )
}

export default PageTitle