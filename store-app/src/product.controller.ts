import {Controller, Get, Render, Param} from "@nestjs/common";

@Controller('/products')
export class ProductController{
    static products = [
        {
            id: '1',
            name: 'TV', description: 'Best tv', image: 'game.png', price: '100',
        },
        {
            id: '2',
            name: 'iPhone', description: 'Best Iphone', image: 'safe.png', price: '200',
        },
        {
            id: '3',
            name: 'ChromeCast', description: 'Best ChromeCast', image: 'submarine.png', price: '500',
        },
        {
            id: '4',
            name: 'Glasses', description: 'Best Glasses', image: 'game.png', price: '900',
        }
    ];
    @Get('/')
    @Render('products/index')
    index(){
        const viewData = [];
        viewData['title'] = 'Product - Ariel Store';
        viewData['subtitle'] = 'List of products';
        viewData['products'] = ProductController.products;
        return {
            viewData: viewData
        };
    }

    @Get(':id')
    @Render('products/show')
    show(@Param() params){
        const product = ProductController.products[params.id - 1];
        const viewData = [];
        viewData['title'] = product.name + '- Ariel Store';
        viewData['subtitle'] = product.name + '- Product Information';
        viewData['product'] = product;
        return {
            viewData: viewData
        };
    }
}