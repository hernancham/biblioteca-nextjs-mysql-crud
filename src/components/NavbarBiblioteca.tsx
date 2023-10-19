import React from "react";
import Link from "next/link";

export function NavbarBiblioteca() {
  return (
    <nav>
      <div className="bg-zinc-900 text-white py-3 mb-2">
        <Link href="/">
          <h3>Biblioteca Nextjs MySQL CRUD</h3>
        </Link>
        <ul>
          <li>
            <Link
              href="/biblioteca/new"
              className="text-sky-500 hover:text-sky-400"
            >
              Nuevo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
