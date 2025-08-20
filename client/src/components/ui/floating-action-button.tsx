import { useState } from "react";
import { MessageSquare, Phone, Mail, X } from "lucide-react";

interface FloatingAction {
  icon: React.ElementType;
  label: string;
  action: () => void;
  color: string;
}

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const actions: FloatingAction[] = [
    {
      icon: MessageSquare,
      label: "Chat with us",
      action: () => {
        const element = document.getElementById("contact");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
      color: "bg-electric-blue hover:bg-electric-blue/80"
    },
    {
      icon: Phone,
      label: "Call us",
      action: () => window.open("tel:+8801234567890", "_self"),
      color: "bg-neon-green hover:bg-neon-green/80"
    },
    {
      icon: Mail,
      label: "Email us",
      action: () => window.open("mailto:hello@neurobinding.com", "_self"),
      color: "bg-neuro-purple hover:bg-neuro-purple/80"
    }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-4">
      {/* Action buttons */}
      <div className={`flex flex-col space-y-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {actions.map((action, index) => (
          <div key={index} className="flex items-center space-x-3 group">
            <div className="bg-neural-bg-secondary px-3 py-2 rounded-lg text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
              {action.label}
            </div>
            <button
              onClick={action.action}
              className={`${action.color} p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce-gentle`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <action.icon size={20} className="text-white" />
            </button>
          </div>
        ))}
      </div>

      {/* Main toggle button */}
      <button
        onClick={toggleMenu}
        className={`${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-neural hover:shadow-[0_0_25px_rgba(0,212,255,0.6)]'
        } p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-glow-pulse`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageSquare size={24} className="text-white" />
        )}
      </button>
    </div>
  );
}