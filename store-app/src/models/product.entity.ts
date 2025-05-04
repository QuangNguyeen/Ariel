import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Item} from "./item.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    image: string;
    @Column()
    price: number;

    @OneToMany(() => Item, (item) => item.product) items: Item[];
    getId(): number{
        return this.id;
    }
    setId(id: number){
        this.id = id;
    }
    getName(): string {
        return this.name
    }
    setName(name: string){
        this.name = name;
    }
    getDescription(): string {
        return this.description;
    }
    setDescription(description: string){
        this.description = description;
    }
    getPrice(): number{
        return this.price;
    }
    setPrice(price: number){
        return this.price = price;
    }
    getImage(): string {
        return this.image;
    }
    getItems(): Item[] {
        return this.items;
    }
    setItems(items: Item[]) {
        this.items = items;
    }
    setImage(image: string) {
        this.image = image;
    }
    static sumPricesByQuantities(products: Product[], productsInSession): number{
        let total = 0;
        let numberOfProduct = products.length;
        for( let i = 0; i < numberOfProduct; i++){
            total += products[i].getPrice() * productsInSession[products[i].getId()];
        }
        return total;
    }
}