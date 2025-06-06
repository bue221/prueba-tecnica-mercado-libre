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
    return all.filter((p) => p.id !== id).slice(0, 3);
  }
}
