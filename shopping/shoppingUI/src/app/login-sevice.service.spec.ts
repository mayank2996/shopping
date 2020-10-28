import { TestBed } from "@angular/core/testing";

import { LoginSeviceService } from "./login-sevice.service";

describe("LoginSeviceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: LoginSeviceService = TestBed.get(LoginSeviceService);
    expect(service).toBeTruthy();
  });
});
