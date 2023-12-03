import React from 'react'

export const PolicyCard = ({ className, tagTitle, title, contents }) => {
  return (
    <div className={`:uno: policy-card ${className}`}>
      <div className=":uno: policy-tag">
        <span className=":uno: policy-tag-text">{tagTitle}</span>
      </div>
      <div>
        <p className=":uno: policy-title">{title}</p>
        <ul className=":uno: policy-content">
          {contents.map((content, index) => (
            <li key={index} className=":uno: !list-decimal">
              {content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
