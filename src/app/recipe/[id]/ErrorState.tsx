import Link from "next/link";

export default function ErrorState() {
  return (
    <>
      <p className="text-center text-gray-500">
        Esinettä ei löytynyt. Tarkista linkki reseptilistasta.
      </p>
      <p className="text-center mt-2">
        <Link href="/" className="text-blue-500 hover:underline">
          Palaa reseptilistaan
        </Link>
      </p>
    </>
  );
}
