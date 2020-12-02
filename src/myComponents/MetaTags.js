import React from "react"
import Helmet from "react-helmet"


// Creates Google, Facebook and Twitter tags:
// (Google):    <meta itemprop="key" content="value"/>
// (Facebook):  <meta property="og:key" content="value"/>
// (Twitter):   <meta name="twitter:key" content="value"/>
const MetaTags = props => {
  return (
    <Helmet>
      {props.title && <title>{props.title}</title>}
      {props.title && <meta itemprop="name" content={props.title}/>}
      {props.title && <meta property="og:title" content={props.title}/>}
      {props.title && <meta name="twitter:title" content={props.title}/>}

      {props.description && <meta name="description" content={props.description}/>}
      {props.description && <meta itemprop="description" content={props.description}/>}
      {props.description && <meta property="og:description" content={props.description}/>}
      {props.description && <meta name="twitter:description" content={props.description}/>}

      {props.image && <meta itemprop="image" content={props.image}/>}
      {props.image && <meta property="og:image" content={props.image}/>}
      {props.image && <meta name="twitter:image" content={props.image}/>}

      {props.url && <meta property="og:url" content={props.url}/>}

      <meta property="og:type" content="website"/>
      <meta name="twitter:card" content="summary_large_image"/>

      <script data-ad-client="ca-pub-1706760404377182" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Helmet>
  )
}

export default MetaTags
