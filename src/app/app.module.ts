import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { DataDrivenNewPostComponent } from './data-driven-new-post/data-driven-new-post.component';
import { PostsService } from "./post/posts.service";
import { routing } from './app.routing';
import { DetailPostComponent } from './detail-post/detail-post.component'

// import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewPostComponent,
    DataDrivenNewPostComponent,
    DetailPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // JsonpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
