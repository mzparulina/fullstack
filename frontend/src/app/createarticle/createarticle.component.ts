import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.scss']
})
export class CreatearticleComponent {

  article: any;

  articleForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl(''),
  });

  constructor(private articleService: ArticleService) {

  }

  onSubmit() {
    this.articleService.addArticle(this.articleForm.value).subscribe(
      article => {
        this.article = article
      }
    )
    console.log(this.articleForm.value)
  }

}
