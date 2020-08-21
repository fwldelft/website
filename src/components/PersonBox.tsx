import React, { FunctionComponent } from "react"

export const PersonBox: FunctionComponent<{
  name: string
  image?: string
  subtitle?: string
  description?: string
  link?: string
  className?: string
}> = ({ image, name, subtitle, link, description, className }) => (
  <a className={className} href={link} title={`More information about ${name}`}>
    <style jsx>{`
      a {
        text-decoration: none;
      }

      img {
        min-width: 160px;
        max-width: 160px;
      }

      h3,
      .mini {
        margin: 0;
      }

      .mini {
        font-size: 0.8em;
      }
    `}</style>
    <div>
      {image ? <img src={image} alt={`Photo of ${name}`} /> : null}
      <h3>{name}</h3>
      {subtitle ? <p className="mini">{subtitle}</p> : null}
      {description ? <p>{description}</p> : null}
    </div>
  </a>
)
