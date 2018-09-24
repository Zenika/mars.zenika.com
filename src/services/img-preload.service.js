/**
 * Wait for an image to load
 */
export default function (url) {
  return new Promise((resolve, reject) => {
    var img = new Image()
    img.onload = (data) => resolve(img.src)
    img.src = url
  })
}
