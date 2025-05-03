import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {In, Repository} from "typeorm";
import {Product} from "./product.entity";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {}
    findAll(): Promise<Product[]>{
        return this.productsRepository.find();
    }
    findOne(id: string): Promise<Product> {
        // @ts-ignore
        return this.productsRepository.findOneBy({ id });
    }
    // findByIds(ids: string[]): Promise<Product[]> {
    //     return this.productsRepository.find({
    //         where: {
    //             id: In(ids),
    //         },
    //     });
    // }
    findByIds(ids: string[]): Promise<Product[]> {
        return this.productsRepository.findByIds(ids);
    }
    createOrUpdate(product: Product): Promise<Product>{
        return this.productsRepository.save(product);
    }
    async remove(id: string): Promise<void>{
        await this.productsRepository.delete(id);
    }
}