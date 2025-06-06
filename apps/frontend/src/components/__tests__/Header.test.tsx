import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
    it('renders the logo', () => {
        render(<Header />)
        const logo = screen.getByAltText('Mercado Libre')
        expect(logo).toBeDefined()
    })

    it('renders the search bar', () => {
        render(<Header />)
        const searchInput = screen.getByPlaceholderText('Buscar productos, marcas y más...')
        expect(searchInput).toBeDefined()
    })

    it('renders the navigation links', () => {
        render(<Header />)

        // Check main navigation links
        expect(screen.getByText('Categorías')).toBeDefined()
        expect(screen.getByText('Ofertas')).toBeDefined()
        expect(screen.getByText('Cupones')).toBeDefined()
        expect(screen.getByText('Supermercado')).toBeDefined()
        expect(screen.getByText('Moda')).toBeDefined()
        expect(screen.getByText('Vender')).toBeDefined()
        expect(screen.getByText('Ayuda / PQR')).toBeDefined()
    })

    it('renders user section elements', () => {
        render(<Header />)

        // Check user section elements
        expect(screen.getByText('Andres C...')).toBeDefined()
        expect(screen.getByText('Mis compras')).toBeDefined()
        expect(screen.getByText('Favoritos')).toBeDefined()
    })

    it('renders the promo banner', () => {
        render(<Header />)
        const promoBanner = screen.getByAltText('Envío gratis')
        expect(promoBanner).toBeDefined()
    })

    it('renders cart and notification icons', () => {
        render(<Header />)

        // Check if the buttons are rendered
        const buttons = screen.getAllByRole('button')
        expect(buttons.length).toBeGreaterThan(0)
    })
}) 