import {Controller, Get, Render, Post, Redirect, Body, Req, Res, UnauthorizedException} from "@nestjs/common";
import {User} from "../models/user.entity";
import {UsersService} from "../models/users.service";
import {UserValidator} from "../validators/user.validator";

@Controller('/auth')
export class AuthController {
    constructor(private readonly usersService: UsersService) {}
    @Get('/register')
    @Render('auth/register')
    register(){
        const viewData = [];
        viewData['title'] = 'User Register - Ariel Store';
        viewData['subtitle'] = 'User Register';
        return {
            viewData: viewData
        };
    }

    @Post('/store')
    async store(@Body() body, @Res() response, @Req() request){
        const toValidate: string[] = ['name', 'email', 'password'];
        const errors: string[] = UserValidator.validate(body, toValidate);
        if(errors.length > 0){
            request.session.flashErrors = errors;
            response.session.redirect('/auth/register');
        } else {
            const newUser = new User();
            newUser.setName(body.name);
            newUser.setPassword(body.password);
            newUser.setEmail(body.email);
            newUser.setRole('client');
            newUser.setBalance(1000);
            await this.usersService.createUserOrUpdate(newUser);
            return response.redirect('/auth/login');
        }
    }

    @Get('/login')
    @Render('auth/login')
    login(){
        const viewData = [];
        viewData['title'] = 'User Login - Ariel Store';
        viewData['subtitle'] = 'User Login';
        return {
            viewData: viewData
        };
    }

    @Post('/connect')
    async connect(@Body() body, @Req() request, @Res() response){
        const email = body.email;
        const password = body.password;
        const user = await this.usersService.login(email, password);
        if (user) {
            request.session.user = {
                id: user.getId(),
                name: user.getName(),
                role: user.getRole()
            };
            return response.redirect('/')
        } else {
            return response.redirect('/auth/login');
        }
    }

    @Get('/logout')
    @Redirect('/')
    logout(@Req() request){
        request.session.user = null;
    }
}