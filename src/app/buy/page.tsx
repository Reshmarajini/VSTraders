import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BuyPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">
      <Header />

      <main className="flex-grow py-10 px-4 max-w-md mx-auto">
      <div className="pt-32">
        <h2 className="text-center text-xl font-bold mb-4">VS Traders</h2>
        <p className="text-center text-sm font-semibold mb-6">CONTACT: 7299499222</p>
        </div>
        <form className="space-y-4">
          <div>
            <label>Full Name</label>
            <input type="text" className="w-full border px-3 py-2 mt-1" />
          </div>
          <div>
            <label>Phone:</label>
            <input type="text" className="w-full border px-3 py-2 mt-1" />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" className="w-full border px-3 py-2 mt-1" />
          </div>
          <div>
            <label>How much coconut shell you need :</label>
            <input type="text" className="w-full border px-3 py-2 mt-1" />
          </div>
          <div>
            <label>When do you need the product:</label>
            <input type="text" className="w-full border px-3 py-2 mt-1" />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 w-full hover:opacity-90"
          >
            submit
          </button>
        </form>
      </main>

      
    </div>
  );
}
