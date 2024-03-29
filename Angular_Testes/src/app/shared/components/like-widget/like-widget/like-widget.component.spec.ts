import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [LikeWidgetComponent],
      // providers: [UniqueIdService],
      imports: [LikeWidgetModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create Component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT aut-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

    it(`#${LikeWidgetComponent.prototype.like.name} Should trigger (@Output liked) when called`, () => {
      fixture.detectChanges();
      // component.liked.subscribe(() =>{
      //   expect(true).toBeTrue();
      //   done();
      // });
      // component.like();
      spyOn(component.liked, 'emit');
      component.like();
      expect(component.liked.emit).toHaveBeenCalled()

    });
});
