function App() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="bg-white border border-slate-200 rounded-xl p-8 text-center">
        <h1 className="text-3xl font-semibold text-primary-700">MediCare</h1>
        <p className="mt-2 text-slate-500">Medical center management system</p>
        <button className="mt-6 bg-primary-700 hover:bg-primary-800 text-white px-5 py-2 rounded-lg">
          Book an appointment
        </button>
      </div>
    </main>
  );
}

export default App;