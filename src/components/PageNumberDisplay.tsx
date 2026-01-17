import React from "react";

interface PageNumberDisplayProps {
  current_page: number;
  total_pages: number;
}

export default function PageNumberDisplay({
  current_page,
  total_pages,
}: PageNumberDisplayProps) {
  if (total_pages === 0) {
    return null;
  }

  return (
    <p style={{ textAlign: "center", marginTop: "10px" }}>
      Síða {current_page} af {total_pages}
    </p>
  );
}
