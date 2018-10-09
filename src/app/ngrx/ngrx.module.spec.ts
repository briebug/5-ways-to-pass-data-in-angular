import { NgrxModule } from './ngrx.module';

describe('NgrxModule', () => {
  let ngrxModule: NgrxModule;

  beforeEach(() => {
    ngrxModule = new NgrxModule();
  });

  it('should create an instance', () => {
    expect(ngrxModule).toBeTruthy();
  });
});
