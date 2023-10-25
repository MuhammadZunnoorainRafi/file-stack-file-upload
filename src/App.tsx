function App() {
  return (
    <div className="flex flex-col items-center gap-y-10">
      <h1 className="font-mono text-xl font-bold tracking-wider">
        Image upload using File-Stack 👍
      </h1>
      <button className="px-4 py-1 bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-900 transition-colors active:scale-[0.97]">
        Upload
      </button>
      <h1 className="font-bold text-lg">Images:</h1>
    </div>
  );
}

export default App;
