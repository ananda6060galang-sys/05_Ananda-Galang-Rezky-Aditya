import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Selamat datang di Portal Sekolah</h1>

      <nav>
        {/* Tugas Tambahan */}
        <h3>Menu Portal Sekolah:</h3>
        <p>
          <Link href="/library">Perpustakaan</Link>
        </p>
        <p>
          <Link href="/teachers/budi">Profil Guru</Link>
        </p>
        <p>
          <Link href="/courses/matematika/materials/bab1">
            Materi Kursus
          </Link>
        </p>

        <hr />

        {/* Praktik */}
        <h1>Welcome to Home</h1>
        <p><Link href="/about">About</Link></p>
        <p><Link href="/profile">Profile</Link></p>
        <p><Link href="/blogs">Blogs</Link></p>
        <p><Link href="/products">Products</Link></p>
      </nav>
    </div>
  );
}