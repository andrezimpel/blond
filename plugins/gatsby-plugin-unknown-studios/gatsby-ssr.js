const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  const headComponents = []
  const message = 'This website is built by UNKNOWN STUDIOS. https://www.unknownstudios.io. :-)'

  console.info(message)
  headComponents.push(
    <meta name="builder" content={message}/>
  )

  setHeadComponents(headComponents)
}
