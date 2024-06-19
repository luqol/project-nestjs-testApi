import { Controller, Delete, Get, Param, Post, Body, ParseUUIDPipe, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { UpdateProductDTO } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Get('/')
    getAll(): any {
        return this.productsService.getAll();
    }
    @Get('/:id')
    getById(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.productsService.getById(id);
    }
    @Delete('/:id')
    deleteById(@Param('id', new ParseUUIDPipe()) id: string){
        this.productsService.deleteById(id);
        return {success: true};
    } 
    @Post('/')
    create( @Body() productData: CreateProductDTO) {
        return this.productsService.create(productData);
    }
    @Put('/:id')
    updateById(@Param('id', new ParseUUIDPipe()) id: string, @Body() productData: UpdateProductDTO) {
        this.productsService.updateById(id, productData);
        return {success: true};
    }
}
