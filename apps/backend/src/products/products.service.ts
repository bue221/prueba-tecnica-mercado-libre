import { Injectable } from '@nestjs/common';
import { JsonDatabaseService } from '../db/json-database.service';
import { Product } from './types';

@Injectable()
export class ProductsService {
  private db: JsonDatabaseService<Product>;

  constructor() {
    this.db = new JsonDatabaseService<Product>('products');
  }

  findAll(): Product[] {
    return this.db.findAll();
  }

  findOne(id: number): Product | undefined {
    return this.db.findOne(id);
  }

  findRecommended(id: number): Product[] {
    const all = this.db.findAll();
    return all.filter((p) => p.id !== id).slice(0, 7);
  }

  findBySlug(slug: string): Product | undefined {
    return this.db.findAll().find((product) => product.slug === slug);
  }

  findBySeller(
    sellerId: string,
    page: number = 1,
    limit: number = 3,
  ): Product[] {
    const all = this.db.findAll();
    const sellerProducts = all.filter(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (product) => product.seller.name === sellerId,
    );
    const startIndex = (page - 1) * limit;
    return sellerProducts.slice(startIndex, startIndex + limit);
  }
}
