import {Controller, Get, Render} from '@nestjs/common';

@Controller()
export class AppController {
  @Get("/")
  @Render('index')
  index(){
    let viewData = [];
    viewData['title'] = 'Home Page - Online store';
    return {
      viewData: viewData
    };
  }
  @Get("/about")
  @Render('about')
  about(){
    const viewData = [];
    viewData['title'] = 'About us - Ariel';
    viewData['subtitle'] = 'About us';
    viewData['description'] = 'This is an about page ...';
    viewData['author'] = 'Develop by Quang';
    return {
      viewData: viewData
    };
  }
}
