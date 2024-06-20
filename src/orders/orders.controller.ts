import { Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Body, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { UpdateOrderDTO } from './dtos/update-order.dto';


@Controller('orders')
export class OrdersController {
    constructor( private ordersService: OrdersService){}

    @Get('/')
    getAll(): any {
        return this.ordersService.getAll();
    }
    @Get('/:id')
    getById(@Param('id') id: string) {
        const order = this.ordersService.getById(id);
        if (!order)
            throw new NotFoundException('Order not found');
        return order;
    }
    @Delete('/:id')
    deleteById(@Param('id', new ParseUUIDPipe()) id : string) {
        if(!this.ordersService.getById(id))
            throw new NotFoundException('Order not found');
        this.ordersService.deleteById(id);
        return {succes: true};
    }
    @Post('/')
    create( @Body() orderData: CreateOrderDTO ){
        return this.ordersService.create(orderData);
    }
    @Put('/:id')
    updateById(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() orderData: UpdateOrderDTO
    ) {
        if(!this.ordersService.getById(id))
            throw new NotFoundException('Order not found');
        this.ordersService.updateById(id, orderData);
        return {success: true};
    }
}
