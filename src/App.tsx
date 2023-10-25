import { PickerOverlay } from 'filestack-react';
import { useState } from 'react';

function App() {
  const [showPicker, setShowPicker] = useState(false);
  return (
    <div className="flex mt-32 flex-col items-center gap-y-10">
      <h1 className="font-mono text-xl font-bold tracking-wider">
        Image upload using File-Stack 👍
      </h1>
      {showPicker && (
        <div className="absolute">
          <PickerOverlay
            apikey={import.meta.env.VITE_API_KEY}
            pickerOptions={{
              accept: ['image/*'],
              onClose: () => setShowPicker(false),
            }}
          />
        </div>
      )}
      <button
        onClick={() => setShowPicker(true)}
        className="px-4 rounded-md py-1 bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-900 transition-colors"
      >
        Upload
      </button>
      <h1 className="font-bold text-lg">Images:</h1>
    </div>
  );
}

export default App;
