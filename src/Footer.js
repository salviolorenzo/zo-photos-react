import React, { Component } from 'react';

export default function Header(props) {
  return (
    <footer>
      <ul className="links">
        <li>
          <a href="https://lorenzosalvio.com">
            <i className="fas fa-laptop-code" />
          </a>
        </li>
        <li>
          <a href="https://github.com/salviolorenzo">
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/lorenzo-salvio">
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/the.actual.boi">
            <i className="fab fa-instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
