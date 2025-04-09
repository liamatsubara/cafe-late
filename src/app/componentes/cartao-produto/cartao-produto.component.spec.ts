import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoProdutoComponent } from './cartao-produto.component';

describe('CartaoProdutoComponent', () => {
  let component: CartaoProdutoComponent;
  let fixture: ComponentFixture<CartaoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaoProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
