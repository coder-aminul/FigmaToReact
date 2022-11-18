import React from "react";

export default function FooterCopywrite() {
  const year = new Date();
  return (
    <div className="col-12">
      <div className="copywrite">
        <h5>© {year.getFullYear()} GPT-3. All rights reserved. Aminul Islam</h5>
      </div>
    </div>
  );
}
