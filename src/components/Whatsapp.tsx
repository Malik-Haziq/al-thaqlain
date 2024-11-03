import { useState } from "react";
import WhatsappImg from "../assets/home/whatsapp.jpeg";

export function Whatsapp() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChatbox = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(
        `https://wa.me/+923349921302?text=${encodedMessage}`,
        "_blank"
      );
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50">
        {" "}
        {/* Added z-index here */}
        <img
          src={WhatsappImg}
          alt="WhatsApp"
          className="w-16 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-105"
          onClick={toggleChatbox}
        />
      </div>

      {/* Chatbox Modal */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-4 w-80 bg-white rounded-xl shadow-2xl animate-fadeIn z-50">
          {" "}
          {/* Added z-index here */}
          {/* Chatbox Header */}
          <div className="items-center justify-between mb-3 p-5 py-4 bg-green-100 rounded-t-xl">
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={WhatsappImg}
                  alt="WhatsApp logo"
                  className="w-10 h-22 rounded-full"
                />
                <div>
                  <p className="font-semibold text-md text-white mb-1">
                    Al-Thaqlain
                  </p>
                  <p className="text-xs text-white-500">
                    Typically replies within an hour
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={toggleChatbox}
                  className="text-white-400 text-3xl hover:text-gray-300"
                >
                  &times;
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            {/* Chatbox Body */}
            <div className="text-gray-800 text-sm mb-4 py-2">
              Hi there 👋
              <br />
              How can we help you?
            </div>
            {/* Message Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow text-sm p-2 w-44 border-white-100 focus:border-white-700 text-black-400"
              />
              <button
                onClick={handleSendMessage}
                className="bg-green-100 text-white p-2 px-4 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
