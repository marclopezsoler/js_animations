function LargeImage({url, cursorPos}) {
   const {x, y} = cursorPos;

   const imageStyle = {
      left: x - 230,
      top: y - 50,
      height: 150,
      width: 150,
   }

   return(
      <img src={url} className="large_image" style={imageStyle}/>
   )
}

export default LargeImage;