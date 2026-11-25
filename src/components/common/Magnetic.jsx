import React from 'react';

/**
 * Magnetic interaction wrapper.
 * The buttons and cards themselves remain completely stationary to preserve
 * steady layout and prevent movement towards the cursor.
 * The custom cursor outer ring handles magnetic visual attraction instead.
 */
export default function Magnetic({ children }) {
  return children;
}
