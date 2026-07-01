import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-[300vh] bg-[#050816] pt-32">
        <section className="mx-auto flex h-screen max-w-7xl items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white">
              Enterprise Security Platform
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-400">
              Modern navigation inspired by enterprise SaaS products.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}