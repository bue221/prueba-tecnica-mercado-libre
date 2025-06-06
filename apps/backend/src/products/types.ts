import type { Product as SharedProduct } from '@mercado-libre/shared';

export interface Product extends SharedProduct {
  id: number;
}
