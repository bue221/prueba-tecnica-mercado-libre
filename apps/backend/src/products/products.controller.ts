import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './types';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Product | undefined {
    return this.productsService.findOne(Number(id));
  }

  @Get(':id/recommended')
  findRecommended(@Param('id') id: string): Product[] {
    return this.productsService.findRecommended(Number(id));
  }

  @Get('slug/:slug')
  findBySlug(@Param('slug') slug: string): Product | undefined {
    return this.productsService.findBySlug(slug);
  }

  @Get('seller/:sellerId')
  findBySeller(
    @Param('sellerId') sellerId: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ): Product[] {
    return this.productsService.findBySeller(
      sellerId,
      page ? Number(page) : undefined,
      limit ? Number(limit) : undefined,
    );
  }
}
