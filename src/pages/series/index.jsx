import React from "react";
import Link from "next/link";

export default function Filme() {
  return (
    <div>
      Séries{" "}
      <Link href="/series/serie">
        <a>Acessar série</a>
      </Link>
    </div>
  );
}
