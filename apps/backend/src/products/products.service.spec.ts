import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './types';

const result: Product[] = [
  {
    id: 1,
    slug: 'test-product',
    title: 'Test Product',
    description: 'Test Description',
    condition: 'Nuevo',
    images: ['image1.jpg', 'image2.jpg'],
    pricing: {
      originalPrice: 1000,
      discount: 100,
      currentPrice: 900,
      installments: {
        count: 12,
        amount: 75,
        total: 900,
        interest: false,
      },
    },
    paymentMethods: ['Tarjeta de crédito', 'MercadoPago'],
    shipping: {
      isFree: true,
      deliveryTime: '24h',
      fullfilmentByPlatform: true,
    },
    seller: {
      name: 'Test Store',
      isOfficialStore: true,
      level: 'Gold',
      totalSales: '1000+',
      rating: 4.5,
    },
    stats: {
      soldCount: 100,
      rating: 4.5,
      reviewCount: 50,
      stockAvailable: 10,
    },
    specifications: {
      color: 'Black',
      voltage: '220V',
      functions: ['Function 1', 'Function 2'],
      wireless: true,
      batteryLife: '24h',
      chargeTime: '2h',
      waterResistant: true,
      silent: false,
      travelFriendly: true,
      combs: 3,
      includedAccessories: ['Charger', 'Manual'],
    },
  },
];

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  beforeEach(() => {
    productsService = new ProductsService();
    productsController = new ProductsController(productsService);
  });

  describe('findAll', () => {
    it('should return an array of products', () => {
      jest.spyOn(productsService, 'findAll').mockImplementation(() => result);

      const result2 = productsController.findAll();
      expect(result2).toBe(result);
    });
  });

  describe('findBySlug', () => {
    it('should return a product by slug', () => {
      jest
        .spyOn(productsService, 'findBySlug')
        .mockImplementation(() => result[0]);

      const result2 = productsController.findBySlug('test-product');
      expect(result2).toBe(result[0]);
    });
  });

  describe('findById', () => {
    it('should return a product by id', () => {
      jest
        .spyOn(productsService, 'findBySlug')
        .mockImplementation(() => result[0]);

      const result2 = productsController.findBySlug('test-product');
      expect(result2).toBe(result[0]);
    });
  });

  describe('findBySellerId', () => {
    it('should return a product by seller id', () => {
      jest
        .spyOn(productsService, 'findBySeller')
        .mockImplementation(() => result);

      const result2 = productsController.findBySeller('test-seller');
      expect(result2).toBe(result);
    });
  });

  describe('findByCategory', () => {
    it('should return a product by category', () => {
      jest
        .spyOn(productsService, 'findRecommended')
        .mockImplementation(() => result);

      const result2 = productsController.findRecommended('1');
      expect(result2).toBe(result);
    });
  });
});
