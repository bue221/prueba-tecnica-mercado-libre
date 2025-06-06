import { render, screen } from '@testing-library/react'
import ProductCard from '../ProductCard'

const mockProduct = {
    image: '/test-image.jpg',
    title: 'Test Product',
    currentPrice: '1000',
    originalPrice: '1200',
    discount: '20%',
    installments: {
        count: 12,
        amount: '100',
        interest: '0%'
    },
    shipping: {
        isFree: true,
        delivery: 'mañana',
        isFull: true
    },
    slug: 'test-product'
}

describe('ProductCard', () => {
    it('renders vertical variant correctly', () => {
        render(<ProductCard {...mockProduct} variant="vertical" />)

        // Check if main elements are rendered
        expect(screen.getByText('Test Product')).toBeInTheDocument()
        expect(screen.getByText('$1,000')).toBeInTheDocument()
        expect(screen.getByText('$1,200')).toBeInTheDocument()
        expect(screen.getByText('20% OFF')).toBeInTheDocument()
        expect(screen.getByText(/en 12 cuotas de \$100/)).toBeInTheDocument()
        expect(screen.getByText(/con 0% interés/)).toBeInTheDocument()
        expect(screen.getByText('Envío gratis mañana')).toBeInTheDocument()
        expect(screen.getByText('FULL')).toBeInTheDocument()
    })

    it('renders horizontal variant correctly', () => {
        render(<ProductCard {...mockProduct} variant="horizontal" />)

        // Check if main elements are rendered
        expect(screen.getByText('Test Product')).toBeInTheDocument()
        expect(screen.getByText('$1,000')).toBeInTheDocument()
        expect(screen.getByText('$1,200')).toBeInTheDocument()
        expect(screen.getByText('20% OFF')).toBeInTheDocument()
    })

    it('handles missing optional props', () => {
        const minimalProduct = {
            image: '/test-image.jpg',
            title: 'Test Product',
            currentPrice: '1000',
            slug: 'test-product'
        }

        render(<ProductCard {...minimalProduct} />)

        // Check if required elements are rendered
        expect(screen.getByText('Test Product')).toBeInTheDocument()
        expect(screen.getByText('$1,000')).toBeInTheDocument()

        // Check that optional elements are not rendered
        expect(screen.queryByText(/cuotas/)).not.toBeInTheDocument()
        expect(screen.queryByText(/Envío/)).not.toBeInTheDocument()
    })

    it('handles click events', () => {
        const handleClick = jest.fn()
        render(<ProductCard {...mockProduct} onClick={handleClick} />)

        const link = screen.getByRole('link')
        link.click()

        expect(handleClick).toHaveBeenCalledTimes(1)
    })
}) 