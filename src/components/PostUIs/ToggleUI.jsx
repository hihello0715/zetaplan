import React from 'react';
import { v4 as uuid } from 'uuid';
export default function ToggleUI({ children }) {
  const id = uuid();
  return (
    <div className="toggle_ui">
      <input type="checkbox" className="toggle_checkbox" id={id} />
      <div className="toggle_label">
        <label className="toggle_prefix" htmlFor={id}>
          <img src="https://res.cloudinary.com/dprbw1pa0/image/upload/v1674286158/h1gbf4ly2wrbivuaoctq.png" />
        </label>
        <p className="toggle_title">title</p>
      </div>
      <p className="toggle_content flex_center">{children}</p>
    </div>
  );
}