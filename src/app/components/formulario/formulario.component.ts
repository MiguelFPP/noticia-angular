import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  /* para enviar al component padre */
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categorias: any[] = [
    {
      value: 'general',
      nombre: 'General',
    },
    {
      value: 'business',
      nombre: 'Negocios',
    },
    {
      value: 'technology',
      nombre: 'Tecnologia',
    },
    {
      value: 'entertainment',
      nombre: 'Entretenimiento',
    },
  ];

  paises: any[] = [
    {
      value: 'co',
      nombre: 'Colombia',
    },
    {
      value: 'br',
      nombre: 'Brasil',
    },
    {
      value: 'ru',
      nombre: 'Rusia',
    },
  ];

  categoriaSeleccionada: string = '';
  paisSeleccionado: string = '';

  constructor() {}

  ngOnInit(): void {}

  buscarNoticia(): void {
    const parametros = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    };

    /* emitir al componente padre */
    this.parametrosSeleccionados.emit(parametros);
  }
}
