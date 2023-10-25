import { PickerOverlay } from 'filestack-react';
import { useState } from 'react';

function App() {
  const [showPicker, setShowPicker] = useState(false);
  const [getImage, setGetImage] = useState('');
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
              onUploadDone: (res) => {
                setGetImage(res.filesUploaded[0].handle);
                setShowPicker(false);
              },
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
      <div>
        <h1 className="font-bold mb-3 text-center text-lg">Images:</h1>
        <div className="flex items-center justify-center gap-4">
          {getImage && (
            <img
              className="h-52 w-52 object-cover rounded-md"
              src={`https://cdn.filestackcontent.com/${getImage}`}
              alt="error"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
