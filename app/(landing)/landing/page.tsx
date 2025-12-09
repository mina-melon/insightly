import Threads from "../../../components/Threads";

export default function Landing() {
  return (
    <section className="relative w-full ">
      {/* Background Threads */}
      <div className="absolute inset-0 top-0 left-0 z-10 h-[600px] w-full">
        <Threads
          color={[0.1098, 0.1235, 0.7255]}
          amplitude={3}
          distance={0.2}
          enableMouseInteraction={true}
        />
      </div>

      {/* Hero Section */}
      <main className="absolute flex flex-col justify-center items-center text-center gap-6 mt-20 mb-10 px-6 py-12  z-10 bg-transparent w-full">
        <h1 className="text-4xl md:text-6xl font-bold bg-transparent">
          {`See What's Happening`}
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold bg-transparent">
          On Your Website Today
        </h1>

        <p className="text-zinc-400 lg:text-2xl md:text-xl antialiased max-w-[700px] bg-transparent">
          Skip the complexity of Google Analytics. Insightly shows you exactly
          what matters in one beautiful dashboard.
        </p>

        <button className="p-btn">Start for free</button>
      </main>
    </section>
  );
}
