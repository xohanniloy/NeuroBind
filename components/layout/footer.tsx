import logoAsset from "@assets/Logo_1755595120037.png";

export default function Footer() {
  return (
    <footer className="bg-neural-bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src={logoAsset} 
              alt="Neuro Binding Logo" 
              className="h-8 w-auto" 
            />
            <span className="text-2xl font-montserrat font-bold text-neuro-purple">
              Neuro Binding
            </span>
          </div>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Binding minds, building brands through the power of neuro marketing and cutting-edge web design.
          </p>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500">
              © 2024 Neuro Binding. All rights reserved. | Made with ❤️ in Bangladesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
