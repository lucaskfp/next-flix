import React from "react";
import Link from "next/link";
import fetcher from "constants/fetcher";

export default function Filme() {
  return (
    <div>
      Filmes{" "}
      <Link href="/filmes/filme">
        <a>Acessar filme</a>
      </Link>
    </div>
  );
}
