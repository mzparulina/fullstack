import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.scss']
})
export class EditarticleComponent {

  articleForm!: FormGroup
  article: any
  id:any

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['articleID']
    })
    console.log(this.id)
  }
}
