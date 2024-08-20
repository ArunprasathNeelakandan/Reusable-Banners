import './index.css'

const BannerCardItem = props => {
  const {item} = props
  const {headerText, description, className} = item

  console.log(className)
  return (
    <div className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show More</button>
      </div>
    </div>
  )
}

export default BannerCardItem
