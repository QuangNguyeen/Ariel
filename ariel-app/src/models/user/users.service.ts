import {Injectable, UnauthorizedException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "./user.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async createUserOrUpdate(user: User): Promise<User> {
        const existingUser = await this.usersRepository.findOne({ where: { email: user.getEmail() } });

        if (existingUser) {
            throw new UnauthorizedException('Email already exists');
        }
        const hash = await bcrypt.hash(user.getPassword(), 10);
        user.setPassword(hash);
        return this.usersRepository.save(user);
    }

    async login(email: string, password: string): Promise<User> {
        const user = await this.usersRepository.findOne({ where: { email } });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return user;
    }
    findOne(id: string): Promise<User> {
        // @ts-ignore
        return this.usersRepository.findOne({
            // @ts-ignore
            where: { id },
        });
    }

    updateBalance(id: number, balance: number){
        return this.usersRepository.update(id,{balance: balance});
    }

}