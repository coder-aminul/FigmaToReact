import React from "react";

export default function FooterLink({ title, Item }) {
  return (
    <div className="col-md-3">
      <strong className="footer-nav-title">{title}</strong>
      <ul className="footer-ul">
        {Item?.map((item) => (
          <li className="footer-nav-item" key={item.id}>
            <a className="footer-nav-link" href={item.to}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
