import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center  p-8">
            <div className="text-center max-w-md">
                <div className="mb-6">
                    <Image
                        src="/img/logo.png"
                        alt="Mercado Libre"
                        width={134}
                        height={34}
                        className="mx-auto"
                    />
                </div>

                <h1 className="text-2xl font-normal text-gray-800 mb-4">
                    No encontramos la página que buscas
                </h1>

                <p className="text-gray-500 mb-8">
                    Es posible que la página haya sido removida o que la URL no sea correcta.
                </p>

                <Link
                    href="/"
                    className="inline-block bg-[#3483fa] text-white px-6 py-3 rounded hover:bg-[#2968c8] transition-colors"
                >
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}
