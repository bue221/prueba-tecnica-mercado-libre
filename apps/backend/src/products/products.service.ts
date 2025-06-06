import { Injectable } from '@nestjs/common';
import { JsonDatabaseService } from '../db/json-database.service';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  brand: string;
  stock: number;
  // Agrega los campos necesarios según la vista
}

@Injectable()
export class ProductsService {
  private db: JsonDatabaseService<Product>;

  constructor() {
    this.db = new JsonDatabaseService<Product>('products');
  }

  findAll() {
    return this.db.findAll();
  }

  findOne(id: number) {
    return this.db.findOne(id);
  }

  findRecommended(id: number) {
    // Lógica simple: devolver los primeros 3 productos distintos al actual
    const all = this.db.findAll();
    return all.filter((p) => p.id !== id).slice(0, 3);
  }
}
