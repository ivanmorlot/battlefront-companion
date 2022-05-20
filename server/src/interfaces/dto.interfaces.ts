export interface ICustomValidationSuccess {
  success: true;
  value: object;
}

export interface ICustomValidationError {
  success: false;
  message: string;
  errors: any;
}
