interface ProductDescriptionProps {
    description: string;
}

export const ProductDescription = ({ description }: ProductDescriptionProps) => {
    return (
        <div className="mt-8 px-2 md:px-0">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Descripción</h3>
            <div className="space-y-4 text-sm text-gray-700">{description}</div>
        </div>
    );
}; 