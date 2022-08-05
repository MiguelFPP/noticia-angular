import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'noticias';
  listNoticias: any[] = [];
  loading: boolean = false;
  constructor(private _noticiaService: NoticiaService) {}

  buscarNoticias(parametros: any): void {
    this.loading = true;
    this.listNoticias = [];
    console.log('desde el padre');

    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe(
        ({ articles }) => {
          this.loading = false;
          console.log(articles);
          this.listNoticias = articles;
        },
        (error) => {
          this.loading = false;
          console.log(error);
        }
      );
    }, 1000);
  }
}
