import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCharacteristicsProps {
    specifications: Record<string, string>;
}

export const ProductCharacteristics = ({ specifications }: ProductCharacteristicsProps) => {
    // Map keys to appropriate emojis
    const emojiMap: { [key: string]: string } = {
        screen: "📱",
        memory: "💾",
        camera: "📷",
        nfc: "📶",
        security: "🔒",
        battery: "🔋",
        processor: "⚡",
        os: "💻",
        connectivity: "🌐",
        audio: "🎵",
        sensors: "📡",
        dimensions: "📏",
        weight: "⚖️",
        colors: "🎨",
        default: "📝",
    };

    return (
        <div className="mt-8 px-2 md:px-0">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
                Características del producto
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(specifications).map(([key, value]) => {
                    // Get emoji based on key or use default
                    const emoji = emojiMap[key.toLowerCase()] || emojiMap.default;

                    return (
                        <div key={key} className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                                <span className="text-gray-600 text-sm">{emoji}</span>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-gray-800">
                                    {key}: {value}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-4">
                <Button
                    variant="link"
                    className="text-blue-600 p-0 text-sm hover:underline flex items-center gap-1"
                >
                    Ver todas las características
                    <ChevronDown className="w-3 h-3" />
                </Button>
            </div>
        </div>
    );
}; 